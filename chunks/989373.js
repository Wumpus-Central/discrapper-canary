(n.r(t), n.d(t, { default: () => P }), n(415506), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(442837),
    l = n(13245),
    o = n(615287),
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
    g = n(145597);
n(371467);
var h = n(41534),
    v = n(554370),
    y = n(371651),
    E = n(610394),
    I = n(757744),
    O = n(981631);
let C = new u.Z('AppOverlay');
async function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1000,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (b.isPlatformEmbedded) {
        try {
            await m.ZP.isAlwaysOnTop(t);
        } catch (e) {
            (C.error('Window does not exist while trying to show inactive', e), (0, h.D1)(e, o.gl.OutOfProcess));
        }
        for (let a = 0; a < r; a++)
            try {
                if (!(await m.ZP.waitForIPCReady(n, e))) throw Error('IPC not ready');
                m.ZP.showInactive(t);
                return;
            } catch (e) {
                var i;
                if ((null == (i = e.message) ? void 0 : i.includes('IPC')) && a < r - 1) {
                    let t = (n / 2) * Math.pow(2, a + 1);
                    (C.error('Failed to show inactive, retrying in '.concat(t, 'ms'), e), await new Promise((e) => setTimeout(e, t)));
                } else throw ((0, h.D1)(e, o.gl.OutOfProcess), e);
            }
    }
}
let P = i.memo(function (e) {
    let { withTitleBar: t, windowKey: n } = e,
        u = (function (e, t) {
            let n = (0, a.e7)([s.Z], () => s.Z.getWindow(e)),
                r = i.useRef(null),
                u = i.useRef(null),
                d = i.useRef(null),
                m = (0, a.e7)([p.default], () => {
                    let e = p.default.getFocusedPID();
                    return !b.isPlatformEmbedded || (null != e && e !== g.UNSET_PID);
                }),
                [h, v] = i.useState(m),
                [I, C] = i.useState(!1),
                P = i.useCallback(() => {
                    let e = (0, g.getPID)(),
                        n = null != _.Z.getVoiceChannelId();
                    (l.Z.track(O.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: E.ZP.isPinned(O.Odu.TEXT),
                        overlay_render_method: o.gl[y.default.getOverlayMethod(e)],
                        unpinned_widget_types: f.Z.getAllUnpinnedPinnedWidgets(t)
                    }),
                        l.Z.successfullyShown(e));
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
            let A = i.useCallback(
                (e, t) => {
                    null == r.current &&
                        ((d.current = () => {
                            (null != r.current && e.cancelAnimationFrame(r.current), null != u.current && e.clearTimeout(u.current));
                        }),
                        (r.current = e.requestAnimationFrame(async () => {
                            try {
                                await S(e, t);
                            } catch (e) {
                                l.Z.setOverlayCrashed((0, g.getPID)(), e);
                                return;
                            }
                            u.current = e.setTimeout(() => {
                                (v(!0), C(!0), P(), (d.current = null));
                            }, 100);
                        })));
                },
                [P]
            );
            return (
                i.useEffect(() => {
                    (!h || null == n) && m && m && null != n && A(n, e);
                }, [A, h, m, e, n]),
                (0, c.Ng)(() => {
                    h && null != n && A(n, e);
                }),
                (0, c.zq)(() => {
                    null != d.current && d.current();
                }),
                I
            );
        })(n, I.$S),
        m = (0, g.getPID)(),
        h = (0, a.e7)([p.default], () => p.default.isInputLocked(m), [m]);
    return u
        ? (0, r.jsx)(d.Z, {
              withTitleBar: t,
              windowKey: n,
              title: 'Discord Overlay',
              hideModals: h,
              children: (0, r.jsx)(v.Z, {})
          })
        : null;
});
