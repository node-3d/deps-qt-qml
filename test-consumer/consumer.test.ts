import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import path from 'node:path';
import test from 'node:test';

import { bin, core, gui } from '@node-3d/deps-qt-qml';

const require = createRequire(import.meta.url);
const consumer = require('./build/Release/consumer.node') as {
	probe: (library: string) => boolean;
};

const getLibrary = (): string => {
	if (process.platform === 'win32') {
		return path.join(bin, 'Qt6Qml.dll');
	}
	if (process.platform === 'darwin') {
		return path.join(bin, 'QtQml.framework', 'Versions', 'A', 'QtQml');
	}
	return path.join(bin, 'libQt6Qml.so.6');
};

test('loads the packed Qt QML runtime and its GUI and Core dependencies', () => {
	assert.equal(typeof core.bin, 'string');
	assert.equal(typeof gui.bin, 'string');
	assert.equal(consumer.probe(getLibrary()), true);
});
