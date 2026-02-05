i.d(e, { default: () => g });
var n = i(627968),
    a = i(64700),
    l = i(397927),
    _ = i(930932),
    c = i(612479),
    o = i(954571),
    r = i(545125),
    d = i(86039),
    s = i(360469),
    b = i(652215),
    u = i(670455),
    m = i(985018);
let p = [s.CS.OTHER, s.CS.ADS, s.CS.NOT_FUN];
function g(t) {
    let {
        channel: e,
        embeddedActivityLocation: g,
        activityApplication: f,
        onClose: S,
        transitionState: A,
        analyticsData: C,
    } = t;
    a.useEffect(() => {
        o.default.track(b.HAw.OPEN_MODAL, {
            type: "Activity Feedback Modal",
            application_id: f.id,
            application_name: f.name,
            game_id: f.id,
            source: "Activity End",
        });
    }, [f]);
    let v = f.embeddedActivityConfig?.displays_advertisements === !0;
    return (0, n.jsx)(c.A, {
        modalType: "activity",
        header: m.intl.formatToPlainString(m.t.QXYwoD, { applicationName: f.name }),
        body: m.intl.string(m.t["9hk2KF"]),
        problemTitle: m.intl.string(m.t.g1q5fr),
        problems: (0, r.A)(!0, v),
        freeformNeededProblems: p,
        onSubmit: function (t) {
            let { rating: a, problem: c, dontShowAgain: r, feedback: s } = t;
            r &&
                (o.default.track(b.HAw.ACTIVITY_REPORT_DONT_SHOW, { application_id: f.id, rating: a }),
                (0, _.n3)({ feedbackType: u.MW.ACTIVITY, location: "ActivityFeedback" })),
                null == a ||
                    ((0, d.A)({
                        problem: c?.value ?? null,
                        channel: e,
                        embeddedActivityLocation: g,
                        feedback: s,
                        activityApplication: f,
                        analyticsData: C,
                        location: "Activity End",
                        rating: a,
                    }),
                    null != c &&
                        (0, l.mMO)(async () => {
                            let { default: t } = await i.e("37836").then(i.bind(i, 845671));
                            return (e) => (0, n.jsx)(t, { body: m.intl.string(m.t["zuHR+y"]), ...e });
                        }));
        },
        onClose: S,
        transitionState: A,
        otherKey: s.CS.OTHER,
    });
}
