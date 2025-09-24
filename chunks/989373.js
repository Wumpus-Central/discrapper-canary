t.r(n), t.d(n, { default: () => S }), t(415506), t(388685);
var a = t(951288),
    o = t(647438),
    r = t(442837),
    i = t(13245),
    c = t(493773),
    _ = t(686546),
    l = t(710845),
    d = t(522474),
    u = t(238246),
    s = t(355863),
    f = t(944486),
    h = t(808506),
    b = t(358085);
t(606206);
var p = t(998502),
    g = t(145597);
t(371467);
var m = t(41534),
    v = t(837268),
    C = t(554370),
    I = t(371651),
    w = t(610394),
    y = t(757744),
    x = t(981631);
let B = new l.Z("AppOverlay");
async function W(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1000,
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (b.isPlatformEmbedded) {
        try {
            await p.ZP.isAlwaysOnTop(n);
        } catch (e) {
            B.error("Window does not exist while trying to show inactive", e), (0, m.D1)(e, v.gl.OutOfProcess);
        }
        for (let r = 0; r < a; r++)
            try {
                if (!(await p.ZP.waitForIPCReady(t, e))) throw Error("IPC not ready");
                p.ZP.showInactive(n);
                return;
            } catch (e) {
                var o;
                if ((null == (o = e.message) ? void 0 : o.includes("IPC")) && r < a - 1) {
                    let n = (t / 2) * Math.pow(2, r + 1);
                    B.error("Failed to show inactive, retrying in ".concat(n, "ms"), e),
                        await new Promise((e) => setTimeout(e, n));
                } else throw ((0, m.D1)(e, v.gl.OutOfProcess), e);
            }
    }
}
let S = o.memo(function (e) {
    let { withTitleBar: n, windowKey: t } = e,
        l = (function (e, n) {
            let t = (0, r.e7)([w.ZP], () => !b.isPlatformEmbedded || w.ZP.isWindowHandleInitialized()),
                a = (0, r.e7)([d.Z], () => d.Z.getWindow(e)),
                _ = o.useRef(null),
                l = o.useRef(null),
                u = o.useRef(null),
                p = (0, r.e7)([h.default], () => {
                    let e = h.default.getFocusedPID();
                    return !b.isPlatformEmbedded || (null != e && e !== g.UNSET_PID);
                }),
                [m, C] = o.useState(!1),
                y = o.useRef(!1),
                B = o.useCallback(() => {
                    let e = (0, g.getPID)(),
                        t = null != f.Z.getVoiceChannelId();
                    i.Z.track(x.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: t,
                        text_widget_connected: w.ZP.isPinned(x.Odu.TEXT),
                        overlay_render_method: v.gl[I.default.getOverlayMethod(e)],
                        unpinned_widget_types: s.Z.getAllUnpinnedPinnedWidgets(n),
                    }),
                        i.Z.oopUiInitialized();
                }, [n]);
            (0, c.ZP)(() => {
                let e = (e) => {
                    let n = null != a ? a : window;
                    e.data === w.Il &&
                        n.requestAnimationFrame(() => {
                            n.requestAnimationFrame(() => {
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
            let S = o.useCallback(
                    (e, n) => {
                        null == _.current &&
                            ((u.current = () => {
                                null != _.current && e.cancelAnimationFrame(_.current),
                                    null != l.current && e.clearTimeout(l.current);
                            }),
                            (_.current = e.requestAnimationFrame(async () => {
                                try {
                                    await W(e, n), i.Z.oopUiShowInactiveSuccess();
                                } catch (e) {
                                    i.Z.setOverlayCrashed((0, g.getPID)(), e);
                                    return;
                                }
                                l.current = e.setTimeout(() => {
                                    C(!0), B(), (u.current = null);
                                }, 100);
                            })));
                    },
                    [B],
                ),
                T = o.useRef(!1);
            return (
                o.useEffect(() => {
                    if (!y.current && null != a && t) {
                        if (!p) {
                            T.current ||
                                (i.Z.updateOverlayState((0, g.getPID)(), v.mM.WAITING_FOR_PID_FOCUS), (T.current = !0));
                            return;
                        }
                        (y.current = !0), S(a, e);
                    }
                }, [S, p, e, a, t]),
                (0, c.zq)(() => {
                    var e;
                    null == (e = u.current) || e.call(u);
                }),
                m
            );
        })(t, y.$S),
        p = (0, r.e7)([h.default], () => h.default.isFocusedPidInputLocked());
    return l
        ? (0, a.jsxs)(u.Z, {
              themeOverride: x.BRd.MIDNIGHT,
              withTitleBar: n,
              windowKey: t,
              title: "Discord Overlay",
              hideModals: p,
              children: [(0, a.jsx)(C.Z, {}), (0, a.jsx)(_.Co, {})],
          })
        : null;
});
