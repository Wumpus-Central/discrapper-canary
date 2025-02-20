n.r(t),
    n.d(t, {
        default: () => O,
        useOverlayInitialFocus: () => y
    }),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(13245),
    c = n(615287),
    l = n(493773),
    s = n(238246),
    u = n(355863),
    d = n(944486),
    _ = n(358085);
n(606206);
var f = n(998502),
    p = n(145597);
n(371467);
var g = n(554370),
    b = n(371651),
    m = n(610394),
    h = n(501787),
    v = n(981631);
function y(e, t) {
    let n = (0, o.e7)([m.ZP], () => {
            let e = m.ZP.getFocusedPID();
            return !_.isPlatformEmbedded || (null != e && e !== p.R2);
        }),
        [r, s] = i.useState(n);
    (0, l.Ng)(() => {
        let e = (e) => {
            e.data === m.Il &&
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        window.parent.postMessage(m.A8, '*');
                    });
                });
        };
        return (
            window.addEventListener('message', e),
            () => {
                window.removeEventListener('message', e);
            }
        );
    });
    let g = i.useCallback(() => {
        requestAnimationFrame(() => {
            try {
                a.Z.successfullyShown((0, p.QF)()), f.ZP.showInactive(e);
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
            (n || r) && n && !r && (s(!0), g());
        }, [g, r, n, e]),
        (0, l.Ng)(() => {
            var e;
            r && g();
            let n = null !== (e = m.ZP.getFocusedPID()) && void 0 !== e ? e : (0, p.QF)(),
                i = null != d.Z.getVoiceChannelId();
            a.Z.track(v.rMx.OVERLAY_INITIALIZED, {
                voice_widget_connected: i,
                text_widget_connected: m.ZP.isPinned(v.Odu.TEXT),
                overlay_render_method: c.gl[b.default.getOverlayMethod(n)],
                unpinned_widget_types: u.Z.getAllUnpinnedPinnedWidgets(t)
            });
        }),
        r
    );
}
function O(e) {
    let { withTitleBar: t, windowKey: n } = e;
    return y(n, h.OVERLAY_V3_LAYOUT_ID)
        ? (0, r.jsx)(s.Z, {
              withTitleBar: t,
              windowKey: n,
              title: 'Discord Overlay',
              children: (0, r.jsx)(g.Z, {})
          })
        : null;
}
