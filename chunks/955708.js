n.d(e, {
    default: () => b,
    x: () => x
}),
    n(47120);
var r,
    s = n(200651),
    o = n(192379),
    i = n(481060),
    c = n(378298),
    a = n(473092),
    l = n(684471),
    u = n(745982),
    d = n(463439),
    N = n(388032),
    E = n(257025);
function h(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            r.forEach(function (e) {
                var r;
                (r = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = r);
            });
    }
    return t;
}
function _(t, e) {
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
var x = (((r = {})[(r.INTRO = 0)] = 'INTRO'), (r[(r.SAFETY_TIPS = 1)] = 'SAFETY_TIPS'), (r[(r.TAKE_ACTION = 2)] = 'TAKE_ACTION'), r);
let b = (t) => {
    let { warningId: e, warningType: n, senderId: r, modalProps: x, channelId: b } = t,
        [f, p] = o.useState(0),
        g = o.useMemo(
            () => ({
                channelId: b,
                senderId: r,
                warningId: e,
                warningType: n,
                isNudgeWarning: !1
            }),
            [b, r, e, n]
        );
    o.useEffect(() => {
        (0, a.KQ)(_(h({}, g), { viewName: a.pb.SAFETY_TAKEOVER_MODAL }));
    }, [g]);
    let m = o.useCallback(
            (t) => {
                (0, a.qc)(_(h({}, g), { cta: t }));
            },
            [g]
        ),
        [C, I] = o.useState(!1);
    function A(t) {
        p(t);
    }
    return (0, s.jsxs)(i.Y0X, {
        transitionState: x.transitionState,
        children: [
            (0, s.jsx)('div', {
                className: E.container,
                children: (0, s.jsxs)(i.MyZ, {
                    width: 440,
                    activeSlide: f,
                    centered: !1,
                    overflow: 'visible',
                    contentDisplay: 'flex',
                    children: [
                        (0, s.jsx)(i.Mi4, {
                            id: 0,
                            children: (0, s.jsx)(l.Z, {
                                warningId: e,
                                senderId: r,
                                trackAnalyticsEvent: m,
                                onNavigate: A
                            })
                        }),
                        (0, s.jsx)(i.Mi4, {
                            id: 1,
                            children: (0, s.jsx)(u.Z, {
                                warningId: e,
                                senderId: r,
                                trackAnalyticsEvent: m
                            })
                        }),
                        (0, s.jsx)(i.Mi4, {
                            id: 2,
                            children: (0, s.jsx)(d.Z, {
                                warningId: e,
                                senderId: r,
                                trackAnalyticsEvent: m,
                                channelId: b,
                                hasReported: C,
                                onReport: function () {
                                    I(!0);
                                }
                            })
                        })
                    ]
                })
            }),
            (0, s.jsxs)(i.mzw, {
                className: E.footer,
                children: [
                    (0, s.jsx)(i.zxk, {
                        className: E.footerButton,
                        look: i.zxk.Looks.LINK,
                        color: i.zxk.Colors.CUSTOM,
                        size: i.zxk.Sizes.MIN,
                        onClick: function () {
                            x.onClose(), (0, c.T)(b, [e]), m(a.NM.USER_TAKEOVER_MODAL_DISMISS);
                        },
                        children: N.NW.string(N.t.cpT0Cg)
                    }),
                    0 !== f &&
                        (0, s.jsx)(i.zxk, {
                            className: E.footerButton,
                            look: i.zxk.Looks.LINK,
                            color: i.zxk.Colors.CUSTOM,
                            size: i.zxk.Sizes.MIN,
                            onClick: () => A(0),
                            children: N.NW.string(N.t['13/7kZ'])
                        })
                ]
            })
        ]
    });
};
