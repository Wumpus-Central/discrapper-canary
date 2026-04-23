"use strict";
n.d(t, { K: () => s });
var r = n(3388),
    i = n(64700);
function s(e, t) {
    let n = (0, i.useRef)(!0),
        s = (0, i.useRef)(null);
    (0, r.N)(
        () => (
            (n.current = !0),
            () => {
                n.current = !1;
            }
        ),
        [],
    ),
        (0, r.N)(() => {
            n.current ? (n.current = !1) : (!s.current || t.some((e, t) => !Object.is(e, s[t]))) && e(),
                (s.current = t);
        }, t);
}
