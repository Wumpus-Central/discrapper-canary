t.r(n),
    t.d(n, {
        default: () => A,
        waitForCSSLoad: () => k,
    }),
    t(388685),
    t(415506);
var a = t(54381),
    o = t(473749),
    r = t(442837),
    i = t(13245),
    c = t(493773),
    _ = t(686546),
    l = t(710845),
    d = t(522474),
    u = t(238246),
    s = t(355863),
    f = t(944486),
    h = t(451478),
    b = t(358085),
    p = t(998502),
    g = t(145597),
    C = t(830917),
    m = t(338388),
    I = t(837268),
    v = t(554370),
    y = t(371651),
    w = t(610394),
    x = t(932404),
    S = t(322155),
    B = t(253506),
    Z = t(757744),
    P = t(981631);
t(371467), t(606206);
let T = !b.isPlatformEmbedded && !1,
    W = new l.Z("AppOverlay");
function k(e, n) {
    return new Promise((t, a) => {
        let o = Date.now();
        n.current = setInterval(() => {
            if (
                (function () {
                    let n = Array.from(e.document.querySelectorAll('link[rel="stylesheet"]')),
                        t = e.document.styleSheets,
                        a = new Map();
                    for (let e of t) null != e.href && a.set(e.href, e);
                    for (let e of n) {
                        if (null == e.href) continue;
                        let n = a.get(e.href);
                        if (null == n) return !1;
                        try {
                            if (0 === n.cssRules.length) return !1;
                        } catch (e) {}
                    }
                    return !0;
                })()
            ) {
                t(), clearInterval(n.current);
                return;
            }
            Date.now() - o > 120000 && (a(Error("Timed out waiting for CSS to load")), clearInterval(n.current));
        }, 200);
    });
}
async function N(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1000,
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (b.isPlatformEmbedded) {
        try {
            await p.ZP.isAlwaysOnTop(n);
        } catch (e) {
            W.error("Window does not exist while trying to show inactive", e), (0, m.D1)(e, I.gl.OutOfProcess);
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
                    W.error("Failed to show inactive, retrying in ".concat(n, "ms"), e),
                        await new Promise((e) => setTimeout(e, n));
                } else throw ((0, m.D1)(e, I.gl.OutOfProcess), e);
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
    let { withTitleBar: n, windowKey: t } = e,
        l = (0, r.e7)([d.Z], () => d.Z.getWindow(t));
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
    let p = (function (e, n) {
            let t = (0, r.e7)([w.Z], () => !b.isPlatformEmbedded || w.Z.isWindowHandleInitialized()),
                a = (0, r.e7)([d.Z], () => d.Z.getWindow(e)),
                _ = (0, r.e7)([w.Z], () => w.Z.getFocusedPID()),
                l = o.useMemo(() => !b.isPlatformEmbedded || (null != _ && _ !== g.UNSET_PID), [_]),
                [u, p] = o.useState(!1),
                m = o.useRef(!1),
                v = o.useCallback(() => {
                    let e = w.Z.getTargetPID(),
                        t = null != f.Z.getVoiceChannelId();
                    i.Z.track(P.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: t,
                        text_widget_connected: w.Z.isPinned(P.Odu.TEXT),
                        overlay_render_method: I.gl[y.default.getOverlayMethod(e)],
                        unpinned_widget_types: s.Z.getAllUnpinnedPinnedWidgets(n),
                    }),
                        (0, x.ry)();
                }, [n]),
                S = o.useRef(!1),
                Z = o.useRef(null),
                T = o.useCallback(
                    async (e, n) => {
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
                            if ((await N(e, n), S.current)) return;
                            (0, x.Dv)();
                        } catch (e) {
                            i.Z.setOverlayCrashed(w.Z.getTargetPID(), e),
                                (0, B.Z)("errorMessage", "showInactive failed");
                            return;
                        }
                        await new Promise((n) => {
                            e.setTimeout(() => n(), 100);
                        }),
                            S.current || (p(!0), v());
                    },
                    [v],
                ),
                D = o.useRef(!1);
            o.useEffect(() => {
                if (!m.current && ((0, B.Z)("hasUseEffectFired", !0), (0, B.Z)("trackedPidFocused", l), t)) {
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
                    (m.current = !0), (0, B.Z)("reactInitializationStarted", !0), T(a, e);
                }
            }, [T, l, e, a, t]),
                (0, c.zq)(() => {
                    clearInterval(Z.current), (S.current = !0);
                });
            let E = (0, r.e7)([h.Z], () => h.Z.windowSize(null != a ? (0, C.ZY)(a) : void 0)),
                A = (0, r.e7)([w.Z], () => w.Z.getFocusedWindowHandle());
            return (
                o.useEffect(() => {
                    let e, n;
                    if (null != a && u && a.innerHeight === E.height && a.innerWidth === E.width)
                        return (
                            (e = a.requestAnimationFrame(() => {
                                e = a.requestAnimationFrame(() => {
                                    a.clearTimeout(n), i.Z.overlayUIFocusedPid(null != _ ? _ : g.UNSET_PID, A);
                                });
                            })),
                            (n = a.setTimeout(() => {
                                a.cancelAnimationFrame(e), i.Z.overlayUIFocusedPid(null != _ ? _ : g.UNSET_PID, A);
                            }, 500)),
                            () => {
                                a.cancelAnimationFrame(e), a.clearTimeout(n);
                            }
                        );
                }, [u, a, _, A, E]),
                u
            );
        })(t, Z.$S),
        m = (0, r.e7)([w.Z], () => w.Z.getFocusedPID()),
        A = (0, r.e7)([S.Z], () => S.Z.isInputLocked(m), [m]);
    return p
        ? (0, a.jsxs)(u.Z, {
              themeOverride: P.BRd.MIDNIGHT,
              withTitleBar: n,
              windowKey: t,
              title: "Discord Overlay",
              hideModals: A,
              children: [(0, a.jsx)(v.Z, {}), (0, a.jsx)(_.Co, {})],
          })
        : null;
});
