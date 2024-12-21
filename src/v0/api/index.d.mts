import type {FourtuneProject} from "../project/index.d.mts"

export type FourtuneNodeAPI = (
	projectRoot: string,
	options?: {
		stdIOLogs?: boolean
	}
) => Promise<FourtuneProject>
