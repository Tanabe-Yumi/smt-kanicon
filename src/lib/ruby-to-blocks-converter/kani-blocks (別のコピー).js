/* global Opal */
import _ from 'lodash';

/**
* Kani Blocks Ruby converter
*/
const KaniBlocksConverter = {
// eslint-disable-next-line no-unused-vars
	onSend: function (receiver, name, args, rubyBlockArgs, rubyBlock) {
		console.log("in onsend - kani");
		console.log("name: " + name);
		console.log("args: ");
		console.dir(args);
		console.log("receiver: ");
		console.dir(receiver);
		//console.log("rubyblockargs: " + rubyBlockArgs);
		//console.log("rubyblock: " + rubyBlock);
		
		let block;
		//if ((this._isSelf(receiver) || receiver === Opal.nil) && !rubyBlock) {
		console.log("_isSelf(receiver): " + this._isSelf(receiver));
		console.log("receiver === Opal.nil: " + receiver === Opal.nil);
		if (this._isSelf(receiver) || receiver === Opal.nil) {
			console.log("!rubyBlock in onSend");
			console.log("name: " + name);
			switch (name) {
			/*case 'on':
				console.log("in on");
				if(args.length === 0){
					block = this._createBlock('kani_motor_enable_set_n', 'statement');
					this._addField(block, 'enable', 'on');
				}
				break;*/
			case 'new':
				console.log("in case new");
				if(args.length === 0){
					console.log("in args.length = 0");
					block = this._createBlock('kani_motor_enable_init_n', 'shape_statement');
					//this._addField(block, 'enable', 'on');
				}
				break;
			case 'motorEn':
				console.log("in motorEn");
				if(args.length === 0){
					console.log("in args.length = 0");
					block = this._createBlock('kani_motor_enable_set_n', 'shape_statement');
					//this._addField(block, 'enable', 'on');
				}
				break;
			/*case 'sleep':
				if (args.length === 1 && this._isNumberOrBlock(args[0])) {
					block = this._createBlock('control_wait', 'shape_statement');
					this._addNumberInput(block, 'DURATION', 'math_positive_number', args[0], 1);
				}
				break;*/
			/*case 'notorEn.on':
				console.log("in motorEn.on");
				if(args.length === 0){
					block = this._createBlock('kani_motor_enable_set_n', 'statement');
					this._addField(block, 'enable', 'on');
				}
				break;*/
			default:
				console.log("in default");
				break;
			}
		}

		//console.log("block");
		//console.dir(block);
		return block;
	},
	onOpAsgn: function (lh, operator, rh) {
		console.log("in onopasgn - kani");
	},
	onVar: function (scope, variable) {
		console.log("in onvar - kani");
	},
	onVasgn: function (scope, variable, rh, name) {
		console.log("in onvasgn - kani");
		console.log("scope: " + scope);
		console.log("variable: ");
		console.dir(variable);
		console.log("rh: ");
		console.dir(rh);
		console.log("name: " + name);
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

