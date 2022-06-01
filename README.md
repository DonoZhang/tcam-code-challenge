# TCAM Monorepo

This is a monorepo powered by "yarn workspace". A collection of independently publishable packages are hosted in this single source repository. Monorepos are [great!](https://github.com/babel/babel/blob/master/doc/design/monorepo.md)

## Demo app

[Wallet](http://tcam-wallet.s3-website-ap-southeast-2.amazonaws.com/)

## Overview

Folder structure:

```
|packages
|-|apps
|-|-|app-1
|-|-|app-2
|-|-|...
|-|components
|-|-|component-1
|-|-|component-1
|-|-|...
```

The "apps" folder contains different Applications. Each application represents a different project. In this example, it contains the "wallet" application.

The "components" folder contains all reusable UI component assets that belong to TCAM. These components are designed to be used across different projects. Each component is an independent package which can be published to a private npm registry, for example, AWS code artifacts. In this example, I tested packages publishment in a local npm registry with [verdaccio](https://github.com/verdaccio/verdaccio).

## Dev setup

1. install npm & node - https://nodejs.org/en/
2. install yarn globally - https://classic.yarnpkg.com/en/docs/install/#mac-stable
3. to bootstrap the yarn workspace

```bash
yarn install
```

#### Note: You should run "yarn install" each time after you create a new package to add the package into yarn workspace.

4. to run command for a specific package

```bash
yarn workspace [package] [command]
```

For example, build tcam-theme:

```bash
yarn workspace tcam-theme build
```

install tcam-theme into wallet:

```bash
yarn workspace wallet add tcam-theme
```

## Running individual app. For example, wallet

```bash
yarn workspace wallet start
```

# TODO

- add ESLint
- create a template generator so you can run a command to create a new package
