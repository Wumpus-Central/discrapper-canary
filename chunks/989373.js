n.r(t), n.d(t, { default: () => w }), n(415506), n(388685);
var r = n(255367),
    a = n(73800),
    o = n(442837),
    l = n(13245),
    i = n(493773),
    c = n(710845),
    u = n(522474),
    d = n(238246),
    s = n(355863),
    f = n(944486),
    _ = n(808506),
    h = n(358085);
n(606206);
var b = n(998502),
    p = n(145597);
n(371467);
var g = n(41534),
    v = n(837268),
    m = n(554370),
    E = n(371651),
    C = n(610394),
    y = n(757744),
    O = n(981631);
let I = new c.Z("AppOverlay");
async function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1000,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (h.isPlatformEmbedded) {
        try {
            await b.ZP.isAlwaysOnTop(t);
        } catch (e) {
            I.error("Window does not exist while trying to show inactive", e), (0, g.D1)(e, v.gl.OutOfProcess);
        }
        for (let o = 0; o < r; o++)
            try {
                if (!(await b.ZP.waitForIPCReady(n, e))) throw Error("IPC not ready");
                b.ZP.showInactive(t);
                return;
            } catch (e) {
                var a;
                if ((null == (a = e.message) ? void 0 : a.includes("IPC")) && o < r - 1) {
                    let t = (n / 2) * Math.pow(2, o + 1);
                    I.error("Failed to show inactive, retrying in ".concat(t, "ms"), e),
                        await new Promise((e) => setTimeout(e, t));
                } else throw ((0, g.D1)(e, v.gl.OutOfProcess), e);
            }
    }
}
let w = a.memo(function (e) {
    let { withTitleBar: t, windowKey: n } = e,
        c = (function (e, t) {
            let n = (0, o.e7)([u.Z], () => u.Z.getWindow(e)),
                r = a.useRef(null),
                c = a.useRef(null),
                d = a.useRef(null),
                b = (0, o.e7)([_.default], () => {
                    let e = _.default.getFocusedPID();
                    return !h.isPlatformEmbedded || (null != e && e !== p.UNSET_PID);
                }),
                [g, m] = a.useState(b),
                [y, I] = a.useState(!1),
                w = a.useCallback(() => {
                    let e = (0, p.getPID)(),
                        n = null != f.Z.getVoiceChannelId();
                    l.Z.track(O.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: C.ZP.isPinned(O.Odu.TEXT),
                        overlay_render_method: v.gl[E.default.getOverlayMethod(e)],
                        unpinned_widget_types: s.Z.getAllUnpinnedPinnedWidgets(t),
                    }),
                        l.Z.successfullyShown(e);
                }, [t]);
            (0, i.Ng)(() => {
                let e = (e) => {
                    let t = null != n ? n : window;
                    e.data === C.Il &&
                        t.requestAnimationFrame(() => {
                            t.requestAnimationFrame(() => {
                                window.parent.postMessage(C.A8, "*");
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
            let P = a.useCallback(
                (e, t) => {
                    null == r.current &&
                        ((d.current = () => {
                            null != r.current && e.cancelAnimationFrame(r.current),
                                null != c.current && e.clearTimeout(c.current);
                        }),
                        (r.current = e.requestAnimationFrame(async () => {
                            try {
                                await S(e, t);
                            } catch (e) {
                                l.Z.setOverlayCrashed((0, p.getPID)(), e);
                                return;
                            }
                            c.current = e.setTimeout(() => {
                                m(!0), I(!0), w(), (d.current = null);
                            }, 100);
                        })));
                },
                [w],
            );
            return (
                a.useEffect(() => {
                    (!g || null == n) && b && b && null != n && P(n, e);
                }, [P, g, b, e, n]),
                (0, i.Ng)(() => {
                    g && null != n && P(n, e);
                }),
                (0, i.zq)(() => {
                    null != d.current && d.current();
                }),
                y
            );
        })(n, y.$S),
        b = (0, p.getPID)(),
        g = (0, o.e7)([_.default], () => _.default.isInputLocked(b), [b]);
    return c
        ? (0, r.jsx)(d.Z, {
              withTitleBar: t,
              windowKey: n,
              title: "Discord Overlay",
              hideModals: g,
              children: (0, r.jsx)(m.Z, {}),
          })
        : null;
});
