import type {FourtuneSession} from "../index.d.mts"

export type DistributableGenerator<T> = (
	session: FourtuneSession,
	productName: string
) => T

type AddDistributable = (
	name: string,
	fileName: string,
	generator: DistributableGenerator<string>
) => Product

type AddDistributables = (
	name: string,
	fileName: string[],
	generator: DistributableGenerator<string[]>
) => Product

export type Product = {
	addDistributable: AddDistributable | AddDistributables
}

export type Products = {
	addProduct: (productName: string) => Product
}
