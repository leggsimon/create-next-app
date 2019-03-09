# create-next-app

This is an initialiser for npm (like [`create-react-app`](https://github.com/facebook/create-react-app)) which scaffolds a small next.js project the way I prefer it.

## Usage

Where you would substitute `<directory-name>` for the new directory you want the project to be created in.

_This is required, if you don’t specify one, don’t worry it won’t use your current working directory by default._

```sh
npm init @leggsimon/next-app <directory-name>
```

or

```sh
npx @leggsimon/create-next-app <directory-name>
```

or

```sh
yarn create @leggsimon/next-app <directory-name>
```

## What does it do?

Initialises a next.js application in the specified directory.

## Local Development

```
git clone git@github.com:leggsimon/create-next-app.git
cd create-next-app
npm install
```

### How to publish

_(This is more for me, so I don’t forget)_

This uses the [`np`](https://www.npmjs.com/package/np) package to deploy. On the master branch locally run `np` and follow the instructions.

## Why?

I love create-next-app but the dafult provides a directory structure I don’t personally like. So I thought I’d do one for myself. That said, create-next-app is a great project and you should totally check it out.
