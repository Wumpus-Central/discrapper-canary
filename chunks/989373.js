n.r(t), n.d(t, { default: () => B }), n(415506), n(388685);
var a = n(951288),
    o = n(647438),
    r = n(442837),
    i = n(13245),
    c = n(493773),
    l = n(686546),
    _ = n(710845),
    d = n(522474),
    u = n(238246),
    f = n(355863),
    s = n(944486),
    p = n(808506),
    h = n(358085);
n(606206);
var m = n(998502),
    v = n(145597);
n(371467);
var b = n(41534),
    I = n(837268),
    g = n(554370),
    C = n(371651),
    w = n(610394),
    y = n(757744),
    S = n(981631);
let x = new _.Z("AppOverlay");
async function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1000,
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (h.isPlatformEmbedded) {
        try {
            await m.ZP.isAlwaysOnTop(t);
        } catch (e) {
            x.error("Window does not exist while trying to show inactive", e), (0, b.D1)(e, I.gl.OutOfProcess);
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
                    x.error("Failed to show inactive, retrying in ".concat(t, "ms"), e),
                        await new Promise((e) => setTimeout(e, t));
                } else throw ((0, b.D1)(e, I.gl.OutOfProcess), e);
            }
    }
}
let B = o.memo(function (e) {
    let { withTitleBar: t, windowKey: n } = e,
        _ = (function (e, t) {
            let n = (0, r.e7)([w.ZP], () => !h.isPlatformEmbedded || w.ZP.isWindowHandleInitialized()),
                a = (0, r.e7)([d.Z], () => d.Z.getWindow(e)),
                l = o.useRef(null),
                _ = o.useRef(null),
                u = o.useRef(null),
                m = (0, r.e7)([p.default], () => {
                    let e = p.default.getFocusedPID();
                    return !h.isPlatformEmbedded || (null != e && e !== v.UNSET_PID);
                }),
                [b, g] = o.useState(!1),
                y = o.useRef(!1),
                x = o.useCallback(() => {
                    let e = (0, v.getPID)(),
                        n = null != s.Z.getVoiceChannelId();
                    i.Z.track(S.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: w.ZP.isPinned(S.Odu.TEXT),
                        overlay_render_method: I.gl[C.default.getOverlayMethod(e)],
                        unpinned_widget_types: f.Z.getAllUnpinnedPinnedWidgets(t),
                    }),
                        i.Z.oopUiInitialized();
                }, [t]);
            (0, c.ZP)(() => {
                let e = (e) => {
                    let t = null != a ? a : window;
                    e.data === w.Il &&
                        t.requestAnimationFrame(() => {
                            t.requestAnimationFrame(() => {
                                window.parent.postMessage(w.A8, "*");
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
            let B = o.useCallback(
                (e, t) => {
                    null == l.current &&
                        ((u.current = () => {
                            null != l.current && e.cancelAnimationFrame(l.current),
                                null != _.current && e.clearTimeout(_.current);
                        }),
                        (l.current = e.requestAnimationFrame(async () => {
                            try {
                                await E(e, t), i.Z.oopUiShowInactiveSuccess();
                            } catch (e) {
                                i.Z.setOverlayCrashed((0, v.getPID)(), e);
                                return;
                            }
                            _.current = e.setTimeout(() => {
                                g(!0), x(), (u.current = null);
                            }, 100);
                        })));
                },
                [x],
            );
            return (
                o.useEffect(() => {
                    m && null != a && n && (y.current || ((y.current = !0), B(a, e)));
                }, [B, m, e, a, n]),
                (0, c.zq)(() => {
                    var e;
                    null == (e = u.current) || e.call(u);
                }),
                b
            );
        })(n, y.$S),
        m = (0, v.getPID)(),
        b = (0, r.e7)([p.default], () => p.default.isInputLocked(m), [m]);
    return _
        ? (0, a.jsxs)(u.Z, {
              themeOverride: S.BRd.MIDNIGHT,
              withTitleBar: t,
              windowKey: n,
              title: "Discord Overlay",
              hideModals: b,
              children: [(0, a.jsx)(g.Z, {}), (0, a.jsx)(l.Co, {})],
          })
        : null;
});
