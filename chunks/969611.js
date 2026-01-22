a.d(t, { default: () => v });
var i = a(627968),
    n = a(64700),
    l = a(397927),
    d = a(930932),
    c = a(612479),
    r = a(954571),
    o = a(545125),
    f = a(86039),
    b = a(360469),
    u = a(652215),
    s = a(670455),
    _ = a(985018);
let p = [b.CS.OTHER, b.CS.ADS, b.CS.NOT_FUN];
function v(e) {
    var t;
    let {
        channel: v,
        embeddedActivityLocation: g,
        activityApplication: m,
        onClose: O,
        transitionState: y,
        analyticsData: S,
    } = e;
    n.useEffect(() => {
        r.default.track(u.HAw.OPEN_MODAL, {
            type: "Activity Feedback Modal",
            application_id: m.id,
            application_name: m.name,
            game_id: m.id,
            source: "Activity End",
        });
    }, [m]);
    let A = (null == (t = m.embeddedActivityConfig) ? void 0 : t.displays_advertisements) === !0;
    return (0, i.jsx)(c.A, {
        modalType: "activity",
        header: _.intl.formatToPlainString(_.t.QXYwoD, { applicationName: m.name }),
        body: _.intl.string(_.t["9hk2KF"]),
        problemTitle: _.intl.string(_.t.g1q5fr),
        problems: (0, o.A)(!0, A),
        freeformNeededProblems: p,
        onSubmit: function (e) {
            var t;
            let { rating: n, problem: c, dontShowAgain: o, feedback: b } = e;
            o &&
                (r.default.track(u.HAw.ACTIVITY_REPORT_DONT_SHOW, {
                    application_id: m.id,
                    rating: n,
                }),
                (0, d.n3)({
                    feedbackType: s.MW.ACTIVITY,
                    location: "ActivityFeedback",
                })),
                null == n ||
                    ((0, f.A)({
                        problem: null != (t = null == c ? void 0 : c.value) ? t : null,
                        channel: v,
                        embeddedActivityLocation: g,
                        feedback: b,
                        activityApplication: m,
                        analyticsData: S,
                        location: "Activity End",
                        rating: n,
                    }),
                    null != c &&
                        (0, l.mMO)(async () => {
                            let { default: e } = await a.e("37836").then(a.bind(a, 845671));
                            return (t) =>
                                (0, i.jsx)(
                                    e,
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var a = null != arguments[t] ? arguments[t] : {},
                                                i = Object.keys(a);
                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                (i = i.concat(
                                                    Object.getOwnPropertySymbols(a).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                                    }),
                                                )),
                                                i.forEach(function (t) {
                                                    var i;
                                                    (i = a[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: i,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0,
                                                              })
                                                            : (e[t] = i);
                                                });
                                        }
                                        return e;
                                    })({ body: _.intl.string(_.t["zuHR+y"]) }, t),
                                );
                        }));
        },
        onClose: O,
        transitionState: y,
        otherKey: b.CS.OTHER,
    });
}
