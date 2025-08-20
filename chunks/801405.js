n.d(t, { Z: () => C });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(570140),
    o = n(475179),
    s = n(367907),
    c = n(906732),
    u = n(358221),
    d = n(522651),
    p = n(788983),
    h = n(268353),
    f = n(944486),
    m = n(626135),
    g = n(585483),
    b = n(358085),
    y = n(228488),
    _ = n(981631);
function C(e) {
    let { channel: t, appContext: n, popoutOpen: C, popoutWindow: x, currentWindow: v } = e,
        { parentAnalyticsLocation: O } = (0, c.ZP)(),
        j = n === _.IlC.POPOUT,
        E = i.useRef(null),
        { currentLayout: S, mode: P } = (0, l.cj)([u.Z], () => {
            let e = u.Z.getMode(t.id),
                r = n === _.IlC.POPOUT;
            r && (e = _.WtW.VIDEO);
            let i = e === _.WtW.VIDEO ? u.Z.getLayout(t.id, n) : _.AEg.MINIMUM;
            return (
                r && i !== _.AEg.FULL_SCREEN && (i = _.AEg.NO_CHAT),
                {
                    currentLayout: i,
                    mode: e,
                }
            );
        }, [t, n]),
        I = (0, l.e7)([f.Z], () => f.Z.getVoiceChannelId() === t.id, [t.id]);
    i.useEffect(() => {
        E.current = P;
    });
    let Z = i.useRef(S),
        { currentDocument: T, rootNode: N } = i.useMemo(() => {
            let e = null != x && j ? x.document : document,
                t = v.document.getElementById("app-mount");
            return {
                currentWindow: v,
                currentDocument: e,
                rootNode: t,
            };
        }, [x, j, v]),
        A = C && !j,
        w = P === _.WtW.VIDEO && I && !A,
        R = i.useCallback(
            (e, r) => {
                r !== e &&
                    (o.Z.updateLayout(t.id, r, n),
                    r === _.AEg.FULL_SCREEN && t.isPrivate() && g.S.dispatch(_.CkL.TEXTAREA_BLUR));
            },
            [n, t],
        ),
        M = i.useCallback(
            (e) => {
                null != N &&
                    e === _.AEg.FULL_SCREEN &&
                    (R(e, Z.current),
                    (0, y.Pr)((e) => {
                        Z.current = e;
                    }, T));
            },
            [T, R, N],
        ),
        k = i.useCallback(
            (e) => () => {
                null != N &&
                    ((0, d.v)(O, d.d.FULL_SCREEN, e !== _.AEg.FULL_SCREEN),
                    e !== _.AEg.FULL_SCREEN ? ((Z.current = e), R(e, _.AEg.FULL_SCREEN), (0, y.Dj)(N)) : M(e));
            },
            [R, M, N, O],
        );
    i.useEffect(() => {
        let e = () => {
            null != N && ((0, y.rB)(N, T) || S !== _.AEg.FULL_SCREEN || k(S)());
        };
        return (
            T.addEventListener(y.NO, e),
            () => {
                T.removeEventListener(y.NO, e);
            }
        );
    }, [T, S, k, N]);
    let D = {
            channel: t,
            maybeLeaveFullScreen: M,
        },
        L = i.useRef(D);
    return (i.useEffect(() => {
        L.current = D;
    }),
    i.useEffect(() => {
        let { channel: e, maybeLeaveFullScreen: t } = L.current;
        return (
            m.default.track(
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
                })({ video_layout: j ? "popout" : S }, (0, s.AB)(e.id)),
            ),
            () => {
                (j && (0, b.isMac)()) || t(S);
            }
        );
    }, [S, j]),
    i.useEffect(() => {
        null != N && E.current === _.WtW.VIDEO && P === _.WtW.VOICE && (0, y.Pr)(N, T);
    }, [T, P, E, N]),
    i.useEffect(() => {
        !I && j && a.Z.wait(() => p.xv(_.KJ3.CHANNEL_CALL_POPOUT));
    }, [I, j]),
    w)
        ? (0, r.jsx)(h.Z, {
              themeable: !1,
              node: N,
              guestWindow: x,
              onClick: k(S),
          })
        : null;
}
