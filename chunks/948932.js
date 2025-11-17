n.d(t, {
    FK: () => f,
    Lh: () => c,
    So: () => d,
    tN: () => u,
});
var r = n(177783),
    i = n(533426),
    a = n(218769),
    o = n(750996),
    s = n(473749);
function l(e) {
    return e && e.__esModule ? e.default : e;
}
let c = new WeakMap();
function u(e) {
    return (null == e ? void 0 : e.calendar.identifier) === "gregory" && "BC" === e.era ? "short" : void 0;
}
function d(e) {
    var t;
    let n,
        c,
        d = (0, a.q)(l(r.Z), "@react-aria/calendar");
    "highlightedRange" in e
        ? ({ start: n, end: c } = e.highlightedRange || {})
        : (n = c = null != (t = e.value) ? t : void 0);
    let f = (0, o.a)({
            weekday: "long",
            month: "long",
            year: "numeric",
            day: "numeric",
            era: u(n) || u(c),
            timeZone: e.timeZone,
        }),
        p = "anchorDate" in e ? e.anchorDate : null;
    return (0, s.useMemo)(() => {
        if (!p && n && c)
            if ((0, i.KC)(n, c)) {
                let t = f.format(n.toDate(e.timeZone));
                return d.format("selectedDateDescription", { date: t });
            } else {
                let t = _(f, d, n, c, e.timeZone);
                return d.format("selectedRangeDescription", { dateRange: t });
            }
        return "";
    }, [n, c, p, e.timeZone, d, f]);
}
function f(e, t, n, c) {
    let d = (0, a.q)(l(r.Z), "@react-aria/calendar"),
        f = u(e) || u(t),
        p = (0, o.a)({
            month: "long",
            year: "numeric",
            era: f,
            calendar: e.calendar.identifier,
            timeZone: n,
        }),
        h = (0, o.a)({
            month: "long",
            year: "numeric",
            day: "numeric",
            era: f,
            calendar: e.calendar.identifier,
            timeZone: n,
        });
    return (0, s.useMemo)(() => {
        if ((0, i.KC)(e, (0, i.Nm)(e))) {
            let r = e,
                a = t;
            if (
                (e.calendar.getFormattableMonth && (r = e.calendar.getFormattableMonth(e)),
                t.calendar.getFormattableMonth && (a = t.calendar.getFormattableMonth(t)),
                (0, i.KC)(t, (0, i.Vf)(e)))
            )
                return p.format(r.toDate(n));
            if ((0, i.KC)(t, (0, i.Vf)(t))) return c ? _(p, d, r, a, n) : p.formatRange(r.toDate(n), a.toDate(n));
        }
        return c ? _(h, d, e, t, n) : h.formatRange(e.toDate(n), t.toDate(n));
    }, [e, t, p, h, d, n, c]);
}
function _(e, t, n, r, i) {
    let a = e.formatRangeToParts(n.toDate(i), r.toDate(i)),
        o = -1;
    for (let e = 0; e < a.length; e++) {
        let t = a[e];
        if ("shared" === t.source && "literal" === t.type) o = e;
        else if ("endRange" === t.source) break;
    }
    let s = "",
        l = "";
    for (let e = 0; e < a.length; e++) e < o ? (s += a[e].value) : e > o && (l += a[e].value);
    return t.format("dateRange", {
        startDate: s,
        endDate: l,
    });
}
