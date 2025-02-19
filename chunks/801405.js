n.d(t, { Z: () => v });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(570140),
    a = n(475179),
    s = n(367907),
    c = n(358221),
    u = n(788983),
    d = n(268353),
    p = n(944486),
    h = n(626135),
    f = n(585483),
    m = n(358085),
    g = n(228488),
    b = n(981631),
    _ = n(284204);
let C = () => {
    o.Z.wait(() => u.xv(b.KJ3.CHANNEL_CALL_POPOUT));
};
function v(e) {
    let { channel: t, appContext: n, popoutOpen: o, popoutWindow: u, currentWindow: v } = e,
        y = n === b.IlC.POPOUT,
        x = i.useRef(null),
        { currentLayout: j, mode: O } = (0, l.cj)(
            [c.Z],
            () => {
                let e = c.Z.getMode(t.id),
                    r = n === b.IlC.POPOUT;
                r && (e = b.WtW.VIDEO);
                let i = e === b.WtW.VIDEO ? c.Z.getLayout(t.id, n) : b.AEg.MINIMUM;
                return (
                    r && i !== b.AEg.FULL_SCREEN && (i = b.AEg.NO_CHAT),
                    {
                        currentLayout: i,
                        mode: e
                    }
                );
            },
            [t, n]
        ),
        N = (0, l.e7)([p.Z], () => p.Z.getVoiceChannelId() === t.id, [t.id]);
    i.useEffect(() => {
        x.current = O;
    });
    let E = i.useRef(j),
        { currentDocument: P, rootNode: I } = i.useMemo(() => {
            let e = null != u && y ? u.document : document,
                t = v.document.getElementById('app-mount');
            return {
                currentWindow: v,
                currentDocument: e,
                rootNode: t
            };
        }, [u, y, v]),
        S = o && !y,
        Z = O === b.WtW.VIDEO && N && !S,
        T = i.useCallback(
            (e, r) => {
                r !== e && (a.Z.updateLayout(t.id, r, n), r === b.AEg.FULL_SCREEN && t.isPrivate() && f.S.dispatch(b.CkL.TEXTAREA_BLUR));
            },
            [n, t]
        ),
        A = i.useCallback(
            (e) => {
                null != I &&
                    e === b.AEg.FULL_SCREEN &&
                    (T(e, E.current),
                    (0, g.Pr)((e) => {
                        E.current = e;
                    }, P));
            },
            [P, T, I]
        ),
        w = i.useCallback(
            (e) => () => {
                null != I && (e !== b.AEg.FULL_SCREEN ? ((E.current = e), T(e, b.AEg.FULL_SCREEN), (0, g.Dj)(I)) : A(e));
            },
            [T, A, I]
        );
    i.useEffect(() => {
        let e = () => {
            null == I || (0, g.rB)(I, P) || j !== b.AEg.FULL_SCREEN || w(j)();
        };
        return (
            P.addEventListener(g.NO, e),
            () => {
                P.removeEventListener(g.NO, e);
            }
        );
    }, [P, j, w, I]);
    let R = {
            channel: t,
            maybeLeaveFullScreen: A
        },
        k = i.useRef(R);
    return (i.useEffect(() => {
        k.current = R;
    }),
    i.useEffect(() => {
        let { channel: e, maybeLeaveFullScreen: t } = k.current;
        return (
            h.default.track(
                b.rMx.VIDEO_LAYOUT_TOGGLED,
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
                })({ video_layout: y ? 'popout' : j }, (0, s.AB)(e.id))
            ),
            () => {
                (y && (0, m.isMac)()) || t(j);
            }
        );
    }, [j, y]),
    i.useEffect(() => {
        null != I && x.current === b.WtW.VIDEO && O === b.WtW.VOICE && (0, g.Pr)(I, P);
    }, [P, O, x, I]),
    i.useEffect(() => {
        !N && y && C();
    }, [N, y]),
    Z)
        ? (0, r.jsx)(d.Z, {
              themeable: !1,
              node: I,
              guestWindow: u,
              className: _.rightTrayIcon,
              onClick: w(j)
          })
        : null;
}
