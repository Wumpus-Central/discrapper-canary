n.d(t, {
    C: () => c,
    X: () => f
}),
    n(47120);
var r = n(192379),
    i = n(442837),
    o = n(607070),
    a = n(451478),
    s = n(359135);
let l = 32;
function c(e, t) {
    let n = (0, i.e7)([a.Z], () => a.Z.isFocused()),
        r = (0, i.e7)([o.Z], () => o.Z.useReducedMotion);
    return !!n && !r && (e || t);
}
let u = new Set([s.i.ACCOUNT]),
    d = new Set([s.i.PREVIEW, s.i.MINI_PREVIEW]),
    f = (e, t, n) => {
        let i = (0, r.useRef)(null),
            [o, a] = (0, r.useState)(!1),
            [s, c] = (0, r.useState)(!1);
        return ((0, r.useEffect)(() => {
            null != e && null == i.current && (i.current = new Date().getTime());
        }, [e]),
        (0, r.useEffect)(() => {
            if (t && null != i.current) {
                if (new Date().getTime() - i.current > l) {
                    a(!0);
                    return;
                }
                c(!0);
            }
        }, [t]),
        u.has(n))
            ? {
                  fadeIn: !0,
                  noFade: !1
              }
            : d.has(n)
              ? {
                    fadeIn: !1,
                    noFade: !0
                }
              : {
                    fadeIn: o,
                    noFade: s
                };
    };
