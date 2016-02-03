/**
 * 中间人代理
 */

'use strict'

const Manipulator = require('./Manipulator');
const ClientSpy = require('./ClientSpy');
const ServerSpy = require('./ServerSpy');
const debug = require('debug')('mitm-provider');

module.exports = class MitmProxy {
    constructor(options) {
        debug('MitmProxy start');
        this.manipulator = new Manipulator();
        this.clientSpy = new ClientSpy();
        this.serverSpy = new ServerSpy();
    }
}
