"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366);
let s = { surveys: new Map() };
class a extends i.Ay.Store {
    static displayName = "QualtricsStore";
    getSurvey(e) {
        return s.surveys.get(e) ?? null;
    }
}
let o = new a(r.h, {
    QUALTRICS_SURVEY_FETCH_SUCCESS: function (e) {
        s.surveys.set(e.surveyId, e.surveyDetails);
    },
});
