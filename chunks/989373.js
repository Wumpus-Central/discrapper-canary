n.r(t),
    n.d(t, {
        default: () => A,
        waitForCSSLoad: () => T,
    }),
    n(388685),
    n(415506);
var r = n(951288),
    a = n(647438),
    i = n(442837),
    l = n(13245),
    o = n(493773),
    c = n(686546),
    u = n(710845),
    s = n(522474),
    d = n(238246),
    _ = n(355863),
    m = n(944486),
    f = n(808506),
    h = n(451478),
    g = n(358085),
    v = n(998502),
    b = n(145597),
    I = n(830917),
    p = n(41534),
    C = n(837268),
    x = n(554370),
    S = n(371651),
    y = n(610394),
    w = n(932404),
    N = n(253506),
    Z = n(757744),
    k = n(981631);
n(371467), n(606206);
let P = new u.Z("AppOverlay");
function T(e, t) {
    return new Promise((n, r) => {
        let a = Date.now();
        t.current = setInterval(() => {
            if (
                (function () {
                    let t = Array.from(e.document.querySelectorAll('link[rel="stylesheet"]')),
                        n = e.document.styleSheets,
                        r = new Map();
                    for (let e of n) null != e.href && r.set(e.href, e);
                    for (let e of t) {
                        if (null == e.href) continue;
                        let t = r.get(e.href);
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
            Date.now() - a > 120000 && (r(Error("Timed out waiting for CSS to load")), clearInterval(t.current));
        }, 200);
    });
}
async function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1000,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (g.isPlatformEmbedded) {
        try {
            await v.ZP.isAlwaysOnTop(t);
        } catch (e) {
            P.error("Window does not exist while trying to show inactive", e), (0, p.D1)(e, C.gl.OutOfProcess);
        }
        for (let i = 0; i < r; i++)
            try {
                if (!(await v.ZP.waitForIPCReady(n, e))) throw Error("IPC not ready");
                v.ZP.showInactive(t);
                return;
            } catch (e) {
                var a;
                if ((null == (a = e.message) ? void 0 : a.includes("IPC")) && i < r - 1) {
                    let t = (n / 2) * Math.pow(2, i + 1);
                    P.error("Failed to show inactive, retrying in ".concat(t, "ms"), e),
                        await new Promise((e) => setTimeout(e, t));
                } else throw ((0, p.D1)(e, C.gl.OutOfProcess), e);
            }
    }
}
let A = a.memo(function (e) {
    let { withTitleBar: t, windowKey: n } = e,
        u = (function (e, t) {
            let n = (0, i.e7)([y.Z], () => !g.isPlatformEmbedded || y.Z.isWindowHandleInitialized()),
                r = (0, i.e7)([s.Z], () => s.Z.getWindow(e)),
                c = (0, i.e7)([f.default], () => f.default.getFocusedPID()),
                u = a.useMemo(() => !g.isPlatformEmbedded || (null != c && c !== b.UNSET_PID), [c]),
                [d, v] = a.useState(!1),
                p = a.useRef(!1),
                x = a.useCallback(() => {
                    let e = y.Z.getTargetPID(),
                        n = null != m.Z.getVoiceChannelId();
                    l.Z.track(k.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: y.Z.isPinned(k.Odu.TEXT),
                        overlay_render_method: C.gl[S.default.getOverlayMethod(e)],
                        unpinned_widget_types: _.Z.getAllUnpinnedPinnedWidgets(t),
                    }),
                        (0, w.ry)();
                }, [t]),
                Z = a.useRef(!1),
                A = a.useRef(null),
                B = a.useCallback(
                    async (e, t) => {
                        try {
                            if ((await T(e, A), Z.current)) return;
                            (0, N.Z)("cssLoaded", !0);
                        } catch (e) {
                            P.error("Timed out waiting for CSS to load", e),
                                l.Z.setOverlayCrashed(y.Z.getTargetPID(), e),
                                (0, N.Z)("errorMessage", "CSS failed load");
                            return;
                        }
                        try {
                            if ((await E(e, t), Z.current)) return;
                            (0, w.Dv)();
                        } catch (e) {
                            l.Z.setOverlayCrashed(y.Z.getTargetPID(), e),
                                (0, N.Z)("errorMessage", "showInactive failed");
                            return;
                        }
                        await new Promise((t) => {
                            e.setTimeout(() => t(), 100);
                        }),
                            Z.current || (v(!0), x());
                    },
                    [x],
                ),
                M = a.useRef(!1);
            a.useEffect(() => {
                if (!p.current && ((0, N.Z)("hasUseEffectFired", !0), (0, N.Z)("trackedPidFocused", u), n)) {
                    if (null == r) return void (0, N.Z)("errorMessage", "No targetOverlayWindow");
                    if (!u) {
                        M.current ||
                            (l.Z.updateOverlayState(y.Z.getTargetPID(), C.mM.WAITING_FOR_PID_FOCUS), (M.current = !0));
                        return;
                    }
                    (p.current = !0), (0, N.Z)("reactInitializationStarted", !0), B(r, e);
                }
            }, [B, u, e, r, n]),
                (0, o.zq)(() => {
                    clearInterval(A.current), (Z.current = !0);
                });
            let O = (0, i.e7)([h.Z], () => h.Z.windowSize(null != r ? (0, I.ZY)(r) : void 0)),
                j = (0, i.e7)([y.Z], () => y.Z.getFocusedWindowHandle());
            return (
                a.useEffect(() => {
                    if (null == r || !d || r.innerHeight !== O.height || r.innerWidth !== O.width) return;
                    let e = r.requestAnimationFrame(() => {
                        e = r.requestAnimationFrame(() => {
                            l.Z.overlayUIFocusedPid(null != c ? c : b.UNSET_PID, j);
                        });
                    });
                    return () => {
                        r.cancelAnimationFrame(e);
                    };
                }, [d, r, c, j, O]),
                d
            );
        })(n, Z.$S),
        v = (0, i.e7)([f.default], () => f.default.isFocusedPidInputLocked());
    return u
        ? (0, r.jsxs)(d.Z, {
              themeOverride: k.BRd.MIDNIGHT,
              withTitleBar: t,
              windowKey: n,
              title: "Discord Overlay",
              hideModals: v,
              children: [(0, r.jsx)(x.Z, {}), (0, r.jsx)(c.Co, {})],
          })
        : null;
});
