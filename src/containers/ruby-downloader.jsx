import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {projectTitleInitialState} from '../reducers/project-title';
import RubyGenerator from '../lib/ruby-generator';
import VM from 'scratch-vm';
import {rubyCodeShape} from '../reducers/ruby-code';

class RubyDownloader extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'downloadProject',
            'saveRubyCode'	// kani robot
        ]);
    }
    saveRuby () {
        const idToTarget = {};
        this.props.vm.runtime.targets.forEach(target => {
            idToTarget[target.id] = target;
        });
        const targets = [idToTarget[this.props.stage.id]];
        for (const id in this.props.sprites) {
            const sprite = this.props.sprites[id];
            targets[sprite.order + 1] = idToTarget[id];
        }
        const options = {
            requires: [],
            withSpriteNew: true
        };
        if (this.props.rubyCode.modified) {
            options.targetsCode = {
                [this.props.rubyCode.target.id]: this.props.rubyCode.code
            };
        }
        const code = RubyGenerator.targetsToCode(targets, options);

        return new Blob([code], {
            type: 'text/x-ruby-script'
        });
    }
    // kani robot
    saveRubyCode () {
        const idToTarget = {};
        this.props.vm.runtime.targets.forEach(target => {
            idToTarget[target.id] = target;
        });
        const targets = [idToTarget[this.props.stage.id]];
        for (const id in this.props.sprites) {
            const sprite = this.props.sprites[id];
            targets[sprite.order + 1] = idToTarget[id];
        }
        const options = {
            requires: [],
            withSpriteNew: true
        };
        if (this.props.rubyCode.modified) {
            options.targetsCode = {
                [this.props.rubyCode.target.id]: this.props.rubyCode.code
            };
        }
        const master_code = RubyGenerator.targetsToCode(targets, options);
        // master部分を削除してslaveのコードを生成
        targets.splice(1, 1);
        const slave_code = RubyGenerator.targetsToCode(targets, options);
        /*
        const master_code = `
num = 10

puts num
`;*/
        
        console.log("slave: " + slave_code);
        var ele = document.createElement('form');
        ele.action = 'https://www.epi.it.matsue-ct.jp/j1819/convert/upload.php';
        ele.method = 'post';
        ele.setAttribute('target', '_blank');
        
        var q = document.createElement('textarea');
        q.value = master_code;
        q.name = 'master_code';
        
        var r = document.createElement('textarea');
        r.value = slave_code;
        r.name = 'slave_code';
        
        ele.appendChild(q);
        ele.appendChild(r);
        document.body.appendChild(ele);
        
        ele.submit();
        ele.remove();
        
        return;
    }
    downloadProject () {
        const downloadLink = document.createElement('a');
        document.body.appendChild(downloadLink);

        const content = this.saveRuby();
        if (this.props.onSaveFinished) {
            this.props.onSaveFinished();
        }
        // Use special ms version if available to get it working on Edge.
        if (navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(content, this.props.projectFilename);
            return;
        }

        // kani robot
        let reader = new FileReader();
        // reader.readAsArrayBuffer(content);
        reader.onload = function() {
            // let arraubyffer = filereader.result;
            console.log("at downloadProject()\n", reader.result);	// これをサーバに送る
          }
        reader.readAsText(content);
        
        const url = window.URL.createObjectURL(content);
        downloadLink.href = url;
        downloadLink.download = this.props.projectFilename;
        downloadLink.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(downloadLink);
    }
    render () {
        const {
            children
        } = this.props;
        return children(
            this.props.className,
            this.downloadProject,
            this.saveRubyCode	// kani robot
        );
    }
}

const getProjectFilename = (curTitle, defaultTitle) => {
    let filenameTitle = curTitle;
    if (!filenameTitle || filenameTitle.length === 0) {
        filenameTitle = defaultTitle;
    }
    return `master.rb`;
};

RubyDownloader.propTypes = {
    children: PropTypes.func,
    className: PropTypes.string,
    onSaveFinished: PropTypes.func,
    projectFilename: PropTypes.string,
    rubyCode: rubyCodeShape,
    sprites: PropTypes.objectOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        order: PropTypes.number.isRequired
    })),
    stage: PropTypes.shape({
        id: PropTypes.string
    }),
    vm: PropTypes.instanceOf(VM)
};
RubyDownloader.defaultProps = {
    className: ''
};

const mapStateToProps = state => ({
    projectFilename: getProjectFilename(state.scratchGui.projectTitle, projectTitleInitialState),
    sprites: state.scratchGui.targets.sprites,
    stage: state.scratchGui.targets.stage,
    vm: state.scratchGui.vm,
    rubyCode: state.scratchGui.rubyCode
});

export default connect(
    mapStateToProps,
    () => ({}) // omit dispatch prop
)(RubyDownloader);
