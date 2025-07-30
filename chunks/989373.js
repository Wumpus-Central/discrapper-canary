(n.r(t), n.d(t, { default: () => P }), n(415506), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(442837),
    l = n(13245),
    o = n(493773),
    c = n(710845),
    u = n(522474),
    s = n(238246),
    d = n(355863),
    f = n(944486),
    _ = n(808506),
    p = n(358085);
n(606206);
var b = n(998502),
    m = n(145597);
n(371467);
var g = n(41534),
    h = n(837268),
    v = n(554370),
    y = n(371651),
    E = n(610394),
    I = n(757744),
    O = n(981631);
let C = new c.Z('AppOverlay');
async function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1000,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (p.isPlatformEmbedded) {
        try {
            await b.ZP.isAlwaysOnTop(t);
        } catch (e) {
            (C.error('Window does not exist while trying to show inactive', e), (0, g.D1)(e, h.gl.OutOfProcess));
        }
        for (let a = 0; a < r; a++)
            try {
                if (!(await b.ZP.waitForIPCReady(n, e))) throw Error('IPC not ready');
                b.ZP.showInactive(t);
                return;
            } catch (e) {
                var i;
                if ((null == (i = e.message) ? void 0 : i.includes('IPC')) && a < r - 1) {
                    let t = (n / 2) * Math.pow(2, a + 1);
                    (C.error('Failed to show inactive, retrying in '.concat(t, 'ms'), e), await new Promise((e) => setTimeout(e, t)));
                } else throw ((0, g.D1)(e, h.gl.OutOfProcess), e);
            }
    }
}
let P = i.memo(function (e) {
    let { withTitleBar: t, windowKey: n } = e,
        c = (function (e, t) {
            let n = (0, a.e7)([u.Z], () => u.Z.getWindow(e)),
                r = i.useRef(null),
                c = i.useRef(null),
                s = i.useRef(null),
                b = (0, a.e7)([_.default], () => {
                    let e = _.default.getFocusedPID();
                    return !p.isPlatformEmbedded || (null != e && e !== m.UNSET_PID);
                }),
                [g, v] = i.useState(b),
                [I, C] = i.useState(!1),
                P = i.useCallback(() => {
                    let e = (0, m.getPID)(),
                        n = null != f.Z.getVoiceChannelId();
                    (l.Z.track(O.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: E.ZP.isPinned(O.Odu.TEXT),
                        overlay_render_method: h.gl[y.default.getOverlayMethod(e)],
                        unpinned_widget_types: d.Z.getAllUnpinnedPinnedWidgets(t)
                    }),
                        l.Z.successfullyShown(e));
                }, [t]);
            (0, o.Ng)(() => {
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
            let A = i.useCallback(
                (e, t) => {
                    null == r.current &&
                        ((s.current = () => {
                            (null != r.current && e.cancelAnimationFrame(r.current), null != c.current && e.clearTimeout(c.current));
                        }),
                        (r.current = e.requestAnimationFrame(async () => {
                            try {
                                await S(e, t);
                            } catch (e) {
                                l.Z.setOverlayCrashed((0, m.getPID)(), e);
                                return;
                            }
                            c.current = e.setTimeout(() => {
                                (v(!0), C(!0), P(), (s.current = null));
                            }, 100);
                        })));
                },
                [P]
            );
            return (
                i.useEffect(() => {
                    (!g || null == n) && b && b && null != n && A(n, e);
                }, [A, g, b, e, n]),
                (0, o.Ng)(() => {
                    g && null != n && A(n, e);
                }),
                (0, o.zq)(() => {
                    null != s.current && s.current();
                }),
                I
            );
        })(n, I.$S),
        b = (0, m.getPID)(),
        g = (0, a.e7)([_.default], () => _.default.isInputLocked(b), [b]);
    return c
        ? (0, r.jsx)(s.Z, {
              withTitleBar: t,
              windowKey: n,
              title: 'Discord Overlay',
              hideModals: g,
              children: (0, r.jsx)(v.Z, {})
          })
        : null;
});
