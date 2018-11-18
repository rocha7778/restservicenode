'use strict'
const test = require('ava')
const proxyquiere = require('proxyquire')
const sinon = require('sinon')

let db = null
let config = {
    logging: function() {}
}

let MetricStub = {
    belongsTo: sinon.spy()
}

let AgentModelStub = null
let sandbox = null

test.beforeEach(async() => {
    sandbox = sinon.createSandbox()

    AgentModelStub = {
        hasMany: sinon.spy()
    }
    const setupDatabase = proxyquiere('../', {

        './models/agent': () => AgentModelStub,
        './models/metric': () => MetricStub

    })
    db = await setupDatabase(config)
})

test.afterEach(() => {
    sandbox && sandbox.restore()
})

// metodo para hacer un test
test('Agent', t => {
    t.truthy(db.Agent, 'Agent service should exit!')
})

test.serial('SetupBD', t => {
    t.true(AgentModelStub.hasMany.called, 'Fue ejecutada')
    t.true(MetricStub.belongsTo.called, 'Fue llamado')
})