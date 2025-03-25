n.r(t),
    n.d(t, {
        default: () => S,
        useOverlayInitialFocus: () => I
    }),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    u = n(13245),
    o = n(615287),
    c = n(493773),
    a = n(522474),
    s = n(238246),
    d = n(355863),
    f = n(944486),
    g = n(358085);
n(606206);
var O = n(998502),
    y = n(145597);
n(371467);
var p = n(554370),
    h = n(371651),
    E = n(610394),
    P = n(757744),
    v = n(981631);
function I(e, t) {
    let n = (0, l.e7)([a.Z], () => {
            var t;
            return null !== (t = a.Z.getWindow(e)) && void 0 !== t ? t : window;
        }),
        r = (0, l.e7)([E.ZP], () => {
            let e = E.ZP.getFocusedPID();
            return !g.isPlatformEmbedded || (null != e && e !== y.UNSET_PID);
        }),
        [s, p] = i.useState(r);
    (0, c.Ng)(() => {
        let e = (e) => {
            e.data === E.Il &&
                n.requestAnimationFrame(() => {
                    n.requestAnimationFrame(() => {
                        window.parent.postMessage(E.A8, '*');
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
    let P = i.useCallback(() => {
        n.requestAnimationFrame(() => {
            try {
                u.Z.successfullyShown((0, y.getPID)()), O.ZP.showInactive(e);
            } catch (t) {
                t.message.includes('IPC') &&
                    setTimeout(() => {
                        O.ZP.showInactive(e);
                    }, 100);
            }
        });
    }, [e, n]);
    return (
        i.useEffect(() => {
            !s && r && r && (p(!0), P());
        }, [P, s, r, e]),
        (0, c.Ng)(() => {
            var e;
            s && P();
            let n = null !== (e = E.ZP.getFocusedPID()) && void 0 !== e ? e : (0, y.getPID)(),
                r = null != f.Z.getVoiceChannelId();
            u.Z.track(v.rMx.OVERLAY_INITIALIZED, {
                voice_widget_connected: r,
                text_widget_connected: E.ZP.isPinned(v.Odu.TEXT),
                overlay_render_method: o.gl[h.default.getOverlayMethod(n)],
                unpinned_widget_types: d.Z.getAllUnpinnedPinnedWidgets(t)
            });
        }),
        s
    );
}
function S(e) {
    let { withTitleBar: t, windowKey: n } = e;
    return I(n, P.$)
        ? (0, r.jsx)(s.Z, {
              withTitleBar: t,
              windowKey: n,
              title: 'Discord Overlay',
              children: (0, r.jsx)(p.Z, {})
          })
        : null;
}
