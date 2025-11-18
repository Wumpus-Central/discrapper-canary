n.r(t),
    n.d(t, {
        default: () => A,
        waitForCSSLoad: () => x,
    }),
    n(388685),
    n(415506);
var a = n(54381),
    o = n(473749),
    r = n(442837),
    i = n(13245),
    c = n(493773),
    l = n(686546),
    d = n(710845),
    u = n(522474),
    _ = n(238246),
    s = n(355863),
    f = n(944486),
    h = n(808506),
    b = n(451478),
    p = n(358085),
    g = n(998502),
    I = n(145597),
    m = n(830917),
    C = n(41534),
    v = n(837268),
    w = n(554370),
    y = n(371651),
    S = n(610394),
    Z = n(932404),
    T = n(253506),
    P = n(757744),
    B = n(981631);
n(371467), n(606206);
let W = new d.Z("AppOverlay");
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
async function D(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1000,
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (p.isPlatformEmbedded) {
        try {
            await g.ZP.isAlwaysOnTop(t);
        } catch (e) {
            W.error("Window does not exist while trying to show inactive", e), (0, C.D1)(e, v.gl.OutOfProcess);
        }
        for (let r = 0; r < a; r++)
            try {
                if (!(await g.ZP.waitForIPCReady(n, e))) throw Error("IPC not ready");
                g.ZP.showInactive(t);
                return;
            } catch (e) {
                var o;
                if ((null == (o = e.message) ? void 0 : o.includes("IPC")) && r < a - 1) {
                    let t = (n / 2) * Math.pow(2, r + 1);
                    W.error("Failed to show inactive, retrying in ".concat(t, "ms"), e),
                        await new Promise((e) => setTimeout(e, t));
                } else throw ((0, C.D1)(e, v.gl.OutOfProcess), e);
            }
    }
}
let A = o.memo(function (e) {
    let { withTitleBar: t, windowKey: n } = e,
        d = (function (e, t) {
            let n = (0, r.e7)([S.Z], () => !p.isPlatformEmbedded || S.Z.isWindowHandleInitialized()),
                a = (0, r.e7)([u.Z], () => u.Z.getWindow(e)),
                l = (0, r.e7)([h.default], () => h.default.getFocusedPID()),
                d = o.useMemo(() => !p.isPlatformEmbedded || (null != l && l !== I.UNSET_PID), [l]),
                [_, g] = o.useState(!1),
                C = o.useRef(!1),
                w = o.useCallback(() => {
                    let e = S.Z.getTargetPID(),
                        n = null != f.Z.getVoiceChannelId();
                    i.Z.track(B.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: S.Z.isPinned(B.Odu.TEXT),
                        overlay_render_method: v.gl[y.default.getOverlayMethod(e)],
                        unpinned_widget_types: s.Z.getAllUnpinnedPinnedWidgets(t),
                    }),
                        (0, Z.ry)();
                }, [t]),
                P = o.useRef(!1),
                A = o.useRef(null),
                O = o.useCallback(
                    async (e, t) => {
                        try {
                            if ((await x(e, A), P.current)) return;
                            (0, T.Z)("cssLoaded", !0);
                        } catch (e) {
                            W.error("Timed out waiting for CSS to load", e),
                                i.Z.setOverlayCrashed(S.Z.getTargetPID(), e),
                                (0, T.Z)("errorMessage", "CSS failed load");
                            return;
                        }
                        try {
                            if ((await D(e, t), P.current)) return;
                            (0, Z.Dv)();
                        } catch (e) {
                            i.Z.setOverlayCrashed(S.Z.getTargetPID(), e),
                                (0, T.Z)("errorMessage", "showInactive failed");
                            return;
                        }
                        await new Promise((t) => {
                            e.setTimeout(() => t(), 100);
                        }),
                            P.current || (g(!0), w());
                    },
                    [w],
                ),
                k = o.useRef(!1);
            o.useEffect(() => {
                if (!C.current && ((0, T.Z)("hasUseEffectFired", !0), (0, T.Z)("trackedPidFocused", d), n)) {
                    if (null == a) return void (0, T.Z)("errorMessage", "No targetOverlayWindow");
                    if (!d) {
                        k.current ||
                            (i.Z.updateOverlayState(
                                S.Z.getTargetPID(),
                                v.mM.WAITING_FOR_PID_FOCUS,
                                "AppOverlay - not focused",
                            ),
                            (k.current = !0));
                        return;
                    }
                    (C.current = !0), (0, T.Z)("reactInitializationStarted", !0), O(a, e);
                }
            }, [O, d, e, a, n]),
                (0, c.zq)(() => {
                    clearInterval(A.current), (P.current = !0);
                });
            let E = (0, r.e7)([b.Z], () => b.Z.windowSize(null != a ? (0, m.ZY)(a) : void 0)),
                L = (0, r.e7)([S.Z], () => S.Z.getFocusedWindowHandle());
            return (
                o.useEffect(() => {
                    let e, t;
                    if (null != a && _ && a.innerHeight === E.height && a.innerWidth === E.width)
                        return (
                            (e = a.requestAnimationFrame(() => {
                                e = a.requestAnimationFrame(() => {
                                    a.clearTimeout(t), i.Z.overlayUIFocusedPid(null != l ? l : I.UNSET_PID, L);
                                });
                            })),
                            (t = a.setTimeout(() => {
                                a.cancelAnimationFrame(e), i.Z.overlayUIFocusedPid(null != l ? l : I.UNSET_PID, L);
                            }, 500)),
                            () => {
                                a.cancelAnimationFrame(e), a.clearTimeout(t);
                            }
                        );
                }, [_, a, l, L, E]),
                _
            );
        })(n, P.$S),
        g = (0, r.e7)([h.default], () => h.default.isFocusedPidInputLocked());
    return d
        ? (0, a.jsxs)(_.Z, {
              themeOverride: B.BRd.MIDNIGHT,
              withTitleBar: t,
              windowKey: n,
              title: "Discord Overlay",
              hideModals: g,
              children: [(0, a.jsx)(w.Z, {}), (0, a.jsx)(l.Co, {})],
          })
        : null;
});
