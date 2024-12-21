import type {FourtuneSession} from "../index.d.mts"

export type HookName = 
	"cleanup.pre"                  |
	"cleanup.post"                 |
	"removeObsoleteAutoFiles.pre"  |
	"removeObsoleteAutoFiles.post" |
	"createAutofiles.pre"          |
	"createAutofiles.post"         |
	"preprocessFiles.pre"          |
	"preprocessFiles.post"         |
	"createObjectFiles.pre"        |
	"createObjectFiles.post"       |
	"createProducts.pre"           |
	"createProducts.post"

export type HookFunction = (
	session: FourtuneSession,
	name: HookName
) => Promise<undefined> | undefined

export type Hooks = {
	register: (name: HookName, fn: HookFunction) => undefined
}
