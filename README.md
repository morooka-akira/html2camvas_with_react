# co-in-web

co-inのフロントエンドアプリケーション

## 主な技術スタック

- nextjs
- graphql

## setup

### 事前準備

- `docker(for mac)` のインストール
- (Dockerを使わない場合)`node`, `yarn` のインストール
  - node: v10.16.3
  - yarn: 1.17.3

### 環境変数の設定

```bash
cp .env.sample .env
```

- 値の変更が必要な場合は適宜変更する

### 開発環境の起動

- `docker-compose up -d`
- [http://localhost:3001](http://localhost:3001) で接続できればOK

### API環境とのローカルでのつなぎ込み

- 1.[APIのリポジトリ(co-in-api)](https://github.com/morooka-akira/co-in-api) をローカルにクローンする
  - ローカルのディレクトリ名(co-in-api)は、変更しないほうが楽
- 2.co-in-api を `docker-compose up -d` で立ち上げる
  - databaseの設定などは、apiのリポジトリを見て設定しておくこと
  - ローカルのリポジトリ名を変更している場合は `docker-compose -p co-in-api up -d` で立ち上げる
- 3.co-in-web を `docker-compose up -d` で立ち上げる
- 4.`co-in-api_app_1` をホストとしてhttpで接続できていれば成功

## パッケージの追加

- DockerImageでパッケージを追加

```bash
docker-compose run --rm app yarn add (-D) <パッケージ>
```

- 必要であればホスト側でもインストールする
  - node_moduleは同期していないのでIDEなどを使っている場合は必要

```bash
yarn
```

## VS Codeを使う場合の準備

- [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)をインストール
- 設定: `.vscode/settings.json` 参照

## git prehook

- husky, lint-staged を使用
- `.huskeyrc`, `lint-staged.config.js` 参照

## packages

### typescript

```bash
yarn add -D typescript @types/react @types/node
```

- config: tsconfig.json

### lint

```bash
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

- config: `.eslintrc.js`

### 自動lint

```bash
yarn add -D husky lint-staged
```

- config: `.huskeyrc, lint-staged.config.js`

### dotenv

```bash
yarn add dotenv-webpack
```

- config: `.env`

### graphql

```bash
yarn add @apollo/react-hooks @apollo/react-ssr apollo-cache-inmemory apollo-client apollo-link-http graphql graphql-tag isomorphic-unfetch
```
