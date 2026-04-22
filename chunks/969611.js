a.d(t, { default: () => m });
var i = a(627968),
    r = a(64700),
    l = a(192308),
    n = a(930932),
    o = a(612479),
    d = a(954571),
    s = a(545125),
    c = a(86039),
    u = a(360469),
    _ = a(652215),
    b = a(670455),
    p = a(985018);
let g = [u.CS.OTHER, u.CS.ADS, u.CS.NOT_FUN];
function m(e) {
    let {
        channel: t,
        embeddedActivityLocation: m,
        activityApplication: f,
        onClose: h,
        transitionState: y,
        analyticsData: v,
    } = e;
    r.useEffect(() => {
        d.default.track(_.HAw.OPEN_MODAL, {
            type: "Activity Feedback Modal",
            application_id: f.id,
            application_name: f.name,
            game_id: f.id,
            source: "Activity End",
        });
    }, [f]);
    let x = f.embeddedActivityConfig?.displays_advertisements === !0;
    return (0, i.jsx)(o.A, {
        modalType: "activity",
        header: p.intl.formatToPlainString(p.t.QXYwoD, { applicationName: f.name }),
        body: p.intl.string(p.t["9hk2KF"]),
        problemTitle: p.intl.string(p.t.g1q5fr),
        problems: (0, s.A)(!0, x),
        freeformNeededProblems: g,
        onSubmit: function (e) {
            let { rating: r, problem: o, dontShowAgain: s, feedback: u } = e;
            s &&
                (d.default.track(_.HAw.ACTIVITY_REPORT_DONT_SHOW, { application_id: f.id, rating: r }),
                (0, n.n3)({ feedbackType: b.MW.ACTIVITY, location: "ActivityFeedback" })),
                null == r ||
                    ((0, c.A)({
                        problem: o?.value ?? null,
                        channel: t,
                        embeddedActivityLocation: m,
                        feedback: u,
                        activityApplication: f,
                        analyticsData: v,
                        location: "Activity End",
                        rating: r,
                    }),
                    null != o &&
                        (0, l.openModalLazy)(async () => {
                            let { default: e } = await a.e("37836").then(a.bind(a, 845671));
                            return (t) => (0, i.jsx)(e, { body: p.intl.string(p.t["zuHR+y"]), ...t });
                        }));
        },
        onClose: h,
        transitionState: y,
        otherKey: u.CS.OTHER,
    });
}
