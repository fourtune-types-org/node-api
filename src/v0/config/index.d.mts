import type {RealmName} from "@fourtune-types/core/v1"
import type {AutogenerateGenerator} from "../session/autogenerate/index.d.mts"
import type {Options as FourtuneRealmJSOptions} from "../realm/js/options.d.mts"
import type {FourtuneNodeAPIOptions} from "../api/index.d.mts"

type ConfigBase = {
	version: number

	fourtune?: {
		defaultOptions?: FourtuneNodeAPIOptions
	}

	realm: {
		name: RealmName
		type: string
		options?: unknown
	}

	autogenerate?: Record<string, AutogenerateGenerator<"user">>
}

type Config<R extends RealmName, OptionsType> = {
	realm: {
		name: R
		options?: OptionsType
	}
}

export type FourtuneConfig = ConfigBase & (
	Config<"js", FourtuneRealmJSOptions>
)
