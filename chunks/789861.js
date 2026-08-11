i.d(t, { a1: () => l, mh: () => o, wT: () => d });
var n = i(375708);
let r = new Date(Date.UTC(2026, 7, 21)),
    s = new Date(Date.UTC(2026, 7, 25)),
    a = new Date(Date.UTC(2026, 9, 23));
function l() {
    return new Intl.DateTimeFormat(n.intl.currentLocale, {
        day: "numeric",
        month: "long",
        timeZone: "UTC",
    }).formatRange(r, s);
}
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
    return new Intl.DateTimeFormat(n.intl.currentLocale, { day: "numeric", month: "short", timeZone: "UTC" }).format(e);
}
function d() {
    return new Intl.DateTimeFormat(n.intl.currentLocale, { day: "numeric", month: "long", timeZone: "UTC" }).format(a);
}
