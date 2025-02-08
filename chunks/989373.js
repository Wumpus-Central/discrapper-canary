n.r(t),
    n.d(t, {
        default: () => p,
        useOverlayInitialFocus: () => f
    }),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(13245),
    l = n(493773),
    c = n(238246),
    d = n(358085);
n(606206);
var _ = n(998502),
    u = n(145597);
n(371467);
var s = n(554370),
    h = n(610394);
function f(e) {
    let t = (0, a.e7)([h.ZP], () => {
            let e = h.ZP.getFocusedPID();
            return !d.isPlatformEmbedded || (null != e && e !== u.R2);
        }),
        [n, r] = i.useState(t),
        c = i.useCallback(() => {
            requestAnimationFrame(() => {
                try {
                    o.Z.successfullyShown((0, u.QF)()), _.ZP.showInactive(e);
                } catch (t) {
                    t.message.includes('IPC') &&
                        setTimeout(() => {
                            _.ZP.showInactive(e);
                        }, 100);
                }
            });
        }, [e]);
    return (
        i.useEffect(() => {
            (t || n) && t && !n && (r(!0), c());
        }, [c, n, t, e]),
        (0, l.Ng)(() => {
            n && c();
        }),
        n
    );
}
function p(e) {
    let { withTitleBar: t, windowKey: n } = e;
    return f(n)
        ? (0, r.jsx)(c.Z, {
              withTitleBar: t,
              windowKey: n,
              title: 'Discord Overlay',
              children: (0, r.jsx)(s.Z, {})
          })
        : null;
}
