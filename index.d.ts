import type { getPaths } from '@node-3d/addon-tools';
import type depsQtGui from '@node-3d/deps-qt-gui';
import type { core as depsQtCore } from '@node-3d/deps-qt-gui';

type AddonPaths = ReturnType<typeof getPaths>;

export declare const core: typeof depsQtCore;
export declare const gui: typeof depsQtGui;
export declare const bin: AddonPaths['bin'];
export declare const include: AddonPaths['include'];

declare const depsQtQml: AddonPaths & {
	gui: typeof depsQtGui;
	core: typeof depsQtCore;
};
export default depsQtQml;
