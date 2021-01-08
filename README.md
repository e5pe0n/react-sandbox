# react-sandbox
## Set Up

`.devcontainer/setup.sh`, which runs after building container, installs `nodenv` and `node-build` automatically.

```
$ nodenv install -l                 // find latest version
$ nodenv install <version>          // and specify it as <version>
$ nodenv global <version>
$ npm install -g create-react-app   // for create-react-app
$ exec $SHELL -l
```

### Warning

`npx create-react-app` **does not work** in this invironment (Ubuntu: focal container)
(I searched for the cause but not found)
## Create React App

```
$ create-react-app <app-name> --template typescript
```

