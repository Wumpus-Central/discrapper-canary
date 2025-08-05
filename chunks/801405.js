n.d(t, { Z: () => O });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(570140),
    s = n(475179),
    o = n(367907),
    c = n(906732),
    d = n(358221),
    u = n(522651),
    h = n(788983),
    p = n(268353),
    f = n(944486),
    g = n(626135),
    m = n(585483),
    b = n(358085),
    _ = n(228488),
    y = n(981631);
let j = () => {
    a.Z.wait(() => h.xv(y.KJ3.CHANNEL_CALL_POPOUT));
};
function O(e) {
    let { channel: t, appContext: n, popoutOpen: a, popoutWindow: h, currentWindow: O } = e,
        { parentAnalyticsLocation: x } = (0, c.ZP)(),
        v = n === y.IlC.POPOUT,
        C = i.useRef(null),
        { currentLayout: E, mode: Z } = (0, l.cj)(
            [d.Z],
            () => {
                let e = d.Z.getMode(t.id),
                    r = n === y.IlC.POPOUT;
                r && (e = y.WtW.VIDEO);
                let i = e === y.WtW.VIDEO ? d.Z.getLayout(t.id, n) : y.AEg.MINIMUM;
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
        C.current = Z;
    });
    let S = i.useRef(E),
        { currentDocument: P, rootNode: T } = i.useMemo(() => {
            let e = null != h && v ? h.document : document,
                t = O.document.getElementById('app-mount');
            return {
                currentWindow: O,
                currentDocument: e,
                rootNode: t
            };
        }, [h, v, O]),
        N = a && !v,
        w = Z === y.WtW.VIDEO && I && !N,
        R = i.useCallback(
            (e, r) => {
                r !== e && (s.Z.updateLayout(t.id, r, n), r === y.AEg.FULL_SCREEN && t.isPrivate() && m.S.dispatch(y.CkL.TEXTAREA_BLUR));
            },
            [n, t]
        ),
        A = i.useCallback(
            (e) => {
                null != T &&
                    e === y.AEg.FULL_SCREEN &&
                    (R(e, S.current),
                    (0, _.Pr)((e) => {
                        S.current = e;
                    }, P));
            },
            [P, R, T]
        ),
        D = i.useCallback(
            (e) => () => {
                null != T && ((0, u.v)(x, u.d.FULL_SCREEN, e !== y.AEg.FULL_SCREEN), e !== y.AEg.FULL_SCREEN ? ((S.current = e), R(e, y.AEg.FULL_SCREEN), (0, _.Dj)(T)) : A(e));
            },
            [R, A, T, x]
        );
    i.useEffect(() => {
        let e = () => {
            null != T && ((0, _.rB)(T, P) || E !== y.AEg.FULL_SCREEN || D(E)());
        };
        return (
            P.addEventListener(_.NO, e),
            () => {
                P.removeEventListener(_.NO, e);
            }
        );
    }, [P, E, D, T]);
    let L = {
            channel: t,
            maybeLeaveFullScreen: A
        },
        M = i.useRef(L);
    return (i.useEffect(() => {
        M.current = L;
    }),
    i.useEffect(() => {
        let { channel: e, maybeLeaveFullScreen: t } = M.current;
        return (
            g.default.track(
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
                })({ video_layout: v ? 'popout' : E }, (0, o.AB)(e.id))
            ),
            () => {
                (v && (0, b.isMac)()) || t(E);
            }
        );
    }, [E, v]),
    i.useEffect(() => {
        null != T && C.current === y.WtW.VIDEO && Z === y.WtW.VOICE && (0, _.Pr)(T, P);
    }, [P, Z, C, T]),
    i.useEffect(() => {
        !I && v && j();
    }, [I, v]),
    w)
        ? (0, r.jsx)(p.Z, {
              themeable: !1,
              node: T,
              guestWindow: h,
              onClick: D(E)
          })
        : null;
}
