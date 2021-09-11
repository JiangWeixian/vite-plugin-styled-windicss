export const cases = {
  nested: `
    const Group = styled.div\`
    [data-role="aside-inner-content"] {
      @apply flex flex-col justify-between h-full;

      .todolist {
        @apply flex flex-col items-center w-full;
      }
    }
  \`
  `,
}
