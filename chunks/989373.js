n.r(t),
    n.d(t, {
        default: () => p,
        useOverlayInitialFocus: () => f
    }),
    n(47120);
var i = n(200651),
    a = n(192379),
    r = n(442837),
    o = n(13245),
    l = n(493773),
    c = n(238246);
n(606206);
var d = n(998502),
    _ = n(145597);
n(371467);
var u = n(554370),
    s = n(610394);
function f(e) {
    let t = (0, r.e7)([s.ZP], () => {
            let e = s.ZP.getFocusedPID();
            return null != e && e !== _.R2;
        }),
        [n, i] = a.useState(t),
        c = a.useCallback(() => {
            requestAnimationFrame(() => {
                try {
                    o.Z.successfullyShown((0, _.QF)()), d.ZP.showInactive(e);
                } catch (t) {
                    t.message.includes('IPC') &&
                        setTimeout(() => {
                            d.ZP.showInactive(e);
                        }, 100);
                }
            });
        }, [e]);
    return (
        a.useEffect(() => {
            (t || n) && t && !n && (i(!0), c());
        }, [c, n, t, e]),
        (0, l.N)(() => {
            n && c();
        }),
        n
    );
}
function p(e) {
    let { withTitleBar: t, windowKey: n } = e;
    return f(n)
        ? (0, i.jsx)(c.Z, {
              withTitleBar: t,
              windowKey: n,
              title: 'Discord Overlay',
              children: (0, i.jsx)(u.Z, {})
          })
        : null;
}
