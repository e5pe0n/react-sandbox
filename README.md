# react-sandbox
## Set Up

`.devcontainer/setup.sh`, which runs after building container, install `nodenv` and `node-build` automatically.

```
$ nodenv install -l                 // find latest version
$ nodenv install <version>          // and specify it as <version>
$ nodenv global <version>
$ npm install -g create-react-app   // for create-react-app
```

### Warning

`npx create-react-app` **does not work without** `npm install -g create-react-app`.
(I searched for the cause but not found)
## Create React App

```
$ npx create-react-app --template typescript
```

