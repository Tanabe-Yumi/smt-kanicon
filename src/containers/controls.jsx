import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import VM from 'scratch-vm';
import {connect} from 'react-redux';

import analytics from '../lib/analytics';
import ControlsComponent from '../components/controls/controls.jsx';

import RubyToBlocksConverterHOC from '../lib/ruby-to-blocks-converter-hoc.jsx';

class Controls extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleGreenFlagClick',
            'handleStopAllClick'
        ]);
    }
    handleGreenFlagClick (e) {
        e.preventDefault();

        if (!this.props.targetCodeToBlocks()) {
            return;
        }

        if (e.shiftKey) {
            this.props.vm.setTurboMode(!this.props.turbo);
        } else {
            if (!this.props.isStarted) {
                this.props.vm.start();
            }
            this.props.vm.greenFlag();
            analytics.event({
                category: 'general',
                action: 'Green Flag'
            });
            window.ipc.send('greenflag-click','Go');
            
        }
    }
    handleStopAllClick (e) {
        e.preventDefault();
        this.props.vm.stopAll();
        analytics.event({
            category: 'general',
            action: 'Stop Button'
        });
    }
    render () {
        const {
            vm, // eslint-disable-line no-unused-vars
            targetCodeToBlocks, // eslint-disable-line no-unused-vars
            isStarted, // eslint-disable-line no-unused-vars
            projectRunning,
            turbo,
            ...props
        } = this.props;
        return (
            <ControlsComponent
                {...props}
                active={projectRunning}
                turbo={turbo}
                onGreenFlagClick={this.handleGreenFlagClick}
                onStopAllClick={this.handleStopAllClick}
            />
        );
    }
}

Controls.propTypes = {
    isStarted: PropTypes.bool.isRequired,
    projectRunning: PropTypes.bool.isRequired,
    targetCodeToBlocks: PropTypes.func,
    turbo: PropTypes.bool.isRequired,
    vm: PropTypes.instanceOf(VM)
};

const mapStateToProps = state => ({
    isStarted: state.scratchGui.vmStatus.running,
    projectRunning: state.scratchGui.vmStatus.running,
    turbo: state.scratchGui.vmStatus.turbo
});
// no-op function to prevent dispatch prop being passed to component
const mapDispatchToProps = () => ({});

export default RubyToBlocksConverterHOC(connect(mapStateToProps, mapDispatchToProps)(Controls));
