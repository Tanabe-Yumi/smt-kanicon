import {defineMessages} from 'react-intl';
import sharedMessages from '../shared-messages';

let messages = defineMessages({
    meow: {
        defaultMessage: 'Meow',
        description: 'Name for the meow sound',
        id: 'gui.defaultProject.meow'
    },
    variable: {
        defaultMessage: 'my variable',
        description: 'Name for the default variable',
        id: 'gui.defaultProject.variable'
    }
});

messages = {...messages, ...sharedMessages};

// use the default message if a translation function is not passed
const defaultTranslator = msgObj => msgObj.defaultMessage;

/**
 * Generate a localized version of the default project
 * @param {function} translateFunction a function to use for translating the default names
 * @return {object} the project data json for the default project
 */
const projectData = translateFunction => {
    const translator = translateFunction || defaultTranslator;
    return ({
        targets: [
            {
                isStage: true,
                name: 'Stage',
               
                variables: {
                    '`jEk@4|i[#Fk?(8x)AV.-my variable': [
                        translator(messages.variable),
                        0
                    ],
                    '@nQP*7F(2o3MmbwmSca[': [
                        "SW1",
                        0
                    ],
                    '7b,Kl9om_IBH!zsGN^@a': [
                        "SW2",
                        0
                    ],
                    'H~`ef]DRRjb+Y)0Nas;z': [
                        "SW3",
                        0
                    ],
                    'Py%2VX0mW0*Q%Hg2O(XM': [
                        "SW4",
                        0
                    ]
                },
                lists: {},
                broadcasts: {
                    "s9hN5)`a_]5Z`=ppw[W4": "メッセージ1",
                    ":fg=#PIt?O]H1R3bL|-@": "LED1_ON",
                    "jB.Bmtf8#Pn;l+#j-nv5": "LED1_OFF",
                    ":T+Vnb,60ETE?k{q42Y(": "LED2_ON",
                    "d$Jcxp2k.s!)}5Tk:)7n": "LED2_OFF",
                    "eD{PS`Gpiq?QY(z=Vud^": "LED3_ON",
                    "V7QLZ[!28SwYKC%9Qt%!": "LED3_OFF",
                    "r|tlChnUw_;_;TX_6su,": "LED4_ON",
                    "?X@rIW{M*pm#Tl$]N5`s": "LED4_OFF",
                    "B}E@~Q=*9v)Q|QhBany|": "LED5_ON",
                    "-3i=x%d@1~aP?_SyTjhE": "LED5_OFF",
                    "-lki(J];7/dzM!0G.U3Y": "LED6_ON",
                    "t?QmJ9t,~*.sBC6m7W=`": "LED6_OFF",
                    "rD9XH8C74/x.YCqs+Cpl": "LED7_ON",
                    "gE2-xX`w}*1?g(5r|NRi": "LED7_OFF",
                    "ZIgJ1z}XX9J{Y?s:/SKI": "LED8_ON",
                    "AkLpZaK0[C]$Q?S`Wht?": "LED8_OFF"
                },
                blocks: {},
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'cd21514d0531fdffb22204e0ec5ed84a',
                        name: translator(messages.backdrop, {index: 1}),
                        md5ext: 'cd21514d0531fdffb22204e0ec5ed84a.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 240,
                        rotationCenterY: 180
                    }
                ],
                sounds: [
                    {
                        assetId: '83a9787d4cb6f3b7632b4ddfebf74367',
                        name: translator(messages.pop),
                        dataFormat: 'wav',
                        format: '',
                        rate: 11025,
                        sampleCount: 258,
                        md5ext: '83a9787d4cb6f3b7632b4ddfebf74367.wav'
                    }
                ],
                volume: 100
            },
            {
                isStage: false,
                name: "master",	// kani robot
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {},
                currentCostume: 0,
                costumes: [
                    {
                        assetId: '3eb0cf9328f7ae8f65aba0892806a3ba',
                        name: "master",	// kani robot
                        bitmapResolution: 1,
                        md5ext: '3eb0cf9328f7ae8f65aba0892806a3ba.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 130,
                        rotationCenterY: 120
                    }
                ],
                sounds: [
                    {
                        assetId: "5275236b4599e3c681a540f93624ca85",
                        name: "c3",
                        dataFormat: "wav",
                        rate: 48000,
                        sampleCount: 480000,
                        md5ext: "5275236b4599e3c681a540f93624ca85.wav"
                    },
                    {
                        assetId: "1346d9b5429843b7e625a439762c73e8",
                        name: "d3",
                        dataFormat: "wav",
                        rate: 48000,
                        sampleCount: 480000,
                        md5ext: "1346d9b5429843b7e625a439762c73e8.wav"
                    },
                    {
                        assetId: "84ac2921aee40d4f66859987ec189fad",
                        name: "e3",
                        dataFormat: "wav",
                        rate: 48000,
                        sampleCount: 480000,
                        md5ext: "84ac2921aee40d4f66859987ec189fad.wav"
                    },
                    {
                        assetId: "0268ee3215360e16faf78cbb9564f218",
                        name: "f3",
                        dataFormat: "wav",
                        rate: 48000,
                        sampleCount: 480000,
                        md5ext: "0268ee3215360e16faf78cbb9564f218.wav"
                    },
                    {
                        assetId: "055767b7abcea2ffcb4f7f87d5cf2343",
                        name: "g3",
                        dataFormat: "wav",
                        rate: 48000,
                        sampleCount: 480000,
                        md5ext: "055767b7abcea2ffcb4f7f87d5cf2343.wav"
                    },
                    {
                        assetId: "ceff2607a32d9f817bd86727aea50a03",
                        name: "a3",
                        dataFormat: "wav",
                        rate: 48000,
                        sampleCount: 480000,
                        md5ext: "ceff2607a32d9f817bd86727aea50a03.wav"
                    },
                    {
                        assetId: "0835cba18ec5b79eb465ede19c4938d7",
                        name: "b3",
                        dataFormat: "wav",
                        rate: 48000,
                        sampleCount: 480000,
                        md5ext: "0835cba18ec5b79eb465ede19c4938d7.wav"
                    },
                    {
                        assetId: "ff63db40cf15001444bd34db67b8c02a",
                        name: "c4",
                        dataFormat: "wav",
                        rate: 48000,
                        sampleCount: 480000,
                        md5ext: "ff63db40cf15001444bd34db67b8c02a.wav"
                    }
                ],
                volume: 100,
                layerOrder: 1,
                visible: true,
                x: 0,
                y: 0,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            },
            // kani robot
            {
                isStage: false,
                name: "slave",
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {},
                currentCostume: 0,
                costumes: [
                    {
                        assetId: '3eb0cf9328f7ae8f65aba0892806a3ba',
                        name: "base_board",
                        bitmapResolution: 1,
                        md5ext: '3eb0cf9328f7ae8f65aba0892806a3ba.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 130,
                        rotationCenterY: 120
                    }
                ],
                sounds: [
                    {
                        assetId: "5275236b4599e3c681a540f93624ca85",
                        name: "c3",
                        dataFormat: "wav",
                        rate: 48000,
                        sampleCount: 480000,
                        md5ext: "5275236b4599e3c681a540f93624ca85.wav"
                    },
                    {
                        assetId: "1346d9b5429843b7e625a439762c73e8",
                        name: "d3",
                        dataFormat: "wav",
                        rate: 48000,
                        sampleCount: 480000,
                        md5ext: "1346d9b5429843b7e625a439762c73e8.wav"
                    },
                    {
                        assetId: "84ac2921aee40d4f66859987ec189fad",
                        name: "e3",
                        dataFormat: "wav",
                        rate: 48000,
                        sampleCount: 480000,
                        md5ext: "84ac2921aee40d4f66859987ec189fad.wav"
                    },
                    {
                        assetId: "0268ee3215360e16faf78cbb9564f218",
                        name: "f3",
                        dataFormat: "wav",
                        rate: 48000,
                        sampleCount: 480000,
                        md5ext: "0268ee3215360e16faf78cbb9564f218.wav"
                    },
                    {
                        assetId: "055767b7abcea2ffcb4f7f87d5cf2343",
                        name: "g3",
                        dataFormat: "wav",
                        rate: 48000,
                        sampleCount: 480000,
                        md5ext: "055767b7abcea2ffcb4f7f87d5cf2343.wav"
                    },
                    {
                        assetId: "ceff2607a32d9f817bd86727aea50a03",
                        name: "a3",
                        dataFormat: "wav",
                        rate: 48000,
                        sampleCount: 480000,
                        md5ext: "ceff2607a32d9f817bd86727aea50a03.wav"
                    },
                    {
                        assetId: "0835cba18ec5b79eb465ede19c4938d7",
                        name: "b3",
                        dataFormat: "wav",
                        rate: 48000,
                        sampleCount: 480000,
                        md5ext: "0835cba18ec5b79eb465ede19c4938d7.wav"
                    },
                    {
                        assetId: "ff63db40cf15001444bd34db67b8c02a",
                        name: "c4",
                        dataFormat: "wav",
                        rate: 48000,
                        sampleCount: 480000,
                        md5ext: "ff63db40cf15001444bd34db67b8c02a.wav"
                    }
                ],
                volume: 100,
                layerOrder: 1,
                visible: true,
                x: 0,
                y: 0,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            },
            /*{
                isStage: false,
                name: "LED1",
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {
                    "3=u?17[sJtPJ6)b)B_Sn": {
                        opcode: "event_whenbroadcastreceived",
                        next: "$!j_[A0I%j:8Z?tdZ:k;",
                        parent: null,
                        inputs: {},
                        fields: { BROADCAST_OPTION: ["LED1_OFF","jB.Bmtf8#Pn;l+#j-nv5"]},
                        shadow: false,
                        topLevel: true,
                        x: 85,
                        y: -68
                    },
                    "$!j_[A0I%j:8Z?tdZ:k;": {
                        opcode: "looks_switchcostumeto",
                        next: null,
                        parent: "3=u?17[sJtPJ6)b)B_Sn",
                        inputs: { COSTUME: [1,"ncf_)|n)+@Z)yaIn6!8@"]},
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    "ncf_)|n)+@Z)yaIn6!8@": {
                        opcode: "looks_costume",
                        next: null,
                        parent: "$!j_[A0I%j:8Z?tdZ:k;",
                        inputs: {},
                        fields: {COSTUME: ["LED_OFF",null]},
                        shadow: true,
                        topLevel: false
                    },
                    "4ON`9JSyU_.]h@WIy`vJ": {
                        opcode: "event_whenbroadcastreceived",
                        next: "ljlp`x3j7U9ErgJF.|%=",
                        parent: null,
                        inputs: {},
                        fields: {BROADCAST_OPTION: ["LED1_ON",":fg=#PIt?O]H1R3bL|-@"]},
                        shadow: false,
                        topLevel: true,
                        x: 483,
                        y: -70
                    },
                    "ljlp`x3j7U9ErgJF.|%=": {
                        opcode: "looks_switchcostumeto",
                        next: null,
                        parent: "4ON`9JSyU_.]h@WIy`vJ",
                        inputs: {COSTUME: [1,"D#~R/q_w)b0~8!a)341A"]},
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    "D#~R/q_w)b0~8!a)341A": {
                        opcode: "looks_costume",
                        next: null,
                        parent: "ljlp`x3j7U9ErgJF.|%=",
                        inputs: {},
                        fields: {COSTUME: ["LED_ON",null]},
                        shadow: true,
                        topLevel: false
                    }
                 },
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'e6adc841ef4b8725f538a8ece9384216',
                        name: "LED_OFF",
                        bitmapResolution: 1,
                        md5ext: 'e6adc841ef4b8725f538a8ece9384216.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    },
                    {
                        assetId: 'd8d904d64fb707c6eb36575e5a0a7600',
                        name: "LED_ON",
                        bitmapResolution: 1,
                        md5ext: 'd8d904d64fb707c6eb36575e5a0a7600.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 123
                    }
                ],
                sounds: [
                    {
                        assetId: '83c36d806dc92327b9e7049a565c6bff',
                        name: translator(messages.meow),
                        dataFormat: 'wav',
                        format: '',
                        rate: 22050,
                        sampleCount: 18688,
                        md5ext: '83c36d806dc92327b9e7049a565c6bff.wav'
                    }
                ],
                layerOrder: 2,
                visible: true,
                x: 80,
                y: -18,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            },
            {
                isStage: false,
                name: "LED2",
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {
                    "Hwr=zc!VN[#bBa)ddq1(": {
                        opcode: "event_whenbroadcastreceived",
                        next: "3QFpoaFjlFC%)R-Wmbj|",
                        parent: null,
                        inputs: {},
                        fields: {BROADCAST_OPTION: ["LED2_OFF","d$Jcxp2k.s!)}5Tk:)7n"]},
                        shadow: false,
                        topLevel: true,
                        x: 149,
                        y: 150
                    },
                    "d^GHMZZm2db%V$%0Lt%e": {
                        opcode: "event_whenbroadcastreceived",
                        next: "v(7]F?rr4`8e$q9TXBEa",
                        parent: null,
                        inputs: {},
                        fields: {BROADCAST_OPTION: ["LED2_ON",":T+Vnb,60ETE?k{q42Y("]},
                        shadow: false,
                        topLevel: true,
                        x: 531,
                        y: 154
                    },
                    "3QFpoaFjlFC%)R-Wmbj|": {
                        opcode: "looks_switchcostumeto",
                        next: null,
                        parent: "Hwr=zc!VN[#bBa)ddq1(",
                        inputs: {COSTUME: [1,"nd|TA:5lpR[kJjj0I;H$"]},
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    "nd|TA:5lpR[kJjj0I;H$": {
                        opcode: "looks_costume",
                        next: null,
                        parent: "3QFpoaFjlFC%)R-Wmbj|",
                        inputs: {},
                        fields: {COSTUME: ["LED_OFF",null]},
                        shadow: true,
                        topLevel: false
                    },
                    "v(7]F?rr4`8e$q9TXBEa": {
                        opcode:"looks_switchcostumeto",
                        next: null,
                        parent: "d^GHMZZm2db%V$%0Lt%e",
                        inputs: {COSTUME: [1,"1|ATCu9%~!Ekp1;EjR-a"]},
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    "1|ATCu9%~!Ekp1;EjR-a": {
                        opcode: "looks_costume",
                        next: null,
                        parent: "v(7]F?rr4`8e$q9TXBEa",
                        inputs: {},
                        fields: {COSTUME: ["LED_ON",null]},
                        shadow: true,
                        topLevel: false
                    }
                },
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'e6adc841ef4b8725f538a8ece9384216',
                        name: "LED_OFF",
                        bitmapResolution: 1,
                        md5ext: 'e6adc841ef4b8725f538a8ece9384216.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    },
                    {
                        assetId: 'd8d904d64fb707c6eb36575e5a0a7600',
                        name: "LED_ON",
                        bitmapResolution: 1,
                        md5ext: 'd8d904d64fb707c6eb36575e5a0a7600.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 123
                    }
                ],
                sounds: [
                    {
                        assetId: '83c36d806dc92327b9e7049a565c6bff',
                        name: translator(messages.meow),
                        dataFormat: 'wav',
                        format: '',
                        rate: 22050,
                        sampleCount: 18688,
                        md5ext: '83c36d806dc92327b9e7049a565c6bff.wav'
                    }
                ],
                layerOrder: 2,
                visible: true,
                x: 95,
                y: -18,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            },
            {
                isStage: false,
                name: "LED3",
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {
                    ":::Syi__h`[gEi7cDeI#": {
                        opcode: "looks_switchcostumeto",
                        next: null,
                        parent: "JLtpMN![Rd,tnAo0j.ej",
                        inputs: {COSTUME: [1,"^,o?D]]X3Ep88FG,gyr#"]},
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    "^,o?D]]X3Ep88FG,gyr#": {
                        opcode: "looks_costume",
                        next: null,
                        parent: ":::Syi__h`[gEi7cDeI#",
                        inputs: {},
                        fields: {COSTUME: ["LED_ON",null]},
                        shadow: true,
                        topLevel: false
                    },
                    "|I*8?TBF)?Jn^AewW/3}": {
                        opcode: "looks_switchcostumeto",
                        next: null,
                        parent: "w$`[B5OHevI!Rhav:Cj.",
                        inputs: {COSTUME: [1,"qFcBQVwf.J9G/I%e`pTy"]},
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    "qFcBQVwf.J9G/I%e`pTy": {
                        opcode: "looks_costume",
                        next: null,
                        parent: "|I*8?TBF)?Jn^AewW/3}",
                        inputs: {},
                        fields: {COSTUME: ["LED_OFF",null]},
                        shadow: true,
                        topLevel: false
                    },
                    "JLtpMN![Rd,tnAo0j.ej": {
                        opcode: "event_whenbroadcastreceived",
                        next: ":::Syi__h`[gEi7cDeI#",
                        parent: null,
                        inputs: {},
                        fields: {BROADCAST_OPTION: ["LED3_ON","eD{PS`Gpiq?QY(z=Vud^"]},
                        shadow: false,
                        topLevel: true,
                        x: 206,
                        y: 160
                    },
                    "w$`[B5OHevI!Rhav:Cj.": {
                        opcode: "event_whenbroadcastreceived",
                        next: "|I*8?TBF)?Jn^AewW/3}",
                        parent: null,
                        inputs: {},
                        fields: {BROADCAST_OPTION: ["LED3_OFF","V7QLZ[!28SwYKC%9Qt%!"]},
                        shadow: false,
                        topLevel: true,
                        x: 561,
                        y: 155
                    }
                },
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'e6adc841ef4b8725f538a8ece9384216',
                        name: "LED_OFF",
                        bitmapResolution: 1,
                        md5ext: 'e6adc841ef4b8725f538a8ece9384216.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    },
                    {
                        assetId: 'd8d904d64fb707c6eb36575e5a0a7600',
                        name: "LED_ON",
                        bitmapResolution: 1,
                        md5ext: 'd8d904d64fb707c6eb36575e5a0a7600.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 123
                    }
                ],
                sounds: [
                    {
                        assetId: '83c36d806dc92327b9e7049a565c6bff',
                        name: translator(messages.meow),
                        dataFormat: 'wav',
                        format: '',
                        rate: 22050,
                        sampleCount: 18688,
                        md5ext: '83c36d806dc92327b9e7049a565c6bff.wav'
                    }
                ],
                layerOrder: 2,
                visible: true,
                x: 110,
                y: -18,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            },
            {
                isStage: false,
                name: "LED4",
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {
                    "RwN+43:uECTPgFEPKJX!": {
                        opcode: "event_whenbroadcastreceived",
                        next: "eznh_6^-3l#3.%YG[N%a",
                        parent: null,
                        inputs: {},
                        fields: {BROADCAST_OPTION: ["LED4_OFF","?X@rIW{M*pm#Tl$]N5`s"]},
                        shadow: false,
                        topLevel: true,
                        x: 238,
                        y: 169
                    },
                    "AtqsAAx)e0$2f/`B]J_!": {
                        opcode: "event_whenbroadcastreceived",
                        next: "o:.(j!Ta4%:.c,Bx9Y==",
                        parent: null,
                        inputs: {},
                        fields: {BROADCAST_OPTION: ["LED4_ON","r|tlChnUw_;_;TX_6su,"]},
                        shadow: false,
                        topLevel: true,
                        x: 680,
                        y: 164
                    },
                    "eznh_6^-3l#3.%YG[N%a": {
                        opcode: "looks_switchcostumeto",
                        next: null,
                        parent: "RwN+43:uECTPgFEPKJX!",
                        inputs: {COSTUME: [1,"mI(x7i)%wJXjTA#oRy?V"]},
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    "mI(x7i)%wJXjTA#oRy?V": {
                        opcode: "looks_costume",
                        next: null,
                        parent: "eznh_6^-3l#3.%YG[N%a",
                        inputs: {},
                        fields: {COSTUME: ["LED_OFF",null]},
                        shadow: true,
                        topLevel: false
                    },
                    "o:.(j!Ta4%:.c,Bx9Y==": {
                        opcode: "looks_switchcostumeto",
                        next: null,
                        parent: "AtqsAAx)e0$2f/`B]J_!",
                        inputs: {COSTUME: [1,"YxT8^-:k.-cCoF?hM-nb"]},
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    "YxT8^-:k.-cCoF?hM-nb": {
                        opcode: "looks_costume",
                        next: null,
                        parent: "o:.(j!Ta4%:.c,Bx9Y==",
                        inputs: {},
                        fields: {COSTUME: ["LED_ON",null]},
                        shadow: true,
                        topLevel: false
                    }
                },
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'e6adc841ef4b8725f538a8ece9384216',
                        name: "LED_OFF",
                        bitmapResolution: 1,
                        md5ext: 'e6adc841ef4b8725f538a8ece9384216.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    },
                    {
                        assetId: 'd8d904d64fb707c6eb36575e5a0a7600',
                        name: "LED_ON",
                        bitmapResolution: 1,
                        md5ext: 'd8d904d64fb707c6eb36575e5a0a7600.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 123
                    }
                ],
                sounds: [
                    {
                        assetId: '83c36d806dc92327b9e7049a565c6bff',
                        name: translator(messages.meow),
                        dataFormat: 'wav',
                        format: '',
                        rate: 22050,
                        sampleCount: 18688,
                        md5ext: '83c36d806dc92327b9e7049a565c6bff.wav'
                    }
                ],
                layerOrder: 2,
                visible: true,
                x: 125,
                y: -18,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            },
            {
                isStage: false,
                name: "LED5",
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {
                    "]EBquZ+rjTVx@hh^^aUg": {
                        opcode: "looks_switchcostumeto",
                        next: null,
                        parent: ",5N92GJ=,T5vHu0$Or}b",
                        inputs: {COSTUME: [1,"9.Y[GFbs^KwGp%%Xu^rQ"]},
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    "9.Y[GFbs^KwGp%%Xu^rQ": {
                        opcode: "looks_costume",
                        next: null,
                        parent: "]EBquZ+rjTVx@hh^^aUg",
                        inputs: {},
                        fields: {COSTUME: ["LED_OFF",null]},
                        shadow: true,
                        topLevel: false
                    },
                    "gdS*G6Sg9+w_54sSPj_-": {
                        opcode: "looks_switchcostumeto",
                        next: null,
                        parent: "!v?lK?;YI(TK%Qio@Q:k",
                        inputs: {COSTUME: [1,"0C%05S{Oj[KrA+N-c[gW"]},
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    "0C%05S{Oj[KrA+N-c[gW": {
                        opcode: "looks_costume",
                        next: null,
                        parent: "gdS*G6Sg9+w_54sSPj_-",
                        inputs: {},
                        fields: {COSTUME: ["LED_ON",null]},
                        shadow: true,
                        topLevel: false
                    },
                    ",5N92GJ=,T5vHu0$Or}b": {
                        opcode: "event_whenbroadcastreceived",
                        next: "]EBquZ+rjTVx@hh^^aUg",
                        parent: null,
                        inputs: {},
                        fields: {BROADCAST_OPTION: ["LED5_OFF","-3i=x%d@1~aP?_SyTjhE"]},
                        shadow: false,
                        topLevel: true,
                        x: 168,
                        y: 160
                    },
                    "!v?lK?;YI(TK%Qio@Q:k": {
                        opcode: "event_whenbroadcastreceived",
                        next: "gdS*G6Sg9+w_54sSPj_-",
                        parent: null,
                        inputs: {},
                        fields: {BROADCAST_OPTION: ["LED5_ON","B}E@~Q=*9v)Q|QhBany|"]},
                        shadow: false,
                        topLevel: true,
                        x: 574,
                        y: 161
                    }
                },
                layerOrder: 2,
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'e6adc841ef4b8725f538a8ece9384216',
                        name: "LED_OFF",
                        bitmapResolution: 1,
                        md5ext: 'e6adc841ef4b8725f538a8ece9384216.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    },
                    {
                        assetId: 'd8d904d64fb707c6eb36575e5a0a7600',
                        name: "LED_ON",
                        bitmapResolution: 1,
                        md5ext: 'd8d904d64fb707c6eb36575e5a0a7600.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 123
                    }
                ],
                sounds: [
                    {
                        assetId: '83c36d806dc92327b9e7049a565c6bff',
                        name: translator(messages.meow),
                        dataFormat: 'wav',
                        format: '',
                        rate: 22050,
                        sampleCount: 18688,
                        md5ext: '83c36d806dc92327b9e7049a565c6bff.wav'
                    }
                ],
                layerOrder: 2,
                visible: true,
                x: 140,
                y: -18,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            },
            {
                isStage: false,
                name: "LED6",
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {
                    "$D`sSDlD/gf#$Wi9HCt`": {
                        opcode: "event_whenbroadcastreceived",
                        next: "`n;8HG/O^M#MC%bF]YlQ",
                        parent: null,
                        inputs: {},
                        fields: {BROADCAST_OPTION: ["LED6_OFF","t?QmJ9t,~*.sBC6m7W=`"]},
                        shadow: false,
                        topLevel: true,
                        x: 182,
                        y: 155
                    },
                    "tVUjAXA2Ia15JncvUYQC": {
                        opcode: "event_whenbroadcastreceived",
                        next: "}[++3]eZ+pGDx@z45.Qy",
                        parent: null,
                        inputs: {},
                        fields: {BROADCAST_OPTION: ["LED6_ON","-lki(J];7/dzM!0G.U3Y"]},
                        shadow: false,
                        topLevel: true,
                        x: 579,
                        y: 148
                    },
                    "`n;8HG/O^M#MC%bF]YlQ": {
                        opcode: "looks_switchcostumeto",
                        next: null,
                        parent: "$D`sSDlD/gf#$Wi9HCt`",
                        inputs: {COSTUME: [1,"m_m`91H02H0+ELE4-okx"]},
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    "m_m`91H02H0+ELE4-okx": {
                        opcode: "looks_costume",
                        next: null,
                        parent: "`n;8HG/O^M#MC%bF]YlQ",
                        inputs: {},
                        fields: {COSTUME: ["LED_OFF",null]},
                        shadow: true,
                        topLevel: false
                    },
                    "}[++3]eZ+pGDx@z45.Qy": {
                        opcode: "looks_switchcostumeto",
                        next: null,
                        parent: "tVUjAXA2Ia15JncvUYQC",
                        inputs: {COSTUME: [1,"W^nrfmQ}0O`=3ahLL{9:"]},
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    "W^nrfmQ}0O`=3ahLL{9:": {
                        opcode: "looks_costume",
                        next: null,
                        parent: "}[++3]eZ+pGDx@z45.Qy",
                        inputs: {},
                        fields: {COSTUME: ["LED_ON",null]},
                        shadow: true,
                        topLevel: false
                    }
                },
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'e6adc841ef4b8725f538a8ece9384216',
                        name: "LED_OFF",
                        bitmapResolution: 1,
                        md5ext: 'e6adc841ef4b8725f538a8ece9384216.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    },
                    {
                        assetId: 'd8d904d64fb707c6eb36575e5a0a7600',
                        name: "LED_ON",
                        bitmapResolution: 1,
                        md5ext: 'd8d904d64fb707c6eb36575e5a0a7600.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 123
                    }
                ],
                sounds: [
                    {
                        assetId: '83c36d806dc92327b9e7049a565c6bff',
                        name: translator(messages.meow),
                        dataFormat: 'wav',
                        format: '',
                        rate: 22050,
                        sampleCount: 18688,
                        md5ext: '83c36d806dc92327b9e7049a565c6bff.wav'
                    }
                ],
                layerOrder: 2,
                visible: true,
                x: 155,
                y: -18,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            },
            {
                isStage: false,
                name: "LED7",
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {
                    "uS0UkD?ziV#Y9hl0S{~9": {
                        opcode: "event_whenbroadcastreceived",
                        next: "_i,K37us.31gFf+6cmaN",
                        parent: null,
                        inputs: {},
                        fields: {BROADCAST_OPTION: ["LED7_ON","rD9XH8C74/x.YCqs+Cpl"]},
                        shadow: false,
                        topLevel: true,
                        x: 669,
                        y: 162
                    },
                    ")d?THH#p9VSkN0#K3e/u": {
                        opcode: "event_whenbroadcastreceived",
                        next: "J8F[T#fl:LfcWtN`yK)L",
                        parent: null,
                        inputs: {},
                        fields: {BROADCAST_OPTION: ["LED7_OFF","gE2-xX`w}*1?g(5r|NRi"]},
                        shadow: false,
                        topLevel: true,
                        x: 242,
                        y: 160
                    },
                    "J8F[T#fl:LfcWtN`yK)L": {
                        opcode: "looks_switchcostumeto",
                        next: null,
                        parent: ")d?THH#p9VSkN0#K3e/u",
                        inputs: {COSTUME: [1,"CHZ/m-H9BCc=2^zO]~yD"]},
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    "CHZ/m-H9BCc=2^zO]~yD": {
                        opcode: "looks_costume",
                        next: null,
                        parent: "J8F[T#fl:LfcWtN`yK)L",
                        inputs: {},
                        fields: {COSTUME: ["LED_OFF",null]},
                        shadow: true,
                        topLevel: false
                    },
                    "_i,K37us.31gFf+6cmaN": {
                        opcode: "looks_switchcostumeto",
                        next: null,
                        parent: "uS0UkD?ziV#Y9hl0S{~9",
                        inputs: {COSTUME: [1,"^.W#Di|NW,;]2A`%4aDG"]},
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    "^.W#Di|NW,;]2A`%4aDG": {
                        opcode: "looks_costume",
                        next: null,
                        parent: "_i,K37us.31gFf+6cmaN",
                        inputs: {},
                        fields: {COSTUME: ["LED_ON",null]},
                        shadow: true,
                        topLevel: false
                    }
                },
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'e6adc841ef4b8725f538a8ece9384216',
                        name: "LED_OFF",
                        bitmapResolution: 1,
                        md5ext: 'e6adc841ef4b8725f538a8ece9384216.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    },
                    {
                        assetId: 'd8d904d64fb707c6eb36575e5a0a7600',
                        name: "LED_ON",
                        bitmapResolution: 1,
                        md5ext: 'd8d904d64fb707c6eb36575e5a0a7600.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 123
                    }
                ],
                sounds: [
                    {
                        assetId: '83c36d806dc92327b9e7049a565c6bff',
                        name: translator(messages.meow),
                        dataFormat: 'wav',
                        format: '',
                        rate: 22050,
                        sampleCount: 18688,
                        md5ext: '83c36d806dc92327b9e7049a565c6bff.wav'
                    }
                ],
                layerOrder: 2,
                visible: true,
                x: 170,
                y: -18,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            },
            {
                isStage: false,
                name: "LED8",
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {
                    "]P[Wxz]Y{C51Pk{8/$@j": {
                        opcode: "event_whenbroadcastreceived",
                        next: "?4?j%2U]FBxc^Ub#Bn`L",
                        parent: null,
                        inputs: {},
                        fields: {BROADCAST_OPTION: ["LED8_OFF","AkLpZaK0[C]$Q?S`Wht?"]},
                        shadow: false,
                        topLevel: true,
                        x: 253,
                        y: 197
                    },
                    "?4?j%2U]FBxc^Ub#Bn`L": {
                        opcode: "looks_switchcostumeto",
                        next: null,
                        parent: "]P[Wxz]Y{C51Pk{8/$@j",
                        inputs: {COSTUME: [1,"A06I[UA,nd5PAO(aef,6"]},
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    "A06I[UA,nd5PAO(aef,6": {
                        opcode: "looks_costume",
                        next: null,
                        parent: "?4?j%2U]FBxc^Ub#Bn`L",
                        inputs: {},
                        fields: {COSTUME: ["LED_OFF",null]},
                        shadow: true,
                        topLevel: false
                    },
                    "NU;gwq}HTca(ApU}YH;;": {
                        opcode: "event_whenbroadcastreceived",
                        next: "!lnq^exZ+7OzUbGJc,Em",
                        parent: null,
                        inputs: {},
                        fields: {BROADCAST_OPTION: ["LED8_ON","ZIgJ1z}XX9J{Y?s:/SKI"]},
                        shadow: false,
                        topLevel: true,
                        x: 724,
                        y: 195
                    },
                    "!lnq^exZ+7OzUbGJc,Em": {
                        opcode: "looks_switchcostumeto",
                        next: null,
                        parent: "NU;gwq}HTca(ApU}YH;;",
                        inputs: {COSTUME: [1,"^.4rDYG?34-P@_$LjH-?"]},
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    "^.4rDYG?34-P@_$LjH-?": {
                        opcode: "looks_costume",
                        next: null,
                        parent: "!lnq^exZ+7OzUbGJc,Em",
                        inputs: {},
                        fields: {COSTUME: ["LED_ON",null]},
                        shadow: true,
                        topLevel: false
                    }
                },
                currentCostume: 0,
                costumes: [
                    {
                        assetId: 'e6adc841ef4b8725f538a8ece9384216',
                        name: "LED_OFF",
                        bitmapResolution: 1,
                        md5ext: 'e6adc841ef4b8725f538a8ece9384216.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    },
                    {
                        assetId: 'd8d904d64fb707c6eb36575e5a0a7600',
                        name: "LED_ON",
                        bitmapResolution: 1,
                        md5ext: 'd8d904d64fb707c6eb36575e5a0a7600.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 123
                    }
                ],
                sounds: [
                    {
                        assetId: '83c36d806dc92327b9e7049a565c6bff',
                        name: translator(messages.meow),
                        dataFormat: 'wav',
                        format: '',
                        rate: 22050,
                        sampleCount: 18688,
                        md5ext: '83c36d806dc92327b9e7049a565c6bff.wav'
                    }
                ],
                layerOrder: 2,
                visible: true,
                x: 185,
                y: -18,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            },
            {
                isStage: false,
                name: "SW1",
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {
                    "SySMoqrE)n0saO4kv^[a": {
                        opcode: "event_whenthisspriteclicked",
                        next: "K^3:-L9,qaxCN#~uncD|",
                        parent: null,
                        inputs: {},
                        fields: {},
                        shadow: false,
                        topLevel: true,
                        x: 227,
                        y: 155
                    }, 
                    "K^3:-L9,qaxCN#~uncD|": {
                        opcode: "looks_nextcostume",
                        next: "Jhoq_E`98P?VW|PfXTRD",
                        parent: "SySMoqrE)n0saO4kv^[a",
                        inputs: {},
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    "Jhoq_E`98P?VW|PfXTRD": {
                        opcode: "control_if_else",
                        next: null,
                        parent: "K^3:-L9,qaxCN#~uncD|",
                        inputs: {
                            CONDITION: [2,"Fh,rrAGS1g[7!!%*vqG4"],
                            SUBSTACK: [2,"16N$d[B1)~x{fzr=t[Q,"],
                            SUBSTACK2: [2,"7e)AOCD1[C$4Agmn,b@c"]
                        },
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    "Fh,rrAGS1g[7!!%*vqG4": {
                        opcode: "operator_equals",
                        next: null,
                        parent: "Jhoq_E`98P?VW|PfXTRD",
                        inputs: {
                            OPERAND1: [3,",PNlAmH(rKxsn^p0Y3u?",[10,""]],
                            OPERAND2: [1,[10,"SW_OFF"]]
                        },
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    ",PNlAmH(rKxsn^p0Y3u?": {
                        opcode: "looks_costumenumbername",
                        next: null,
                        parent: "Fh,rrAGS1g[7!!%*vqG4",
                        inputs: {},
                        fields: {NUMBER_NAME: ["name",null]},
                        shadow: false,
                        topLevel: false
                    },
                    "16N$d[B1)~x{fzr=t[Q,": {
                        opcode: "data_setvariableto",
                        next: null,
                        parent: "Jhoq_E`98P?VW|PfXTRD",
                        inputs: {VALUE: [1,[10,"0"]]},
                        fields: {VARIABLE: ["SW1","@nQP*7F(2o3MmbwmSca["]},
                        shadow: false,
                        topLevel: false
                    },
                    "7e)AOCD1[C$4Agmn,b@c": {
                        opcode: "data_setvariableto",
                        next: null,
                        parent: "Jhoq_E`98P?VW|PfXTRD",
                        inputs: {VALUE: [1,[10,"1"]]},
                        fields: {VARIABLE: ["SW1","@nQP*7F(2o3MmbwmSca["]},
                        shadow: false,
                        topLevel: false
                    }
                },
                currentCostume: 0,
                costumes: [
                    {
                        assetId: '20cc7bbeeb94b5c4f7825f9c14cfbd5c',
                        name: "SW_OFF",
                        bitmapResolution: 1,
                        md5ext: '20cc7bbeeb94b5c4f7825f9c14cfbd5c.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    },
                    {
                        assetId: '7a34d6b96e34e2fae9f0632b7d1e0d89',
                        name: "SW_ON",
                        bitmapResolution: 1,
                        md5ext: '7a34d6b96e34e2fae9f0632b7d1e0d89.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    }
                ],
                sounds: [
                    {
                        assetId: '83c36d806dc92327b9e7049a565c6bff',
                        name: translator(messages.meow),
                        dataFormat: 'wav',
                        format: '',
                        rate: 22050,
                        sampleCount: 18688,
                        md5ext: '83c36d806dc92327b9e7049a565c6bff.wav'
                    }
                ],
                layerOrder: 2,
                visible: true,
                x: 40,
                y: -220,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            },
            {
                isStage: false,
                name: "SW2",
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {
                    "SySMoqrE)n0saO4kv^[a": {
                        opcode: "event_whenthisspriteclicked",
                        next: "K^3:-L9,qaxCN#~uncD|",
                        parent: null,
                        inputs: {},
                        fields: {},
                        shadow: false,
                        topLevel: true,
                        x: 227,
                        y: 155
                    }, 
                    "K^3:-L9,qaxCN#~uncD|": {
                        opcode: "looks_nextcostume",
                        next: "Jhoq_E`98P?VW|PfXTRD",
                        parent: "SySMoqrE)n0saO4kv^[a",
                        inputs: {},
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    "Jhoq_E`98P?VW|PfXTRD": {
                        opcode: "control_if_else",
                        next: null,
                        parent: "K^3:-L9,qaxCN#~uncD|",
                        inputs: {
                            CONDITION: [2,"Fh,rrAGS1g[7!!%*vqG4"],
                            SUBSTACK: [2,"16N$d[B1)~x{fzr=t[Q,"],
                            SUBSTACK2: [2,"7e)AOCD1[C$4Agmn,b@c"]
                        },
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    "Fh,rrAGS1g[7!!%*vqG4": {
                        opcode: "operator_equals",
                        next: null,
                        parent: "Jhoq_E`98P?VW|PfXTRD",
                        inputs: {
                            OPERAND1: [3,",PNlAmH(rKxsn^p0Y3u?",[10,""]],
                            OPERAND2: [1,[10,"SW_OFF"]]
                        },
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    ",PNlAmH(rKxsn^p0Y3u?": {
                        opcode: "looks_costumenumbername",
                        next: null,
                        parent: "Fh,rrAGS1g[7!!%*vqG4",
                        inputs: {},
                        fields: {NUMBER_NAME: ["name",null]},
                        shadow: false,
                        topLevel: false
                    },
                    "16N$d[B1)~x{fzr=t[Q,": {
                        opcode: "data_setvariableto",
                        next: null,
                        parent: "Jhoq_E`98P?VW|PfXTRD",
                        inputs: {VALUE: [1,[10,"0"]]},
                        fields: {VARIABLE: ["SW2","7b,Kl9om_IBH!zsGN^@a"]},
                        shadow: false,
                        topLevel: false
                    },
                    "7e)AOCD1[C$4Agmn,b@c": {
                        opcode: "data_setvariableto",
                        next: null,
                        parent: "Jhoq_E`98P?VW|PfXTRD",
                        inputs: {VALUE: [1,[10,"1"]]},
                        fields: {VARIABLE: ["SW2","7b,Kl9om_IBH!zsGN^@a"]},
                        shadow: false,
                        topLevel: false
                    }
                },
                currentCostume: 0,
                costumes: [
                    {
                        assetId: '20cc7bbeeb94b5c4f7825f9c14cfbd5c',
                        name: "SW_OFF",
                        bitmapResolution: 1,
                        md5ext: '20cc7bbeeb94b5c4f7825f9c14cfbd5c.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    },
                    {
                        assetId: '7a34d6b96e34e2fae9f0632b7d1e0d89',
                        name: "SW_ON",
                        bitmapResolution: 1,
                        md5ext: '7a34d6b96e34e2fae9f0632b7d1e0d89.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    }
                ],
                sounds: [
                    {
                        assetId: '83c36d806dc92327b9e7049a565c6bff',
                        name: translator(messages.meow),
                        dataFormat: 'wav',
                        format: '',
                        rate: 22050,
                        sampleCount: 18688,
                        md5ext: '83c36d806dc92327b9e7049a565c6bff.wav'
                    }
                ],
                layerOrder: 2,
                visible: true,
                x: 57,
                y: -220,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            },
            {
                isStage: false,
                name: "SW3",
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {
                    "SySMoqrE)n0saO4kv^[a": {
                        opcode: "event_whenthisspriteclicked",
                        next: "K^3:-L9,qaxCN#~uncD|",
                        parent: null,
                        inputs: {},
                        fields: {},
                        shadow: false,
                        topLevel: true,
                        x: 227,
                        y: 155
                    }, 
                    "K^3:-L9,qaxCN#~uncD|": {
                        opcode: "looks_nextcostume",
                        next: "Jhoq_E`98P?VW|PfXTRD",
                        parent: "SySMoqrE)n0saO4kv^[a",
                        inputs: {},
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    "Jhoq_E`98P?VW|PfXTRD": {
                        opcode: "control_if_else",
                        next: null,
                        parent: "K^3:-L9,qaxCN#~uncD|",
                        inputs: {
                            CONDITION: [2,"Fh,rrAGS1g[7!!%*vqG4"],
                            SUBSTACK: [2,"16N$d[B1)~x{fzr=t[Q,"],
                            SUBSTACK2: [2,"7e)AOCD1[C$4Agmn,b@c"]
                        },
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    "Fh,rrAGS1g[7!!%*vqG4": {
                        opcode: "operator_equals",
                        next: null,
                        parent: "Jhoq_E`98P?VW|PfXTRD",
                        inputs: {
                            OPERAND1: [3,",PNlAmH(rKxsn^p0Y3u?",[10,""]],
                            OPERAND2: [1,[10,"SW_OFF"]]
                        },
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    ",PNlAmH(rKxsn^p0Y3u?": {
                        opcode: "looks_costumenumbername",
                        next: null,
                        parent: "Fh,rrAGS1g[7!!%*vqG4",
                        inputs: {},
                        fields: {NUMBER_NAME: ["name",null]},
                        shadow: false,
                        topLevel: false
                    },
                    "16N$d[B1)~x{fzr=t[Q,": {
                        opcode: "data_setvariableto",
                        next: null,
                        parent: "Jhoq_E`98P?VW|PfXTRD",
                        inputs: {VALUE: [1,[10,"0"]]},
                        fields: {VARIABLE: ["SW3","H~`ef]DRRjb+Y)0Nas;z"]},
                        shadow: false,
                        topLevel: false
                    },
                    "7e)AOCD1[C$4Agmn,b@c": {
                        opcode: "data_setvariableto",
                        next: null,
                        parent: "Jhoq_E`98P?VW|PfXTRD",
                        inputs: {VALUE: [1,[10,"1"]]},
                        fields: {VARIABLE: ["SW3","H~`ef]DRRjb+Y)0Nas;z"]},
                        shadow: false,
                        topLevel: false
                    }
                },
                currentCostume: 0,
                costumes: [
                    {
                        assetId: '20cc7bbeeb94b5c4f7825f9c14cfbd5c',
                        name: "SW_OFF",
                        bitmapResolution: 1,
                        md5ext: '20cc7bbeeb94b5c4f7825f9c14cfbd5c.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    },
                    {
                        assetId: '7a34d6b96e34e2fae9f0632b7d1e0d89',
                        name: "SW_ON",
                        bitmapResolution: 1,
                        md5ext: '7a34d6b96e34e2fae9f0632b7d1e0d89.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    }
                ],
                sounds: [
                    {
                        assetId: '83c36d806dc92327b9e7049a565c6bff',
                        name: translator(messages.meow),
                        dataFormat: 'wav',
                        format: '',
                        rate: 22050,
                        sampleCount: 18688,
                        md5ext: '83c36d806dc92327b9e7049a565c6bff.wav'
                    }
                ],
                layerOrder: 2,
                visible: true,
                x: 74,
                y: -220,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            },
            {
                isStage: false,
                name: "SW4",
                variables: {},
                lists: {},
                broadcasts: {},
                blocks: {
                    "SySMoqrE)n0saO4kv^[a": {
                        opcode: "event_whenthisspriteclicked",
                        next: "K^3:-L9,qaxCN#~uncD|",
                        parent: null,
                        inputs: {},
                        fields: {},
                        shadow: false,
                        topLevel: true,
                        x: 227,
                        y: 155
                    }, 
                    "K^3:-L9,qaxCN#~uncD|": {
                        opcode: "looks_nextcostume",
                        next: "Jhoq_E`98P?VW|PfXTRD",
                        parent: "SySMoqrE)n0saO4kv^[a",
                        inputs: {},
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    "Jhoq_E`98P?VW|PfXTRD": {
                        opcode: "control_if_else",
                        next: null,
                        parent: "K^3:-L9,qaxCN#~uncD|",
                        inputs: {
                            CONDITION: [2,"Fh,rrAGS1g[7!!%*vqG4"],
                            SUBSTACK: [2,"16N$d[B1)~x{fzr=t[Q,"],
                            SUBSTACK2: [2,"7e)AOCD1[C$4Agmn,b@c"]
                        },
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    "Fh,rrAGS1g[7!!%*vqG4": {
                        opcode: "operator_equals",
                        next: null,
                        parent: "Jhoq_E`98P?VW|PfXTRD",
                        inputs: {
                            OPERAND1: [3,",PNlAmH(rKxsn^p0Y3u?",[10,""]],
                            OPERAND2: [1,[10,"SW_OFF"]]
                        },
                        fields: {},
                        shadow: false,
                        topLevel: false
                    },
                    ",PNlAmH(rKxsn^p0Y3u?": {
                        opcode: "looks_costumenumbername",
                        next: null,
                        parent: "Fh,rrAGS1g[7!!%*vqG4",
                        inputs: {},
                        fields: {NUMBER_NAME: ["name",null]},
                        shadow: false,
                        topLevel: false
                    },
                    "16N$d[B1)~x{fzr=t[Q,": {
                        opcode: "data_setvariableto",
                        next: null,
                        parent: "Jhoq_E`98P?VW|PfXTRD",
                        inputs: {VALUE: [1,[10,"0"]]},
                        fields: {VARIABLE: ["SW4","Py%2VX0mW0*Q%Hg2O(XM"]},
                        shadow: false,
                        topLevel: false
                    },
                    "7e)AOCD1[C$4Agmn,b@c": {
                        opcode: "data_setvariableto",
                        next: null,
                        parent: "Jhoq_E`98P?VW|PfXTRD",
                        inputs: {VALUE: [1,[10,"1"]]},
                        fields: {VARIABLE: ["SW4","Py%2VX0mW0*Q%Hg2O(XM"]},
                        shadow: false,
                        topLevel: false
                    }
                },
                currentCostume: 0,
                costumes: [
                    {
                        assetId: '20cc7bbeeb94b5c4f7825f9c14cfbd5c',
                        name: "SW_OFF",
                        bitmapResolution: 1,
                        md5ext: '20cc7bbeeb94b5c4f7825f9c14cfbd5c.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    },
                    {
                        assetId: '7a34d6b96e34e2fae9f0632b7d1e0d89',
                        name: "SW_ON",
                        bitmapResolution: 1,
                        md5ext: '7a34d6b96e34e2fae9f0632b7d1e0d89.svg',
                        dataFormat: 'svg',
                        rotationCenterX: 120,
                        rotationCenterY: 120
                    }
                ],
                sounds: [
                    {
                        assetId: '83c36d806dc92327b9e7049a565c6bff',
                        name: translator(messages.meow),
                        dataFormat: 'wav',
                        format: '',
                        rate: 22050,
                        sampleCount: 18688,
                        md5ext: '83c36d806dc92327b9e7049a565c6bff.wav'
                    }
                ],
                layerOrder: 2,
                visible: true,
                x: 91,
                y: -220,
                size: 100,
                direction: 90,
                draggable: false,
                rotationStyle: 'all around'
            },*/
        ],
        monitors: [
            {
                id: "@nQP*7F(2o3MmbwmSca[",
                mode: "default",
                opcode: "data_variable",
                params: {VARIABLE: "SW1"},
                spriteName: null,
                value: "1",
                width: 0,
                height: 0,
                x: 5,
                y: 5,
                visible: true,
                sliderMin: 0,
                sliderMax: 100,
                isDiscrete: true
            },
            {
                id: "7b,Kl9om_IBH!zsGN^@a",
                mode: "default",
                opcode: "data_variable",
                params: {VARIABLE: "SW2"},
                spriteName: null,
                value: "0",
                width: 0,
                height: 0,
                x: 5,
                y: 32,
                visible: true,
                sliderMin: 0,
                sliderMax: 100,
                isDiscrete: true
            },
            {
                id: "H~`ef]DRRjb+Y)0Nas;z",
                mode: "default",
                opcode: "data_variable",
                params: {VARIABLE: "SW3"},
                spriteName: null,
                value: "0",
                width: 0,
                height: 0,
                x: 5,
                y: 59,
                visible: true,
                sliderMin: 0,
                sliderMax: 100,
                isDiscrete: true
            },
            {
                id: "Py%2VX0mW0*Q%Hg2O(XM",
                mode: "default",
                opcode: "data_variable",
                params: {VARIABLE: "SW4"},
                spriteName: null,
                value: "0",
                width: 0,
                height: 0,
                x: 5,
                y: 86,
                visible: true,
                sliderMin: 0,
                sliderMax: 100,
                isDiscrete: true
            },
            {
                id: "vS!@dyzWYawFBu1E|J2a_costumenumbername_name",
                mode: "default",
                opcode: "looks_costumenumbername",
                params: {NUMBER_NAME: "name"},
                spriteName: "SW1",
                value: "SW_ON",
                width: 0,
                height: 0,
                x: 5,
                y: 113,
                visible: false,
                sliderMin: 0,
                sliderMax: 100,
                isDiscrete: true
            },
            {
                id: "`jEk@4|i[#Fk?(8x)AV.-my variable",
                mode: "default",
                opcode: "data_variable",
                params: {VARIABLE: "作った変数"},
                spriteName: null,
                value: 0,
                width: 0,
                height: 0,
                x: 5,
                y: 113,
                visible: false,
                sliderMin: 0,
                sliderMax: 100,
                isDiscrete: true
            }
        ],
        meta: {
            semver: '3.0.0',
            vm: '0.1.0',
            agent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36' // eslint-disable-line max-len
        }
    });
};


export default projectData;
