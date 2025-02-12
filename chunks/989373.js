t.r(n),
    t.d(n, {
        default: () => f,
        useOverlayInitialFocus: () => C
    }),
    t(47120);
var i = t(200651),
    r = t(192379),
    a = t(442837),
    l = t(13245),
    o = t(493773),
    u = t(238246),
    d = t(358085);
t(606206);
var c = t(998502),
    s = t(145597);
t(371467);
var _ = t(554370),
    h = t(610394);
function C(e) {
    let n = (0, a.e7)([h.ZP], () => {
            let e = h.ZP.getFocusedPID();
            return !d.isPlatformEmbedded || (null != e && e !== s.R2);
        }),
        [t, i] = r.useState(n),
        u = r.useCallback(() => {
            requestAnimationFrame(() => {
                try {
                    l.Z.successfullyShown((0, s.QF)()), c.ZP.showInactive(e);
                } catch (n) {
                    n.message.includes('IPC') &&
                        setTimeout(() => {
                            c.ZP.showInactive(e);
                        }, 100);
                }
            });
        }, [e]);
    return (
        r.useEffect(() => {
            (n || t) && n && !t && (i(!0), u());
        }, [u, t, n, e]),
        (0, o.Ng)(() => {
            t && u();
        }),
        t
    );
}
function f(e) {
    let { withTitleBar: n, windowKey: t } = e;
    return C(t)
        ? (0, i.jsx)(u.Z, {
              withTitleBar: n,
              windowKey: t,
              title: 'Discord Overlay',
              children: (0, i.jsx)(_.Z, {})
          })
        : null;
}
