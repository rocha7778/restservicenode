'use strict'

const Sequelize = require('sequelize')
const setupDatabae = require('../lib/db')


module.exports = function setupAgentModel(config) {

    const sequelize = setupDatabae(config)


    reteurn sequelize.define('agent', {


    })

}