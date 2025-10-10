n.d(t, { Z: () => j });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(570140),
    s = n(475179),
    o = n(367907),
    c = n(906732),
    d = n(358221),
    u = n(522651),
    p = n(788983),
    h = n(268353),
    f = n(944486),
    g = n(626135),
    m = n(585483),
    b = n(358085),
    y = n(228488),
    _ = n(981631);
function j(e) {
    let { channel: t, appContext: n, popoutOpen: j, popoutWindow: x, currentWindow: O } = e,
        { parentAnalyticsLocation: v } = (0, c.ZP)(),
        C = n === _.IlC.POPOUT,
        I = i.useRef(null),
        { currentLayout: E, mode: S } = (0, l.cj)([d.Z], () => {
            let e = d.Z.getMode(t.id),
                r = n === _.IlC.POPOUT;
            r && (e = _.WtW.VIDEO);
            let i = e === _.WtW.VIDEO ? d.Z.getLayout(t.id, n) : _.AEg.MINIMUM;
            return (
                r && i !== _.AEg.FULL_SCREEN && (i = _.AEg.NO_CHAT),
                {
                    currentLayout: i,
                    mode: e,
                }
            );
        }, [t, n]),
        Z = (0, l.e7)([f.Z], () => f.Z.getVoiceChannelId() === t.id, [t.id]);
    i.useEffect(() => {
        I.current = S;
    });
    let T = i.useRef(E),
        { currentDocument: P, rootNode: N } = i.useMemo(() => {
            let e = null != x && C ? x.document : document,
                t = O.document.getElementById("app-mount");
            return {
                currentWindow: O,
                currentDocument: e,
                rootNode: t,
            };
        }, [x, C, O]),
        R = j && !C,
        w = S === _.WtW.VIDEO && Z && !R,
        A = i.useCallback(
            (e, r) => {
                r !== e &&
                    (s.Z.updateLayout(t.id, r, n),
                    r === _.AEg.FULL_SCREEN && t.isPrivate() && m.S.dispatch(_.CkL.TEXTAREA_BLUR));
            },
            [n, t],
        ),
        D = i.useCallback(
            (e) => {
                null != N &&
                    e === _.AEg.FULL_SCREEN &&
                    (A(e, T.current),
                    (0, y.Pr)((e) => {
                        T.current = e;
                    }, P));
            },
            [P, A, N],
        ),
        L = i.useCallback(
            (e) => () => {
                null != N &&
                    ((0, u.v)(v, u.d.FULL_SCREEN, e !== _.AEg.FULL_SCREEN),
                    e !== _.AEg.FULL_SCREEN ? ((T.current = e), A(e, _.AEg.FULL_SCREEN), (0, y.Dj)(N)) : D(e));
            },
            [A, D, N, v],
        );
    i.useEffect(() => {
        let e = () => {
            null != N && ((0, y.rB)(N, P) || E !== _.AEg.FULL_SCREEN || L(E)());
        };
        return (
            P.addEventListener(y.NO, e),
            () => {
                P.removeEventListener(y.NO, e);
            }
        );
    }, [P, E, L, N]);
    let M = {
            channel: t,
            maybeLeaveFullScreen: D,
        },
        k = i.useRef(M);
    return (i.useEffect(() => {
        k.current = M;
    }),
    i.useEffect(() => {
        let { channel: e, maybeLeaveFullScreen: t } = k.current;
        return (
            g.default.track(
                _.rMx.VIDEO_LAYOUT_TOGGLED,
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
                })({ video_layout: C ? "popout" : E }, (0, o.AB)(e.id)),
            ),
            () => {
                (C && (0, b.isMac)()) || t(E);
            }
        );
    }, [E, C]),
    i.useEffect(() => {
        null != N && I.current === _.WtW.VIDEO && S === _.WtW.VOICE && (0, y.Pr)(N, P);
    }, [P, S, I, N]),
    i.useEffect(() => {
        !Z && C && a.Z.wait(() => p.xv(_.KJ3.CHANNEL_CALL_POPOUT));
    }, [Z, C]),
    w)
        ? (0, r.jsx)(h.Z, {
              themeable: !1,
              node: N,
              guestWindow: x,
              onClick: L(E),
          })
        : null;
}
