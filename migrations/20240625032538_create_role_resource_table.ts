import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.transaction(async trx => {
    await trx.schema
      .withSchema('cssystem')
      .createTable('role_resource', builder => {
        builder.increments('id', { primaryKey: true });
        builder.integer('role_id').notNullable();
        builder.integer('resource_id').notNullable();
        builder.boolean('status').defaultTo(false)
        builder.integer('created_by');
        builder
          .timestamp('created_at')
          .defaultTo(knex.fn.now())
          .notNullable();    
        builder
          .timestamp('updated_at');    
        builder.unique(['role_id', 'resource_id'])       
      });
      
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .withSchema('cssystem')
    .dropTableIfExists('role_resource');
}
