s.d(t, { Z: () => i });
var n = s(913527),
    o = s.n(n),
    a = s(626135),
    r = s(981631);
function i(e, t) {
    a.default.track(r.rMx.AGE_GATE_SUBMITTED, {
        dob: 18 > o()().diff(e, 'years') ? e.format('YYYY-MM-DD') : null,
        dob_day: e.date(),
        dob_month: e.month() + 1,
        dob_year: e.year(),
        source: { section: t }
    });
}
