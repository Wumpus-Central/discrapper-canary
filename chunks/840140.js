t.d(a, { $T: () => h, DP: () => d, _U: () => s, e6: () => D, ot: () => m, qk: () => y });
var r = t(569737),
    n = t(594247),
    i = t(576463);
let o = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})$/,
    l = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/,
    u =
        /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:(?:([+-]\d{2})(?::?(\d{2}))?)|Z)$/;
function s(e) {
    let a = e.match(o);
    if (!a) {
        if (u.test(e)) throw Error(`Invalid ISO 8601 date string: ${e}. Use parseAbsolute() instead.`);
        throw Error("Invalid ISO 8601 date string: " + e);
    }
    let t = new (0, r.ng)(c(a[1], 0, 9999), c(a[2], 1, 12), 1);
    return (t.day = c(a[3], 1, t.calendar.getDaysInMonth(t))), t;
}
function d(e) {
    let a = e.match(l);
    if (!a) {
        if (u.test(e)) throw Error(`Invalid ISO 8601 date time string: ${e}. Use parseAbsolute() instead.`);
        throw Error("Invalid ISO 8601 date time string: " + e);
    }
    let t = c(a[1], -9999, 9999),
        n = new (0, r._l)(
            t < 1 ? "BC" : "AD",
            t < 1 ? -t + 1 : t,
            c(a[2], 1, 12),
            1,
            a[4] ? c(a[4], 0, 23) : 0,
            a[5] ? c(a[5], 0, 59) : 0,
            a[6] ? c(a[6], 0, 59) : 0,
            a[7] ? 1e3 * c(a[7], 0, 1 / 0) : 0,
        );
    return (n.day = c(a[3], 0, n.calendar.getDaysInMonth(n))), n;
}
function c(e, a, t) {
    let r = Number(e);
    if (r < a || r > t) throw RangeError(`Value out of range: ${a} <= ${r} <= ${t}`);
    return r;
}
function m(e) {
    return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function h(e) {
    let a,
        t = (0, n.yP)(e, new (0, i.FG)());
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
function y(e) {
    return `${h(e)}T${m(e)}`;
}
function D(e) {
    var a;
    let t, r, n, i, o;
    return `${y(e)}${((t = 0 > Math.sign((a = e.offset)) ? "-" : "+"), (r = Math.floor((a = Math.abs(a)) / 36e5)), (n = Math.floor((a % 36e5) / 6e4)), (i = Math.floor(((a % 36e5) % 6e4) / 1e3)), (o = `${t}${String(r).padStart(2, "0")}:${String(n).padStart(2, "0")}`), 0 !== i && (o += `:${String(i).padStart(2, "0")}`), o)}[${e.timeZone}]`;
}
