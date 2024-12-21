import type {FourtuneProject} from "../project/index.d.mts"
import type {Hooks} from "./hooks/index.d.mts"
import type {Input} from "./input/index.d.mts"
import type {Autogenerate} from "./autogenerate/index.d.mts"
import type {Objects} from "./objects/index.d.mts"
import type {Products} from "./products/index.d.mts"
import type {Paths} from "./paths/index.d.mts"

export type FourtuneSession = {
	getProject(): FourtuneProject

	emit: {
		warning: (id: string|undefined, message: string) => undefined
		error: (id: string|undefined, message: string) => undefined
	}

	realm: {
		_integration: {
			setInternalData: (data: any) => undefined
			getInternalData: () => unknown
		}

		getOptions: () => unknown
		getDependency: (dependencyName: string) => unknown
	}

	hooks: Hooks
	input: Input
	autogenerate: Autogenerate
	objects: Objects
	products: Products
	paths: Paths
}
