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
        { parentAnalyticsLocation: O } = (0, c.ZP)(),
        j = n === y.IlC.POPOUT,
        E = i.useRef(null),
        { currentLayout: S, mode: I } = (0, l.cj)(
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
        P = (0, l.e7)([f.Z], () => f.Z.getVoiceChannelId() === t.id, [t.id]);
    i.useEffect(() => {
        E.current = I;
    });
    let Z = i.useRef(S),
        { currentDocument: N, rootNode: T } = i.useMemo(() => {
            let e = null != p && j ? p.document : document,
                t = v.document.getElementById('app-mount');
            return {
                currentWindow: v,
                currentDocument: e,
                rootNode: t
            };
        }, [p, j, v]),
        A = a && !j,
        w = I === y.WtW.VIDEO && P && !A,
        R = i.useCallback(
            (e, r) => {
                r !== e && (o.Z.updateLayout(t.id, r, n), r === y.AEg.FULL_SCREEN && t.isPrivate() && g.S.dispatch(y.CkL.TEXTAREA_BLUR));
            },
            [n, t]
        ),
        M = i.useCallback(
            (e) => {
                null != T &&
                    e === y.AEg.FULL_SCREEN &&
                    (R(e, Z.current),
                    (0, _.Pr)((e) => {
                        Z.current = e;
                    }, N));
            },
            [N, R, T]
        ),
        D = i.useCallback(
            (e) => () => {
                null != T && ((0, d.v)(O, d.d.FULL_SCREEN, e !== y.AEg.FULL_SCREEN), e !== y.AEg.FULL_SCREEN ? ((Z.current = e), R(e, y.AEg.FULL_SCREEN), (0, _.Dj)(T)) : M(e));
            },
            [R, M, T, O]
        );
    i.useEffect(() => {
        let e = () => {
            null != T && ((0, _.rB)(T, N) || S !== y.AEg.FULL_SCREEN || D(S)());
        };
        return (
            N.addEventListener(_.NO, e),
            () => {
                N.removeEventListener(_.NO, e);
            }
        );
    }, [N, S, D, T]);
    let L = {
            channel: t,
            maybeLeaveFullScreen: M
        },
        k = i.useRef(L);
    return (i.useEffect(() => {
        k.current = L;
    }),
    i.useEffect(() => {
        let { channel: e, maybeLeaveFullScreen: t } = k.current;
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
                })({ video_layout: j ? 'popout' : S }, (0, s.AB)(e.id))
            ),
            () => {
                (j && (0, b.isMac)()) || t(S);
            }
        );
    }, [S, j]),
    i.useEffect(() => {
        null != T && E.current === y.WtW.VIDEO && I === y.WtW.VOICE && (0, _.Pr)(T, N);
    }, [N, I, E, T]),
    i.useEffect(() => {
        !P && j && x();
    }, [P, j]),
    w)
        ? (0, r.jsx)(h.Z, {
              themeable: !1,
              node: T,
              guestWindow: p,
              className: C.rightTrayIcon,
              onClick: D(S)
          })
        : null;
}
