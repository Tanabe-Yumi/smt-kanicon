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

    //ここからブロックとRubyプログラムの対応を書く

    //
    // 「むずい」かてごり
    //

    Generator.mrubyc_gpio_output_init_3 = function (block) {
        const pin = Generator.valueToCode(block, 'PIN', Generator.ORDER_NONE);
        return `led${pin} = GPIO.new( ${pin}, GPIO::OUT )\n` ;
    };
    Generator.mrubyc_gpio_input_init_3 = function (block) {
        const pin = Generator.valueToCode(block, 'PIN', Generator.ORDER_NONE);
        return `sw${pin} = GPIO.new( ${pin}, GPIO::IN, GPIO::PULL_UP)\n`;
    };    
    Generator.mrubyc_gpio_set_level_3 = function (block) {
        const pin   = Generator.valueToCode(block, 'PIN', Generator.ORDER_NONE);
        const state = Generator.getFieldValue(block, 'STATE') || null;
        return `led${pin}.write(${state})\n`;
    };
    Generator.mrubyc_gpio_get_level_3 = function (block) {
        const pin = Generator.valueToCode(block, 'PIN', Generator.ORDER_NONE);
        return [`sw${pin}.read`, Generator.ORDER_ATOMIC];
    };

    Generator.mrubyc_gpio_pwm_init_3 = function (block) {
        const pin = Generator.valueToCode(block, 'PIN', Generator.ORDER_NONE);
        return `pwm${pin} = PWM.new( ${pin} )\n`;
    };
    Generator.mrubyc_gpio_pwm_duty_3 = function (block) {
        const pin = Generator.valueToCode(block, 'PIN', Generator.ORDER_NONE);
        const value = Generator.valueToCode(block, 'VALUE', Generator.ORDER_NONE);
        return `pwm${pin}.duty( (${value} * 1024).to_i )\n` ;
    };
    Generator.mrubyc_gpio_pwm_freq_3 = function (block) {
        const pin = Generator.valueToCode(block, 'PIN', Generator.ORDER_NONE);
        const value = Generator.valueToCode(block, 'VALUE', Generator.ORDER_NONE);
        return `pwm${pin}.freq( (${value}).to_i )\n`;
    };

    Generator.mrubyc_gpio_adc_init_3 = function (block) {
        const pin = Generator.valueToCode(block, 'PIN', Generator.ORDER_NONE);
        return `adc${pin} = ADC.new( ${pin}, ADC::ATTEN_11DB, ADC::WIDTH_12BIT )\n`;
    };
    Generator.mrubyc_gpio_adc_vol_3 = function (block) {
        const pin = Generator.valueToCode(block, 'PIN', Generator.ORDER_NONE);
        return [`adc${pin}.read`, Generator.ORDER_ATOMIC];
    };        

    Generator.mrubyc_i2c_init_3 = function (block) {
	const name= Generator.getFieldValue(block,'NAME') || null;
        const scl = Generator.valueToCode(block, 'SCL', Generator.ORDER_NONE);
        const sda = Generator.valueToCode(block, 'SDA', Generator.ORDER_NONE);
        return `i2c${name} = I2C.new( ${scl}, ${sda} )\n`;
    };
    Generator.mrubyc_i2c_write_3 = function (block) {
	const name= Generator.getFieldValue(block,'NAME') || null;
        const addr = getUnquoteText(block, 'ADDR', Generator.ORDER_NONE);
        const cmd  = getUnquoteText(block, 'CMD',  Generator.ORDER_NONE);
        const value= getUnquoteText(block, 'VALUE',Generator.ORDER_NONE);
        return `i2c${name}.write( ${addr}, [${cmd}, ${value}] )\n`;
    };
    Generator.mrubyc_i2c_read_3 = function (block) {
	const name= Generator.getFieldValue(block,'NAME') || null;
        const addr = getUnquoteText(block, 'ADDR', Generator.ORDER_NONE);
        const value= Generator.valueToCode(block, 'VALUE',Generator.ORDER_NONE);
        return [`i2c${name}.read( ${addr}, ${value} )`, Generator.ORDER_ATOMIC];
    };

    Generator.mrubyc_uart_init_3 = function (block) {
	const name= Generator.getFieldValue(block,'NAME') || null;
        return `uart${name} = UART.new( ${name} )\n`;
    };
    Generator.mrubyc_uart_write_3 = function (block) {
	const name= Generator.getFieldValue(block,'NAME') || null;
        const cmd = Generator.valueToCode(block, 'CMD',  Generator.ORDER_NONE);
        return `uart${name}.write( ${cmd} )\n`;
    };
    Generator.mrubyc_uart_gets_3 = function (block) {
	const name= Generator.getFieldValue(block,'NAME') || null;
        return [`uart${name}.gets()`, Generator.ORDER_ATOMIC];
    };

    return Generator;

}
