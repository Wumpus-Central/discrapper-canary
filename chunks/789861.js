n.d(t, { a1: () => o, mh: () => s, wT: () => d });
var i = n(375708);
let a = new Date(Date.UTC(2026, 7, 21)),
    r = new Date(Date.UTC(2026, 7, 25)),
    l = new Date(Date.UTC(2026, 9, 23));
function o() {
    return new Intl.DateTimeFormat(i.intl.currentLocale, {
        day: "numeric",
        month: "long",
        timeZone: "UTC",
    }).formatRange(a, r);
}
function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r;
    return new Intl.DateTimeFormat(i.intl.currentLocale, { day: "numeric", month: "short", timeZone: "UTC" }).format(e);
}
function d() {
    return new Intl.DateTimeFormat(i.intl.currentLocale, { day: "numeric", month: "long", timeZone: "UTC" }).format(l);
}
