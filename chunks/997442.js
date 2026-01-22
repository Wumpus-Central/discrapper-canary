i.d(e, {
    l: () => T,
});
var n = i(627968);
i(64700);
var l = i(311907),
    s = i(246605),
    r = i(419954),
    u = i(274184),
    a = i(780964),
    o = i(31760);
let T = (0, r.E2)(a.X.SURVEY_OVERRIDE, {
    useSearchTerms: () => ["survey override"],
    Component: function () {
        let t = (0, l.bG)([u.Ay], () => u.Ay.getSurveyOverride());
        return (0, n.jsx)(o.q, {
            label: "Survey Override",
            description: "Provide a survey ID to override the survey shown to this user.",
            placeholder: "Enter Survey ID...",
            overrideId: null != t ? t : null,
            setOverride: (t) => s.xr(t),
            fetchOverride: (t) => {
                var e;
                return null != (e = s.BC(t, !0)) ? e : null;
            },
        });
    },
});
