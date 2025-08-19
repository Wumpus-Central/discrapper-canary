n.r(t), n.d(t, { default: () => I }), n(388685);
var r = n(951288),
    i = n(647438),
    o = n(442837),
    l = n(13245),
    a = n(493773),
    c = n(522474),
    u = n(238246),
    s = n(355863),
    d = n(944486),
    f = n(808506),
    _ = n(358085);
n(606206);
var p = n(145597);
n(371467);
var b = n(837268),
    h = n(554370),
    v = n(371651),
    m = n(610394),
    g = n(757744),
    y = n(981631);
let I = i.memo(function (e) {
    let { withTitleBar: t, windowKey: n } = e,
        I = (function (e, t) {
            let n = (0, o.e7)([c.Z], () => c.Z.getWindow(e)),
                r = i.useRef(null),
                u = i.useRef(null),
                h = i.useRef(null),
                g = (0, o.e7)([f.default], () => {
                    let e = f.default.getFocusedPID();
                    return !_.isPlatformEmbedded || (null != e && e !== p.UNSET_PID);
                }),
                [I, O] = i.useState(g),
                [E, S] = i.useState(!1),
                C = i.useCallback(() => {
                    let e = (0, p.getPID)(),
                        n = null != d.Z.getVoiceChannelId();
                    l.Z.track(y.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: m.ZP.isPinned(y.Odu.TEXT),
                        overlay_render_method: b.gl[v.default.getOverlayMethod(e)],
                        unpinned_widget_types: s.Z.getAllUnpinnedPinnedWidgets(t),
                    }),
                        l.Z.successfullyShown(e);
                }, [t]);
            (0, a.Ng)(() => {
                let e = (e) => {
                    let t = null != n ? n : window;
                    e.data === m.Il &&
                        t.requestAnimationFrame(() => {
                            t.requestAnimationFrame(() => {
                                window.parent.postMessage(m.A8, "*");
                            });
                        });
                };
                return (
                    window.addEventListener("message", e),
                    () => {
                        window.removeEventListener("message", e);
                    }
                );
            });
            let P = i.useCallback(
                (e) => {
                    null == r.current &&
                        ((h.current = () => {
                            null != r.current && e.cancelAnimationFrame(r.current),
                                null != u.current && e.clearTimeout(u.current);
                        }),
                        (r.current = e.requestAnimationFrame(() => {
                            u.current = e.setTimeout(() => {
                                O(!0), S(!0), C(), (h.current = null);
                            }, 100);
                        })));
                },
                [C],
            );
            return (
                i.useEffect(() => {
                    (!I || null == n) && g && g && null != n && P(n);
                }, [P, I, g, n]),
                (0, a.Ng)(() => {
                    I && null != n && P(n);
                }),
                (0, a.zq)(() => {
                    null != h.current && h.current();
                }),
                E
            );
        })(n, g.$S),
        O = (0, p.getPID)(),
        E = (0, o.e7)([f.default], () => f.default.isInputLocked(O), [O]);
    return I
        ? (0, r.jsx)(u.Z, {
              withTitleBar: t,
              windowKey: n,
              title: "Discord Overlay",
              hideModals: E,
              children: (0, r.jsx)(h.Z, {}),
          })
        : null;
});
