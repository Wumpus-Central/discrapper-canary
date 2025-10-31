n.r(t), n.d(t, { default: () => D }), n(388685), n(415506);
var a = n(951288),
    o = n(647438),
    r = n(442837),
    i = n(13245),
    c = n(493773),
    l = n(686546),
    _ = n(710845),
    d = n(522474),
    s = n(238246),
    u = n(355863),
    f = n(944486),
    h = n(808506),
    b = n(451478),
    p = n(358085),
    g = n(998502),
    C = n(145597),
    m = n(830917),
    I = n(41534),
    v = n(837268),
    y = n(554370),
    T = n(371651),
    k = n(610394),
    w = n(932404),
    x = n(253506),
    B = n(757744),
    S = n(981631);
n(371467), n(606206);
let W = new _.Z("AppOverlay");
async function P(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1000,
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (p.isPlatformEmbedded) {
        try {
            await g.ZP.isAlwaysOnTop(t);
        } catch (e) {
            W.error("Window does not exist while trying to show inactive", e), (0, I.D1)(e, v.gl.OutOfProcess);
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
                } else throw ((0, I.D1)(e, v.gl.OutOfProcess), e);
            }
    }
}
let D = o.memo(function (e) {
    let { withTitleBar: t, windowKey: n } = e,
        _ = (function (e, t) {
            let n = (0, r.e7)([k.Z], () => !p.isPlatformEmbedded || k.Z.isWindowHandleInitialized()),
                a = (0, r.e7)([d.Z], () => d.Z.getWindow(e)),
                l = (0, r.e7)([h.default], () => h.default.getFocusedPID()),
                _ = o.useMemo(() => !p.isPlatformEmbedded || (null != l && l !== C.UNSET_PID), [l]),
                [s, g] = o.useState(!1),
                I = o.useRef(!1),
                y = o.useCallback(() => {
                    let e = (0, C.getPID)(),
                        n = null != f.Z.getVoiceChannelId();
                    i.Z.track(S.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: k.Z.isPinned(S.Odu.TEXT),
                        overlay_render_method: v.gl[T.default.getOverlayMethod(e)],
                        unpinned_widget_types: u.Z.getAllUnpinnedPinnedWidgets(t),
                    }),
                        (0, w.ry)();
                }, [t]),
                B = o.useRef(!1),
                D = o.useRef(null),
                O = o.useCallback(
                    async (e, t) => {
                        try {
                            if (
                                (await new Promise((t, n) => {
                                    let a = Date.now();
                                    D.current = setInterval(() => {
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
                                            t(), clearInterval(D.current);
                                            return;
                                        }
                                        Date.now() - a > 120000 &&
                                            (n(Error("Timed out waiting for CSS to load")), clearInterval(D.current));
                                    }, 200);
                                }),
                                B.current)
                            )
                                return;
                            (0, x.Z)("cssLoaded", !0);
                        } catch (e) {
                            W.error("Timed out waiting for CSS to load", e),
                                i.Z.setOverlayCrashed((0, C.getPID)(), e),
                                (0, x.Z)("errorMessage", "CSS failed load");
                            return;
                        }
                        try {
                            if ((await P(e, t), B.current)) return;
                            (0, w.Dv)();
                        } catch (e) {
                            i.Z.setOverlayCrashed((0, C.getPID)(), e), (0, x.Z)("errorMessage", "showInactive failed");
                            return;
                        }
                        await new Promise((t) => {
                            e.setTimeout(() => t(), 100);
                        }),
                            B.current || (g(!0), y());
                    },
                    [y],
                ),
                N = o.useRef(!1);
            o.useEffect(() => {
                if (!I.current && ((0, x.Z)("hasUseEffectFired", !0), (0, x.Z)("trackedPidFocused", _), n)) {
                    if (null == a) return void (0, x.Z)("errorMessage", "No targetOverlayWindow");
                    if (!_) {
                        N.current ||
                            (i.Z.updateOverlayState((0, C.getPID)(), v.mM.WAITING_FOR_PID_FOCUS), (N.current = !0));
                        return;
                    }
                    (I.current = !0), (0, x.Z)("reactInitializationStarted", !0), O(a, e);
                }
            }, [O, _, e, a, n]),
                (0, c.zq)(() => {
                    clearInterval(D.current), (B.current = !0);
                });
            let A = (0, r.e7)([b.Z], () => b.Z.windowSize(null != a ? (0, m.ZY)(a) : void 0)),
                L = (0, r.e7)([k.Z], () => k.Z.getFocusedWindowHandle());
            return (
                o.useEffect(() => {
                    if (null == a || !s || a.innerHeight !== A.height || a.innerWidth !== A.width) return;
                    let e = a.requestAnimationFrame(() => {
                        e = a.requestAnimationFrame(() => {
                            i.Z.overlayUIFocusedPid(null != l ? l : C.UNSET_PID, L);
                        });
                    });
                    return () => {
                        a.cancelAnimationFrame(e);
                    };
                }, [s, a, l, L, A]),
                s
            );
        })(n, B.$S),
        g = (0, r.e7)([h.default], () => h.default.isFocusedPidInputLocked());
    return _
        ? (0, a.jsxs)(s.Z, {
              themeOverride: S.BRd.MIDNIGHT,
              withTitleBar: t,
              windowKey: n,
              title: "Discord Overlay",
              hideModals: g,
              children: [(0, a.jsx)(y.Z, {}), (0, a.jsx)(l.Co, {})],
          })
        : null;
});
