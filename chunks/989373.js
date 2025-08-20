n.r(t), n.d(t, { default: () => x }), n(415506), n(388685);
var r = n(951288),
    a = n(647438),
    o = n(442837),
    i = n(13245),
    l = n(493773),
    c = n(710845),
    u = n(522474),
    d = n(238246),
    s = n(355863),
    _ = n(944486),
    f = n(808506),
    p = n(358085);
n(606206);
var h = n(998502),
    m = n(145597);
n(371467);
var v = n(41534),
    b = n(837268),
    g = n(554370),
    I = n(371651),
    y = n(610394),
    C = n(757744),
    w = n(981631);
let E = new c.Z("AppOverlay");
async function S(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1000,
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
    if (p.isPlatformEmbedded) {
        try {
            await h.ZP.isAlwaysOnTop(t);
        } catch (e) {
            E.error("Window does not exist while trying to show inactive", e), (0, v.D1)(e, b.gl.OutOfProcess);
        }
        for (let o = 0; o < r; o++)
            try {
                if (!(await h.ZP.waitForIPCReady(n, e))) throw Error("IPC not ready");
                h.ZP.showInactive(t);
                return;
            } catch (e) {
                var a;
                if ((null == (a = e.message) ? void 0 : a.includes("IPC")) && o < r - 1) {
                    let t = (n / 2) * Math.pow(2, o + 1);
                    E.error("Failed to show inactive, retrying in ".concat(t, "ms"), e),
                        await new Promise((e) => setTimeout(e, t));
                } else throw ((0, v.D1)(e, b.gl.OutOfProcess), e);
            }
    }
}
let x = a.memo(function (e) {
    let { withTitleBar: t, windowKey: n } = e,
        c = (function (e, t) {
            let n = (0, o.e7)([u.Z], () => u.Z.getWindow(e)),
                r = a.useRef(null),
                c = a.useRef(null),
                d = a.useRef(null),
                h = (0, o.e7)([f.default], () => {
                    let e = f.default.getFocusedPID();
                    return !p.isPlatformEmbedded || (null != e && e !== m.UNSET_PID);
                }),
                [v, g] = a.useState(h),
                [C, E] = a.useState(!1),
                x = a.useCallback(() => {
                    let e = (0, m.getPID)(),
                        n = null != _.Z.getVoiceChannelId();
                    i.Z.track(w.rMx.OVERLAY_INITIALIZED, {
                        voice_widget_connected: n,
                        text_widget_connected: y.ZP.isPinned(w.Odu.TEXT),
                        overlay_render_method: b.gl[I.default.getOverlayMethod(e)],
                        unpinned_widget_types: s.Z.getAllUnpinnedPinnedWidgets(t),
                    }),
                        i.Z.successfullyShown(e);
                }, [t]);
            (0, l.Ng)(() => {
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
            let O = a.useCallback(
                (e, t) => {
                    null == r.current &&
                        ((d.current = () => {
                            null != r.current && e.cancelAnimationFrame(r.current),
                                null != c.current && e.clearTimeout(c.current);
                        }),
                        (r.current = e.requestAnimationFrame(async () => {
                            try {
                                await S(e, t);
                            } catch (e) {
                                i.Z.setOverlayCrashed((0, m.getPID)(), e);
                                return;
                            }
                            c.current = e.setTimeout(() => {
                                g(!0), E(!0), x(), (d.current = null);
                            }, 100);
                        })));
                },
                [x],
            );
            return (
                a.useEffect(() => {
                    (!v || null == n) && h && h && null != n && O(n, e);
                }, [O, v, h, e, n]),
                (0, l.Ng)(() => {
                    v && null != n && O(n, e);
                }),
                (0, l.zq)(() => {
                    null != d.current && d.current();
                }),
                C
            );
        })(n, C.$S),
        h = (0, m.getPID)(),
        v = (0, o.e7)([f.default], () => f.default.isInputLocked(h), [h]);
    return c
        ? (0, r.jsx)(d.Z, {
              withTitleBar: t,
              windowKey: n,
              title: "Discord Overlay",
              hideModals: v,
              children: (0, r.jsx)(g.Z, {}),
          })
        : null;
});
