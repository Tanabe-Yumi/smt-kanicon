/**
 * Define Ruby code generator for Procedures Blocks
 * @param {RubyGenerator} Generator The RubyGenerator
 * @return {RubyGenerator} same as param.
 */
export default function (Generator) {
    Generator.procedures_definition = function (block) {
        block.isStatement = true;
        const customBlock = Generator.getInputTargetBlock(block, 'custom_block');
        return Generator.blockToCode(customBlock);
    };

    const blockToMethod = function (block, isCall) {
        let methodName = block.mutation.proccode.split(' ')
            .filter(i => !/^%[sb]$/.test(i))
            .join('_');
        if (methodName.length === 0) {
            methodName = 'procedure';
        }
        let args = [];
        const paramNamesIdsAndDefaults =
              Generator.currentTarget.blocks.getProcedureParamNamesIdsAndDefaults(block.mutation.proccode);
        if (isCall) {
            const ids = paramNamesIdsAndDefaults[1];
            const defaults = paramNamesIdsAndDefaults[2];
            for (let i = 0; i < ids.length; i++) {
                let value;
                if (block.inputs[ids[i]]) {
                    value = Generator.valueToCode(block, ids[i], Generator.ORDER_NONE);
                } else {
                    value = defaults[i];
                }
                args.push(Generator.nosToCode(value));
            }
        } else {
            args = paramNamesIdsAndDefaults[0];
        }
        const argsString = args.length > 0 ? `(${args.join(', ')})` : '';
        return `${isCall ? '' : 'def myBlock_'}${methodName}${argsString}\n`;
    };

    Generator.procedures_call = function (block) {
        return `myBlock_${blockToMethod(block, true)}`;
    };

    Generator.procedures_prototype = function (block) {
        return blockToMethod(block, false);
    };

    Generator.argument_reporter_boolean = function (block) {
        return [Generator.escapeVariableName(Generator.getFieldValue(block, 'VALUE')), Generator.ORDER_ATOMIC];
    };

    Generator.argument_reporter_string_number = function (block) {
        return [Generator.escapeVariableName(Generator.getFieldValue(block, 'VALUE')), Generator.ORDER_ATOMIC];
    };

    return Generator;
}
