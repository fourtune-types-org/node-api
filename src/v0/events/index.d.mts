import type {DefineEvent} from "@aniojs/event-emitter"

type WarningEvent = DefineEvent<"warning", {
	id: string|undefined
	message: string
}>

type ErrorEvent = DefineEvent<"error", {
	id: string|undefined
	message: string
}>

export type FourtuneEvents = [WarningEvent, ErrorEvent]
