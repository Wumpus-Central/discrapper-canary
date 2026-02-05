"use strict";
n.d(t, { A: () => i });
var r = n(64700);
function i(e) {
    let t = (0, r.useRef)(null),
        n = (0, r.useRef)(null);
    return Object.is(e, n.current) || ((t.current = n.current), (n.current = e)), t.current;
}
