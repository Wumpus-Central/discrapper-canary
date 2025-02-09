s.d(t, { Z: () => r });
var n = s(913527),
    a = s.n(n),
    o = s(626135),
    i = s(981631);
function r(e, t) {
    o.default.track(i.rMx.AGE_GATE_SUBMITTED, {
        dob: 18 > a()().diff(e, 'years') ? e.format('YYYY-MM-DD') : null,
        dob_day: e.date(),
        dob_month: e.month() + 1,
        dob_year: e.year(),
        source: { section: t }
    });
}
