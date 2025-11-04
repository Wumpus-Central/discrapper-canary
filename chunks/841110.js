n.d(t, { Z: () => u }), n(388685);
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
let s = { surveys: new Map() };
function l(e) {
    s.surveys.set(e.surveyId, e.surveyDetails);
}
class c extends (r = i.ZP.Store) {
    getSurvey(e) {
        var t;
        return null != (t = s.surveys.get(e)) ? t : null;
    }
}
o(c, "displayName", "QualtricsStore");
let u = new c(a.Z, { QUALTRICS_SURVEY_FETCH_SUCCESS: l });
