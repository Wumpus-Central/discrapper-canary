(n.r(t), n.d(t, { default: () => w }), n(415506), n(388685));
var r = n(255367),
    a = n(73800),
    o = n(442837),
    i = n(13245),
    l = n(615287),
    c = n(493773),
    u = n(710845),
    d = n(522474),
    s = n(238246),
    _ = n(355863),
    f = n(944486),
    p = n(808506),
    b = n(358085);
n(606206);
var m = n(998502),
    h = n(145597);
n(371467);
var v = n(41534),
    g = n(554370),
    y = n(371651),
    I = n(610394),
    O = n(757744),
    E = n(981631);
let C = new u.Z('AppOverlay');
async function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1000,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (b.isPlatformEmbedded) {
        try {
            await m.ZP.isAlwaysOnTop(t);
        } catch (e) {
            (C.error('Window does not exist while trying to show inactive', e), (0, v.D)(e, l.gl.OutOfProcess));
        }
        for (let o = 0; o < r; o++)
            try {
                if (!(await m.ZP.waitForIPCReady(n, e))) throw Error('IPC not ready');
                m.ZP.showInactive(t);
                return;
            } catch (e) {
                var a;
                if ((null == (a = e.message) ? void 0 : a.includes('IPC')) && o < r - 1) {
                    let t = (n / 2) * Math.pow(2, o + 1);
                    (C.error('Failed to show inactive, retrying in '.concat(t, 'ms'), e), await new Promise((e) => setTimeout(e, t)));
                } else throw ((0, v.D)(e, l.gl.OutOfProcess), e);
            }
    }
}
let w = a.memo(function (e) {
    let { withTitleBar: t, windowKey: n } = e,
        u = (function (e, t) {
            let n = (0, o.e7)([d.Z], () => d.Z.getWindow(e)),
                r = a.useRef(null),
                u = a.useRef(null),
                s = a.useRef(null),
                m = (0, o.e7)([p.default], () => {
                    let e = p.default.getFocusedPID();
                    return !b.isPlatformEmbedded || (null != e && e !== h.UNSET_PID);
                }),
                [v, g] = a.useState(m),
                [O, C] = a.useState(!1),
                w = a.useCallback(() => {
                    let e = (0, h.getPID)(),
                        n = null != f.Z.getVoiceChannelId();
                    (i.Z.track(E.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: I.ZP.isPinned(E.Odu.TEXT),
                        overlay_render_method: l.gl[y.default.getOverlayMethod(e)],
                        unpinned_widget_types: _.Z.getAllUnpinnedPinnedWidgets(t)
                    }),
                        i.Z.successfullyShown(e));
                }, [t]);
            (0, c.Ng)(() => {
                let e = (e) => {
                    let t = null != n ? n : window;
                    e.data === I.Il &&
                        t.requestAnimationFrame(() => {
                            t.requestAnimationFrame(() => {
                                window.parent.postMessage(I.A8, '*');
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
            let P = a.useCallback(
                (e, t) => {
                    null == r.current &&
                        ((s.current = () => {
                            (null != r.current && e.cancelAnimationFrame(r.current), null != u.current && e.clearTimeout(u.current));
                        }),
                        (r.current = e.requestAnimationFrame(async () => {
                            try {
                                await S(e, t);
                            } catch (e) {
                                i.Z.setOverlayCrashed((0, h.getPID)(), e);
                                return;
                            }
                            u.current = e.setTimeout(() => {
                                (g(!0), C(!0), w(), (s.current = null));
                            }, 100);
                        })));
                },
                [w]
            );
            return (
                a.useEffect(() => {
                    (!v || null == n) && m && m && null != n && P(n, e);
                }, [P, v, m, e, n]),
                (0, c.Ng)(() => {
                    v && null != n && P(n, e);
                }),
                (0, c.zq)(() => {
                    null != s.current && s.current();
                }),
                O
            );
        })(n, O.$S),
        m = (0, h.getPID)(),
        v = (0, o.e7)([p.default], () => p.default.isInputLocked(m), [m]);
    return u
        ? (0, r.jsx)(s.Z, {
              withTitleBar: t,
              windowKey: n,
              title: 'Discord Overlay',
              hideModals: v,
              children: (0, r.jsx)(g.Z, {})
          })
        : null;
});
