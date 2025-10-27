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
    b = n(451478),
    p = n(358085),
    g = n(998502),
    m = n(145597),
    C = n(830917),
    I = n(41534),
    v = n(837268),
    y = n(554370),
    w = n(371651),
    x = n(610394),
    B = n(932404),
    S = n(253506),
    W = n(757744),
    T = n(981631);
n(371467), n(606206);
let Z = new l.Z("AppOverlay");
async function k(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1000,
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (p.isPlatformEmbedded) {
        try {
            await g.ZP.isAlwaysOnTop(t);
        } catch (e) {
            Z.error("Window does not exist while trying to show inactive", e), (0, I.D1)(e, v.gl.OutOfProcess);
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
                    Z.error("Failed to show inactive, retrying in ".concat(t, "ms"), e),
                        await new Promise((e) => setTimeout(e, t));
                } else throw ((0, I.D1)(e, v.gl.OutOfProcess), e);
            }
    }
}
let P = o.memo(function (e) {
    let { withTitleBar: t, windowKey: n } = e,
        l = (function (e, t) {
            let n = (0, r.e7)([x.Z], () => !p.isPlatformEmbedded || x.Z.isWindowHandleInitialized()),
                a = (0, r.e7)([d.Z], () => d.Z.getWindow(e)),
                _ = (0, r.e7)([h.default], () => h.default.getFocusedPID()),
                l = o.useMemo(() => !p.isPlatformEmbedded || (null != _ && _ !== m.UNSET_PID), [_]),
                [u, g] = o.useState(!1),
                I = o.useRef(!1),
                y = o.useCallback(() => {
                    let e = (0, m.getPID)(),
                        n = null != f.Z.getVoiceChannelId();
                    i.Z.track(T.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: x.Z.isPinned(T.Odu.TEXT),
                        overlay_render_method: v.gl[w.default.getOverlayMethod(e)],
                        unpinned_widget_types: s.Z.getAllUnpinnedPinnedWidgets(t),
                    }),
                        (0, B.ry)();
                }, [t]),
                W = o.useRef(!1),
                P = o.useRef(null),
                N = o.useCallback(
                    async (e, t) => {
                        try {
                            if (
                                (await new Promise((t, n) => {
                                    let a = Date.now();
                                    P.current = setInterval(() => {
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
                                            t(), clearInterval(P.current);
                                            return;
                                        }
                                        Date.now() - a > 120000 &&
                                            (n(Error("Timed out waiting for CSS to load")), clearInterval(P.current));
                                    }, 200);
                                }),
                                W.current)
                            )
                                return;
                            (0, S.Z)("cssLoaded", !0);
                        } catch (e) {
                            Z.error("Timed out waiting for CSS to load", e),
                                i.Z.setOverlayCrashed((0, m.getPID)(), e),
                                (0, S.Z)("errorMessage", "CSS failed load");
                            return;
                        }
                        try {
                            if ((await k(e, t), W.current)) return;
                            (0, B.Dv)();
                        } catch (e) {
                            i.Z.setOverlayCrashed((0, m.getPID)(), e), (0, S.Z)("errorMessage", "showInactive failed");
                            return;
                        }
                        await new Promise((t) => {
                            e.setTimeout(() => t(), 100);
                        }),
                            W.current || (g(!0), y());
                    },
                    [y],
                ),
                A = o.useRef(!1);
            o.useEffect(() => {
                if (!I.current && ((0, S.Z)("hasUseEffectFired", !0), (0, S.Z)("trackedPidFocused", l), n)) {
                    if (null == a) return void (0, S.Z)("errorMessage", "No targetOverlayWindow");
                    if (!l) {
                        A.current ||
                            (i.Z.updateOverlayState((0, m.getPID)(), v.mM.WAITING_FOR_PID_FOCUS), (A.current = !0));
                        return;
                    }
                    (I.current = !0), (0, S.Z)("reactInitializationStarted", !0), N(a, e);
                }
            }, [N, l, e, a, n]),
                (0, c.zq)(() => {
                    clearInterval(P.current), (W.current = !0);
                });
            let E = (0, r.e7)([b.Z], () => b.Z.windowSize(null != a ? (0, C.ZY)(a) : void 0)),
                D = (0, r.e7)([x.Z], () => x.Z.getFocusedWindowHandle());
            return (
                o.useEffect(() => {
                    if (null == a || !u || a.innerHeight !== E.height || a.innerWidth !== E.width) return;
                    let e = a.requestAnimationFrame(() => {
                        e = a.requestAnimationFrame(() => {
                            i.Z.overlayUIFocusedPid(null != _ ? _ : m.UNSET_PID, D);
                        });
                    });
                    return () => {
                        a.cancelAnimationFrame(e);
                    };
                }, [u, a, _, D, E]),
                u
            );
        })(n, W.$S),
        g = (0, r.e7)([h.default], () => h.default.isFocusedPidInputLocked());
    return l
        ? (0, a.jsxs)(u.Z, {
              themeOverride: T.BRd.MIDNIGHT,
              withTitleBar: t,
              windowKey: n,
              title: "Discord Overlay",
              hideModals: g,
              children: [(0, a.jsx)(y.Z, {}), (0, a.jsx)(_.Co, {})],
          })
        : null;
});
