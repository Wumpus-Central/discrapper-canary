n.r(t), n.d(t, { default: () => B }), n(415506), n(388685);
var a = n(951288),
    o = n(647438),
    r = n(442837),
    i = n(13245),
    c = n(493773),
    l = n(710845),
    _ = n(522474),
    u = n(238246),
    d = n(355863),
    f = n(944486),
    s = n(808506),
    p = n(358085);
n(606206);
var m = n(998502),
    h = n(145597);
n(371467);
var v = n(41534),
    b = n(837268),
    g = n(554370),
    I = n(371651),
    C = n(610394),
    y = n(757744),
    w = n(981631);
let S = new l.Z("AppOverlay");
async function x(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1000,
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (p.isPlatformEmbedded) {
        try {
            await m.ZP.isAlwaysOnTop(t);
        } catch (e) {
            S.error("Window does not exist while trying to show inactive", e), (0, v.D1)(e, b.gl.OutOfProcess);
        }
        for (let r = 0; r < a; r++)
            try {
                if (!(await m.ZP.waitForIPCReady(n, e))) throw Error("IPC not ready");
                m.ZP.showInactive(t);
                return;
            } catch (e) {
                var o;
                if ((null == (o = e.message) ? void 0 : o.includes("IPC")) && r < a - 1) {
                    let t = (n / 2) * Math.pow(2, r + 1);
                    S.error("Failed to show inactive, retrying in ".concat(t, "ms"), e),
                        await new Promise((e) => setTimeout(e, t));
                } else throw ((0, v.D1)(e, b.gl.OutOfProcess), e);
            }
    }
}
let B = o.memo(function (e) {
    let { withTitleBar: t, windowKey: n } = e,
        l = (function (e, t) {
            let n = (0, r.e7)([_.Z], () => _.Z.getWindow(e)),
                a = o.useRef(null),
                l = o.useRef(null),
                u = o.useRef(null),
                m = (0, r.e7)([s.default], () => {
                    let e = s.default.getFocusedPID();
                    return !p.isPlatformEmbedded || (null != e && e !== h.UNSET_PID);
                }),
                [v, g] = o.useState(m),
                [y, S] = o.useState(!1),
                B = o.useCallback(() => {
                    let e = (0, h.getPID)(),
                        n = null != f.Z.getVoiceChannelId();
                    i.Z.track(w.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: C.ZP.isPinned(w.Odu.TEXT),
                        overlay_render_method: b.gl[I.default.getOverlayMethod(e)],
                        unpinned_widget_types: d.Z.getAllUnpinnedPinnedWidgets(t),
                    }),
                        i.Z.successfullyShown(e);
                }, [t]);
            (0, c.Ng)(() => {
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
            let E = o.useCallback(
                (e, t) => {
                    null == a.current &&
                        ((u.current = () => {
                            null != a.current && e.cancelAnimationFrame(a.current),
                                null != l.current && e.clearTimeout(l.current);
                        }),
                        (a.current = e.requestAnimationFrame(async () => {
                            try {
                                await x(e, t);
                            } catch (e) {
                                i.Z.setOverlayCrashed((0, h.getPID)(), e);
                                return;
                            }
                            l.current = e.setTimeout(() => {
                                g(!0), S(!0), B(), (u.current = null);
                            }, 100);
                        })));
                },
                [B],
            );
            return (
                o.useEffect(() => {
                    (!v || null == n) && m && m && null != n && E(n, e);
                }, [E, v, m, e, n]),
                (0, c.Ng)(() => {
                    v && null != n && E(n, e);
                }),
                (0, c.zq)(() => {
                    null != u.current && u.current();
                }),
                y
            );
        })(n, y.$S),
        m = (0, h.getPID)(),
        v = (0, r.e7)([s.default], () => s.default.isInputLocked(m), [m]);
    return l
        ? (0, a.jsx)(u.Z, {
              themeOverride: w.BRd.MIDNIGHT,
              withTitleBar: t,
              windowKey: n,
              title: "Discord Overlay",
              hideModals: v,
              children: (0, a.jsx)(g.Z, {}),
          })
        : null;
});
