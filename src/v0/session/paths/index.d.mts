export type Paths = {
	getBuildPath: (...parts: string[]) => string
	getBuildPathFromProjectRoot: (...parts: string[]) => string

	getObjectsPath: (...parts: string[]) => string
	getObjectsPathFromProjectRoot: (...parts: string[]) => string
}
