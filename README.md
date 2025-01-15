# Template for a TypeORM Test environment
- General setup:
1. Clone TypeORM repository
2. Run `npm install` on TypeORM repository
3. Run `npm run package` on TypeORM repository (Required for `npm link` method)
4. Run `npm run pack` on TypeORM repository (Required for `.tgz` method)
5. Run `npm run build` on TypeORM repository 

# Linking Built TypeORM to your test project

## Using link
1. Run `npm link` on `/path/to/typeorm/build/package`
2. Run `npm link typeorm` on this project

## Using npm install
1. `npm install --no-save /path/to/typeorm/build/package`

## Using .tgz file
1. Copy the `typeorm-X.Y.Z.tgz` file to this project.
2. Make `typeorm` reference it. Like so:
  ```js
  "dependencies": {
    "typeorm": "file:/path/to/typeorm-X.Y.Z.tgz"
  }
  ```
3. Run `npm install`.
