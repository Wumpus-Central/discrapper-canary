(n.r(t), n.d(t, { default: () => P }), n(415506), n(388685));
var r = n(255367),
    o = n(73800),
    a = n(442837),
    i = n(13245),
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
var v = n(998502),
    m = n(145597);
n(371467);
var h = n(41534),
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
            await v.ZP.isAlwaysOnTop(t);
        } catch (e) {
            (C.error('Window does not exist while trying to show inactive', e), (0, h.D)(e, l.gl.OutOfProcess));
        }
        for (let a = 0; a < r; a++)
            try {
                if (!(await v.ZP.waitForIPCReady(n, e))) throw Error('IPC not ready');
                v.ZP.showInactive(t);
                return;
            } catch (e) {
                var o;
                if ((null == (o = e.message) ? void 0 : o.includes('IPC')) && a < r - 1) {
                    let t = (n / 2) * Math.pow(2, a + 1);
                    (C.error('Failed to show inactive, retrying in '.concat(t, 'ms'), e), await new Promise((e) => setTimeout(e, t)));
                } else throw ((0, h.D)(e, l.gl.OutOfProcess), e);
            }
    }
}
let P = o.memo(function (e) {
    let { withTitleBar: t, windowKey: n } = e,
        u = (function (e, t) {
            let n = (0, a.e7)([s.Z], () => s.Z.getWindow(e)),
                r = o.useRef(null),
                u = o.useRef(null),
                d = o.useRef(null),
                v = (0, a.e7)([p.default], () => {
                    let e = p.default.getFocusedPID();
                    return !b.isPlatformEmbedded || (null != e && e !== m.UNSET_PID);
                }),
                [h, g] = o.useState(v),
                [O, C] = o.useState(!1),
                P = o.useCallback(() => {
                    let e = (0, m.getPID)(),
                        n = null != _.Z.getVoiceChannelId();
                    (i.Z.track(E.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: I.ZP.isPinned(E.Odu.TEXT),
                        overlay_render_method: l.gl[y.default.getOverlayMethod(e)],
                        unpinned_widget_types: f.Z.getAllUnpinnedPinnedWidgets(t)
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
                                i.Z.setOverlayCrashed((0, m.getPID)(), e);
                                return;
                            }
                            u.current = e.setTimeout(() => {
                                (g(!0), C(!0), P(), (d.current = null));
                            }, 100);
                        })));
                },
                [P]
            );
            return (
                o.useEffect(() => {
                    (!h || null == n) && v && v && null != n && w(n, e);
                }, [w, h, v, e, n]),
                (0, c.Ng)(() => {
                    h && null != n && w(n, e);
                }),
                (0, c.zq)(() => {
                    null != d.current && d.current();
                }),
                O
            );
        })(n, O.$S),
        v = (0, m.getPID)(),
        h = (0, a.e7)([p.default], () => p.default.isInputLocked(v), [v]);
    return u
        ? (0, r.jsx)(d.Z, {
              withTitleBar: t,
              windowKey: n,
              title: 'Discord Overlay',
              hideModals: h,
              children: (0, r.jsx)(g.Z, {})
          })
        : null;
});
