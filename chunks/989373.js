n.r(t),
    n.d(t, {
        default: () => h,
        useOverlayInitialFocus: () => p
    }),
    n(47120);
var i = n(200651),
    a = n(192379),
    r = n(442837),
    o = n(13245),
    l = n(493773),
    c = n(238246),
    d = n(358085);
n(606206);
var _ = n(998502),
    u = n(145597);
n(371467);
var s = n(554370),
    f = n(610394);
function p(e) {
    let t = (0, r.e7)([f.ZP], () => {
            let e = f.ZP.getFocusedPID();
            return !d.isPlatformEmbedded || (null != e && e !== u.R2);
        }),
        [n, i] = a.useState(t),
        c = a.useCallback(() => {
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
        a.useEffect(() => {
            (t || n) && t && !n && (i(!0), c());
        }, [c, n, t, e]),
        (0, l.Ng)(() => {
            n && c();
        }),
        n
    );
}
function h(e) {
    let { withTitleBar: t, windowKey: n } = e;
    return p(n)
        ? (0, i.jsx)(c.Z, {
              withTitleBar: t,
              windowKey: n,
              title: 'Discord Overlay',
              children: (0, i.jsx)(s.Z, {})
          })
        : null;
}
