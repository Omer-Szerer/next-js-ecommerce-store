import type { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
  CREATE TABLE products (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name varchar(40) NOT NULL,
    price numeric(10,2) NOT NULL,
    description varchar(500),
    isvegan boolean,
    alcoholfree boolean
  )
  `;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE products`;
}
