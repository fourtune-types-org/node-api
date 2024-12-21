import type {FourtuneProject} from "../project/index.d.mts"

export type FourtuneNodeAPIOptions = {
	stdIOLogs?: boolean
}

export type FourtuneNodeAPI = (
	projectRoot: string,
	options?: FourtuneNodeAPIOptions|undefined
) => Promise<FourtuneProject>
