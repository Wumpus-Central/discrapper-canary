n.r(t),
    n.d(t, {
        default: () => F,
        waitForCSSLoad: () => x,
    }),
    n(388685),
    n(415506);
var a = n(54381),
    o = n(473749),
    c = n(442837),
    r = n(13245),
    i = n(493773),
    l = n(686546),
    d = n(710845),
    f = n(522474),
    u = n(238246),
    s = n(355863),
    b = n(944486),
    h = n(451478),
    p = n(358085),
    g = n(998502),
    I = n(145597),
    C = n(830917),
    m = n(338388),
    _ = n(837268),
    v = n(554370),
    Z = n(371651),
    w = n(610394),
    y = n(932404),
    S = n(322155),
    P = n(253506),
    T = n(757744),
    B = n(981631);
n(371467), n(606206);
let D = !p.isPlatformEmbedded && !1,
    W = new d.Z("AppOverlay");
function x(e, t) {
    return new Promise((n, a) => {
        let o = Date.now();
        t.current = setInterval(() => {
            if (
                (function () {
                    let t = Array.from(e.document.querySelectorAll('link[rel="stylesheet"]')),
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
                n(), clearInterval(t.current);
                return;
            }
            Date.now() - o > 120000 && (a(Error("Timed out waiting for CSS to load")), clearInterval(t.current));
        }, 200);
    });
}
async function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1000,
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (p.isPlatformEmbedded) {
        try {
            await g.ZP.isAlwaysOnTop(t);
        } catch (e) {
            W.error("Window does not exist while trying to show inactive", e), (0, m.D1)(e, _.gl.OutOfProcess);
        }
        for (let c = 0; c < a; c++)
            try {
                if (!(await g.ZP.waitForIPCReady(n, e))) throw Error("IPC not ready");
                g.ZP.showInactive(t);
                return;
            } catch (e) {
                var o;
                if ((null == (o = e.message) ? void 0 : o.includes("IPC")) && c < a - 1) {
                    let t = (n / 2) * Math.pow(2, c + 1);
                    W.error("Failed to show inactive, retrying in ".concat(t, "ms"), e),
                        await new Promise((e) => setTimeout(e, t));
                } else throw ((0, m.D1)(e, _.gl.OutOfProcess), e);
            }
    }
}
function k() {
    r.Z.setFocusedPID(I.DEV_PID, null);
}
function O() {
    r.Z.setFocusedPID(null, null);
}
let F = o.memo(function (e) {
    let { withTitleBar: t, windowKey: n } = e,
        d = (0, c.e7)([f.Z], () => f.Z.getWindow(n));
    (0, i.ZP)(() => {
        if (null != d)
            return (
                D &&
                    (d.document.hasFocus() && r.Z.setFocusedPID(I.DEV_PID, null),
                    d.addEventListener("focus", k),
                    d.addEventListener("blur", O)),
                () => {
                    D && (d.removeEventListener("focus", k), d.removeEventListener("blur", O));
                }
            );
    });
    let g = (function (e, t) {
            let n = (0, c.e7)([w.Z], () => !p.isPlatformEmbedded || w.Z.isWindowHandleInitialized()),
                a = (0, c.e7)([f.Z], () => f.Z.getWindow(e)),
                l = (0, c.e7)([w.Z], () => w.Z.getFocusedPID()),
                d = o.useMemo(() => !p.isPlatformEmbedded || (null != l && l !== I.UNSET_PID), [l]),
                [u, g] = o.useState(!1),
                m = o.useRef(!1),
                v = o.useCallback(() => {
                    let e = w.Z.getTargetPID(),
                        n = null != b.Z.getVoiceChannelId();
                    r.Z.track(B.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: w.Z.isPinned(B.Odu.TEXT),
                        overlay_render_method: _.gl[Z.default.getOverlayMethod(e)],
                        unpinned_widget_types: s.Z.getAllUnpinnedPinnedWidgets(t),
                    }),
                        (0, y.ry)();
                }, [t]),
                S = o.useRef(!1),
                T = o.useRef(null),
                D = o.useCallback(
                    async (e, t) => {
                        try {
                            if ((await x(e, T), S.current)) return;
                            (0, P.Z)("cssLoaded", !0);
                        } catch (e) {
                            W.error("Timed out waiting for CSS to load", e),
                                r.Z.setOverlayCrashed(w.Z.getTargetPID(), e),
                                (0, P.Z)("errorMessage", "CSS failed load");
                            return;
                        }
                        try {
                            if ((await E(e, t), S.current)) return;
                            (0, y.Dv)();
                        } catch (e) {
                            r.Z.setOverlayCrashed(w.Z.getTargetPID(), e),
                                (0, P.Z)("errorMessage", "showInactive failed");
                            return;
                        }
                        await new Promise((t) => {
                            e.setTimeout(() => t(), 100);
                        }),
                            S.current || (g(!0), v());
                    },
                    [v],
                ),
                k = o.useRef(!1);
            o.useEffect(() => {
                if (!m.current && ((0, P.Z)("hasUseEffectFired", !0), (0, P.Z)("trackedPidFocused", d), n)) {
                    if (null == a) return void (0, P.Z)("errorMessage", "No targetOverlayWindow");
                    if (!d) {
                        k.current ||
                            (r.Z.updateOverlayState(
                                w.Z.getTargetPID(),
                                _.mM.WAITING_FOR_PID_FOCUS,
                                "AppOverlay - not focused",
                            ),
                            (k.current = !0));
                        return;
                    }
                    (m.current = !0), (0, P.Z)("reactInitializationStarted", !0), D(a, e);
                }
            }, [D, d, e, a, n]),
                (0, i.zq)(() => {
                    clearInterval(T.current), (S.current = !0);
                });
            let O = (0, c.e7)([h.Z], () => h.Z.windowSize(null != a ? (0, C.ZY)(a) : void 0)),
                F = (0, c.e7)([w.Z], () => w.Z.getFocusedWindowHandle());
            return (
                o.useEffect(() => {
                    let e, t;
                    if (null != a && u && a.innerHeight === O.height && a.innerWidth === O.width)
                        return (
                            (e = a.requestAnimationFrame(() => {
                                e = a.requestAnimationFrame(() => {
                                    a.clearTimeout(t), r.Z.overlayUIFocusedPid(null != l ? l : I.UNSET_PID, F);
                                });
                            })),
                            (t = a.setTimeout(() => {
                                a.cancelAnimationFrame(e), r.Z.overlayUIFocusedPid(null != l ? l : I.UNSET_PID, F);
                            }, 500)),
                            () => {
                                a.cancelAnimationFrame(e), a.clearTimeout(t);
                            }
                        );
                }, [u, a, l, F, O]),
                u
            );
        })(n, T.$S),
        m = (0, c.e7)([w.Z], () => w.Z.getFocusedPID()),
        F = (0, c.e7)([S.Z], () => S.Z.isInputLocked(m), [m]);
    return g
        ? (0, a.jsxs)(u.Z, {
              themeOverride: B.BRd.MIDNIGHT,
              withTitleBar: t,
              windowKey: n,
              title: "Discord Overlay",
              hideModals: F,
              children: [(0, a.jsx)(v.Z, {}), (0, a.jsx)(l.Co, {})],
          })
        : null;
});
