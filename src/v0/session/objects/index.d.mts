import type {FourtuneSession} from "../index.d.mts"

export type ObjectGenerator = (
	session: FourtuneSession,
	objectPath: string,
) => Promise<string>

export type Objects = {
	addObject: (
		objectPath: string,
		generator: ObjectGenerator
	) => undefined
}
