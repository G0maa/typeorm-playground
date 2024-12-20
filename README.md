# Template for a TypeORM Test environment
- General setup:
1. Clone TypeORM repository
2. Run `npm install` on TypeORM repository
3. Run `npm run build` on TypeORM repository
4. Run `npm run pack` on TypeORM repository

## Using npm install
1. `npm install --no-save /path/to/typeorm/build/package`

## Using link
1. Run `npm link` on `/path/to/typeorm/build/package`
2. Run `npm link typeorm` on this project

## Using .tgz file
1. Copy the `typeorm-X.Y.Z.tgz` file to this project.
2. Make `typeorm` reference it. Like so:
  ```js
  "dependencies": {
    "typeorm": "file:/path/to/typeorm-X.Y.Z.tgz"
  }
  ```
3. Run `npm install`.
