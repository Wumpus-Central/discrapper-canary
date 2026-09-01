Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.createParsingComponentsAtWeekday = function (e, t, r) {
        let n = i(e.getDateWithAdjustedTimezone(), t, r),
            s = new a.ParsingComponents(e);
        return (s = s.addDurationAsImplied({ day: n })).assign("weekday", t), s;
    }),
    (t.getDaysToWeekday = i),
    (t.getDaysToWeekdayClosest = s),
    (t.getDaysForwardToWeekday = o),
    (t.getBackwardDaysToWeekday = u);
let n = r(115004),
    a = r(115835);
function i(e, t, r) {
    let a = e.getDay();
    switch (r) {
        case "this":
            return o(e, t);
        case "last":
            return u(e, t);
        case "next":
            if (a == n.Weekday.SUNDAY) return t == n.Weekday.SUNDAY ? 7 : t;
            if (a == n.Weekday.SATURDAY) {
                if (t == n.Weekday.SATURDAY) return 7;
                if (t == n.Weekday.SUNDAY) return 8;
                return 1 + t;
            }
            if (t < a && t != n.Weekday.SUNDAY) return o(e, t);
            return o(e, t) + 7;
    }
    return s(e, t);
}
function s(e, t) {
    let r = u(e, t),
        n = o(e, t);
    return n < -r ? n : r;
}
function o(e, t) {
    let r = t - e.getDay();
    return r < 0 && (r += 7), r;
}
function u(e, t) {
    let r = t - e.getDay();
    return r >= 0 && (r -= 7), r;
}
