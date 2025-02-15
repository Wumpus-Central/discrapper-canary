n.r(t),
    n.d(t, {
        default: () => N,
        useOverlayInitialFocus: () => Z
    }),
    n(47120);
var l = n(200651),
    i = n(192379),
    r = n(442837),
    u = n(13245),
    a = n(615287),
    d = n(493773),
    o = n(238246),
    s = n(355863),
    c = n(944486),
    f = n(358085);
n(606206);
var h = n(998502),
    v = n(145597);
n(371467);
var p = n(554370),
    _ = n(371651),
    g = n(610394),
    I = n(501787),
    E = n(981631);
function Z(e, t) {
    let n = (0, r.e7)([g.ZP], () => {
            let e = g.ZP.getFocusedPID();
            return !f.isPlatformEmbedded || (null != e && e !== v.R2);
        }),
        [l, o] = i.useState(n),
        p = i.useCallback(() => {
            requestAnimationFrame(() => {
                try {
                    u.Z.successfullyShown((0, v.QF)()), h.ZP.showInactive(e);
                } catch (t) {
                    t.message.includes('IPC') &&
                        setTimeout(() => {
                            h.ZP.showInactive(e);
                        }, 100);
                }
            });
        }, [e]);
    return (
        i.useEffect(() => {
            (n || l) && n && !l && (o(!0), p());
        }, [p, l, n, e]),
        (0, d.Ng)(() => {
            var e;
            l && p();
            let n = null !== (e = g.ZP.getFocusedPID()) && void 0 !== e ? e : (0, v.QF)(),
                i = null != c.Z.getVoiceChannelId();
            u.Z.track(E.rMx.OVERLAY_INITIALIZED, {
                voice_widget_connected: i,
                text_widget_connected: g.ZP.isPinned(E.Odu.TEXT),
                overlay_render_method: a.gl[_.default.getOverlayMethod(n)],
                unpinned_widget_types: s.Z.getAllUnpinnedPinnedWidgets(t)
            });
        }),
        l
    );
}
function N(e) {
    let { withTitleBar: t, windowKey: n } = e;
    return Z(n, I.OVERLAY_V3_LAYOUT_ID)
        ? (0, l.jsx)(o.Z, {
              withTitleBar: t,
              windowKey: n,
              title: 'Discord Overlay',
              children: (0, l.jsx)(p.Z, {})
          })
        : null;
}
