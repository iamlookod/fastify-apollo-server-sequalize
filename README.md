
## Fastify Apollo-Server Sequalize Postgres

## Env
Make file .env in root project directory.
```
NODE_ENV=
PORT=
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# run db
$ docker compose up db
```

## Database

```bash
# run migration
$ npm run db:migration

# run revert migration
$ npm run db:migration:undo

# create migration
$ npm run db:migration:generate [name]

# run seed
$ npm run db:seed:all

# run revert seed
$ npm run db:seed:undo

# create seed
$ npm run db:seed:generate [name]
```
