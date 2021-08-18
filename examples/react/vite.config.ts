import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import Windicss from 'vite-plugin-windicss'
import StyledWindicss from 'vite-plugin-styled-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), Windicss(), StyledWindicss()],
})
