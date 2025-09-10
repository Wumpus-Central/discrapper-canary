n.r(t), n.d(t, { default: () => E }), n(415506), n(388685);
var a = n(951288),
    o = n(647438),
    r = n(442837),
    i = n(13245),
    c = n(493773),
    l = n(686546),
    _ = n(710845),
    u = n(522474),
    d = n(238246),
    f = n(355863),
    s = n(944486),
    p = n(808506),
    m = n(358085);
n(606206);
var h = n(998502),
    v = n(145597);
n(371467);
var b = n(41534),
    g = n(837268),
    I = n(554370),
    C = n(371651),
    y = n(610394),
    w = n(757744),
    S = n(981631);
let x = new _.Z("AppOverlay");
async function B(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1000,
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (m.isPlatformEmbedded) {
        try {
            await h.ZP.isAlwaysOnTop(t);
        } catch (e) {
            x.error("Window does not exist while trying to show inactive", e), (0, b.D1)(e, g.gl.OutOfProcess);
        }
        for (let r = 0; r < a; r++)
            try {
                if (!(await h.ZP.waitForIPCReady(n, e))) throw Error("IPC not ready");
                h.ZP.showInactive(t);
                return;
            } catch (e) {
                var o;
                if ((null == (o = e.message) ? void 0 : o.includes("IPC")) && r < a - 1) {
                    let t = (n / 2) * Math.pow(2, r + 1);
                    x.error("Failed to show inactive, retrying in ".concat(t, "ms"), e),
                        await new Promise((e) => setTimeout(e, t));
                } else throw ((0, b.D1)(e, g.gl.OutOfProcess), e);
            }
    }
}
let E = o.memo(function (e) {
    let { withTitleBar: t, windowKey: n } = e,
        _ = (function (e, t) {
            let n = (0, r.e7)([u.Z], () => u.Z.getWindow(e)),
                a = o.useRef(null),
                l = o.useRef(null),
                _ = o.useRef(null),
                d = (0, r.e7)([p.default], () => {
                    let e = p.default.getFocusedPID();
                    return !m.isPlatformEmbedded || (null != e && e !== v.UNSET_PID);
                }),
                [h, b] = o.useState(!1),
                I = o.useRef(!1),
                w = o.useCallback(() => {
                    let e = (0, v.getPID)(),
                        n = null != s.Z.getVoiceChannelId();
                    i.Z.track(S.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: y.ZP.isPinned(S.Odu.TEXT),
                        overlay_render_method: g.gl[C.default.getOverlayMethod(e)],
                        unpinned_widget_types: f.Z.getAllUnpinnedPinnedWidgets(t),
                    }),
                        i.Z.successfullyShown(e);
                }, [t]);
            (0, c.Ng)(() => {
                let e = (e) => {
                    let t = null != n ? n : window;
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
            let x = o.useCallback(
                (e, t) => {
                    null == a.current &&
                        ((_.current = () => {
                            null != a.current && e.cancelAnimationFrame(a.current),
                                null != l.current && e.clearTimeout(l.current);
                        }),
                        (a.current = e.requestAnimationFrame(async () => {
                            try {
                                await B(e, t);
                            } catch (e) {
                                i.Z.setOverlayCrashed((0, v.getPID)(), e);
                                return;
                            }
                            l.current = e.setTimeout(() => {
                                b(!0), w(), (_.current = null);
                            }, 100);
                        })));
                },
                [w],
            );
            return (
                o.useEffect(() => {
                    d && null != n && (I.current || ((I.current = !0), x(n, e)));
                }, [x, d, e, n]),
                (0, c.zq)(() => {
                    null != _.current && _.current();
                }),
                h
            );
        })(n, w.$S),
        h = (0, v.getPID)(),
        b = (0, r.e7)([p.default], () => p.default.isInputLocked(h), [h]);
    return _
        ? (0, a.jsxs)(d.Z, {
              themeOverride: S.BRd.MIDNIGHT,
              withTitleBar: t,
              windowKey: n,
              title: "Discord Overlay",
              hideModals: b,
              children: [(0, a.jsx)(I.Z, {}), (0, a.jsx)(l.Co, {})],
          })
        : null;
});
