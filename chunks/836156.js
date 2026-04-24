"use strict";
n.d(t, { S: () => l, i: () => i });
let l = RegExp("^dev://playground/([-\\w._0-9]+)(/([-\\w._0-9]+))?$", "i");
function i(e) {
    return l.test(e);
}
