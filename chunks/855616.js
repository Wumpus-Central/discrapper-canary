t.createParsingComponentsAtWeekday = function (e, t, r) {
    let o = (function (e, t, r) {
            let a = e.getDay();
            switch (r) {
                case "this":
                    return i(e, t);
                case "last":
                    return s(e, t);
                case "next":
                    if (a == n.Weekday.SUNDAY) return t == n.Weekday.SUNDAY ? 7 : t;
                    if (a == n.Weekday.SATURDAY) {
                        if (t == n.Weekday.SATURDAY) return 7;
                        if (t == n.Weekday.SUNDAY) return 8;
                        return 1 + t;
                    }
                    if (t < a && t != n.Weekday.SUNDAY) return i(e, t);
                    return i(e, t) + 7;
            }
            return (function (e, t) {
                let r = s(e, t),
                    n = i(e, t);
                return n < -r ? n : r;
            })(e, t);
        })(e.getDateWithAdjustedTimezone(), t, r),
        u = new a.ParsingComponents(e);
    return ((u = u.addDurationAsImplied({ day: o })).assign("weekday", t), u);
};
let n = r(115004),
    a = r(115835);
function i(e, t) {
    let r = t - e.getDay();
    return (r < 0 && (r += 7), r);
}
function s(e, t) {
    let r = t - e.getDay();
    return (r >= 0 && (r -= 7), r);
}
