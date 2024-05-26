## Description

Backend for the [e-commerce-app](https://github.com/Diegovalen47/e-commerce-app) client project. This project is a REST API built with NestJS and prisma. It also comes with a docker-compose file with a postgres and pgadmin to manage the storage locally.

## Installation

```bash
$ pnpm install
$ npx prisma init
$ cd db
$ docker-compose up -d
$ cd ..
$ npx prisma migrate dev --name init

```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```
