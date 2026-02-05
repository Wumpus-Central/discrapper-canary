"use strict";
r.d(t, { A: () => o });
var n = r(546195);
let o = function (e, t) {
    var r = t ? (0, n.A)(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.length);
};
