import produce from "immer"

type State = {
  name: string,
  age: number,
}

const names: State[] = [{
  name: 'immer',
  age: 1
}];

const newState = produce(names, draft => {
  draft[0].age = 66;
  draft.push({
    name: 'new-name',
    age: 100
  });
})

console.log(names);
console.log(newState);
