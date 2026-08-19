"use strict";
r.d(t, { P: () => o });
var n = r(582128);
function o(e, t, r) {
    let [o, i] = (0, n.useState)(e || t),
        a = (0, n.useRef)(void 0 !== e),
        s = void 0 !== e;
    (0, n.useEffect)(() => {
        a.current, (a.current = s);
    }, [s]);
    let l = s ? e : o,
        u = (0, n.useCallback)(
            (e, ...t) => {
                let n = (e, ...t) => {
                    r && !Object.is(l, e) && r(e, ...t), s || (l = e);
                };
                "function" == typeof e
                    ? i((r, ...o) => {
                          let i = e(s ? l : r, ...o);
                          return (n(i, ...t), s) ? r : i;
                      })
                    : (s || i(e), n(e, ...t));
            },
            [s, l, r],
        );
    return [l, u];
}
