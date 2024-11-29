import { Block, CodeBlock, parseProps } from "codehike/blocks"
import { Pre, highlight } from "codehike/code"
import { z } from "zod"
import { tooltip } from "@/components/annotations/tooltip"
import { tokenTransitions } from "@/components/annotations/token-transitions"
import { mark } from "@/components/annotations/mark"


const Schema = Block.extend({
  code: CodeBlock,
  tooltips: z.array(Block).optional(),
})

export async function CodeWithTooltips(props: unknown) {
  const { code, tooltips = [] } = parseProps(props, Schema)
  const highlighted = await highlight(code, "github-light")
  highlighted.annotations = highlighted.annotations.map((a) => {
    const tooltip = tooltips.find((t) => t.title === a.query)
    if (!tooltip) return a
    return {
      ...a,
      data: { ...a.data, children: tooltip.children },

    }
  })
  return <Pre code={highlighted} handlers={[mark, tokenTransitions, tooltip]} />
}

