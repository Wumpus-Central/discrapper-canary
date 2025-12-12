n.d(e, {
    default: () => g,
    x: () => b,
}),
    n(388685);
var i,
    r = n(54381),
    a = n(473749),
    s = n(481060),
    o = n(378298),
    c = n(473092),
    l = n(684471),
    d = n(745982),
    u = n(463439),
    f = n(388032),
    p = n(365132);
function x(t) {
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
var b =
    (((i = {})[(i.INTRO = 0)] = "INTRO"),
    (i[(i.SAFETY_TIPS = 1)] = "SAFETY_TIPS"),
    (i[(i.TAKE_ACTION = 2)] = "TAKE_ACTION"),
    i);
let g = (t) => {
    let { warningId: e, warningType: n, senderId: i, modalProps: b, channelId: g } = t,
        [m, O] = a.useState(0),
        j = a.useMemo(
            () => ({
                channelId: g,
                senderId: i,
                warningId: e,
                warningType: n,
                isNudgeWarning: !1,
            }),
            [g, i, e, n],
        );
    a.useEffect(() => {
        (0, c.KQ)(h(x({}, j), { viewName: c.pb.SAFETY_TAKEOVER_MODAL }));
    }, [j]);
    let v = a.useCallback(
            (t) => {
                (0, c.qc)(h(x({}, j), { cta: t }));
            },
            [j],
        ),
        [_, T] = a.useState(!1);
    function E(t) {
        O(t);
    }
    return (0, r.jsxs)(s.Y0X, {
        "data-migration-pending": !0,
        transitionState: b.transitionState,
        parentComponent: "InappropriateConversationModal",
        children: [
            (0, r.jsx)("div", {
                className: p.container,
                children: (0, r.jsxs)(s.MyZ, {
                    width: 440,
                    activeSlide: m,
                    centered: !1,
                    overflow: "visible",
                    contentDisplay: "flex",
                    children: [
                        (0, r.jsx)(s.Mi4, {
                            id: 0,
                            children: (0, r.jsx)(l.Z, {
                                warningId: e,
                                senderId: i,
                                trackAnalyticsEvent: v,
                                onNavigate: E,
                            }),
                        }),
                        (0, r.jsx)(s.Mi4, {
                            id: 1,
                            children: (0, r.jsx)(d.Z, {
                                warningId: e,
                                senderId: i,
                                trackAnalyticsEvent: v,
                            }),
                        }),
                        (0, r.jsx)(s.Mi4, {
                            id: 2,
                            children: (0, r.jsx)(u.Z, {
                                warningId: e,
                                senderId: i,
                                trackAnalyticsEvent: v,
                                channelId: g,
                                hasReported: _,
                                onReport: function () {
                                    T(!0);
                                },
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsxs)(s.mzw, {
                "data-migration-pending": !0,
                className: p.footer,
                children: [
                    (0, r.jsx)(s.Avr, {
                        variant: "secondary",
                        size: "sm",
                        text: f.intl.string(f.t.cpT0Cq),
                        onClick: function () {
                            b.onClose(), (0, o.T)(g, [e]), v(c.NM.USER_TAKEOVER_MODAL_DISMISS);
                        },
                        textVariant: "text-sm/normal",
                    }),
                    0 !== m &&
                        (0, r.jsx)(s.Avr, {
                            variant: "secondary",
                            size: "sm",
                            text: f.intl.string(f.t["13/7kX"]),
                            textVariant: "text-sm/normal",
                            onClick: () => E(0),
                        }),
                ],
            }),
        ],
    });
};
