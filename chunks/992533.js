"use strict";
r.d(t, { P: () => i });
var n = r(582128);
function i(e, t, r) {
    let [i, o] = (0, n.useState)(e || t),
        a = (0, n.useRef)(void 0 !== e),
        s = void 0 !== e;
    (0, n.useEffect)(() => {
        a.current, (a.current = s);
    }, [s]);
    let l = s ? e : i,
        u = (0, n.useCallback)(
            (e, ...t) => {
                let n = (e, ...t) => {
                    r && !Object.is(l, e) && r(e, ...t), s || (l = e);
                };
                "function" == typeof e
                    ? o((r, ...i) => {
                          let o = e(s ? l : r, ...i);
                          return (n(o, ...t), s) ? r : o;
                      })
                    : (s || o(e), n(e, ...t));
            },
            [s, l, r],
        );
    return [l, u];
}
