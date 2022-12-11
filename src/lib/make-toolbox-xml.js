import ScratchBlocks from 'scratch-blocks';

const categorySeparator = '<sep gap="36"/>';

const blockSeparator = '<sep gap="36"/>'; // At default scale, about 28px

/*const motion = function (isStage, targetId) {
    const stageSelected = ScratchBlocks.ScratchMsgs.translate(
        'MOTION_STAGE_SELECTED',
        'Stage selected: no motion blocks'
    );
    return `
    <category name="%{BKY_CATEGORY_MOTION}" id="motion" colour="#4C97FF" secondaryColour="#3373CC">
        ${isStage ? `
        <label text="${stageSelected}"></label>
        ` : `
        <block type="motion_movesteps">
            <value name="STEPS">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="motion_turnright">
            <value name="DEGREES">
                <shadow type="math_number">
                    <field name="NUM">15</field>
                </shadow>
            </value>
        </block>
        <block type="motion_turnleft">
            <value name="DEGREES">
                <shadow type="math_number">
                    <field name="NUM">15</field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="motion_goto">
            <value name="TO">
                <shadow type="motion_goto_menu">
                </shadow>
            </value>
        </block>
        <block type="motion_gotoxy">
            <value name="X">
                <shadow id="movex" type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="Y">
                <shadow id="movey" type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block type="motion_glideto" id="motion_glideto">
            <value name="SECS">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="TO">
                <shadow type="motion_glideto_menu">
                </shadow>
            </value>
        </block>
        <block type="motion_glidesecstoxy">
            <value name="SECS">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="X">
                <shadow id="glidex" type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
            <value name="Y">
                <shadow id="glidey" type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="motion_pointindirection">
            <value name="DIRECTION">
                <shadow type="math_angle">
                    <field name="NUM">90</field>
                </shadow>
            </value>
        </block>
        <block type="motion_pointtowards">
            <value name="TOWARDS">
                <shadow type="motion_pointtowards_menu">
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="motion_changexby">
            <value name="DX">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="motion_setx">
            <value name="X">
                <shadow id="setx" type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block type="motion_changeyby">
            <value name="DY">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="motion_sety">
            <value name="Y">
                <shadow id="sety" type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="motion_ifonedgebounce"/>
        ${blockSeparator}
        <block type="motion_setrotationstyle"/>
        ${blockSeparator}
        <block id="${targetId}_xposition" type="motion_xposition"/>
        <block id="${targetId}_yposition" type="motion_yposition"/>
        <block id="${targetId}_direction" type="motion_direction"/>`}
        ${categorySeparator}
    </category>
    `;
};*/

/*const looks = function (isStage, targetId) {
    const hello = ScratchBlocks.ScratchMsgs.translate('LOOKS_HELLO', 'Hello!');
    const hmm = ScratchBlocks.ScratchMsgs.translate('LOOKS_HMM', 'Hmm...');
    return `
    <category name="%{BKY_CATEGORY_LOOKS}" id="looks" colour="#9966FF" secondaryColour="#774DCB">
        ${isStage ? '' : `
        <block type="looks_sayforsecs">
            <value name="MESSAGE">
                <shadow type="text">
                    <field name="TEXT">${hello}</field>
                </shadow>
            </value>
            <value name="SECS">
                <shadow type="math_number">
                    <field name="NUM">2</field>
                </shadow>
            </value>
        </block>
        <block type="looks_say">
            <value name="MESSAGE">
                <shadow type="text">
                    <field name="TEXT">${hello}</field>
                </shadow>
            </value>
        </block>
        <block type="looks_thinkforsecs">
            <value name="MESSAGE">
                <shadow type="text">
                    <field name="TEXT">${hmm}</field>
                </shadow>
            </value>
            <value name="SECS">
                <shadow type="math_number">
                    <field name="NUM">2</field>
                </shadow>
            </value>
        </block>
        <block type="looks_think">
            <value name="MESSAGE">
                <shadow type="text">
                    <field name="TEXT">${hmm}</field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        `}
        ${isStage ? `
            <block type="looks_switchbackdropto">
                <value name="BACKDROP">
                    <shadow type="looks_backdrops"/>
                </value>
            </block>
            <block type="looks_switchbackdroptoandwait">
                <value name="BACKDROP">
                    <shadow type="looks_backdrops"/>
                </value>
            </block>
            <block type="looks_nextbackdrop"/>
        ` : `
            <block id="${targetId}_switchcostumeto" type="looks_switchcostumeto">
                <value name="COSTUME">
                    <shadow type="looks_costume"/>
                </value>
            </block>
            <block type="looks_nextcostume"/>
            <block type="looks_switchbackdropto">
                <value name="BACKDROP">
                    <shadow type="looks_backdrops"/>
                </value>
            </block>
            <block type="looks_nextbackdrop"/>
            ${blockSeparator}
            <block type="looks_changesizeby">
                <value name="CHANGE">
                    <shadow type="math_number">
                        <field name="NUM">10</field>
                    </shadow>
                </value>
            </block>
            <block type="looks_setsizeto">
                <value name="SIZE">
                    <shadow type="math_number">
                        <field name="NUM">100</field>
                    </shadow>
                </value>
            </block>
        `}
        ${blockSeparator}
        <block type="looks_changeeffectby">
            <value name="CHANGE">
                <shadow type="math_number">
                    <field name="NUM">25</field>
                </shadow>
            </value>
        </block>
        <block type="looks_seteffectto">
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block type="looks_cleargraphiceffects"/>
        ${blockSeparator}
        ${isStage ? '' : `
            <block type="looks_show"/>
            <block type="looks_hide"/>
        ${blockSeparator}
            <block type="looks_gotofrontback"/>
            <block type="looks_goforwardbackwardlayers">
                <value name="NUM">
                    <shadow type="math_integer">
                        <field name="NUM">1</field>
                    </shadow>
                </value>
            </block>
        `}
        ${isStage ? `
            <block id="backdropnumbername" type="looks_backdropnumbername"/>
        ` : `
            <block id="${targetId}_costumenumbername" type="looks_costumenumbername"/>
            <block id="backdropnumbername" type="looks_backdropnumbername"/>
            <block id="${targetId}_size" type="looks_size"/>
        `}
        ${categorySeparator}
    </category>
    `;
};*/

/*const sound = function (isStage, targetId) {
    return `
    <category name="%{BKY_CATEGORY_SOUND}" id="sound" colour="#D65CD6" secondaryColour="#BD42BD">
        <block id="${targetId}_sound_playuntildone" type="sound_playuntildone">
            <value name="SOUND_MENU">
                <shadow type="sound_sounds_menu"/>
            </value>
        </block>
        <block id="${targetId}_sound_play" type="sound_play">
            <value name="SOUND_MENU">
                <shadow type="sound_sounds_menu"/>
            </value>
        </block>
        <block type="sound_stopallsounds"/>
        ${blockSeparator}
        <block type="sound_changeeffectby">
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="sound_seteffectto">
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM">100</field>
                </shadow>
            </value>
        </block>
        <block type="sound_cleareffects"/>
        ${blockSeparator}
        <block type="sound_changevolumeby">
            <value name="VOLUME">
                <shadow type="math_number">
                    <field name="NUM">-10</field>
                </shadow>
            </value>
        </block>
        <block type="sound_setvolumeto">
            <value name="VOLUME">
                <shadow type="math_number">
                    <field name="NUM">100</field>
                </shadow>
            </value>
        </block>
        <block id="${targetId}_volume" type="sound_volume"/>
        ${categorySeparator}
    </category>
    `;
};*/

/*const events = function (isStage) {
    return `
    <category name="%{BKY_CATEGORY_EVENTS}" id="events" colour="#FFD500" secondaryColour="#CC9900">
        <block type="event_whenflagclicked"/>
        <block type="event_whenkeypressed">
        </block>
        ${isStage ? `
            <block type="event_whenstageclicked"/>
        ` : `
            <block type="event_whenthisspriteclicked"/>
        `}
        <block type="event_whenbackdropswitchesto">
        </block>
        ${blockSeparator}
        <block type="event_whengreaterthan">
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="event_whenbroadcastreceived">
        </block>
        <block type="event_broadcast">
            <value name="BROADCAST_INPUT">
                <shadow type="event_broadcast_menu"></shadow>
            </value>
        </block>
        <block type="event_broadcastandwait">
            <value name="BROADCAST_INPUT">
              <shadow type="event_broadcast_menu"></shadow>
            </value>
        </block>
        ${categorySeparator}
    </category>
    `;
};*/

const control = function (isStage) {
    return `
    <category name="%{BKY_CATEGORY_CONTROL}" id="control" colour="#FFAB19" secondaryColour="#CF8B17">
        <block type="control_wait">
            <value name="DURATION">
                <shadow type="math_positive_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="control_repeat">
            <value name="TIMES">
                <shadow type="math_whole_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block id="forever" type="control_forever"/>
        ${blockSeparator}
        <block type="control_if"/>
        <block type="control_if_else"/>
        <block id="wait_until" type="control_wait_until"/>
        <block id="repeat_until" type="control_repeat_until"/>
        ${blockSeparator}
        <block type="control_stop"/>
        ${blockSeparator}
        ${categorySeparator}
    </category>
    `;
};

/*const sensing = function (isStage) {
    const name = ScratchBlocks.ScratchMsgs.translate('SENSING_ASK_TEXT', 'What\'s your name?');
    return `
    <category name="%{BKY_CATEGORY_SENSING}" id="sensing" colour="#4CBFE6" secondaryColour="#2E8EB8">
        ${isStage ? '' : `
            <block type="sensing_touchingobject">
                <value name="TOUCHINGOBJECTMENU">
                    <shadow type="sensing_touchingobjectmenu"/>
                </value>
            </block>
            <block type="sensing_touchingcolor">
                <value name="COLOR">
                    <shadow type="colour_picker"/>
                </value>
            </block>
            <block type="sensing_coloristouchingcolor">
                <value name="COLOR">
                    <shadow type="colour_picker"/>
                </value>
                <value name="COLOR2">
                    <shadow type="colour_picker"/>
                </value>
            </block>
            <block type="sensing_distanceto">
                <value name="DISTANCETOMENU">
                    <shadow type="sensing_distancetomenu"/>
                </value>
            </block>
            ${blockSeparator}
        `}
        <block id="askandwait" type="sensing_askandwait">
            <value name="QUESTION">
                <shadow type="text">
                    <field name="TEXT">${name}</field>
                </shadow>
            </value>
        </block>
        <block id="answer" type="sensing_answer"/>
        ${blockSeparator}
        <block type="sensing_keypressed">
            <value name="KEY_OPTION">
                <shadow type="sensing_keyoptions"/>
            </value>
        </block>
        <block type="sensing_mousedown"/>
        <block type="sensing_mousex"/>
        <block type="sensing_mousey"/>
        ${isStage ? '' : `
            ${blockSeparator}
            '<block type="sensing_setdragmode" id="sensing_setdragmode"></block>'+
            ${blockSeparator}
        `}
        ${blockSeparator}
        <block id="loudness" type="sensing_loudness"/>
        ${blockSeparator}
        <block id="timer" type="sensing_timer"/>
        <block type="sensing_resettimer"/>
        ${blockSeparator}
        <block id="of" type="sensing_of">
            <value name="OBJECT">
                <shadow id="sensing_of_object_menu" type="sensing_of_object_menu"/>
            </value>
        </block>
        ${blockSeparator}
        <block id="current" type="sensing_current"/>
        <block type="sensing_dayssince2000"/>
        ${blockSeparator}
        <block type="sensing_username"/>
        ${categorySeparator}
    </category>
    `;
};*/

const operators = function () {
    const apple = ScratchBlocks.ScratchMsgs.translate('OPERATORS_JOIN_APPLE', 'apple');
    const banana = ScratchBlocks.ScratchMsgs.translate('OPERATORS_JOIN_BANANA', 'banana');
    const letter = ScratchBlocks.ScratchMsgs.translate('OPERATORS_LETTEROF_APPLE', 'a');
    return `
    <category name="%{BKY_CATEGORY_OPERATORS}" id="operators" colour="#40BF4A" secondaryColour="#389438">
        <block type="operator_add">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <block type="operator_subtract">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <block type="operator_multiply">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        <block type="operator_divide">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="operator_gt">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT">50</field>
                </shadow>
            </value>
        </block>
        <block type="operator_lt">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT">50</field>
                </shadow>
            </value>
        </block>
        <block type="operator_equals">
            <value name="OPERAND1">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
            <value name="OPERAND2">
                <shadow type="text">
                    <field name="TEXT">50</field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="operator_and"/>
        <block type="operator_or"/>
        <block type="operator_not"/>
        ${blockSeparator}
        <block type="operator_join">
            <value name="STRING1">
                <shadow type="text">
                    <field name="TEXT">${apple} </field>
                </shadow>
            </value>
            <value name="STRING2">
                <shadow type="text">
                    <field name="TEXT">${banana}</field>
                </shadow>
            </value>
        </block>
        <block type="operator_letter_of">
            <value name="LETTER">
                <shadow type="math_whole_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="STRING">
                <shadow type="text">
                    <field name="TEXT">${apple}</field>
                </shadow>
            </value>
        </block>
        <block type="operator_length">
            <value name="STRING">
                <shadow type="text">
                    <field name="TEXT">${apple}</field>
                </shadow>
            </value>
        </block>
        <block type="operator_contains" id="operator_contains">
          <value name="STRING1">
            <shadow type="text">
              <field name="TEXT">${apple}</field>
            </shadow>
          </value>
          <value name="STRING2">
            <shadow type="text">
              <field name="TEXT">${letter}</field>
            </shadow>
          </value>
        </block>
        ${blockSeparator}
        <block type="operator_mod">
            <value name="NUM1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="NUM2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        ${blockSeparator}
        <block type="operator_mathop">
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>
        ${categorySeparator}
    </category>
    `;
};

const variables = function () {
    return `
    <category
        name="%{BKY_CATEGORY_VARIABLES}"
        id="variables"
        colour="#FF8C1A"
        secondaryColour="#DB6E00"
        custom="VARIABLE">
    </category>
    `;
};

const myBlocks = function () {
    return `
    <category
        name="%{BKY_CATEGORY_MYBLOCKS}"
        id="myBlocks"
        colour="#FF6680"
        secondaryColour="#FF4D6A"
        custom="PROCEDURE">
    </category>
    `;
};



ScratchBlocks.Msg.CATEGORY_SMT5 = 'smt5';
ScratchBlocks.ScratchMsgs.locales.en.CATEGORY_SMT5 = 'peripheral';
ScratchBlocks.ScratchMsgs.locales.ja.CATEGORY_SMT5 = '機器';
ScratchBlocks.ScratchMsgs.locales['ja-Hira'].CATEGORY_SMT5 = 'きき';

const smt5 = function () {
    return `
    <category
        name="%{BKY_CATEGORY_SMT5}"
        id="smt5"
        colour="#db7093"
        secondaryColour="#CC0043">

        <block type="mrubyc_i2c_lcd_write">
            <value name="LINE">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
          <block type="mrubyc_i2c_m5lcd_write1">
            <value name="POS1">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="POS2">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="POS3">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="POS4">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="TYPE">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
            <value name="COLOR">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_i2c_m5lcd_write2">
            <value name="POS1">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="POS2">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="SIZE">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="TYPE">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
            <value name="COLOR">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_i2c_m5lcd_write3">
            <value name="POS1">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="POS2">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="SIZE">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="MESS">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
            <value name="COLOR">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}

        <block type="mrubyc_wifi_personal_init">
            <value name="SSID">
                <shadow type="text">
                    <field name="TEXT">SugiyamaLab</field>
                </shadow>
            </value>
            <value name="PASSWORD">
                <shadow type="text">
                    <field name="TEXT">epi.it.matsue-ct.jp</field>
                </shadow>
            </value>
        </block>

        <block type="mrubyc_wifi_is_connected">
        </block>

        <block type="mrubyc_i2c_rtc_ntp_init">
        </block>

        <block type="mrubyc_i2c_rtc_ntp">
            <value name="TIME">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}

        <block type="mrubyc_uart_gps_status">
        </block>

        <block type="mrubyc_uart_gps">
            <value name="DATA">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}


        <block type="mrubyc_matsue_send_srv">
        </block>

        <block type="mrubyc_matsue_send_data">
            <value name="SRV">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
            <value name="NAME">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
            <value name="TIME">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
            <value name="KEY">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="KEY2">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
            <value name="VALUE2">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="TIMEZONE">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>

        <block type="mrubyc_matsue_send">
            <value name="URL">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_matsue_send_save">
            <value name="URL">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_matsue_send_save2">
        </block>
        ${blockSeparator}

        <block type="mrubyc_i2c_scd30_status">
        </block>

        <block type="mrubyc_i2c_scd30">
            <value name="SCD30">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}

        <block type="mrubyc_i2c_sht35_status">
        </block>

        <block type="mrubyc_i2c_sht35">
            <value name="SHT35">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}

        <block type="mrubyc_uart_gps_otakara_distance">
            <value name="OTAKARA">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        ${blockSeparator}


        <block type="mrubyc_ibeacon_get">
        </block>
        <block type="mrubyc_ibeacon">
            <value name="VAL">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        ${categorySeparator}
    </category>
    `;
};



ScratchBlocks.Msg.CATEGORY_SMT1 = 'smt1';
ScratchBlocks.ScratchMsgs.locales.en.CATEGORY_SMT1 = 'easy';
ScratchBlocks.ScratchMsgs.locales.ja.CATEGORY_SMT1 = 'Pin, PWM, ADC (かんたん)';
ScratchBlocks.ScratchMsgs.locales['ja-Hira'].CATEGORY_SMT1 = 'Pin, PWM, ADC (かんたん)';

const smt1 = function () {
    return `
    <category
        name="%{BKY_CATEGORY_SMT1}"
        id="smt1"
        colour="#CC0043"
        secondaryColour="#FF4D6A">


        <block type="mrubyc_gpio_led_all">
            <value name="LED1">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="LED2">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="LED3">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="LED4">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="LED5">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="LED6">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="LED7">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="LED8">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>

        <block type="mrubyc_gpio_sw_all">
            <value name="SW1">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="SW2">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="SW3">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
            <value name="SW4">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>

        <block type="mrubyc_pwm_sound">
            <value name="SOUND">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_pwm_clear">
        </block>

        <block type="mrubyc_adc_read">
        </block>
        ${categorySeparator}
    </category>
    `;
};



ScratchBlocks.Msg.CATEGORY_SMT2 = 'smt2';
ScratchBlocks.ScratchMsgs.locales.en.CATEGORY_SMT2 = 'usual';
ScratchBlocks.ScratchMsgs.locales.ja.CATEGORY_SMT2 = 'Pin, PWM, ADC (ふつう)';
ScratchBlocks.ScratchMsgs.locales['ja-Hira'].CATEGORY_SMT2 = 'Pin, PWM, ADC (ふつう)';

const smt2 = function () {
    return `
    <category
        name="%{BKY_CATEGORY_SMT2}"
        id="smt2"
        colour="#1E90FF"
        secondaryColour="#0000FF">
        <block type="mrubyc_gpio_output_init_2">
        </block>
        <block type="mrubyc_gpio_set_level_2">
            <value name="PIN">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="STATE">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_gpio_input_init_2">
        </block>
        <block type="mrubyc_gpio_sw_status_2">
            <value name="SW">
                <shadow type="math_number">
                    <field name="NUM"/>
                </shadow>
            </value>
        </block>

        <block type="mrubyc_pwm_init_2">
        </block>
        <block type="mrubyc_pwm_sound_2">
            <value name="SOUND">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_pwm_clear_2">
        </block>

        <block type="mrubyc_adc_init_2">
        </block>
        <block type="mrubyc_adc_measure_2">
        </block>
        <block type="mrubyc_adc_read_2">
        </block>
        ${categorySeparator}
    </category>
    `;
};


ScratchBlocks.Msg.CATEGORY_SMT3 = 'smt3';
ScratchBlocks.ScratchMsgs.locales.en.CATEGORY_SMT3 = 'hard';
ScratchBlocks.ScratchMsgs.locales.ja.CATEGORY_SMT3 = 'Pin, PWM, ADC (むずい)';
ScratchBlocks.ScratchMsgs.locales['ja-Hira'].CATEGORY_SMT3 = 'Pin, PWM, ADC (むずい)';

const smt3 = function () {
    return `
    <category
        name="%{BKY_CATEGORY_SMT3}"
        id="smt3"
        colour="#daa520"
        secondaryColour="#FF4D6A">

        <block type="mrubyc_gpio_output_init_3">
            <value name="PIN">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_gpio_input_init_3">
            <value name="PIN">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_gpio_pwm_init_3">
            <value name="PIN">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_gpio_adc_init_3">
            <value name="PIN">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_gpio_set_level_3">
            <value name="PIN">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="STATE">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_gpio_get_level_3">
            <value name="PIN">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>

        <block type="mrubyc_gpio_pwm_duty_3">
            <value name="PIN">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_gpio_pwm_freq_3">
            <value name="PIN">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_gpio_adc_vol_3">
            <value name="PIN">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_gpio_pwm_freq_3">
            <value name="PIN">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        ${categorySeparator}
    </category>
    `;
};

ScratchBlocks.Msg.CATEGORY_SMT4 = 'smt4';
ScratchBlocks.ScratchMsgs.locales.en.CATEGORY_SMT4 = 'hard2';
ScratchBlocks.ScratchMsgs.locales.ja.CATEGORY_SMT4 = 'I2C, UART';
ScratchBlocks.ScratchMsgs.locales['ja-Hira'].CATEGORY_SMT4 = 'I2C, UART';

const smt4 = function () {
    return `
    <category
        name="%{BKY_CATEGORY_SMT4}"
        id="smt4"
        colour="#d2b48c"
        secondaryColour="#FF4D6A">

        <block type="mrubyc_i2c_init_3">
            <value name="NAME">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="SCL">
                <shadow type="math_number">
                    <field name="NUM">23</field>
                </shadow>
            </value>
            <value name="SDA">
                <shadow type="math_number">
                    <field name="NUM">22</field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_i2c_write_3">
            <value name="NAME">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="ADDR">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
            <value name="CMD">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
            <value name="VALUE">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_i2c_read_3">
            <value name="NAME">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="ADDR">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_uart_init_3">
            <value name="NAME">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_uart_write_3">
            <value name="NAME">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
            <value name="CMD">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_uart_gets_3">
            <value name="NAME">
                <shadow type="math_number">
                    <field name="NUM"></field>
                </shadow>
            </value>
        </block>
        ${categorySeparator}
    </category>
    `;
};


//<block type="mrubyc_uart_gps_read_2">
//        </block>
//        <block type="mrubyc_uart_gps_status_2">
//        </block>
//        <block type="mrubyc_uart_gps_time_2">
//        </block>
//        <block type="mrubyc_uart_gps_lat_2">
//        </block>
//        <block type="mrubyc_uart_gps_lng_2">
//        </block>
//        ${blockSeparator}

/*


        <block type="mrubyc_while">
            <value name="CONDITION">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_puts">
            <value name="OUTPUT">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="mrubyc_puts_var">
            <value name="OUTPUT">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="ruby_statement">
            <value name="STATEMENT">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="ruby_statement_with_block">
            <value name="STATEMENT">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
            <value name="ARGS">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="ruby_expression">
            <value name="EXPRESSION">
                <shadow type="text">
                    <field name="TEXT"></field>
                </shadow>
            </value>
        </block>
        <block type="ruby_range">
            <value name="FROM">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="TO">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="ruby_exclude_range">
            <value name="FROM">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="TO">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
*/

// kani robot
ScratchBlocks.Msg.CATEGORY_EASYKANIROBOT = 'kaniRobotEasy';
ScratchBlocks.ScratchMsgs.locales.en.CATEGORY_EASYKANIROBOT = 'kaniEasy';
ScratchBlocks.ScratchMsgs.locales.ja.CATEGORY_EASYKANIROBOT = 'カニロボ';
ScratchBlocks.ScratchMsgs.locales['ja-Hira'].CATEGORY_EASYKANIROBOT = 'カニロボ';

const kaniRobotEasy = function() {
	return `
	<category
		name="%{BKY_CATEGORY_EASYKANIROBOT}"
		id="kaniRobotEasy"
		colour="#ff6f56"
		secondaryColour="#fab7be">
		
		<block type="kani_motor_init_e"></block>
		
		<block type="kani_motor_start_e">
			<value name="side">
				<shadow type="text">
					<field name="TEXT"></field>
				</shadow>
			</value>
			<value name="direction">
				<shadow type="text">
					<field name="TEXT"></field>
				</shadow>
			</value>
		</block>
		
		<block type="kani_motor_stop_e">
			<value name="side">
				<shadow type="text">
					<field name="TEXT"></field>
				</shadow>
			</value>
		</block>
		
		${categorySeparator}
		
		<block type="kani_lux_init_e">
			<value name="number">
				<shadow type="math_number">
					<field name="NUM"></field>
				</shadow>
			</value>
		</block>
		
		<block type="kani_lux_get_e">
			<value name="number">
				<shadow type="math_number">
					<field name="NUM"></field>
				</shadow>
			</value>
		</block>
		
		${categorySeparator}
		
		<block type="kani_servo_init_e">
			<value name="number">
				<shadow type="math_number">
					<field name="NUM"></field>
				</shadow>
			</value>
		</block>
		
		<block type="kani_servo_deg_e">
			<value name="number">
				<shadow type="math_number">
					<field name="NUM"></field>
				</shadow>
			</value>
			<value name="degree">
				<shadow type="text">
					<field name="TEXT">0</field>
				</shadow>
			</value>
		</block>
		
		${categorySeparator}
	</category>
	`;
};

// kani robot
ScratchBlocks.Msg.CATEGORY_NORMALKANIROBOT = 'kaniRobotNormal';
ScratchBlocks.ScratchMsgs.locales.en.CATEGORY_NORMALKANIROBOT = 'kaniNormal';
ScratchBlocks.ScratchMsgs.locales.ja.CATEGORY_NORMALKANIROBOT = '蟹ロボ';
ScratchBlocks.ScratchMsgs.locales['ja-Hira'].CATEGORY_NORMALKANIROBOT = '蟹ロボ';

const kaniRobotNormal = function() {
	return `
	<category
		name="%{BKY_CATEGORY_NORMALKANIROBOT}"
		id="kaniRobotNormal"
		colour="#f42800"
		secondaryColour="#f45b69">
		
		<block type="kani_motor_enable_init_n"></block>
		
		<block type="kani_motor_enable_set_n">
			<value name="enable">
				<shadow type="text">
					<field name="TEXT"></field>
				</shadow>
			</value>
		</block>
		
		<block type="kani_motor_init_n">
			<value name="ch">
				<shadow type="math_number">
					<field name="NUM"></field>
				</shadow>
			</value>
		</block>
		
		<block type="kani_motor_speed_init_n">
			<value name="ch">
				<shadow type="math_number">
					<field name="NUM"></field>
				</shadow>
			</value>
		</block>
		
		<block type="kani_motor_direct_n">
			<value name="ch">
				<shadow type="math_number">
					<field name="NUM"></field>
				</shadow>
			</value>
			<value name="direction">
				<shadow type="text">
					<field name="TEXT"></field>
				</shadow>
			</value>
		</block>
		
		<block type="kani_motor_speed_set_n">
			<value name="ch">
				<shadow type="math_number">
					<field name="NUM"></field>
				</shadow>
			</value>
			<value name="speed">
				<shadow type="text">
					<field name="TEXT">500</field>
				</shadow>
			</value>
		</block>
		
		${categorySeparator}
		
		<block type="kani_lux_init_n">
			<value name="number">
				<shadow type="math_number">
					<field name="NUM"></field>
				</shadow>
			</value>
		</block>
		
		<block type="kani_lux_get_n">
			<value name="number">
				<shadow type="math_number">
					<field name="NUM"></field>
				</shadow>
			</value>
		</block>
		
		${categorySeparator}
		
		<block type="kani_servo_init_n">
			<value name="number">
				<shadow type="math_number">
					<field name="NUM"></field>
				</shadow>
			</value>
		</block>
		
		<block type="kani_servo_freq_n">
			<value name="number">
				<shadow type="math_number">
					<field name="NUM"></field>
				</shadow>
			</value>
			<value name="freq">
				<shadow type="text">
					<field name="TEXT">50</field>
				</shadow>
			</value>
		</block>
		
		<block type="kani_servo_duty_n">
			<value name="number">
				<shadow type="math_number">
					<field name="NUM"></field>
				</shadow>
			</value>
			<value name="duty">
				<shadow type="text">
					<field name="TEXT">0</field>
				</shadow>
			</value>
		</block>
		
		<block type="kani_servo_deg_calc_n">
			<value name="degree">
				<shadow type="text">
					<field name="TEXT">0</field>
				</shadow>
			</value>
		</block>
		
		${categorySeparator}
	</category>
	`;
};

const xmlOpen = '<xml style="display: none">';
const xmlClose = '</xml>';

/**
 * @param {!boolean} isStage - Whether the toolbox is for a stage-type target.
 * @param {?string} targetId - The current editing target
 * @param {string?} categoriesXML - null for default toolbox, or an XML string with <category> elements.
 * @returns {string} - a ScratchBlocks-style XML document for the contents of the toolbox.
 */
const makeToolboxXML = function (isStage, targetId, categoriesXML) {
    const gap = [categorySeparator];

    const everything = [
        xmlOpen,
        //motion(isStage, targetId), gap,
        //looks(isStage, targetId), gap,
        //sound(isStage, targetId), gap,
        //events(isStage, targetId), gap,
        control(isStage, targetId), gap,
        //sensing(isStage, targetId), gap,
        operators(isStage, targetId), gap,
        variables(isStage, targetId), gap,
        myBlocks(isStage, targetId), gap,
        smt5(isStage, targetId), gap,
        smt1(isStage, targetId), gap,
        smt2(isStage, targetId), gap,
        smt3(isStage, targetId), gap,
        smt4(isStage, targetId), gap,
	  kaniRobotEasy(isStage, targetId), gap,		// kani robot
	  kaniRobotNormal(isStage, targetId)			// kani robot
    ];

    if (categoriesXML) {
        everything.push(gap, categoriesXML);
    }

    everything.push(xmlClose);
    return everything.join('\n');
};

export default makeToolboxXML;
