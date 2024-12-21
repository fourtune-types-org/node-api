import type {FourtuneSession} from "../index.d.mts"

export type AutogenerateGenerator = (
	session: FourtuneSession,
	category: string,
	filePath: string
) => Promise<string>

export type Autogenerate = {
	addFourtuneFile: (
		filePath: string,
		generator: AutogenerateGenerator
	) => undefined

	addSyntheticFile: (
		category: string,
		filePath: string,
		generator: AutogenerateGenerator
	) => undefined
}
