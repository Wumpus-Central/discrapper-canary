(n.r(t), n.d(t, { default: () => w }), n(415506), n(388685));
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(13245),
    l = n(615287),
    c = n(493773),
    u = n(710845),
    d = n(522474),
    s = n(238246),
    _ = n(355863),
    f = n(944486),
    p = n(808506),
    m = n(358085);
n(606206);
var b = n(998502),
    v = n(145597);
n(371467);
var h = n(41534),
    g = n(554370),
    y = n(371651),
    I = n(610394),
    S = n(757744),
    E = n(981631);
let O = new u.Z('AppOverlay');
async function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1000,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (m.isPlatformEmbedded) {
        try {
            await b.ZP.isAlwaysOnTop(t);
        } catch (e) {
            (O.error('Window does not exist while trying to show inactive', e), (0, h.D)(e, l.gl.OutOfProcess));
        }
        for (let o = 0; o < r; o++)
            try {
                if (!(await b.ZP.waitForIPCReady(n, e))) throw Error('IPC not ready');
                b.ZP.showInactive(t);
                return;
            } catch (e) {
                var i;
                if ((null == (i = e.message) ? void 0 : i.includes('IPC')) && o < r - 1) {
                    let t = (n / 2) * Math.pow(2, o + 1);
                    (O.error('Failed to show inactive, retrying in '.concat(t, 'ms'), e), await new Promise((e) => setTimeout(e, t)));
                } else throw ((0, h.D)(e, l.gl.OutOfProcess), e);
            }
    }
}
let w = i.memo(function (e) {
    let { withTitleBar: t, windowKey: n } = e,
        u = (function (e, t) {
            let n = (0, o.e7)([d.Z], () => d.Z.getWindow(e)),
                r = i.useRef(null),
                u = i.useRef(null),
                s = i.useRef(null),
                b = (0, o.e7)([p.default], () => {
                    let e = p.default.getFocusedPID();
                    return !m.isPlatformEmbedded || (null != e && e !== v.UNSET_PID);
                }),
                [h, g] = i.useState(b),
                [S, O] = i.useState(!1),
                w = i.useCallback(() => {
                    let e = (0, v.getPID)(),
                        n = null != f.Z.getVoiceChannelId();
                    (a.Z.track(E.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: I.ZP.isPinned(E.Odu.TEXT),
                        overlay_render_method: l.gl[y.default.getOverlayMethod(e)],
                        unpinned_widget_types: _.Z.getAllUnpinnedPinnedWidgets(t)
                    }),
                        a.Z.successfullyShown(e));
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
            let P = i.useCallback(
                (e, t) => {
                    null == r.current &&
                        ((s.current = () => {
                            (null != r.current && e.cancelAnimationFrame(r.current), null != u.current && e.clearTimeout(u.current));
                        }),
                        (r.current = e.requestAnimationFrame(async () => {
                            try {
                                await C(e, t);
                            } catch (e) {
                                a.Z.setOverlayCrashed((0, v.getPID)(), e);
                                return;
                            }
                            u.current = e.setTimeout(() => {
                                (g(!0), O(!0), w(), (s.current = null));
                            }, 100);
                        })));
                },
                [w]
            );
            return (
                i.useEffect(() => {
                    (!h || null == n) && b && b && null != n && P(n, e);
                }, [P, h, b, e, n]),
                (0, c.Ng)(() => {
                    h && null != n && P(n, e);
                }),
                (0, c.zq)(() => {
                    null != s.current && s.current();
                }),
                S
            );
        })(n, S.$S),
        b = (0, v.getPID)(),
        h = (0, o.e7)([p.default], () => p.default.isInputLocked(b), [b]);
    return u
        ? (0, r.jsx)(s.Z, {
              withTitleBar: t,
              windowKey: n,
              title: 'Discord Overlay',
              hideModals: h,
              children: (0, r.jsx)(g.Z, {})
          })
        : null;
});
