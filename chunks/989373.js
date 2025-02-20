n.r(t),
    n.d(t, {
        default: () => y,
        useOverlayInitialFocus: () => O
    }),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(13245),
    l = n(615287),
    c = n(493773),
    s = n(238246),
    u = n(355863),
    d = n(944486),
    _ = n(358085);
n(606206);
var f = n(998502),
    p = n(145597);
n(371467);
var h = n(554370),
    b = n(371651),
    g = n(610394),
    m = n(501787),
    C = n(981631);
function O(e, t) {
    let n = (0, a.e7)([g.ZP], () => {
            let e = g.ZP.getFocusedPID();
            return !_.isPlatformEmbedded || (null != e && e !== p.R2);
        }),
        [r, s] = i.useState(n),
        h = i.useCallback(() => {
            requestAnimationFrame(() => {
                try {
                    o.Z.successfullyShown((0, p.QF)()), f.ZP.showInactive(e);
                } catch (t) {
                    t.message.includes('IPC') &&
                        setTimeout(() => {
                            f.ZP.showInactive(e);
                        }, 100);
                }
            });
        }, [e]);
    return (
        i.useEffect(() => {
            (n || r) && n && !r && (s(!0), h());
        }, [h, r, n, e]),
        (0, c.Ng)(() => {
            var e;
            r && h();
            let n = null !== (e = g.ZP.getFocusedPID()) && void 0 !== e ? e : (0, p.QF)(),
                i = null != d.Z.getVoiceChannelId();
            o.Z.track(C.rMx.OVERLAY_INITIALIZED, {
                voice_widget_connected: i,
                text_widget_connected: g.ZP.isPinned(C.Odu.TEXT),
                overlay_render_method: l.gl[b.default.getOverlayMethod(n)],
                unpinned_widget_types: u.Z.getAllUnpinnedPinnedWidgets(t)
            });
        }),
        r
    );
}
function y(e) {
    let { withTitleBar: t, windowKey: n } = e;
    return O(n, m.OVERLAY_V3_LAYOUT_ID)
        ? (0, r.jsx)(s.Z, {
              withTitleBar: t,
              windowKey: n,
              title: 'Discord Overlay',
              children: (0, r.jsx)(h.Z, {})
          })
        : null;
}
