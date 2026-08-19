"use strict";
r.d(t, { w: () => o });
var n = r(582128);
function o(e, t) {
    let r = (0, n.useRef)(!0),
        o = (0, n.useRef)(null);
    (0, n.useEffect)(
        () => (
            (r.current = !0),
            () => {
                r.current = !1;
            }
        ),
        [],
    ),
        (0, n.useEffect)(() => {
            let n = o.current;
            r.current ? (r.current = !1) : (!n || t.some((e, t) => !Object.is(e, n[t]))) && e(), (o.current = t);
        }, t);
}
