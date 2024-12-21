import type {EventEmitter} from "@aniojs/event-emitter"
import type {FourtuneConfig} from "../config/index.d.mts"
import type {FourtuneSession} from "../session/index.d.mts"
import type {FourtuneEvents} from "../events/index.d.mts"

type Message = {
	severity: "warn" | "error"
	id: string|undefined
	message: string
}

type Product = {
	name: string
	build: () => Promise<{
		messages: Message[]
	}>
}

type Compile = () => Promise<{
	messages: Message[]
	products: Product[]
}>

export type FourtuneProject = EventEmitter<FourtuneEvents> & {
	readonly root: string
	readonly config: FourtuneConfig

	readonly init: () => Promise<{
		session: Readonly<FourtuneSession>,
		compile: Compile
	}>
}
