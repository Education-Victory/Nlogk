import { z } from "zod"
import {
  Selection,
  Selectable,
  SelectionProvider,
} from "codehike/utils/selection"
import { Block, CodeBlock, parseProps, parseRoot } from "codehike/blocks"
import { Pre, RawCode, highlight } from "codehike/code"

import { tokenTransitions } from "@/components/annotations/token-transitions"
import { tooltip } from "@/components/annotations/tooltip"
import { wordWrap } from "./annotations/word-wrap"

const Schema = Block.extend({
  steps: z.array(
    Block.extend({
        sticker: Block
  })),
})

export function Scrollycoding(props: unknown) {
  const { steps } = parseProps(props, Schema)
  return (
    <SelectionProvider className="flex gap-4">
      <div className="flex-1 mt-32 mb-[90vh] ml-2 prose min-w-60">
        {steps.map((step, i) => (
          <Selectable
            key={i}
            index={i}
            selectOn={["click", "scroll"]}
            className="border-l-4 data-[selected=true]:border-blue-400 px-5 py-2 mb-24 rounded bg-card"
          >
            <h2 className="mt-4 text-xl">{step.title}</h2>
            <div>{step.children}</div>
          </Selectable>
        ))}
      </div>
      <div className="w-1/2 bg-card">
        <div className="top-16 sticky overflow-auto">
          <Selection
              from={steps.map((step) => (
                step.sticker.children
              ))}
            />
        </div>
      </div>
    </SelectionProvider>
  )
}


