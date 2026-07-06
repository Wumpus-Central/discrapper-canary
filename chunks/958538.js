"use strict";
n.d(t, { A: () => s });
var i = n(64700);
let r = Symbol();
function s(e, t, n) {
    let s,
        a,
        o = ((s = (0, i.useRef)(!1)), (a = (0, i.useRef)(null)), s.current || ((s.current = !0), (a.current = e())), a),
        l = (0, i.useRef)(r);
    return l.current === r ? (l.current = t) : n(l.current, t) || ((o.current = e()), (l.current = t)), o.current;
}
