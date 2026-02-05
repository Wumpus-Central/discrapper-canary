"use strict";
r.d(t, { A: () => o });
var n = r(666467);
let o = function (e, t) {
    var r = this.__data__,
        o = (0, n.A)(r, e);
    return o < 0 ? (++this.size, r.push([e, t])) : (r[o][1] = t), this;
};
