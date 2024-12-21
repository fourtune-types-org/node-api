export type InputFile = {
	parents: string[]
	name: string
	relativePath: string
	source: string
	synthetic?: boolean
}

export type Input = {
	getSourceFiles: () => InputFile[]
	getAssetFiles: () => InputFile[]
}
