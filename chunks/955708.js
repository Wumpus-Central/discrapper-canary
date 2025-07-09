(n.d(e, {
    default: () => p,
    x: () => b
}),
    n(388685));
var r,
    s = n(255367),
    i = n(73800),
    o = n(755721),
    c = n(481060),
    a = n(378298),
    l = n(473092),
    u = n(684471),
    d = n(745982),
    E = n(463439),
    h = n(388032),
    _ = n(257025);
function N(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            r.forEach(function (e) {
                var r;
                ((r = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = r));
            }));
    }
    return t;
}
function x(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
var b = (((r = {})[(r.INTRO = 0)] = 'INTRO'), (r[(r.SAFETY_TIPS = 1)] = 'SAFETY_TIPS'), (r[(r.TAKE_ACTION = 2)] = 'TAKE_ACTION'), r);
let p = (t) => {
    let { warningId: e, warningType: n, senderId: r, modalProps: b, channelId: p } = t,
        [f, m] = i.useState(0),
        g = i.useMemo(
            () => ({
                channelId: p,
                senderId: r,
                warningId: e,
                warningType: n,
                isNudgeWarning: !1
            }),
            [p, r, e, n]
        );
    i.useEffect(() => {
        (0, l.KQ)(x(N({}, g), { viewName: l.pb.SAFETY_TAKEOVER_MODAL }));
    }, [g]);
    let C = i.useCallback(
            (t) => {
                (0, l.qc)(x(N({}, g), { cta: t }));
            },
            [g]
        ),
        [I, A] = i.useState(!1);
    function T(t) {
        m(t);
    }
    return (0, s.jsxs)(c.Y0X, {
        transitionState: b.transitionState,
        parentComponent: 'InappropriateConversationModal',
        children: [
            (0, s.jsx)('div', {
                className: _.container,
                children: (0, s.jsxs)(c.MyZ, {
                    width: 440,
                    activeSlide: f,
                    centered: !1,
                    overflow: 'visible',
                    contentDisplay: 'flex',
                    children: [
                        (0, s.jsx)(c.Mi4, {
                            id: 0,
                            children: (0, s.jsx)(u.Z, {
                                warningId: e,
                                senderId: r,
                                trackAnalyticsEvent: C,
                                onNavigate: T
                            })
                        }),
                        (0, s.jsx)(c.Mi4, {
                            id: 1,
                            children: (0, s.jsx)(d.Z, {
                                warningId: e,
                                senderId: r,
                                trackAnalyticsEvent: C
                            })
                        }),
                        (0, s.jsx)(c.Mi4, {
                            id: 2,
                            children: (0, s.jsx)(E.Z, {
                                warningId: e,
                                senderId: r,
                                trackAnalyticsEvent: C,
                                channelId: p,
                                hasReported: I,
                                onReport: function () {
                                    A(!0);
                                }
                            })
                        })
                    ]
                })
            }),
            (0, s.jsxs)(c.mzw, {
                className: _.footer,
                children: [
                    (0, s.jsx)(o.zx, {
                        className: _.footerButton,
                        look: o.zx.Looks.LINK,
                        color: o.zx.Colors.CUSTOM,
                        size: o.zx.Sizes.MIN,
                        onClick: function () {
                            (b.onClose(), (0, a.T)(p, [e]), C(l.NM.USER_TAKEOVER_MODAL_DISMISS));
                        },
                        children: h.intl.string(h.t.cpT0Cg)
                    }),
                    0 !== f &&
                        (0, s.jsx)(o.zx, {
                            className: _.footerButton,
                            look: o.zx.Looks.LINK,
                            color: o.zx.Colors.CUSTOM,
                            size: o.zx.Sizes.MIN,
                            onClick: () => T(0),
                            children: h.intl.string(h.t['13/7kZ'])
                        })
                ]
            })
        ]
    });
};
