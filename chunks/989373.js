n.r(t),
    n.d(t, {
        default: () => E,
        useOverlayInitialFocus: () => y
    }),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(13245),
    l = n(615287),
    c = n(493773),
    u = n(522474),
    s = n(238246),
    d = n(355863),
    _ = n(944486),
    f = n(358085);
n(606206);
var p = n(998502),
    m = n(145597);
n(371467);
var b = n(554370),
    h = n(371651),
    g = n(610394),
    v = n(757744),
    I = n(981631);
function y(e, t) {
    let n = (0, o.e7)([u.Z], () => {
            var t;
            return null != (t = u.Z.getWindow(e)) ? t : window;
        }),
        r = (0, o.e7)([g.ZP], () => {
            let e = g.ZP.getFocusedPID();
            return !f.isPlatformEmbedded || (null != e && e !== m.UNSET_PID);
        }),
        [s, b] = i.useState(r);
    (0, c.Ng)(() => {
        let e = (e) => {
            e.data === g.Il &&
                n.requestAnimationFrame(() => {
                    n.requestAnimationFrame(() => {
                        window.parent.postMessage(g.A8, '*');
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
    let v = i.useCallback(() => {
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
            !s && r && r && (b(!0), v());
        }, [v, s, r, e]),
        (0, c.Ng)(() => {
            var e;
            s && v();
            let n = null != (e = g.ZP.getFocusedPID()) ? e : (0, m.getPID)(),
                r = null != _.Z.getVoiceChannelId();
            a.Z.track(I.rMx.OVERLAY_INITIALIZED, {
                voice_widget_connected: r,
                text_widget_connected: g.ZP.isPinned(I.Odu.TEXT),
                overlay_render_method: l.gl[h.default.getOverlayMethod(n)],
                unpinned_widget_types: d.Z.getAllUnpinnedPinnedWidgets(t)
            });
        }),
        s
    );
}
function E(e) {
    let { withTitleBar: t, windowKey: n } = e;
    return y(n, v.$S)
        ? (0, r.jsx)(s.Z, {
              withTitleBar: t,
              windowKey: n,
              title: 'Discord Overlay',
              children: (0, r.jsx)(b.Z, {})
          })
        : null;
}
