n.r(t),
    n.d(t, {
        default: () => S,
        useOverlayInitialFocus: () => y
    }),
    n(388685);
var a = n(200651),
    i = n(192379),
    r = n(442837),
    o = n(13245),
    c = n(615287),
    l = n(493773),
    _ = n(522474),
    s = n(238246),
    d = n(355863),
    u = n(944486),
    f = n(358085);
n(606206);
var m = n(998502),
    p = n(145597);
n(371467);
var g = n(554370),
    v = n(371651),
    b = n(610394),
    h = n(757744),
    I = n(981631);
function y(e, t) {
    let n = (0, r.e7)([_.Z], () => {
            var t;
            return null != (t = _.Z.getWindow(e)) ? t : window;
        }),
        a = (0, r.e7)([b.default], () => {
            let e = b.default.getFocusedPID();
            return !f.isPlatformEmbedded || (null != e && e !== p.UNSET_PID);
        }),
        [s, g] = i.useState(a);
    (0, l.Ng)(() => {
        let e = (e) => {
            e.data === b.REPAINT_REQUEST_MESSAGE &&
                n.requestAnimationFrame(() => {
                    n.requestAnimationFrame(() => {
                        window.parent.postMessage(b.REPAINT_COMPLETE_MESSAGE, '*');
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
    let h = i.useCallback(() => {
        n.requestAnimationFrame(() => {
            try {
                o.Z.successfullyShown((0, p.getPID)()), m.ZP.showInactive(e);
            } catch (t) {
                t.message.includes('IPC') &&
                    setTimeout(() => {
                        m.ZP.showInactive(e);
                    }, 100);
            }
        });
    }, [e, n]);
    return (
        i.useEffect(() => {
            !s && a && a && (g(!0), h());
        }, [h, s, a, e]),
        (0, l.Ng)(() => {
            var e;
            s && h();
            let n = null != (e = b.default.getFocusedPID()) ? e : (0, p.getPID)(),
                a = null != u.Z.getVoiceChannelId();
            o.Z.track(I.rMx.OVERLAY_INITIALIZED, {
                voice_widget_connected: a,
                text_widget_connected: b.default.isPinned(I.Odu.TEXT),
                overlay_render_method: c.gl[v.default.getOverlayMethod(n)],
                unpinned_widget_types: d.Z.getAllUnpinnedPinnedWidgets(t)
            });
        }),
        s
    );
}
function S(e) {
    let { withTitleBar: t, windowKey: n } = e;
    return y(n, h.$)
        ? (0, a.jsx)(s.Z, {
              withTitleBar: t,
              windowKey: n,
              title: 'Discord Overlay',
              children: (0, a.jsx)(g.Z, {})
          })
        : null;
}
