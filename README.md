TypeScript Immer Set Value to Nested Optional Fields Demo
===========================

If a type has nested optional fields, e.e.g

```
type FormState = {
  aaa?: {
    bbb?: {
      ccc?: number
    }
  }
}
```

How to set value to `aaa.bbb.ccc`?

Run:

```
npm install
npm run demo
```

