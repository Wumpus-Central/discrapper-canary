n.r(t),
    n.d(t, {
        default: () => S,
        useOverlayInitialFocus: () => y
    }),
    n(388685);
var a = n(200651),
    r = n(192379),
    i = n(442837),
    o = n(13245),
    l = n(615287),
    c = n(493773),
    s = n(522474),
    u = n(238246),
    _ = n(355863),
    d = n(944486),
    f = n(358085);
n(606206);
var p = n(998502),
    m = n(145597);
n(371467);
var g = n(554370),
    I = n(371651),
    h = n(610394),
    v = n(757744),
    b = n(981631);
function y(e, t) {
    let n = (0, i.e7)([s.Z], () => {
            var t;
            return null != (t = s.Z.getWindow(e)) ? t : window;
        }),
        a = (0, i.e7)([h.ZP], () => {
            let e = h.ZP.getFocusedPID();
            return !f.isPlatformEmbedded || (null != e && e !== m.UNSET_PID);
        }),
        [u, g] = r.useState(a);
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
    let v = r.useCallback(() => {
        n.requestAnimationFrame(() => {
            try {
                o.Z.successfullyShown((0, m.getPID)()), p.ZP.showInactive(e);
            } catch (t) {
                t.message.includes('IPC') &&
                    setTimeout(() => {
                        p.ZP.showInactive(e);
                    }, 100);
            }
        });
    }, [e, n]);
    return (
        r.useEffect(() => {
            !u && a && a && (g(!0), v());
        }, [v, u, a, e]),
        (0, c.Ng)(() => {
            var e;
            u && v();
            let n = null != (e = h.ZP.getFocusedPID()) ? e : (0, m.getPID)(),
                a = null != d.Z.getVoiceChannelId();
            o.Z.track(b.rMx.OVERLAY_INITIALIZED, {
                voice_widget_connected: a,
                text_widget_connected: h.ZP.isPinned(b.Odu.TEXT),
                overlay_render_method: l.gl[I.default.getOverlayMethod(n)],
                unpinned_widget_types: _.Z.getAllUnpinnedPinnedWidgets(t)
            });
        }),
        u
    );
}
function S(e) {
    let { withTitleBar: t, windowKey: n } = e;
    return y(n, v.$)
        ? (0, a.jsx)(u.Z, {
              withTitleBar: t,
              windowKey: n,
              title: 'Discord Overlay',
              children: (0, a.jsx)(g.Z, {})
          })
        : null;
}
