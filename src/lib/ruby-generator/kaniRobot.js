/**
 * Define Ruby code generator for Ruby Blocks
 * @param {RubyGenerator} Generator The RubyGenerator
 * @return {RubyGenerator} same as param.
 */
export default function (Generator) {
	const getUnquoteText = function (block, fieldName, order) {
		const input = block.inputs[fieldName];
		if (input) {
			const targetBlock = Generator.getBlock(input.block);
			if (targetBlock && targetBlock.opcode === 'text') {
				return Generator.getFieldValue(targetBlock, 'TEXT') || '';
			}
		}
		return Generator.valueToCode(block, fieldName, order);
	};
	
	// easy
	Generator.kani_motor_init_e = function(block) {
		return `motorEn = GPIO.new(12, GPIO::OUT)\n` + 
			`motorEn.on()\n` + 
			`m1 = GPIO.new(25, GPIO::OUT)\n` + 
			`m1_pwm = PWM.new(26, ch=0)\n` + 
			`m2 = GPIO.new(32, GPIO::OUT)\n` + 
			`m2_pwm = PWM.new(33, ch=1)\n\n`;
	};

	Generator.kani_motor_start_e = function(block) {
		const side = Generator.getFieldValue(block, 'side') || null;
		const direction = Generator.getFieldValue(block, 'direction') || null;
		
		if(side === 'right') {
			if(direction === 'front') {
				return `m1_pwm.duty(500)\n` + 
					`m1.off()\n` + 
					`sleep(0.01)\n`;
			} else {
				return `m1_pwm.duty(500)\n` + 
					`m1.on()\n` + 
					`sleep(0.01)\n`;
			}
		} else {
			if(direction === 'front') {
				return `m2_pwm.duty(500)\n` + 
					`m2.on()\n` + 
					`sleep(0.01)\n`;
			} else {
				return `m2_pwm.duty(500)\n` + 
					`m2.off()\n` + 
					`sleep(0.01)\n`;
			}
		}
	};
	
	Generator.kani_motor_stop_e = function (block) {
		const side = Generator.getFieldValue(block, 'side') || null;
		
		if(side === 'right') {
			return `m1_pwm.duty(0)\n`;
		} else {
			return `m2_pwm.duty(0)\n`;
		}
	};
	
	Generator.kani_lux_init_e = function (block) {
		const num = Generator.getFieldValue(block,'number') || null;
		
		return `lightsensor${num} = ADC.new(${num}, ADC::ATTEN_11DB, ADC::WIDTH_12BIT)\n\n`;
	};
	
	Generator.kani_lux_get_e = function (block) {
		const num = Generator.getFieldValue(block,'number') || null;
		
		return [`lightsensor${num}.rawread`, Generator.ORDER_ATOMIC];
	};
	
	Generator.kani_servo_init_e = function (block) {
		const num = Generator.getFieldValue(block,'number') || null;
		
		return `servo${num} = PWM.new(${num}, ch=${num % 2})\n` + 
			`servo${num}.freq(50)\n` + 
			`servo${num}.duty(0)\n\n`;
	};
	
	Generator.kani_servo_deg_e = function (block) {
		const num = Generator.getFieldValue(block,'number') || null;
		const deg = getUnquoteText(block, 'degree', Generator.ORDER_NONE);
		
		return `servo${num}.duty((((${deg}.to_f - 90.0) * 0.95 / 90.0 + 1.45) / 20.0 * 1024).to_i)\n` + 
			`sleep(0.8)\n`;
	};

	// normal
	Generator.kani_motor_enable_init_n = function(block) {
		return `motorEn = GPIO.new(12, GPIO::OUT)\n`;
	};
	
	Generator.kani_motor_enable_set_n = function (block) {
		const en = Generator.getFieldValue(block, 'enable') || null;
		
		return `motorEn.${en}\n`;
	};
	
	Generator.kani_motor_init_n = function (block) {
		const pin = Generator.getFieldValue(block,'ch') || null;
		//const num = Generator.getFieldId(block, 'ch') || null;
		
		return `motor${pin} = GPIO.new(${pin}, GPIO::OUT)\n`;
	};
	
	Generator.kani_motor_speed_init_n = function (block) {
		const pin = Generator.getFieldValue(block,'ch') || null;
		
		return `motor${pin}_pwm = PWM.new(${pin}, ch=${pin % 2})\n`;
	};
	
	Generator.kani_motor_direct_n = function(block) {
		const pin = Generator.getFieldValue(block, 'ch') || null;
		const direction = Generator.getFieldValue(block, 'direction') || null;
		
		if(pin === '25') {
			return (direction === 'front'? `motor${pin}.off\n` : `motor${pin}.on\n`);
		} else {
			return (direction === 'front'? `motor${pin}.on\n` : `motor${pin}.off\n`);
		}
	};
	
	Generator.kani_motor_speed_set_n = function (block) {
		const pin = Generator.getFieldValue(block, 'ch') || null;
		let speed = getUnquoteText(block, 'speed', Generator.ORDER_NONE);
		
		if(speed < 0)
			speed = 0;
		else if(speed >= 512)
			speed = 511;
		
		return `motor${pin}_pwm.duty(${speed})\n`;
	};
	
	Generator.kani_lux_init_n = function (block) {
		const pin = Generator.getFieldValue(block,'number') || null;
		
		return `lightsensor${pin} = ADC.new(${pin}, ADC::ATTEN_11DB, ADC::WIDTH_12BIT)\n`;
	};
	
	Generator.kani_lux_get_n = function (block) {
		const pin = Generator.getFieldValue(block, 'number') || null;
		
		return [`lightsensor${pin}.rawread`, Generator.ORDER_ATOMIC];
		// return [`lightsensor${num}.read`, Generator.ORDER_ATOMIC];
	};
	
	Generator.kani_servo_init_n = function (block) {
		const pin = Generator.getFieldValue(block, 'number') || null;
		
		return `servo${pin} = PWM.new(${pin}, ch=${(pin % 2) + 2})\n`;
	};
	
	Generator.kani_servo_freq_n = function (block) {
		const pin = Generator.getFieldValue(block, 'number') || null;
		const freq = getUnquoteText(block, 'freq', Generator.ORDER_NONE);
		
		return `servo${pin}.freq(${freq})\n`;
	};
	
	Generator.kani_servo_duty_n = function (block) {
		const pin = Generator.getFieldValue(block, 'number') || null;
		const duty = getUnquoteText(block, 'duty', Generator.ORDER_NONE);
		
		return `servo${pin}.duty(${duty})\n`;
	};
	
	Generator.kani_servo_deg_calc_n = function (block) {
		const deg = getUnquoteText(block, 'degree', Generator.ORDER_NONE);
		
		return [`(((${deg}.to_f - 90.0) * 0.95 / 90.0 + 1.45) / 20.0 * 1024).to_i`, Generator.ORDER_ATOMIC];
	};

    return Generator;
}
