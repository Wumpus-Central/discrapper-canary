n.d(t, { X: () => l });
var o = n(818083),
    a = n(984134);
let i = (0, o.B)({
    kind: 'user',
    id: '2025-02_call_survey_refresh_web',
    label: 'Call Survey Refresh (Web)',
    defaultConfig: { showRefreshedSurvey: !1 },
    treatments: [
        {
            id: 1,
            label: 'Show refreshed survey',
            config: { showRefreshedSurvey: !0 }
        }
    ]
});
function l(e) {
    let { location: t, autoTrackExposure: n = !0 } = e,
        { isInHoldout: o } = a.h.useExperiment({ location: t }, { autoTrackExposure: n });
    return i.useExperiment(
        { location: t },
        {
            disable: o,
            autoTrackExposure: n
        }
    );
}
