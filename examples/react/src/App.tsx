import React, { useState } from 'react'
import styled, { css } from 'styled-components'
const Common = styled.div`
  @apply m-0 p-0 w-100vw h-100vh overflow-hidden bg-blue-500;
`

const UnFocusStyle = css`
  color: ${(props: any) => (props.theme === 'primary' ? 'white' : 'blue')};
`

const FocusStyle = css`
  color: red;
`

const WithTemplateLiterals = styled.button`
  @apply cursor-pointer border-none text-center rounded appearance-none;

  ${UnFocusStyle};

  padding: ${(props: any) => (props.size === 'lg' ? '4px 16px' : '2px 16px')};

  height: ${(props: any) => (props.size === 'lg' ? '28px' : '20px')};

  &:focus {
    @apply outline-none border-none;
    ${(props: any) => (props.focus ? UnFocusStyle : FocusStyle)};
  }
`

const Nested = styled.div`
  @apply m-0 p-0 w-100vw h-100vh overflow-hidden hover:(bg-blue-500 text-xs);

  div {
    font-family: '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &:hover {
      color: red;
    }
  }

  &:hover {
    color: white;
  }
`

const StyledDatePicker = styled.div`
  @apply p-3 w-72;
  color: var(--text-color-0);
  div.date-picker-weeks {
    @apply font-bold;
  }

  div.date-picker-dates {
    @apply hidden relative;
  }

  div.date-picker-arrow {
    @apply flex justify-between items-center;

    .date-picker-arrow-left,
    .date-picker-arrow-right {
      @apply p-0 flex justify-center items-center;
      aspect-ratio: 1 / 1;
    }
  }

  div.date-picker-rows {
    @apply flex gap-3 flex-col;
  }

  div[data-role='date-picker-row'] {
    @apply w-full grid gap-4 grid-te;
    grid-template-columns: repeat(7, 1fr);
  }

  div[data-role='date-picker-row']:first-child {
    @apply p-1;
  }

  div[data-role='date-picker-row']:last-child {
    @apply bottom-1;
  }

  div[data-role='date-picker-operations'] {
    @apply flex gap-3;

    .date-picker-btn {
      @apply flex-1;
    }
  }
`

type DayProps = {
  selected?: boolean
  active?: boolean
}

const StyleDay = styled.div`
  @apply text-center cursor-pointer flex items-center justify-center;

  span {
    @apply m-0 w-7 leading-loose inline-block box-border rounded;

    aspect-ratio: 1 / 1;
  }
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-center">
      <Common>Common</Common>
      <WithTemplateLiterals>WithTemplateLiterals</WithTemplateLiterals>
      <Nested>
        <div>red</div>
        white
      </Nested>
      <StyleDay>
        <span>1</span>
      </StyleDay>
      <header className="m-4">
        <p>Hello Vite + React!</p>
        <p>
          <button
            className="border border-gray-400 rounded px-4 py-2 mt-4 hover:(bg-teal-400 border-teal-400)"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </p>
      </header>
    </div>
  )
}

export default App
