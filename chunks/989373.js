n.r(t),
    n.d(t, {
        default: () => I,
        useOverlayInitialFocus: () => O
    }),
    n(47120);
var r = n(200651),
    o = n(192379),
    a = n(442837),
    i = n(13245),
    c = n(615287),
    l = n(493773),
    s = n(522474),
    u = n(238246),
    d = n(355863),
    _ = n(944486),
    f = n(358085);
n(606206);
var p = n(998502),
    b = n(145597);
n(371467);
var m = n(554370),
    g = n(371651),
    h = n(610394),
    y = n(757744),
    v = n(981631);
function O(e, t) {
    let n = (0, a.e7)([s.Z], () => {
            var t;
            return null != (t = s.Z.getWindow(e)) ? t : window;
        }),
        r = (0, a.e7)([h.ZP], () => {
            let e = h.ZP.getFocusedPID();
            return !f.isPlatformEmbedded || (null != e && e !== b.UNSET_PID);
        }),
        [u, m] = o.useState(r);
    (0, l.Ng)(() => {
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
    let y = o.useCallback(() => {
        n.requestAnimationFrame(() => {
            try {
                i.Z.successfullyShown((0, b.getPID)()), p.ZP.showInactive(e);
            } catch (t) {
                t.message.includes('IPC') &&
                    setTimeout(() => {
                        p.ZP.showInactive(e);
                    }, 100);
            }
        });
    }, [e, n]);
    return (
        o.useEffect(() => {
            !u && r && r && (m(!0), y());
        }, [y, u, r, e]),
        (0, l.Ng)(() => {
            var e;
            u && y();
            let n = null != (e = h.ZP.getFocusedPID()) ? e : (0, b.getPID)(),
                r = null != _.Z.getVoiceChannelId();
            i.Z.track(v.rMx.OVERLAY_INITIALIZED, {
                voice_widget_connected: r,
                text_widget_connected: h.ZP.isPinned(v.Odu.TEXT),
                overlay_render_method: c.gl[g.default.getOverlayMethod(n)],
                unpinned_widget_types: d.Z.getAllUnpinnedPinnedWidgets(t)
            });
        }),
        u
    );
}
function I(e) {
    let { withTitleBar: t, windowKey: n } = e;
    return O(n, y.$)
        ? (0, r.jsx)(u.Z, {
              withTitleBar: t,
              windowKey: n,
              title: 'Discord Overlay',
              children: (0, r.jsx)(m.Z, {})
          })
        : null;
}
