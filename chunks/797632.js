n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366);
let a = { surveys: new Map() };
class s extends i.Ay.Store {
    static displayName = "QualtricsStore";
    getSurvey(e) {
        return a.surveys.get(e) ?? null;
    }
}
let l = new s(r.h, {
    QUALTRICS_SURVEY_FETCH_SUCCESS: function (e) {
        a.surveys.set(e.surveyId, e.surveyDetails);
    },
});
