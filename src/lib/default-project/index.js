import {TextEncoder} from 'text-encoding';
import projectData from './project-data';

/* eslint-disable import/no-unresolved */
import popWav from '!arraybuffer-loader!./83a9787d4cb6f3b7632b4ddfebf74367.wav';
import meowWav from '!arraybuffer-loader!./83c36d806dc92327b9e7049a565c6bff.wav';
import c3 from '!arraybuffer-loader!./5275236b4599e3c681a540f93624ca85.wav'
import d3 from '!arraybuffer-loader!./1346d9b5429843b7e625a439762c73e8.wav'
import e3 from '!arraybuffer-loader!./84ac2921aee40d4f66859987ec189fad.wav'
import f3 from '!arraybuffer-loader!./0268ee3215360e16faf78cbb9564f218.wav'
import g3 from '!arraybuffer-loader!./055767b7abcea2ffcb4f7f87d5cf2343.wav'
import a3 from '!arraybuffer-loader!./ceff2607a32d9f817bd86727aea50a03.wav'
import b3 from '!arraybuffer-loader!./0835cba18ec5b79eb465ede19c4938d7.wav'
import c4 from '!arraybuffer-loader!./ff63db40cf15001444bd34db67b8c02a.wav'
import backdrop from '!raw-loader!./cd21514d0531fdffb22204e0ec5ed84a.svg';
import base_board from '!raw-loader!./3eb0cf9328f7ae8f65aba0892806a3ba.svg';
import led_on from '!raw-loader!./e6adc841ef4b8725f538a8ece9384216.svg';
import led_off from '!raw-loader!./d8d904d64fb707c6eb36575e5a0a7600.svg';
import switch_off from '!raw-loader!./20cc7bbeeb94b5c4f7825f9c14cfbd5c.svg';
import switch_on from '!raw-loader!./7a34d6b96e34e2fae9f0632b7d1e0d89.svg';
/* eslint-enable import/no-unresolved */

const encoder = new TextEncoder();
const defaultProject = translator => {
    const projectJson = projectData(translator);
    return [{
        id: 0,
        assetType: 'Project',
        dataFormat: 'JSON',
        data: JSON.stringify(projectJson)
    }, {
        id: '83a9787d4cb6f3b7632b4ddfebf74367',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(popWav)
    }, {
        id: '83c36d806dc92327b9e7049a565c6bff',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(meowWav)
    }, {
        id: '5275236b4599e3c681a540f93624ca85',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(c3)
    }, {
        id: '1346d9b5429843b7e625a439762c73e8',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(d3)
    }, {
        id: '84ac2921aee40d4f66859987ec189fad',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(e3)
    }, {
        id: '0268ee3215360e16faf78cbb9564f218',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(f3)
    }, {
        id: '055767b7abcea2ffcb4f7f87d5cf2343',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(g3)
    }, {
        id: 'ceff2607a32d9f817bd86727aea50a03',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(a3)
    }, {
        id: '0835cba18ec5b79eb465ede19c4938d7',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(b3)
    }, {
        id: 'ff63db40cf15001444bd34db67b8c02a',
        assetType: 'Sound',
        dataFormat: 'WAV',
        data: new Uint8Array(c4)
    },{
        id: 'cd21514d0531fdffb22204e0ec5ed84a',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(backdrop)
    }, {
        id: '3eb0cf9328f7ae8f65aba0892806a3ba',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(base_board)
    }, {
        id: 'e6adc841ef4b8725f538a8ece9384216',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(led_on)
    }, {
        id: 'd8d904d64fb707c6eb36575e5a0a7600',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(led_off)
    }, {
        id: '7a34d6b96e34e2fae9f0632b7d1e0d89',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(switch_on)
    },{
        id: '20cc7bbeeb94b5c4f7825f9c14cfbd5c',
        assetType: 'ImageVector',
        dataFormat: 'SVG',
        data: encoder.encode(switch_off)
    }];
};

export default defaultProject;
