
# Simple Todo

![simple_todo_demo.png](simple_todo_demo.png)

# Draft

## UI Template

Material-UI (v4.11.1)

```
yarn add @material-ui/core
yarn add fontsource-roboto
yarn add @material-ui/icons
```

Add `import "fontsource-roboto"` into `index.tsx`.

## Components / Data

Container
- Input
- TodoList

InputTodo
- textbox: input string
- add button: add new Todo

TodoList
- Todo[]
- clear button: clear all Todos

Todo
- id: number
- content: string
- done button: remove it from TodoList


