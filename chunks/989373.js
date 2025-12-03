n.r(t),
    n.d(t, {
        default: () => A,
        waitForCSSLoad: () => k,
    }),
    n(388685),
    n(415506);
var a = n(54381),
    o = n(473749),
    r = n(442837),
    i = n(13245),
    c = n(493773),
    _ = n(686546),
    l = n(710845),
    d = n(522474),
    u = n(238246),
    s = n(355863),
    f = n(944486),
    h = n(451478),
    b = n(358085),
    p = n(998502),
    g = n(145597),
    m = n(830917),
    C = n(338388),
    I = n(837268),
    v = n(554370),
    y = n(371651),
    w = n(610394),
    x = n(932404),
    S = n(322155),
    B = n(253506),
    Z = n(757744),
    P = n(981631);
n(371467), n(606206);
let T = !b.isPlatformEmbedded && !1,
    W = new l.Z("AppOverlay");
function k(e, t) {
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
async function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1000,
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (b.isPlatformEmbedded) {
        try {
            await p.ZP.isAlwaysOnTop(t);
        } catch (e) {
            W.error("Window does not exist while trying to show inactive", e), (0, C.D1)(e, I.gl.OutOfProcess);
        }
        for (let r = 0; r < a; r++)
            try {
                if (!(await p.ZP.waitForIPCReady(n, e))) throw Error("IPC not ready");
                p.ZP.showInactive(t);
                return;
            } catch (e) {
                var o;
                if ((null == (o = e.message) ? void 0 : o.includes("IPC")) && r < a - 1) {
                    let t = (n / 2) * Math.pow(2, r + 1);
                    W.error("Failed to show inactive, retrying in ".concat(t, "ms"), e),
                        await new Promise((e) => setTimeout(e, t));
                } else throw ((0, C.D1)(e, I.gl.OutOfProcess), e);
            }
    }
}
function D() {
    i.Z.setFocusedPID(g.DEV_PID, null);
}
function E() {
    i.Z.setFocusedPID(null, null);
}
let A = o.memo(function (e) {
    let { withTitleBar: t, windowKey: n } = e,
        l = (0, r.e7)([d.Z], () => d.Z.getWindow(n));
    (0, c.ZP)(() => {
        if (null != l)
            return (
                T &&
                    (l.document.hasFocus() && i.Z.setFocusedPID(g.DEV_PID, null),
                    l.addEventListener("focus", D),
                    l.addEventListener("blur", E)),
                () => {
                    T && (l.removeEventListener("focus", D), l.removeEventListener("blur", E));
                }
            );
    });
    let p = (function (e, t) {
            let n = (0, r.e7)([w.Z], () => !b.isPlatformEmbedded || w.Z.isWindowHandleInitialized()),
                a = (0, r.e7)([d.Z], () => d.Z.getWindow(e)),
                _ = (0, r.e7)([w.Z], () => w.Z.getFocusedPID()),
                l = o.useMemo(() => !b.isPlatformEmbedded || (null != _ && _ !== g.UNSET_PID), [_]),
                [u, p] = o.useState(!1),
                C = o.useRef(!1),
                v = o.useCallback(() => {
                    let e = w.Z.getTargetPID(),
                        n = null != f.Z.getVoiceChannelId();
                    i.Z.track(P.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: w.Z.isPinned(P.Odu.TEXT),
                        overlay_render_method: I.gl[y.default.getOverlayMethod(e)],
                        unpinned_widget_types: s.Z.getAllUnpinnedPinnedWidgets(t),
                    }),
                        (0, x.ry)();
                }, [t]),
                S = o.useRef(!1),
                Z = o.useRef(null),
                T = o.useCallback(
                    async (e, t) => {
                        try {
                            if ((await k(e, Z), S.current)) return;
                            (0, B.Z)("cssLoaded", !0);
                        } catch (e) {
                            W.error("Timed out waiting for CSS to load", e),
                                i.Z.setOverlayCrashed(w.Z.getTargetPID(), e),
                                (0, B.Z)("errorMessage", "CSS failed load");
                            return;
                        }
                        try {
                            if ((await N(e, t), S.current)) return;
                            (0, x.Dv)();
                        } catch (e) {
                            i.Z.setOverlayCrashed(w.Z.getTargetPID(), e),
                                (0, B.Z)("errorMessage", "showInactive failed");
                            return;
                        }
                        await new Promise((t) => {
                            e.setTimeout(() => t(), 100);
                        }),
                            S.current || (p(!0), v());
                    },
                    [v],
                ),
                D = o.useRef(!1);
            o.useEffect(() => {
                if (!C.current && ((0, B.Z)("hasUseEffectFired", !0), (0, B.Z)("trackedPidFocused", l), n)) {
                    if (null == a) return void (0, B.Z)("errorMessage", "No targetOverlayWindow");
                    if (!l) {
                        D.current ||
                            (i.Z.updateOverlayState(
                                w.Z.getTargetPID(),
                                I.mM.WAITING_FOR_PID_FOCUS,
                                "AppOverlay - not focused",
                            ),
                            (D.current = !0));
                        return;
                    }
                    (C.current = !0), (0, B.Z)("reactInitializationStarted", !0), T(a, e);
                }
            }, [T, l, e, a, n]),
                (0, c.zq)(() => {
                    clearInterval(Z.current), (S.current = !0);
                });
            let E = (0, r.e7)([h.Z], () => h.Z.windowSize(null != a ? (0, m.ZY)(a) : void 0)),
                A = (0, r.e7)([w.Z], () => w.Z.getFocusedWindowHandle());
            return (
                o.useEffect(() => {
                    let e, t;
                    if (null != a && u && a.innerHeight === E.height && a.innerWidth === E.width)
                        return (
                            (e = a.requestAnimationFrame(() => {
                                e = a.requestAnimationFrame(() => {
                                    a.clearTimeout(t), i.Z.overlayUIFocusedPid(null != _ ? _ : g.UNSET_PID, A);
                                });
                            })),
                            (t = a.setTimeout(() => {
                                a.cancelAnimationFrame(e), i.Z.overlayUIFocusedPid(null != _ ? _ : g.UNSET_PID, A);
                            }, 500)),
                            () => {
                                a.cancelAnimationFrame(e), a.clearTimeout(t);
                            }
                        );
                }, [u, a, _, A, E]),
                u
            );
        })(n, Z.$S),
        C = (0, r.e7)([w.Z], () => w.Z.getFocusedPID()),
        A = (0, r.e7)([S.Z], () => S.Z.isInputLocked(C), [C]);
    return p
        ? (0, a.jsxs)(u.Z, {
              themeOverride: P.BRd.MIDNIGHT,
              withTitleBar: t,
              windowKey: n,
              title: "Discord Overlay",
              hideModals: A,
              children: [(0, a.jsx)(v.Z, {}), (0, a.jsx)(_.Co, {})],
          })
        : null;
});
