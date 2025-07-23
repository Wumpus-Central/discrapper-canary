(n.r(t), n.d(t, { default: () => P }), n(415506), n(388685));
var r = n(255367),
    o = n(73800),
    i = n(442837),
    a = n(13245),
    l = n(615287),
    c = n(493773),
    u = n(710845),
    s = n(522474),
    d = n(238246),
    f = n(355863),
    _ = n(944486),
    p = n(808506),
    b = n(358085);
n(606206);
var m = n(998502),
    v = n(145597);
n(371467);
var g = n(41534),
    h = n(554370),
    y = n(371651),
    E = n(610394),
    O = n(757744),
    I = n(981631);
let C = new u.Z('AppOverlay');
async function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1000,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (b.isPlatformEmbedded) {
        try {
            await m.ZP.isAlwaysOnTop(t);
        } catch (e) {
            (C.error('Window does not exist while trying to show inactive', e), (0, g.D1)(e, l.gl.OutOfProcess));
        }
        for (let i = 0; i < r; i++)
            try {
                if (!(await m.ZP.waitForIPCReady(n, e))) throw Error('IPC not ready');
                m.ZP.showInactive(t);
                return;
            } catch (e) {
                var o;
                if ((null == (o = e.message) ? void 0 : o.includes('IPC')) && i < r - 1) {
                    let t = (n / 2) * Math.pow(2, i + 1);
                    (C.error('Failed to show inactive, retrying in '.concat(t, 'ms'), e), await new Promise((e) => setTimeout(e, t)));
                } else throw ((0, g.D1)(e, l.gl.OutOfProcess), e);
            }
    }
}
let P = o.memo(function (e) {
    let { withTitleBar: t, windowKey: n } = e,
        u = (function (e, t) {
            let n = (0, i.e7)([s.Z], () => s.Z.getWindow(e)),
                r = o.useRef(null),
                u = o.useRef(null),
                d = o.useRef(null),
                m = (0, i.e7)([p.default], () => {
                    let e = p.default.getFocusedPID();
                    return !b.isPlatformEmbedded || (null != e && e !== v.UNSET_PID);
                }),
                [g, h] = o.useState(m),
                [O, C] = o.useState(!1),
                P = o.useCallback(() => {
                    let e = (0, v.getPID)(),
                        n = null != _.Z.getVoiceChannelId();
                    (a.Z.track(I.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: E.ZP.isPinned(I.Odu.TEXT),
                        overlay_render_method: l.gl[y.default.getOverlayMethod(e)],
                        unpinned_widget_types: f.Z.getAllUnpinnedPinnedWidgets(t)
                    }),
                        a.Z.successfullyShown(e));
                }, [t]);
            (0, c.Ng)(() => {
                let e = (e) => {
                    let t = null != n ? n : window;
                    e.data === E.Il &&
                        t.requestAnimationFrame(() => {
                            t.requestAnimationFrame(() => {
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
            let w = o.useCallback(
                (e, t) => {
                    null == r.current &&
                        ((d.current = () => {
                            (null != r.current && e.cancelAnimationFrame(r.current), null != u.current && e.clearTimeout(u.current));
                        }),
                        (r.current = e.requestAnimationFrame(async () => {
                            try {
                                await S(e, t);
                            } catch (e) {
                                a.Z.setOverlayCrashed((0, v.getPID)(), e);
                                return;
                            }
                            u.current = e.setTimeout(() => {
                                (h(!0), C(!0), P(), (d.current = null));
                            }, 100);
                        })));
                },
                [P]
            );
            return (
                o.useEffect(() => {
                    (!g || null == n) && m && m && null != n && w(n, e);
                }, [w, g, m, e, n]),
                (0, c.Ng)(() => {
                    g && null != n && w(n, e);
                }),
                (0, c.zq)(() => {
                    null != d.current && d.current();
                }),
                O
            );
        })(n, O.$S),
        m = (0, v.getPID)(),
        g = (0, i.e7)([p.default], () => p.default.isInputLocked(m), [m]);
    return u
        ? (0, r.jsx)(d.Z, {
              withTitleBar: t,
              windowKey: n,
              title: 'Discord Overlay',
              hideModals: g,
              children: (0, r.jsx)(h.Z, {})
          })
        : null;
});
