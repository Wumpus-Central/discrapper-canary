(n.d(e, {
    default: () => x,
    x: () => f
}),
    n(388685));
var r,
    i = n(255367),
    s = n(73800),
    a = n(481060),
    o = n(378298),
    c = n(473092),
    l = n(684471),
    d = n(745982),
    u = n(463439),
    E = n(388032),
    _ = n(257025);
function h(t) {
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
function p(t, e) {
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
var f = (((r = {})[(r.INTRO = 0)] = 'INTRO'), (r[(r.SAFETY_TIPS = 1)] = 'SAFETY_TIPS'), (r[(r.TAKE_ACTION = 2)] = 'TAKE_ACTION'), r);
let x = (t) => {
    let { warningId: e, warningType: n, senderId: r, modalProps: f, channelId: x } = t,
        [N, g] = s.useState(0),
        m = s.useMemo(
            () => ({
                channelId: x,
                senderId: r,
                warningId: e,
                warningType: n,
                isNudgeWarning: !1
            }),
            [x, r, e, n]
        );
    s.useEffect(() => {
        (0, c.KQ)(p(h({}, m), { viewName: c.pb.SAFETY_TAKEOVER_MODAL }));
    }, [m]);
    let T = s.useCallback(
            (t) => {
                (0, c.qc)(p(h({}, m), { cta: t }));
            },
            [m]
        ),
        [b, A] = s.useState(!1);
    function C(t) {
        g(t);
    }
    return (0, i.jsxs)(a.Y0X, {
        transitionState: f.transitionState,
        parentComponent: 'InappropriateConversationModal',
        children: [
            (0, i.jsx)('div', {
                className: _.container,
                children: (0, i.jsxs)(a.MyZ, {
                    width: 440,
                    activeSlide: N,
                    centered: !1,
                    overflow: 'visible',
                    contentDisplay: 'flex',
                    children: [
                        (0, i.jsx)(a.Mi4, {
                            id: 0,
                            children: (0, i.jsx)(l.Z, {
                                warningId: e,
                                senderId: r,
                                trackAnalyticsEvent: T,
                                onNavigate: C
                            })
                        }),
                        (0, i.jsx)(a.Mi4, {
                            id: 1,
                            children: (0, i.jsx)(d.Z, {
                                warningId: e,
                                senderId: r,
                                trackAnalyticsEvent: T
                            })
                        }),
                        (0, i.jsx)(a.Mi4, {
                            id: 2,
                            children: (0, i.jsx)(u.Z, {
                                warningId: e,
                                senderId: r,
                                trackAnalyticsEvent: T,
                                channelId: x,
                                hasReported: b,
                                onReport: function () {
                                    A(!0);
                                }
                            })
                        })
                    ]
                })
            }),
            (0, i.jsxs)(a.mzw, {
                className: _.footer,
                children: [
                    (0, i.jsx)(a.Avr, {
                        variant: 'secondary',
                        size: 'sm',
                        text: E.intl.string(E.t.cpT0Cg),
                        onClick: function () {
                            (f.onClose(), (0, o.T)(x, [e]), T(c.NM.USER_TAKEOVER_MODAL_DISMISS));
                        },
                        textVariant: 'text-sm/normal'
                    }),
                    0 !== N &&
                        (0, i.jsx)(a.Avr, {
                            variant: 'secondary',
                            size: 'sm',
                            text: E.intl.string(E.t['13/7kZ']),
                            textVariant: 'text-sm/normal',
                            onClick: () => C(0)
                        })
                ]
            })
        ]
    });
};
