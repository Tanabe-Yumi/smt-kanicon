/* global Opal */
import _ from 'lodash';

/**
* Kani Blocks Ruby converter
*/
const KaniBlocksConverter = {
// eslint-disable-next-line no-unused-vars
	onSend: function (receiver, name, args, rubyBlockArgs, rubyBlock, variable) {
		console.log("in onsend - kani");
		console.log("name: " + name);
		console.log("args: ");
		console.dir(args);
		console.log("receiver: ");
		console.dir(receiver);
		// console.log("rubyblockargs: " + rubyBlockArgs);
		// console.log("rubyblock: " + rubyBlock);
		console.dir(variable);
		
		let block;
		//if ((this._isSelf(receiver) || receiver === Opal.nil) && !rubyBlock) {
		if (this._isSelf(receiver) || receiver === Opal.nil) {
			// console.log("!rubyBlock in onSend");
			switch (name) {
			case 'motorEn':
				console.log("in motorEn");
				// if(args.length === 0){}
				break;
			default:
				console.log("in default");
				break;
			}
		} else {
			console.log("in else - onsend");
			switch (name) {
			case 'on':
			case 'off':
				console.log("in case on/off");
				const pat = /motorEn/;
				if(args.length === 0 && pat.test(variable.name)){
					console.log("in args.length = 0");
					console.dir(receiver.fields);
					block = this._createBlock('kani_motor_enable_set_n', 'statement', {
						fields: {
							enable: {
								name: 'enable',
								id: variable.id,
								value: name,
								variableType: '',
							}
						}
					});
					console.dir(block);
				}
				break;
			default:
				console.log("in default");
				break;
			}
		}
		
		return block;
	},
	onOpAsgn: function (lh, operator, rh) {
		console.log("in onopasgn - kani");
	},
	onVar: function (scope, variable) {
		console.log("in onvar - kani");
	},
	onVasgn: function (scope, variable, rh, code) {
		console.log("in onvasgn - kani");
		//console.log("scope: " + scope);
		//console.log("variable: ");
		//console.dir(variable);
		//console.log("rh: ");
		//console.dir(rh);
		//console.log("name: " + name);
		
		let block;
		console.log("variable.name: " + variable.name);
		switch (variable.name) {
		case 'motorEn':
			//console.log("in motorEn");
			const pat = /motorEn\s*=\s*GPIO.new\(12,\s*GPIO::OUT\)/;
			//console.log("code: " + code);
			//console.log("pat.test: " + pat.test(code));
			if(pat.test(code)){
				block = this._createBlock('kani_motor_enable_init_n', 'statement');
			}
			break;
		default:
			console.log("in default");
			break;
		}
		
		return block;
	},
	onAnd: function (operands) {
		console.log("in onand - kani");
	},
	onOr: function (operands) {
		console.log("in onor - kani");
	},
	onUntil: function (cond, statement) {
		console.log("in onuntil - kani");
	},
	onIf: function (cond, statement, elseStatement) {
		console.log("in onif - kani");
	},
	onDefs: function (node, saved) {
		console.log("in ondefs - kani");
	},
};

export default KaniBlocksConverter;

