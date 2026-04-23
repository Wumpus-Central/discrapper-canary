i.d(t, { default: () => m });
var a = i(627968),
    n = i(64700),
    l = i(192308),
    r = i(930932),
    o = i(612479),
    d = i(954571),
    c = i(545125),
    s = i(86039),
    u = i(360469),
    _ = i(652215),
    b = i(670455),
    p = i(985018);
let g = [u.CS.OTHER, u.CS.ADS, u.CS.NOT_FUN];
function m(e) {
    let {
        channel: t,
        embeddedActivityLocation: m,
        activityApplication: h,
        onClose: f,
        transitionState: y,
        analyticsData: v,
    } = e;
    n.useEffect(() => {
        d.default.track(_.HAw.OPEN_MODAL, {
            type: "Activity Feedback Modal",
            application_id: h.id,
            application_name: h.name,
            game_id: h.id,
            source: "Activity End",
        });
    }, [h]);
    let x = h.embeddedActivityConfig?.displays_advertisements === !0;
    return (0, a.jsx)(o.A, {
        modalType: "activity",
        header: p.intl.formatToPlainString(p.t.QXYwoD, { applicationName: h.name }),
        body: p.intl.string(p.t["9hk2KF"]),
        problemTitle: p.intl.string(p.t.g1q5fr),
        problems: (0, c.A)(!0, x),
        freeformNeededProblems: g,
        onSubmit: function (e) {
            let { rating: n, problem: o, dontShowAgain: c, feedback: u } = e;
            c &&
                (d.default.track(_.HAw.ACTIVITY_REPORT_DONT_SHOW, { application_id: h.id, rating: n }),
                (0, r.n3)({ feedbackType: b.MW.ACTIVITY, location: "ActivityFeedback" })),
                null == n ||
                    ((0, s.A)({
                        problem: o?.value ?? null,
                        channel: t,
                        embeddedActivityLocation: m,
                        feedback: u,
                        activityApplication: h,
                        analyticsData: v,
                        location: "Activity End",
                        rating: n,
                    }),
                    null != o &&
                        (0, l.openModalLazy)(async () => {
                            let { default: e } = await i.e("37836").then(i.bind(i, 845671));
                            return (t) => (0, a.jsx)(e, { body: p.intl.string(p.t["zuHR+y"]), ...t });
                        }));
        },
        onClose: f,
        transitionState: y,
        otherKey: u.CS.OTHER,
    });
}
