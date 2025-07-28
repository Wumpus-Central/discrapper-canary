n.d(t, { Z: () => x });
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
    y = n(981631);
let C = () => {
    a.Z.wait(() => p.xv(y.KJ3.CHANNEL_CALL_POPOUT));
};
function x(e) {
    let { channel: t, appContext: n, popoutOpen: a, popoutWindow: p, currentWindow: x } = e,
        { parentAnalyticsLocation: v } = (0, c.ZP)(),
        j = n === y.IlC.POPOUT,
        O = i.useRef(null),
        { currentLayout: E, mode: S } = (0, l.cj)(
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
        O.current = S;
    });
    let I = i.useRef(E),
        { currentDocument: Z, rootNode: T } = i.useMemo(() => {
            let e = null != p && j ? p.document : document,
                t = x.document.getElementById('app-mount');
            return {
                currentWindow: x,
                currentDocument: e,
                rootNode: t
            };
        }, [p, j, x]),
        N = a && !j,
        A = S === y.WtW.VIDEO && P && !N,
        w = i.useCallback(
            (e, r) => {
                r !== e && (o.Z.updateLayout(t.id, r, n), r === y.AEg.FULL_SCREEN && t.isPrivate() && g.S.dispatch(y.CkL.TEXTAREA_BLUR));
            },
            [n, t]
        ),
        R = i.useCallback(
            (e) => {
                null != T &&
                    e === y.AEg.FULL_SCREEN &&
                    (w(e, I.current),
                    (0, _.Pr)((e) => {
                        I.current = e;
                    }, Z));
            },
            [Z, w, T]
        ),
        M = i.useCallback(
            (e) => () => {
                null != T && ((0, d.v)(v, d.d.FULL_SCREEN, e !== y.AEg.FULL_SCREEN), e !== y.AEg.FULL_SCREEN ? ((I.current = e), w(e, y.AEg.FULL_SCREEN), (0, _.Dj)(T)) : R(e));
            },
            [w, R, T, v]
        );
    i.useEffect(() => {
        let e = () => {
            null != T && ((0, _.rB)(T, Z) || E !== y.AEg.FULL_SCREEN || M(E)());
        };
        return (
            Z.addEventListener(_.NO, e),
            () => {
                Z.removeEventListener(_.NO, e);
            }
        );
    }, [Z, E, M, T]);
    let D = {
            channel: t,
            maybeLeaveFullScreen: R
        },
        k = i.useRef(D);
    return (i.useEffect(() => {
        k.current = D;
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
                })({ video_layout: j ? 'popout' : E }, (0, s.AB)(e.id))
            ),
            () => {
                (j && (0, b.isMac)()) || t(E);
            }
        );
    }, [E, j]),
    i.useEffect(() => {
        null != T && O.current === y.WtW.VIDEO && S === y.WtW.VOICE && (0, _.Pr)(T, Z);
    }, [Z, S, O, T]),
    i.useEffect(() => {
        !P && j && C();
    }, [P, j]),
    A)
        ? (0, r.jsx)(h.Z, {
              themeable: !1,
              node: T,
              guestWindow: p,
              onClick: M(E)
          })
        : null;
}
