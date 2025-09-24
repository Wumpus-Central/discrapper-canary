t.r(n), t.d(n, { default: () => P }), t(415506), t(388685);
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
    p = t(358085);
t(606206);
var b = t(998502),
    g = t(145597);
t(371467);
var m = t(41534),
    v = t(837268),
    C = t(554370),
    I = t(371651),
    w = t(610394),
    y = t(253506),
    x = t(757744),
    B = t(981631);
let W = new l.Z("AppOverlay");
async function S(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1000,
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (p.isPlatformEmbedded) {
        try {
            await b.ZP.isAlwaysOnTop(n);
        } catch (e) {
            W.error("Window does not exist while trying to show inactive", e), (0, m.D1)(e, v.gl.OutOfProcess);
        }
        for (let r = 0; r < a; r++)
            try {
                if (!(await b.ZP.waitForIPCReady(t, e))) throw Error("IPC not ready");
                b.ZP.showInactive(n);
                return;
            } catch (e) {
                var o;
                if ((null == (o = e.message) ? void 0 : o.includes("IPC")) && r < a - 1) {
                    let n = (t / 2) * Math.pow(2, r + 1);
                    W.error("Failed to show inactive, retrying in ".concat(n, "ms"), e),
                        await new Promise((e) => setTimeout(e, n));
                } else throw ((0, m.D1)(e, v.gl.OutOfProcess), e);
            }
    }
}
let P = o.memo(function (e) {
    let { withTitleBar: n, windowKey: t } = e,
        l = (function (e, n) {
            let t = (0, r.e7)([w.ZP], () => !p.isPlatformEmbedded || w.ZP.isWindowHandleInitialized()),
                a = (0, r.e7)([d.Z], () => d.Z.getWindow(e)),
                _ = o.useRef(null),
                l = o.useRef(null),
                u = o.useRef(null),
                b = (0, r.e7)([h.default], () => {
                    let e = h.default.getFocusedPID();
                    return !p.isPlatformEmbedded || (null != e && e !== g.UNSET_PID);
                }),
                [m, C] = o.useState(!1),
                x = o.useRef(!1),
                W = o.useCallback(() => {
                    let e = (0, g.getPID)(),
                        t = null != f.Z.getVoiceChannelId();
                    i.Z.track(B.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: t,
                        text_widget_connected: w.ZP.isPinned(B.Odu.TEXT),
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
            let P = o.useCallback(
                    (e, n) => {
                        null == _.current &&
                            ((u.current = () => {
                                null != _.current && e.cancelAnimationFrame(_.current),
                                    null != l.current && e.clearTimeout(l.current);
                            }),
                            (_.current = e.requestAnimationFrame(async () => {
                                try {
                                    await S(e, n), i.Z.oopUiShowInactiveSuccess();
                                } catch (e) {
                                    i.Z.setOverlayCrashed((0, g.getPID)(), e);
                                    return;
                                }
                                l.current = e.setTimeout(() => {
                                    C(!0), W(), (u.current = null);
                                }, 100);
                            })));
                    },
                    [W],
                ),
                T = o.useRef(!1);
            return (
                o.useEffect(() => {
                    if (!x.current) {
                        if (((0, y.Z)("hasUseEffectFired", !0), (0, y.Z)("trackedPidFocused", b), null != a) && t) {
                            if (!b) {
                                T.current ||
                                    (i.Z.updateOverlayState((0, g.getPID)(), v.mM.WAITING_FOR_PID_FOCUS),
                                    (T.current = !0));
                                return;
                            }
                            (x.current = !0), (0, y.Z)("reactInitializationStarted", !0), P(a, e);
                        }
                    }
                }, [P, b, e, a, t]),
                (0, c.zq)(() => {
                    var e;
                    null == (e = u.current) || e.call(u);
                }),
                m
            );
        })(t, x.$S),
        b = (0, r.e7)([h.default], () => h.default.isFocusedPidInputLocked());
    return l
        ? (0, a.jsxs)(u.Z, {
              themeOverride: B.BRd.MIDNIGHT,
              withTitleBar: n,
              windowKey: t,
              title: "Discord Overlay",
              hideModals: b,
              children: [(0, a.jsx)(C.Z, {}), (0, a.jsx)(_.Co, {})],
          })
        : null;
});
