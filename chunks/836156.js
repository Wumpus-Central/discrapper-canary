"use strict";
n.d(t, { S: () => i, i: () => r });
let i = RegExp("^dev://playground/([-\\w._0-9]+)(/([-\\w._0-9]+))?(\\?[^\\s]*)?$", "i");
function r(e) {
    return i.test(e);
}
