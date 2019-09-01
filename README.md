TypeScript Immer Demo
===========================

`immer`可以让我们使用修改一个object的形式来生成一个新的immutable的对象，非常神奇。

有一个非常需要注意的地方：
`produce`的第二个参数，要么返回一个new state，要么是void，如果是其它类型的参数，比如不小心写成了这样：

```
produce(names, draft => {
  // `return` is wrong
  return draft.push(something);
})
```

就会报错：

```
Error: An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.
```

```
npm install
npm run demo
```

