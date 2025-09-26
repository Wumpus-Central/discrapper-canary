n.r(t), n.d(t, { default: () => P }), n(388685), n(415506);
var a = n(951288),
    o = n(647438),
    r = n(442837),
    i = n(13245),
    c = n(493773),
    _ = n(686546),
    l = n(710845),
    d = n(522474),
    u = n(238246),
    s = n(355863),
    f = n(944486),
    h = n(808506),
    p = n(358085);
n(606206);
var b = n(998502),
    g = n(145597);
n(371467);
var m = n(41534),
    v = n(837268),
    C = n(554370),
    I = n(371651),
    w = n(610394),
    y = n(253506),
    x = n(757744),
    B = n(981631);
let S = new l.Z("AppOverlay");
async function W(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1000,
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (p.isPlatformEmbedded) {
        try {
            await b.ZP.isAlwaysOnTop(t);
        } catch (e) {
            S.error("Window does not exist while trying to show inactive", e), (0, m.D1)(e, v.gl.OutOfProcess);
        }
        for (let r = 0; r < a; r++)
            try {
                if (!(await b.ZP.waitForIPCReady(n, e))) throw Error("IPC not ready");
                b.ZP.showInactive(t);
                return;
            } catch (e) {
                var o;
                if ((null == (o = e.message) ? void 0 : o.includes("IPC")) && r < a - 1) {
                    let t = (n / 2) * Math.pow(2, r + 1);
                    S.error("Failed to show inactive, retrying in ".concat(t, "ms"), e),
                        await new Promise((e) => setTimeout(e, t));
                } else throw ((0, m.D1)(e, v.gl.OutOfProcess), e);
            }
    }
}
let P = o.memo(function (e) {
    let { withTitleBar: t, windowKey: n } = e,
        l = (function (e, t) {
            let n = (0, r.e7)([w.ZP], () => !p.isPlatformEmbedded || w.ZP.isWindowHandleInitialized()),
                a = (0, r.e7)([d.Z], () => d.Z.getWindow(e)),
                _ = (0, r.e7)([h.default], () => {
                    let e = h.default.getFocusedPID();
                    return !p.isPlatformEmbedded || (null != e && e !== g.UNSET_PID);
                }),
                [l, u] = o.useState(!1),
                b = o.useRef(!1),
                m = o.useCallback(() => {
                    let e = (0, g.getPID)(),
                        n = null != f.Z.getVoiceChannelId();
                    i.Z.track(B.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: w.ZP.isPinned(B.Odu.TEXT),
                        overlay_render_method: v.gl[I.default.getOverlayMethod(e)],
                        unpinned_widget_types: s.Z.getAllUnpinnedPinnedWidgets(t),
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
            let C = o.useRef(!1),
                x = o.useRef(null),
                P = o.useCallback(
                    async (e, t) => {
                        try {
                            if (
                                (await new Promise((t, n) => {
                                    let a = Date.now();
                                    x.current = setInterval(() => {
                                        if (
                                            (function () {
                                                let t = Array.from(
                                                        e.document.querySelectorAll('link[rel="stylesheet"]'),
                                                    ),
                                                    n = e.document.styleSheets,
                                                    a = new Map();
                                                for (let e of n) null != e.href && a.set(e.href, e);
                                                for (let e of t) {
                                                    if (null == e.href) continue;
                                                    let t = a.get(e.href);
                                                    if (null == t) return !1;
                                                    try {
                                                        if (0 === t.cssRules.length) return !1;
                                                    } catch (e) {}
                                                }
                                                return !0;
                                            })()
                                        ) {
                                            t(), clearInterval(x.current);
                                            return;
                                        }
                                        Date.now() - a > 120000 &&
                                            (n(Error("Timed out waiting for CSS to load")), clearInterval(x.current));
                                    }, 200);
                                }),
                                C.current)
                            )
                                return;
                            (0, y.Z)("cssLoaded", !0);
                        } catch (e) {
                            S.error("Timed out waiting for CSS to load", e),
                                i.Z.setOverlayCrashed((0, g.getPID)(), e),
                                (0, y.Z)("errorMessage", "CSS failed load");
                            return;
                        }
                        try {
                            if ((await W(e, t), C.current)) return;
                            i.Z.oopUiShowInactiveSuccess();
                        } catch (e) {
                            i.Z.setOverlayCrashed((0, g.getPID)(), e), (0, y.Z)("errorMessage", "showInactive failed");
                            return;
                        }
                        await new Promise((t) => {
                            e.setTimeout(() => t(), 100);
                        }),
                            C.current || (u(!0), m());
                    },
                    [m],
                ),
                T = o.useRef(!1);
            return (
                o.useEffect(() => {
                    if (!b.current && ((0, y.Z)("hasUseEffectFired", !0), (0, y.Z)("trackedPidFocused", _), n)) {
                        if (null == a) return void (0, y.Z)("errorMessage", "No targetOverlayWindow");
                        if (!_) {
                            T.current ||
                                (i.Z.updateOverlayState((0, g.getPID)(), v.mM.WAITING_FOR_PID_FOCUS), (T.current = !0));
                            return;
                        }
                        (b.current = !0), (0, y.Z)("reactInitializationStarted", !0), P(a, e);
                    }
                }, [P, _, e, a, n]),
                (0, c.zq)(() => {
                    clearInterval(x.current), (C.current = !0);
                }),
                l
            );
        })(n, x.$S),
        b = (0, r.e7)([h.default], () => h.default.isFocusedPidInputLocked());
    return l
        ? (0, a.jsxs)(u.Z, {
              themeOverride: B.BRd.MIDNIGHT,
              withTitleBar: t,
              windowKey: n,
              title: "Discord Overlay",
              hideModals: b,
              children: [(0, a.jsx)(C.Z, {}), (0, a.jsx)(_.Co, {})],
          })
        : null;
});
