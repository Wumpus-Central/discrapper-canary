n.d(t, { Z: () => v });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(570140),
    a = n(475179),
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
    o.Z.wait(() => p.xv(y.KJ3.CHANNEL_CALL_POPOUT));
};
function v(e) {
    let { channel: t, appContext: n, popoutOpen: o, popoutWindow: p, currentWindow: v } = e,
        { parentAnalyticsLocation: j } = (0, c.ZP)(),
        O = n === y.IlC.POPOUT,
        E = i.useRef(null),
        { currentLayout: I, mode: P } = (0, l.cj)(
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
        S = (0, l.e7)([f.Z], () => f.Z.getVoiceChannelId() === t.id, [t.id]);
    i.useEffect(() => {
        E.current = P;
    });
    let Z = i.useRef(I),
        { currentDocument: N, rootNode: T } = i.useMemo(() => {
            let e = null != p && O ? p.document : document,
                t = v.document.getElementById('app-mount');
            return {
                currentWindow: v,
                currentDocument: e,
                rootNode: t
            };
        }, [p, O, v]),
        A = o && !O,
        w = P === y.WtW.VIDEO && S && !A,
        R = i.useCallback(
            (e, r) => {
                r !== e && (a.Z.updateLayout(t.id, r, n), r === y.AEg.FULL_SCREEN && t.isPrivate() && g.S.dispatch(y.CkL.TEXTAREA_BLUR));
            },
            [n, t]
        ),
        k = i.useCallback(
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
        M = i.useCallback(
            (e) => () => {
                null != T && ((0, d.v)(j, d.d.FULL_SCREEN, e !== y.AEg.FULL_SCREEN), e !== y.AEg.FULL_SCREEN ? ((Z.current = e), R(e, y.AEg.FULL_SCREEN), (0, _.Dj)(T)) : k(e));
            },
            [R, k, T, j]
        );
    i.useEffect(() => {
        let e = () => {
            null != T && ((0, _.rB)(T, N) || I !== y.AEg.FULL_SCREEN || M(I)());
        };
        return (
            N.addEventListener(_.NO, e),
            () => {
                N.removeEventListener(_.NO, e);
            }
        );
    }, [N, I, M, T]);
    let L = {
            channel: t,
            maybeLeaveFullScreen: k
        },
        D = i.useRef(L);
    return (i.useEffect(() => {
        D.current = L;
    }),
    i.useEffect(() => {
        let { channel: e, maybeLeaveFullScreen: t } = D.current;
        return (
            m.default.track(
                y.rMx.VIDEO_LAYOUT_TOGGLED,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({ video_layout: O ? 'popout' : I }, (0, s.AB)(e.id))
            ),
            () => {
                (O && (0, b.isMac)()) || t(I);
            }
        );
    }, [I, O]),
    i.useEffect(() => {
        null != T && E.current === y.WtW.VIDEO && P === y.WtW.VOICE && (0, _.Pr)(T, N);
    }, [N, P, E, T]),
    i.useEffect(() => {
        !S && O && x();
    }, [S, O]),
    w)
        ? (0, r.jsx)(h.Z, {
              themeable: !1,
              node: T,
              guestWindow: p,
              className: C.rightTrayIcon,
              onClick: M(I)
          })
        : null;
}
