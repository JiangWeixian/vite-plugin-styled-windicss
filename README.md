# vite-plugin-styled-windicss
*windicss + styled-components = 🥰*

[![npm](https://img.shields.io/npm/v/vite-plugin-styled-windicss)](https://github.com/JiangWeixian/vite-plugin-styled-windicss) [![GitHub](https://img.shields.io/npm/l/vite-plugin-styled-windicss)](https://github.com/JiangWeixian/vite-plugin-styled-windicss)

## install

```console
yarn add vite-plugin-styled-windicss -D
```

## features

- ✨ transform `@apply` for `styled-components`

## usage
> **require** `vite-plugin-windicss`

in `vite.config.ts`

```ts
export default defineConfig({
  plugins: [reactRefresh(), Windicss(), StyledWindicss()],
})

```

in `any.tsx`, will

```tsx
// input
const Wrapped = styled.div`
  @apply m-0 p-0 w-100vw h-100vh overflow-hidden;
`
// output
const Wrapped = styled.div`
  color: red;
  margin: 0px;
  overflow: hidden;
  padding: 0px;
  width: 100vw;
`
```



