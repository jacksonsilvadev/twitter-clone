'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TweetSchema extends Schema {
  up() {
    this.create('tweets', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable()
      table.text('tweet').nullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('tweets')
  }
}

module.exports = TweetSchema
