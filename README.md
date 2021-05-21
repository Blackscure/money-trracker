# money-tracker

This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## Install dependencies

By default, dependencies were installed when this application was generated.
Whenever dependencies in `package.json` are changed, run the following command:

```sh
npm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```

## Run the application

```sh
npm start
```

You can also run `node .` to skip the build step.

Open http://127.0.0.1:3000 in your browser.

## Rebuild the project

To incrementally build the project:

```sh
npm run build
```

To force a full build by cleaning up cached artifacts:

```sh
npm run rebuild
```

## Fix code style and formatting issues

```sh
npm run lint
```

To automatically fix such issues:

```sh
npm run lint:fix
```

## Other useful commands

- `npm run migrate`: Migrate database schemas for models
- `npm run openapi-spec`: Generate OpenAPI spec into a file
- `npm run docker:build`: Build a Docker image for this application
- `npm run docker:run`: Run this application inside a Docker container

## Tests

```sh
npm test
```

## What's next

Please check out [LoopBack 4 documentation](https://loopback.io/doc/en/lb4/) to
understand how you can continue to add features to this application.

## Database schema
CREATEBASE moneytracker;

CREATE TABLE user(
   Id SERIAL PRIMARY KEY,
   username           CHAR(50) NOT NULL,
   password           CHAR(50) NOT,
);

CREATE TABLE wallets(
   walletId SERIAL PRIMARY KEY,
   walletName           VARCHAR(150) NOT NULL,
   walletTotalInitialAmount INT   NOT NULL,
   walletDescription           VARCHAR(150) NOT NULL,
   overallWalletsBalance      INT NOT NULL,
   individualWalletBalance    INT NOT NULL,
);

CREATE TABLE WalletsTransaction(
   transactionId  SERIAL PRIMARY KEY,
   transaction Title           VARCHAR(150) NOT NULL,
   transactionDescription   VARCHAR(150) NOT NULL,
   walletAdditionalIncome           INT NOT NULL,
   TransactionAmount      INT NOT NULL,
   walletId    SERIAL PRIMARY KEY,
);


[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)
