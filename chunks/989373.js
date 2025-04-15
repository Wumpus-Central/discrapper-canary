n.r(t),
    n.d(t, {
        default: () => S,
        useOverlayInitialFocus: () => y
    }),
    n(388685);
var r = n(200651),
    a = n(192379),
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
    h = n(371651),
    v = n(610394),
    b = n(757744),
    I = n(981631);
function y(e, t) {
    let n = (0, i.e7)([s.Z], () => {
            var t;
            return null != (t = s.Z.getWindow(e)) ? t : window;
        }),
        r = (0, i.e7)([v.ZP], () => {
            let e = v.ZP.getFocusedPID();
            return !f.isPlatformEmbedded || (null != e && e !== m.UNSET_PID);
        }),
        [u, g] = a.useState(r);
    (0, c.Ng)(() => {
        let e = (e) => {
            e.data === v.Il &&
                n.requestAnimationFrame(() => {
                    n.requestAnimationFrame(() => {
                        window.parent.postMessage(v.A8, '*');
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
    let b = a.useCallback(() => {
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
        a.useEffect(() => {
            !u && r && r && (g(!0), b());
        }, [b, u, r, e]),
        (0, c.Ng)(() => {
            var e;
            u && b();
            let n = null != (e = v.ZP.getFocusedPID()) ? e : (0, m.getPID)(),
                r = null != d.Z.getVoiceChannelId();
            o.Z.track(I.rMx.OVERLAY_INITIALIZED, {
                voice_widget_connected: r,
                text_widget_connected: v.ZP.isPinned(I.Odu.TEXT),
                overlay_render_method: l.gl[h.default.getOverlayMethod(n)],
                unpinned_widget_types: _.Z.getAllUnpinnedPinnedWidgets(t)
            });
        }),
        u
    );
}
function S(e) {
    let { withTitleBar: t, windowKey: n } = e;
    return y(n, b.$)
        ? (0, r.jsx)(u.Z, {
              withTitleBar: t,
              windowKey: n,
              title: 'Discord Overlay',
              children: (0, r.jsx)(g.Z, {})
          })
        : null;
}
