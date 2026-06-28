import { getPaths } from '@node-3d/addon-tools';
import gui, { core } from '@node-3d/deps-qt-gui';

const paths = getPaths(import.meta.dirname);

export { core, gui };
export const bin = paths.bin;
export const include = paths.include;

const depsQtQml = {
	gui,
	core,
	...paths,
};

export default depsQtQml;
