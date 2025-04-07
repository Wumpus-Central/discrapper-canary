n.d(t, { Z: () => l });
var r = n(913527),
    i = n.n(r),
    o = n(626135),
    a = n(981631);
function l(e, t) {
    o.default.track(a.rMx.AGE_GATE_SUBMITTED, {
        dob: 18 > i()().diff(e, 'years') ? e.format('YYYY-MM-DD') : null,
        dob_day: e.date(),
        dob_month: e.month() + 1,
        dob_year: e.year(),
        source: { section: t }
    });
}
