n.r(t),
    n.d(t, {
        default: () => p,
        useOverlayInitialFocus: () => v
    }),
    n(47120);
var l = n(200651),
    i = n(192379),
    r = n(442837),
    u = n(13245),
    a = n(493773),
    o = n(238246),
    d = n(358085);
n(606206);
var s = n(998502),
    c = n(145597);
n(371467);
var f = n(554370),
    h = n(610394);
function v(e) {
    let t = (0, r.e7)([h.ZP], () => {
            let e = h.ZP.getFocusedPID();
            return !d.isPlatformEmbedded || (null != e && e !== c.R2);
        }),
        [n, l] = i.useState(t),
        o = i.useCallback(() => {
            requestAnimationFrame(() => {
                try {
                    u.Z.successfullyShown((0, c.QF)()), s.ZP.showInactive(e);
                } catch (t) {
                    t.message.includes('IPC') &&
                        setTimeout(() => {
                            s.ZP.showInactive(e);
                        }, 100);
                }
            });
        }, [e]);
    return (
        i.useEffect(() => {
            (t || n) && t && !n && (l(!0), o());
        }, [o, n, t, e]),
        (0, a.Ng)(() => {
            n && o();
        }),
        n
    );
}
function p(e) {
    let { withTitleBar: t, windowKey: n } = e;
    return v(n)
        ? (0, l.jsx)(o.Z, {
              withTitleBar: t,
              windowKey: n,
              title: 'Discord Overlay',
              children: (0, l.jsx)(f.Z, {})
          })
        : null;
}
