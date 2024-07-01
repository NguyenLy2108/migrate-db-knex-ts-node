import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.transaction(async trx => {
    await trx.schema
      .withSchema('cssystem')
      .createTable('resource', builder => {
        builder.increments('id', { primaryKey: true });
        builder.string('name').notNullable().unique();  
        builder.integer('created_by');
        builder
          .timestamp('created_at')
          .defaultTo(knex.fn.now())
          .notNullable();    
        builder
          .timestamp('updated_at');                
      });
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .withSchema('cssystem')
    .dropTableIfExists('resource');
}
