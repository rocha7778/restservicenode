'use strict'


const debug = require('debug')('platziverse:db:setup')
const db = require('./')

async function setup() {
    const config = {
        database: process.env.DB_NAME || 'platziverse',
        username: process.env.DB_USER || 'platzi',
        password: process.env.DB_PASS || 'platzi',
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
        setup: true,
        operatorsAliases: false,
        logging: s => debug(s)
    }



    await db(config).catch(fatalError)
    console.log('Succes!!')
    process.exit(0)


}

function fatalError(error) {
    console.log(error)
    console.log(error.stact)
    process.exit(1)
}

setup()