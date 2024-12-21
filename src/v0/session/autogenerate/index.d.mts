import type {FourtuneSession} from "../index.d.mts"

export type AutogenerateGenerator<Category extends string> = (
	session: FourtuneSession,
	category: Category,
	filePath: string
) => Promise<string>

export type Autogenerate = {
	addFourtuneFile: (
		filePath: string,
		generator: AutogenerateGenerator<"fourtune">
	) => undefined

	addSyntheticFile: (
		category: string,
		filePath: string,
		generator: AutogenerateGenerator<string>
	) => undefined
}
