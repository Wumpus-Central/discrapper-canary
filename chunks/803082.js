"use strict";
n.d(t, { v: () => a });
var r = n(260431),
    i = n(723906),
    s = n(723372);
function a(...e) {
    let t = { ...e[0] };
    for (let n = 1; n < e.length; n++) {
        let a = e[n];
        for (let e in a) {
            let n = t[e],
                o = a[e];
            "function" == typeof n &&
            "function" == typeof o &&
            "o" === e[0] &&
            "n" === e[1] &&
            e.charCodeAt(2) >= 65 &&
            90 >= e.charCodeAt(2)
                ? (t[e] = (0, r.c)(n, o))
                : ("className" === e || "UNSAFE_className" === e) && "string" == typeof n && "string" == typeof o
                  ? (t[e] = (0, s.A)(n, o))
                  : "id" === e && n && o
                    ? (t.id = (0, i.Tw)(n, o))
                    : (t[e] = void 0 !== o ? o : n);
        }
    }
    return t;
}
