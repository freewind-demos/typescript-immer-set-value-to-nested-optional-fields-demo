import produce from "immer"

type FormState = {
  aaa?: {
    bbb?: {
      ccc?: number
    }
  }
}

const formState: FormState = {}

const target = produce(formState, draft => {

  // compilation error
  // draft?.aaa?.bbb?.ccc = 1;

  draft.aaa = draft.aaa ?? {}
  draft.aaa.bbb = draft.aaa.bbb ?? {}
  draft.aaa.bbb.ccc = 1;
})

console.log(target);
