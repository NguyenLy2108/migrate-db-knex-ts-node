import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.transaction(async trx => {
    await trx.schema
      .withSchema('cssystem')
      .createTable('user', builder => {
        builder.increments('id', { primaryKey: true });
        builder.string('email').notNullable().unique();
        builder.string('password').notNullable();
        builder.string('name').notNullable();
        builder.integer('role_id');
        builder.string('gender');
        builder.string('phone_number');
        builder.string('avatar_url');
        builder.timestamp('birth_day');
        builder.jsonb('social_media');
        builder.boolean('is_active').defaultTo(true);
        builder.integer('created_by');
        builder
          .timestamp('created_at')
          .defaultTo(knex.fn.now())
          .notNullable();  
        builder
          .timestamp('updated_at')
          .defaultTo(knex.fn.now())
          .notNullable();      
      });
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .withSchema('reviewtydev')
    .dropTableIfExists('user_to_favourite_brand');
}
