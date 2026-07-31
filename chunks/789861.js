i.d(t, { a: () => r, m: () => l });
var n = i(375708);
let s = new Date(Date.UTC(2026, 7, 21)),
    a = new Date(Date.UTC(2026, 7, 25));
function r() {
    return new Intl.DateTimeFormat(n.intl.currentLocale, {
        day: "numeric",
        month: "long",
        timeZone: "UTC",
    }).formatRange(s, a);
}
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
    return new Intl.DateTimeFormat(n.intl.currentLocale, { day: "numeric", month: "short", timeZone: "UTC" }).format(e);
}
