"use strict";
n.d(t, { S: () => r, i: () => i });
let r = RegExp("^dev://playground/([-\\w._0-9]+)(/([-\\w._0-9]+))?$", "i");
function i(e) {
    return r.test(e);
}
