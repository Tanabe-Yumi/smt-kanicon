/* global Opal */
import _ from 'lodash';

const matchField = (field) => {
	if(/motorEn/.test(field))
		return 'motorEn';
	if(/motor25/.test(field))
		return 'motor25';
	if(/motor32/.test(field))
		return 'motor32';
	if(/motor26_pwm/.test(field))
		return 'motor26_pwm';
	if(/motor33_pwm/.test(field))
		return 'motor33_pwm';
	if(/lightsensor36/.test(field))
		return 'lightsensor36';
	if(/lightsensor34/.test(field))
		return 'lightsensor34';
	if(/lightsensor35/.test(field))
		return 'lightsensor35';
	if(/lightsensor2/.test(field))
		return 'lightsensor2';
	if(/servo27/.test(field))
		return 'servo27';
	if(/servo14/.test(field))
		return 'servo14';
}
/**
* Kani Blocks Ruby converter
*/
const KaniBlocksConverter = {
// eslint-disable-next-line no-unused-vars
	onSend: function (receiver, name, args, rubyBlockArgs, rubyBlock, variable) {
		console.log("in onsend - kani");
		console.log("name: " + name);
		// console.log("args: ");
		// console.dir(args);
		// console.log("receiver: ");
		// console.dir(receiver);
		// console.log("rubyblockargs: " + rubyBlockArgs);
		// console.log("rubyblock: " + rubyBlock);
		// console.dir(variable);
		
		let block;
		//if ((this._isSelf(receiver) || receiver === Opal.nil) && !rubyBlock) {
		// if (this._isSelf(receiver) || receiver === Opal.nil) {
		// 	// console.log("!rubyBlock in onSend");
		// 	switch (name) {
		// 	case 'motorEn':
		// 		console.log("in motorEn");
		// 		// if(args.length === 0){}
		// 		break;
		// 	default:
		// 		console.log("in default");
		// 		break;
		// 	}
		// }
		let field = matchField(variable.name);
		switch(field){
		case 'motorEn':
			if(name != 'on' && name != 'off')
				break;
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
			break;
		case 'motor25':
		case 'motor32':
			if(name != 'on' && name != 'off')
				break;
			block = this._createBlock('kani_motor_direct_n', 'statement', {
				fields: {
					ch: {
						name: 'ch',
						id: variable.id,
						value: parseInt(field.substring(field.length - 2)),
						variableType: '',
					},
					direction: {
						name: 'direction',
						id: variable.id,
						value: name,
						variableType: '',
					}
				}
			});
			break;
		case 'motor26_pwm':
		case 'motor33_pwm':
			if(name != 'duty')
				break;
			block = this._createBlock('kani_motor_speed_set_n', 'statement', {
				fields: {
					ch: {
						name: 'ch',
						id: variable.id,
						value: parseInt(field.substring(field.length - 6, field.length - 4)),
						variableType: '',
					}
				}
			});
			this._addTextInput(block, 'speed', this._isNumber(args[0]) ? args[0].toString() : args[0], '500');
			break;
		case 'lightsensor36':
		case 'lightsensor34':
		case 'lightsensor35':
		case 'lightsensor2':
			if(name != "rawread")
				break;
			block = this._createBlock('kani_lux_get_n', 'value', {
				fields: {
					number: {
						name: 'number',
						id: variable.id,
						value: parseInt(field.substring(11, field.length)),
						variableType: '',
					}
				}
			});
			break;
		case 'servo27':
		case 'servo14':
			if(name != 'freq')
				break;
			block = this._createBlock('kani_servo_freq_n', 'statement', {
				fields: {
					number: {
						name: 'number',
						id: variable.id,
						value: parseInt(field.substring(field.length - 2, field.length)),
						variableType: '',
					}
				}
			});
			this._addTextInput(block, 'freq', this._isNumber(args[0]) ? args[0].toString() : args[0], '50');
			break;
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
		// console.log("scope: " + scope);
		// console.log("variable: ");
		// console.dir(variable);
		// console.log("rh: ");
		// console.dir(rh);
		
		let block;
		let pat, pin;
		console.log("variable.name: " + variable.name);
		switch (variable.name) {
		case 'motorEn':
			//console.log("in motorEn");
			pat = /motorEn\s*=\s*GPIO.new\(12,\s*GPIO::OUT\)/;
			// console.dir(pat);
			//console.log("code: " + code);
			//console.log("pat.test: " + pat.test(code));
			if(pat.test(code)){
				block = this._createBlock('kani_motor_enable_init_n', 'statement');
			}
			break;
		case 'motor25':
		case 'motor32':
			pin = parseInt(variable.name.substr(-2));
			pat = new RegExp(variable.name + "\\s*=\\s*GPIO.new\\(" + pin + ",\\s*GPIO::OUT\\)");
			if(pat.test(code)){
				block = this._createBlock('kani_motor_init_n', 'statement', {
					fields: {
						ch: {
							name: 'ch',
							id: variable.id,
							value: pin,
							variableType: '',
						}
					}
				});
			}
			break;
		case 'motor26_pwm':
		case 'motor33_pwm':
			pin = parseInt(variable.name.substr(-6, 2));
			pat = new RegExp(variable.name + "\\s*=\\s*PWM.new\\(" + pin + ",\\s*ch=" + (pin % 2) + "\\)");
			if(pat.test(code)){
				block = this._createBlock('kani_motor_speed_init_n', 'statement', {
					fields: {
						ch: {
							name: 'ch',
							id: variable.id,
							value: pin,
							variableType: '',
						}
					}
				});
			}
			break;
		case 'lightsensor36':
		case 'lightsensor34':
		case 'lightsensor35':
		case 'lightsensor2':
			pin = parseInt(variable.name.substring(11, 13));
			pat = new RegExp(variable.name + "\\s*=\\s*ADC.new\\(" + pin + ",\\s*ADC::ATTEN_11DB,\\s*ADC::WIDTH_12BIT\\)");
			if(pat.test(code)){
				block = this._createBlock('kani_lux_init_n', 'statement', {
					fields: {
						number: {
							name: 'number',
							id: variable.id,
							value: pin,
							variableType: '',
						}
					}
				});
			}
			break;
		case 'servo27':
		case 'servo14':
			pin = parseInt(variable.name.substring(5, 7));
			pat = new RegExp(variable.name + "\\s*=\\s*PWM.new\\(" + pin + ",\\s*ch=" + ((pin % 2) + 2) + "\\)");
			if(pat.test(code)){
				block = this._createBlock('kani_servo_init_n', 'statement', {
					fields: {
						number: {
							name: 'number',
							id: variable.id,
							value: pin,
							variableType: '',
						}
					}
				});
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
