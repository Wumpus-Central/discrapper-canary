n.d(t, { Z: () => v });
var r = n(255367),
    i = n(73800),
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
    _ = n(228488),
    y = n(981631),
    C = n(806176);
let x = () => {
    a.Z.wait(() => p.xv(y.KJ3.CHANNEL_CALL_POPOUT));
};
function v(e) {
    let { channel: t, appContext: n, popoutOpen: a, popoutWindow: p, currentWindow: v } = e,
        { parentAnalyticsLocation: j } = (0, c.ZP)(),
        O = n === y.IlC.POPOUT,
        E = i.useRef(null),
        { currentLayout: S, mode: P } = (0, l.cj)(
            [u.Z],
            () => {
                let e = u.Z.getMode(t.id),
                    r = n === y.IlC.POPOUT;
                r && (e = y.WtW.VIDEO);
                let i = e === y.WtW.VIDEO ? u.Z.getLayout(t.id, n) : y.AEg.MINIMUM;
                return (
                    r && i !== y.AEg.FULL_SCREEN && (i = y.AEg.NO_CHAT),
                    {
                        currentLayout: i,
                        mode: e
                    }
                );
            },
            [t, n]
        ),
        I = (0, l.e7)([f.Z], () => f.Z.getVoiceChannelId() === t.id, [t.id]);
    i.useEffect(() => {
        E.current = P;
    });
    let Z = i.useRef(S),
        { currentDocument: T, rootNode: N } = i.useMemo(() => {
            let e = null != p && O ? p.document : document,
                t = v.document.getElementById('app-mount');
            return {
                currentWindow: v,
                currentDocument: e,
                rootNode: t
            };
        }, [p, O, v]),
        A = a && !O,
        w = P === y.WtW.VIDEO && I && !A,
        R = i.useCallback(
            (e, r) => {
                r !== e && (o.Z.updateLayout(t.id, r, n), r === y.AEg.FULL_SCREEN && t.isPrivate() && g.S.dispatch(y.CkL.TEXTAREA_BLUR));
            },
            [n, t]
        ),
        M = i.useCallback(
            (e) => {
                null != N &&
                    e === y.AEg.FULL_SCREEN &&
                    (R(e, Z.current),
                    (0, _.Pr)((e) => {
                        Z.current = e;
                    }, T));
            },
            [T, R, N]
        ),
        D = i.useCallback(
            (e) => () => {
                null != N && ((0, d.v)(j, d.d.FULL_SCREEN, e !== y.AEg.FULL_SCREEN), e !== y.AEg.FULL_SCREEN ? ((Z.current = e), R(e, y.AEg.FULL_SCREEN), (0, _.Dj)(N)) : M(e));
            },
            [R, M, N, j]
        );
    i.useEffect(() => {
        let e = () => {
            null != N && ((0, _.rB)(N, T) || S !== y.AEg.FULL_SCREEN || D(S)());
        };
        return (
            T.addEventListener(_.NO, e),
            () => {
                T.removeEventListener(_.NO, e);
            }
        );
    }, [T, S, D, N]);
    let k = {
            channel: t,
            maybeLeaveFullScreen: M
        },
        L = i.useRef(k);
    return (i.useEffect(() => {
        L.current = k;
    }),
    i.useEffect(() => {
        let { channel: e, maybeLeaveFullScreen: t } = L.current;
        return (
            m.default.track(
                y.rMx.VIDEO_LAYOUT_TOGGLED,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })({ video_layout: O ? 'popout' : S }, (0, s.AB)(e.id))
            ),
            () => {
                (O && (0, b.isMac)()) || t(S);
            }
        );
    }, [S, O]),
    i.useEffect(() => {
        null != N && E.current === y.WtW.VIDEO && P === y.WtW.VOICE && (0, _.Pr)(N, T);
    }, [T, P, E, N]),
    i.useEffect(() => {
        !I && O && x();
    }, [I, O]),
    w)
        ? (0, r.jsx)(h.Z, {
              themeable: !1,
              node: N,
              guestWindow: p,
              className: C.rightTrayIcon,
              onClick: D(S)
          })
        : null;
}
