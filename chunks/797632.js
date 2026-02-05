"use strict";
n.d(t, { A: () => l });
var r = n(311907),
    i = n(73153);
let a = { surveys: new Map() };
function s(e) {
    a.surveys.set(e.surveyId, e.surveyDetails);
}
class o extends r.Ay.Store {
    static displayName = "QualtricsStore";
    getSurvey(e) {
        return a.surveys.get(e) ?? null;
    }
}
let l = new o(i.h, { QUALTRICS_SURVEY_FETCH_SUCCESS: s });
