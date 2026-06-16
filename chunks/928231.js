t.d(a, { $T: () => m, DP: () => s, _U: () => u, e6: () => D, ot: () => c, qk: () => h });
var n = t(99478),
    r = t(376472),
    i = t(142922);
let l = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})$/,
    o = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/;
function u(e) {
    let a = e.match(l);
    if (!a) throw Error("Invalid ISO 8601 date string: " + e);
    let t = new (0, n.ng)(d(a[1], 0, 9999), d(a[2], 1, 12), 1);
    return (t.day = d(a[3], 1, t.calendar.getDaysInMonth(t))), t;
}
function s(e) {
    let a = e.match(o);
    if (!a) throw Error("Invalid ISO 8601 date time string: " + e);
    let t = d(a[1], -9999, 9999),
        r = new (0, n._l)(
            t < 1 ? "BC" : "AD",
            t < 1 ? -t + 1 : t,
            d(a[2], 1, 12),
            1,
            a[4] ? d(a[4], 0, 23) : 0,
            a[5] ? d(a[5], 0, 59) : 0,
            a[6] ? d(a[6], 0, 59) : 0,
            a[7] ? 1e3 * d(a[7], 0, 1 / 0) : 0,
        );
    return (r.day = d(a[3], 0, r.calendar.getDaysInMonth(r))), r;
}
function d(e, a, t) {
    let n = Number(e);
    if (n < a || n > t) throw RangeError(`Value out of range: ${a} <= ${n} <= ${t}`);
    return n;
}
function c(e) {
    return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function m(e) {
    let a,
        t = (0, r.yP)(e, new (0, i.FG)());
    return (
        (a =
            "BC" === t.era
                ? 1 === t.year
                    ? "0000"
                    : "-" + String(Math.abs(1 - t.year)).padStart(6, "00")
                : String(t.year).padStart(4, "0")),
        `${a}-${String(t.month).padStart(2, "0")}-${String(t.day).padStart(2, "0")}`
    );
}
function h(e) {
    return `${m(e)}T${c(e)}`;
}
function D(e) {
    var a;
    let t, n, r, i, l;
    return `${h(e)}${((t = 0 > Math.sign((a = e.offset)) ? "-" : "+"), (n = Math.floor((a = Math.abs(a)) / 36e5)), (r = Math.floor((a % 36e5) / 6e4)), (i = Math.floor(((a % 36e5) % 6e4) / 1e3)), (l = `${t}${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}`), 0 !== i && (l += `:${String(i).padStart(2, "0")}`), l)}[${e.timeZone}]`;
}
