"use strict";
n.d(t, { A: () => o });
var r = n(311907),
    i = n(73153);
let s = { surveys: new Map() };
class a extends r.Ay.Store {
    static displayName = "QualtricsStore";
    getSurvey(e) {
        return s.surveys.get(e) ?? null;
    }
}
let o = new a(i.h, {
    QUALTRICS_SURVEY_FETCH_SUCCESS: function (e) {
        s.surveys.set(e.surveyId, e.surveyDetails);
    },
});
