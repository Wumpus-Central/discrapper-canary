n.r(t),
    n.d(t, {
        default: () => f,
        useOverlayInitialFocus: () => C
    }),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    l = n(13245),
    o = n(493773),
    u = n(238246),
    c = n(358085);
n(606206);
var d = n(998502),
    s = n(145597);
n(371467);
var _ = n(554370),
    h = n(610394);
function C(e) {
    let t = (0, a.e7)([h.ZP], () => {
            let e = h.ZP.getFocusedPID();
            return !c.isPlatformEmbedded || (null != e && e !== s.R2);
        }),
        [n, i] = r.useState(t),
        u = r.useCallback(() => {
            requestAnimationFrame(() => {
                try {
                    l.Z.successfullyShown((0, s.QF)()), d.ZP.showInactive(e);
                } catch (t) {
                    t.message.includes('IPC') &&
                        setTimeout(() => {
                            d.ZP.showInactive(e);
                        }, 100);
                }
            });
        }, [e]);
    return (
        r.useEffect(() => {
            (t || n) && t && !n && (i(!0), u());
        }, [u, n, t, e]),
        (0, o.Ng)(() => {
            n && u();
        }),
        n
    );
}
function f(e) {
    let { withTitleBar: t, windowKey: n } = e;
    return C(n)
        ? (0, i.jsx)(u.Z, {
              withTitleBar: t,
              windowKey: n,
              title: 'Discord Overlay',
              children: (0, i.jsx)(_.Z, {})
          })
        : null;
}
