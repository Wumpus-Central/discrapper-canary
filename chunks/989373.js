n.r(t),
    n.d(t, {
        default: () => S,
        useOverlayInitialFocus: () => I
    }),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(13245),
    l = n(615287),
    c = n(493773),
    u = n(522474),
    d = n(238246),
    s = n(355863),
    _ = n(944486),
    f = n(358085);
n(606206);
var p = n(998502),
    m = n(145597);
n(371467);
var b = n(554370),
    v = n(371651),
    h = n(610394),
    g = n(757744),
    y = n(981631);
function I(e, t) {
    let n = (0, o.e7)([u.Z], () => {
            var t;
            return null != (t = u.Z.getWindow(e)) ? t : window;
        }),
        r = (0, o.e7)([h.ZP], () => {
            let e = h.ZP.getFocusedPID();
            return !f.isPlatformEmbedded || (null != e && e !== m.UNSET_PID);
        }),
        [d, b] = i.useState(r);
    (0, c.Ng)(() => {
        let e = (e) => {
            e.data === h.Il &&
                n.requestAnimationFrame(() => {
                    n.requestAnimationFrame(() => {
                        window.parent.postMessage(h.A8, '*');
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
        n.requestAnimationFrame(() => {
            try {
                a.Z.successfullyShown((0, m.getPID)()), p.ZP.showInactive(e);
            } catch (t) {
                t.message.includes('IPC') &&
                    setTimeout(() => {
                        p.ZP.showInactive(e);
                    }, 100);
            }
        });
    }, [e, n]);
    return (
        i.useEffect(() => {
            !d && r && r && (b(!0), g());
        }, [g, d, r, e]),
        (0, c.Ng)(() => {
            var e;
            d && g();
            let n = null != (e = h.ZP.getFocusedPID()) ? e : (0, m.getPID)(),
                r = null != _.Z.getVoiceChannelId();
            a.Z.track(y.rMx.OVERLAY_INITIALIZED, {
                voice_widget_connected: r,
                text_widget_connected: h.ZP.isPinned(y.Odu.TEXT),
                overlay_render_method: l.gl[v.default.getOverlayMethod(n)],
                unpinned_widget_types: s.Z.getAllUnpinnedPinnedWidgets(t)
            });
        }),
        d
    );
}
function S(e) {
    let { withTitleBar: t, windowKey: n } = e;
    return I(n, g.$S)
        ? (0, r.jsx)(d.Z, {
              withTitleBar: t,
              windowKey: n,
              title: 'Discord Overlay',
              children: (0, r.jsx)(b.Z, {})
          })
        : null;
}
