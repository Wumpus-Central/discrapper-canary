"use strict";
n.d(t, { A: () => a });
var i = n(64700);
let r = Symbol();
function a(e, t, n) {
    let a,
        s,
        l = ((a = (0, i.useRef)(!1)), (s = (0, i.useRef)(null)), a.current || ((a.current = !0), (s.current = e())), s),
        o = (0, i.useRef)(r);
    return o.current === r ? (o.current = t) : n(o.current, t) || ((l.current = e()), (o.current = t)), l.current;
}
