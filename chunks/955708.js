n.d(e, {
    default: () => _,
    x: () => m,
}),
    n(388685);
var i,
    r = n(54381),
    s = n(473749),
    a = n(481060),
    o = n(378298),
    c = n(473092),
    l = n(684471),
    d = n(745982),
    u = n(463439),
    p = n(388032),
    x = n(35853);
function g(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            i.forEach(function (e) {
                var i;
                (i = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = i);
            });
    }
    return t;
}
function h(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
var m =
    (((i = {})[(i.INTRO = 0)] = "INTRO"),
    (i[(i.SAFETY_TIPS = 1)] = "SAFETY_TIPS"),
    (i[(i.TAKE_ACTION = 2)] = "TAKE_ACTION"),
    i);
let _ = (t) => {
    let { warningId: e, warningType: n, senderId: i, modalProps: m, channelId: _ } = t,
        [f, b] = s.useState(0),
        O = s.useMemo(
            () => ({
                channelId: _,
                senderId: i,
                warningId: e,
                warningType: n,
                isNudgeWarning: !1,
            }),
            [_, i, e, n],
        );
    s.useEffect(() => {
        (0, c.KQ)(h(g({}, O), { viewName: c.pb.SAFETY_TAKEOVER_MODAL }));
    }, [O]);
    let v = s.useCallback(
            (t) => {
                (0, c.qc)(h(g({}, O), { cta: t }));
            },
            [O],
        ),
        [j, T] = s.useState(!1);
    function E(t) {
        b(t);
    }
    return (0, r.jsxs)(a.Y0X, {
        "data-migration-pending": !0,
        transitionState: m.transitionState,
        parentComponent: "InappropriateConversationModal",
        children: [
            (0, r.jsx)("div", {
                className: x.container,
                children: (0, r.jsxs)(a.MyZ, {
                    width: 440,
                    activeSlide: f,
                    centered: !1,
                    overflow: "visible",
                    contentDisplay: "flex",
                    children: [
                        (0, r.jsx)(a.Mi4, {
                            id: 0,
                            children: (0, r.jsx)(l.Z, {
                                warningId: e,
                                senderId: i,
                                trackAnalyticsEvent: v,
                                onNavigate: E,
                            }),
                        }),
                        (0, r.jsx)(a.Mi4, {
                            id: 1,
                            children: (0, r.jsx)(d.Z, {
                                warningId: e,
                                senderId: i,
                                trackAnalyticsEvent: v,
                            }),
                        }),
                        (0, r.jsx)(a.Mi4, {
                            id: 2,
                            children: (0, r.jsx)(u.Z, {
                                warningId: e,
                                senderId: i,
                                trackAnalyticsEvent: v,
                                channelId: _,
                                hasReported: j,
                                onReport: function () {
                                    T(!0);
                                },
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsxs)(a.mzw, {
                "data-migration-pending": !0,
                className: x.footer,
                children: [
                    (0, r.jsx)(a.Avr, {
                        variant: "secondary",
                        size: "sm",
                        text: p.intl.string(p.t.cpT0Cq),
                        onClick: function () {
                            m.onClose(), (0, o.T)(_, [e]), v(c.NM.USER_TAKEOVER_MODAL_DISMISS);
                        },
                        textVariant: "text-sm/normal",
                    }),
                    0 !== f &&
                        (0, r.jsx)(a.Avr, {
                            variant: "secondary",
                            size: "sm",
                            text: p.intl.string(p.t["13/7kX"]),
                            textVariant: "text-sm/normal",
                            onClick: () => E(0),
                        }),
                ],
            }),
        ],
    });
};
