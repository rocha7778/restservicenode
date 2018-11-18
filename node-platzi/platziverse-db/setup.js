'use strict'

const debug = require('debug')('platziverse:db:setup')
const db = require('./')
const inquirer = require('inquirer')
const chalk = require('chalk')

const pront = inquirer.createPromptModule()

async function setup () {
  const answer = await pront([

    {
      type: 'confirm',
      name: 'setup',
      message: 'this will destroy database, are you suere?'
    }
  ])

  if (!answer.setup) {
    return console.log('Nothing happend :)')
  }
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

function fatalError (error) {
  console.log(`${chalk.red('[fatal error]')} ${error.message}`)
  console.log(error.stact)
  process.exit(1)
}

setup()
