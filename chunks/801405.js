n.d(t, { Z: () => j });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(570140),
    s = n(475179),
    o = n(367907),
    c = n(906732),
    u = n(358221),
    d = n(522651),
    h = n(788983),
    p = n(268353),
    f = n(944486),
    g = n(626135),
    m = n(585483),
    b = n(358085),
    y = n(228488),
    x = n(981631);
function j(e) {
    let { channel: t, appContext: n, popoutOpen: j, popoutWindow: _, currentWindow: O } = e,
        { parentAnalyticsLocation: v } = (0, c.ZP)(),
        C = n === x.IlC.POPOUT,
        E = i.useRef(null),
        { currentLayout: S, mode: I } = (0, l.cj)([u.Z], () => {
            let e = u.Z.getMode(t.id),
                r = n === x.IlC.POPOUT;
            r && (e = x.WtW.VIDEO);
            let i = e === x.WtW.VIDEO ? u.Z.getLayout(t.id, n) : x.AEg.MINIMUM;
            return (
                r && i !== x.AEg.FULL_SCREEN && (i = x.AEg.NO_CHAT),
                {
                    currentLayout: i,
                    mode: e,
                }
            );
        }, [t, n]),
        Z = (0, l.e7)([f.Z], () => f.Z.getVoiceChannelId() === t.id, [t.id]);
    i.useEffect(() => {
        E.current = I;
    });
    let P = i.useRef(S),
        { currentDocument: T, rootNode: N } = i.useMemo(() => {
            let e = null != _ && C ? _.document : document,
                t = O.document.getElementById("app-mount");
            return {
                currentWindow: O,
                currentDocument: e,
                rootNode: t,
            };
        }, [_, C, O]),
        R = j && !C,
        w = I === x.WtW.VIDEO && Z && !R,
        A = i.useCallback(
            (e, r) => {
                r !== e &&
                    (s.Z.updateLayout(t.id, r, n),
                    r === x.AEg.FULL_SCREEN && t.isPrivate() && m.S.dispatch(x.CkL.TEXTAREA_BLUR));
            },
            [n, t],
        ),
        D = i.useCallback(
            (e) => {
                null != N &&
                    e === x.AEg.FULL_SCREEN &&
                    (A(e, P.current),
                    (0, y.Pr)((e) => {
                        P.current = e;
                    }, T));
            },
            [T, A, N],
        ),
        k = i.useCallback(
            (e) => () => {
                null != N &&
                    ((0, d.v)(v, d.d.FULL_SCREEN, e !== x.AEg.FULL_SCREEN),
                    e !== x.AEg.FULL_SCREEN ? ((P.current = e), A(e, x.AEg.FULL_SCREEN), (0, y.Dj)(N)) : D(e));
            },
            [A, D, N, v],
        );
    i.useEffect(() => {
        let e = () => {
            null != N && ((0, y.rB)(N, T) || S !== x.AEg.FULL_SCREEN || k(S)());
        };
        return (
            T.addEventListener(y.NO, e),
            () => {
                T.removeEventListener(y.NO, e);
            }
        );
    }, [T, S, k, N]);
    let L = {
            channel: t,
            maybeLeaveFullScreen: D,
        },
        M = i.useRef(L);
    return (i.useEffect(() => {
        M.current = L;
    }),
    i.useEffect(() => {
        let { channel: e, maybeLeaveFullScreen: t } = M.current;
        return (
            g.default.track(
                x.rMx.VIDEO_LAYOUT_TOGGLED,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({ video_layout: C ? "popout" : S }, (0, o.AB)(e.id)),
            ),
            () => {
                (C && (0, b.isMac)()) || t(S);
            }
        );
    }, [S, C]),
    i.useEffect(() => {
        null != N && E.current === x.WtW.VIDEO && I === x.WtW.VOICE && (0, y.Pr)(N, T);
    }, [T, I, E, N]),
    i.useEffect(() => {
        !Z && C && a.Z.wait(() => h.xv(x.KJ3.CHANNEL_CALL_POPOUT));
    }, [Z, C]),
    w)
        ? (0, r.jsx)(p.Z, {
              themeable: !1,
              node: N,
              guestWindow: _,
              onClick: k(S),
          })
        : null;
}
