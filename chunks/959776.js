n.d(t, { Z: () => o });
var r = n(913527),
    a = n.n(r),
    i = n(626135),
    l = n(981631);
function o(e, t) {
    i.default.track(l.rMx.AGE_GATE_SUBMITTED, {
        dob: 18 > a()().diff(e, 'years') ? e.format('YYYY-MM-DD') : null,
        dob_day: e.date(),
        dob_month: e.month() + 1,
        dob_year: e.year(),
        source: { section: t }
    });
}
