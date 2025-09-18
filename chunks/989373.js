n.r(t), n.d(t, { default: () => W }), n(415506), n(388685);
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
    p = n(808506),
    h = n(358085);
n(606206);
var b = n(998502),
    m = n(145597);
n(371467);
var v = n(41534),
    g = n(837268),
    I = n(554370),
    C = n(371651),
    y = n(610394),
    w = n(757744),
    x = n(981631);
let B = new l.Z("AppOverlay");
async function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1000,
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (h.isPlatformEmbedded) {
        try {
            await b.ZP.isAlwaysOnTop(t);
        } catch (e) {
            B.error("Window does not exist while trying to show inactive", e), (0, v.D1)(e, g.gl.OutOfProcess);
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
                    B.error("Failed to show inactive, retrying in ".concat(t, "ms"), e),
                        await new Promise((e) => setTimeout(e, t));
                } else throw ((0, v.D1)(e, g.gl.OutOfProcess), e);
            }
    }
}
let W = o.memo(function (e) {
    let { withTitleBar: t, windowKey: n } = e,
        l = (function (e, t) {
            let n = (0, r.e7)([y.ZP], () => !h.isPlatformEmbedded || y.ZP.isWindowHandleInitialized()),
                a = (0, r.e7)([d.Z], () => d.Z.getWindow(e)),
                _ = o.useRef(null),
                l = o.useRef(null),
                u = o.useRef(null),
                b = (0, r.e7)([p.default], () => {
                    let e = p.default.getFocusedPID();
                    return !h.isPlatformEmbedded || (null != e && e !== m.UNSET_PID);
                }),
                [v, I] = o.useState(!1),
                w = o.useRef(!1),
                B = o.useCallback(() => {
                    let e = (0, m.getPID)(),
                        n = null != f.Z.getVoiceChannelId();
                    i.Z.track(x.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: y.ZP.isPinned(x.Odu.TEXT),
                        overlay_render_method: g.gl[C.default.getOverlayMethod(e)],
                        unpinned_widget_types: s.Z.getAllUnpinnedPinnedWidgets(t),
                    }),
                        i.Z.oopUiInitialized();
                }, [t]);
            (0, c.ZP)(() => {
                let e = (e) => {
                    let t = null != a ? a : window;
                    e.data === y.Il &&
                        t.requestAnimationFrame(() => {
                            t.requestAnimationFrame(() => {
                                window.parent.postMessage(y.A8, "*");
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
            let W = o.useCallback(
                    (e, t) => {
                        null == _.current &&
                            ((u.current = () => {
                                null != _.current && e.cancelAnimationFrame(_.current),
                                    null != l.current && e.clearTimeout(l.current);
                            }),
                            (_.current = e.requestAnimationFrame(async () => {
                                try {
                                    await T(e, t), i.Z.oopUiShowInactiveSuccess();
                                } catch (e) {
                                    i.Z.setOverlayCrashed((0, m.getPID)(), e);
                                    return;
                                }
                                l.current = e.setTimeout(() => {
                                    I(!0), B(), (u.current = null);
                                }, 100);
                            })));
                    },
                    [B],
                ),
                S = o.useRef(!1);
            return (
                o.useEffect(() => {
                    if (!w.current && null != a && n) {
                        if (!b) {
                            S.current ||
                                (i.Z.updateOverlayState((0, m.getPID)(), g.mM.WAITING_FOR_PID_FOCUS), (S.current = !0));
                            return;
                        }
                        (w.current = !0), W(a, e);
                    }
                }, [W, b, e, a, n]),
                (0, c.zq)(() => {
                    var e;
                    null == (e = u.current) || e.call(u);
                }),
                v
            );
        })(n, w.$S),
        b = (0, m.getPID)(),
        v = (0, r.e7)([p.default], () => p.default.isInputLocked(b), [b]);
    return l
        ? (0, a.jsxs)(u.Z, {
              themeOverride: x.BRd.MIDNIGHT,
              withTitleBar: t,
              windowKey: n,
              title: "Discord Overlay",
              hideModals: v,
              children: [(0, a.jsx)(I.Z, {}), (0, a.jsx)(_.Co, {})],
          })
        : null;
});
