n.d(t, { a1: () => a, mh: () => o, wT: () => E });
var i = n(375708);
let l = new Date(Date.UTC(2026, 7, 21)),
    r = new Date(Date.UTC(2026, 7, 25)),
    s = new Date(Date.UTC(2026, 9, 23));
function a() {
    return new Intl.DateTimeFormat(i.intl.currentLocale, {
        day: "numeric",
        month: "long",
        timeZone: "UTC",
    }).formatRange(l, r);
}
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r;
    return new Intl.DateTimeFormat(i.intl.currentLocale, { day: "numeric", month: "short", timeZone: "UTC" }).format(e);
}
function E() {
    return new Intl.DateTimeFormat(i.intl.currentLocale, { day: "numeric", month: "long", timeZone: "UTC" }).format(s);
}
