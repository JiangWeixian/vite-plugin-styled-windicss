import type { Plugin } from 'vite'
import _debug from 'debug'
import { walk } from 'estree-walker'
import MagicString from 'magic-string'
import type { WindiPluginUtils } from '@windicss/plugin-utils'

const NAME = 'vite-plugin-styled-windicss'

const debug = {
  styledComponents: _debug(`${NAME}:transform:styledComponents`),
}

function VitePluginWindicss(): Plugin {
  let utils: WindiPluginUtils

  const plugin: Plugin = {
    name: NAME,
    enforce: 'post',
    async configResolved(config) {
      const windicss = config.plugins.find((i) => i.name === 'vite-plugin-windicss')
      utils = windicss!.api
    },
    async transform(code, id) {
      if (!utils) {
        return null
      }
      await utils.ensureInit()
      if (!utils.isDetectTarget(id) || !code.includes('styled-components')) return
      debug.styledComponents(id)
      const parsed = this.parse(code, {})
      let ms: MagicString
      walk(parsed, {
        enter: (node: any) => {
          if (node.type === 'TemplateElement' && node.value.cooked.includes('@apply')) {
            const next = node.value.cooked.replace(
              /(.*)@apply([^`$]*)\n/gm,
              (_match: string, pre: string, applyCss: string) => {
                const parsed = utils.transformCSS(`&{@apply ${applyCss}}`, id)
                return `${pre} ${parsed}`
              },
            )

            ms = ms || new MagicString(code)
            ms.overwrite(node.start, node.end, next)
          }
        },
      })
      if (ms!) {
        return {
          code: ms.toString(),
          map: ms.generateMap({
            file: id,
            includeContent: true,
            hires: true,
          }),
        }
      }
      return null
    },
  }

  return plugin
}

export default VitePluginWindicss
