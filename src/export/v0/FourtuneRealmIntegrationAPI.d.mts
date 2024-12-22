import type {FourtuneSession} from "./FourtuneSession.d.mts"
import type {FourtuneInputFile} from "./FourtuneInputFile.d.mts"

type InitializeProjectFiles = (session: FourtuneSession) => {
	[name: string]: number
}

type PreInitialize = (
	session: FourtuneSession,
	sourceFiles: FourtuneInputFile[],
	assetFiles: FourtuneInputFile[]
) => Promise<undefined>

type Initialize = PreInitialize

export type FourtuneRealmIntegrationAPI = {
	// NB: 'getIntegrationAPIVersion' is versionless!
	getIntegrationAPIVersion: () => number

	initializeProjectFiles?: InitializeProjectFiles|undefined
	preInitialize?: PreInitialize|undefined

	initialize: Initialize
}
