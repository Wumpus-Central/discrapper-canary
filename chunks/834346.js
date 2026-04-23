"use strict";
r.d(t, { A: () => a });
var n = r(820528),
    o = r(446003);
let a = function (e, t, r, a) {
    var i = !r;
    r || (r = {});
    for (var l = -1, s = t.length; ++l < s; ) {
        var u = t[l],
            c = a ? a(r[u], e[u], u, r, e) : void 0;
        void 0 === c && (c = e[u]), i ? (0, o.A)(r, u, c) : (0, n.A)(r, u, c);
    }
    return r;
};
