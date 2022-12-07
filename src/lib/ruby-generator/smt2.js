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

    Generator.ruby_statement = function (block) {
        const statement = getUnquoteText(block, 'STATEMENT', Generator.ORDER_NONE);
        return `${statement}\n`;
    };

    //
    // GPIO
    //
    
    Generator.mrubyc_gpio_output_init_2 = function (block) {
        const pin = Generator.getFieldValue(block, 'PIN') || null;
        return `led${pin} = GPIO.new( ${pin}, GPIO::OUT )\n` ;
    };

    Generator.mrubyc_gpio_input_init_2 = function (block) {
        const pin = Generator.getFieldValue(block, 'PIN') || null;
        return `sw${pin} = GPIO.new( ${pin}, GPIO::IN, GPIO::PULL_UP)\n`;
    };

    Generator.mrubyc_gpio_set_level_2 = function (block) {
        const pin = Generator.getFieldValue(block, 'PIN') || null;
        const state = Generator.getFieldValue(block, 'STATE') || null;
        return `led${pin}.write(${state})\n`;
    };

    Generator.mrubyc_gpio_sw_status_2 = function (block) {
        const SW = Generator.getFieldValue(block, 'SW') || null;
        return [`(sw${SW}.read == 1)`, Generator.ORDER_ATOMIC];
    };


    //
    // PWM 
    //
    Generator.mrubyc_pwm_init_2 = function (block) {
        return `pwm1 = PWM.new( 15 )\n` ;
    };

    Generator.mrubyc_pwm_sound_2 = function (block) {
        const sound = Generator.getFieldValue(block, 'SOUND') || null;
        return `pwm1.freq(${sound})\n` +
               `pwm1.duty(512)\n` ;
    };

    Generator.mrubyc_pwm_clear_2 = function (block) {
        return `pwm1.duty(0)\n`;
    };


    //
    // ADC
    // 
    Generator.mrubyc_adc_init_2 = function (block) {
        return `adc = ADC.new( 39, ADC::ATTEN_11DB, ADC::WIDTH_12BIT )\n`;
    };

    Generator.mrubyc_adc_measure_2 = function (block) {
        return `voltage = adc.read()\n` + 
               `temp = 1.0 / ( 1.0 / 3435.0 * Math.log( (3300.0 - voltage) / (voltage/ 10.0) / 10.0) + 1.0 / (25.0 + 273.0) ) - 273.0\n`;
    };

    Generator.mrubyc_adc_read_2 = function (block) {
	        return [`sprintf("%.1f", temp).to_f`, Generator.ORDER_ATOMIC];
    };
    
    return Generator;

}
