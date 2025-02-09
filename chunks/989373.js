n.r(t),
    n.d(t, {
        default: () => I,
        useOverlayInitialFocus: () => g
    }),
    n(47120);
var l = n(200651),
    i = n(192379),
    r = n(442837),
    u = n(13245),
    a = n(493773),
    o = n(40851),
    d = n(238246),
    s = n(358085);
n(606206);
var c = n(998502),
    f = n(145597);
n(371467);
var h = n(554370),
    v = n(610394),
    p = n(981631);
function g(e) {
    let t = (0, r.e7)([v.ZP], () => {
            let e = v.ZP.getFocusedPID();
            return !s.isPlatformEmbedded || (null != e && e !== f.R2);
        }),
        [n, l] = i.useState(t),
        o = i.useCallback(() => {
            requestAnimationFrame(() => {
                try {
                    u.Z.successfullyShown((0, f.QF)()), c.ZP.showInactive(e);
                } catch (t) {
                    t.message.includes('IPC') &&
                        setTimeout(() => {
                            c.ZP.showInactive(e);
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
function I(e) {
    let { withTitleBar: t, windowKey: n } = e;
    return g(n)
        ? (0, l.jsx)(d.Z, {
              withTitleBar: t,
              windowKey: n,
              title: 'Discord Overlay',
              children: (0, l.jsx)(o.Wu, {
                  appContext: p.IlC.OVERLAY,
                  renderWindow: window,
                  children: (0, l.jsx)(h.Z, {})
              })
          })
        : null;
}
