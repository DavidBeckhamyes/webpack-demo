// index.js

import './hello.js'

// 验证Tree Shaking => usedExport
import { add } from "./math";
console.log('2 + 4 = ', add(2, 4));

// 验证Tree Shaking => SideEffects
import './extend';
console.log((7).pad(3));

require('./special.less');

console.log('index')
