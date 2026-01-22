n.d(t, { A: () => u }), n(896048);
var r,
    i = n(311907),
    a = n(73153);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = { surveys: new Map() };
function l(e) {
    o.surveys.set(e.surveyId, e.surveyDetails);
}
class c extends (r = i.Ay.Store) {
    getSurvey(e) {
        var t;
        return null != (t = o.surveys.get(e)) ? t : null;
    }
}
s(c, "displayName", "QualtricsStore");
let u = new c(a.h, { QUALTRICS_SURVEY_FETCH_SUCCESS: l });
