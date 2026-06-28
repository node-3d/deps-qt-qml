import fs from 'node:fs/promises';
import { traverse } from '@node-3d/addon-tools';

const list = await traverse('qml', true);
await fs.writeFile('qml.txt', list.join('\n'));
