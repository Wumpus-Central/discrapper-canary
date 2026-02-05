"use strict";
n.d(t, { $T: () => f, DP: () => c, _U: () => u, e6: () => m, ot: () => _, qk: () => p });
var r = n(99478),
    i = n(376472),
    a = n(142922);
let s = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})$/,
    o = /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/,
    l =
        /^([+-]\d{6}|\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:(?:([+-]\d{2})(?::?(\d{2}))?)|Z)$/;
function u(e) {
    let t = e.match(s);
    if (!t) throw Error("Invalid ISO 8601 date string: " + e);
    let n = new (0, r.ng)(d(t[1], 0, 9999), d(t[2], 1, 12), 1);
    return (n.day = d(t[3], 1, n.calendar.getDaysInMonth(n))), n;
}
function c(e) {
    let t = e.match(o);
    if (!t) throw Error("Invalid ISO 8601 date time string: " + e);
    let n = d(t[1], -9999, 9999),
        i = n < 1 ? "BC" : "AD",
        a = new (0, r._l)(
            i,
            n < 1 ? -n + 1 : n,
            d(t[2], 1, 12),
            1,
            t[4] ? d(t[4], 0, 23) : 0,
            t[5] ? d(t[5], 0, 59) : 0,
            t[6] ? d(t[6], 0, 59) : 0,
            t[7] ? 1e3 * d(t[7], 0, 1 / 0) : 0,
        );
    return (a.day = d(t[3], 0, a.calendar.getDaysInMonth(a))), a;
}
function d(e, t, n) {
    let r = Number(e);
    if (r < t || r > n) throw RangeError(`Value out of range: ${t} <= ${r} <= ${n}`);
    return r;
}
function _(e) {
    return `${String(e.hour).padStart(2, "0")}:${String(e.minute).padStart(2, "0")}:${String(e.second).padStart(2, "0")}${e.millisecond ? String(e.millisecond / 1e3).slice(1) : ""}`;
}
function f(e) {
    let t,
        n = (0, i.yP)(e, new (0, a.FG)());
    return (
        (t =
            "BC" === n.era
                ? 1 === n.year
                    ? "0000"
                    : "-" + String(Math.abs(1 - n.year)).padStart(6, "00")
                : String(n.year).padStart(4, "0")),
        `${t}-${String(n.month).padStart(2, "0")}-${String(n.day).padStart(2, "0")}`
    );
}
function p(e) {
    return `${f(e)}T${_(e)}`;
}
function h(e) {
    let t = 0 > Math.sign(e) ? "-" : "+",
        n = Math.floor((e = Math.abs(e)) / 36e5),
        r = Math.floor((e % 36e5) / 6e4),
        i = Math.floor(((e % 36e5) % 6e4) / 1e3),
        a = `${t}${String(n).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
    return 0 !== i && (a += `:${String(i).padStart(2, "0")}`), a;
}
function m(e) {
    return `${p(e)}${h(e.offset)}[${e.timeZone}]`;
}
