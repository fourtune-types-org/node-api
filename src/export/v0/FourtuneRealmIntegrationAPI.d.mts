import type {FourtuneSession} from "./FourtuneSession.d.mts"
import type {FourtuneInputFile} from "./FourtuneInputFile.d.mts"

export type FourtuneRealmIntegrationAPI = {
	getIntegrationAPIVersion: () => number

	initializeProjectFiles: (session: FourtuneSession) => {
		[name: string]: number
	}

	preInitialize: (
		session: FourtuneSession,
		sourceFiles: FourtuneInputFile[],
		assetFiles: FourtuneInputFile[]
	) => Promise<undefined>

	initialize: (
		session: FourtuneSession,
		sourceFiles: FourtuneInputFile[],
		assetFiles: FourtuneInputFile[]
	) => Promise<undefined>
}
