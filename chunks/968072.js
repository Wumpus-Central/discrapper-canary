"use strict";
n.d(t, { qQ: () => c });
let r = 50,
    i = "?",
    s = /\(error: (.*)\)/,
    a = /captureMessage|captureException/;
function o(e) {
    if (!e.length) return [];
    let t = Array.from(e);
    return (
        /sentryWrapped/.test(l(t).function || "") && t.pop(),
        t.reverse(),
        a.test(l(t).function || "") && (t.pop(), a.test(l(t).function || "") && t.pop()),
        t.slice(0, r).map((e) => ({ ...e, filename: e.filename || l(t).filename, function: e.function || i }))
    );
}
function l(e) {
    return e[e.length - 1] || {};
}
let u = "<anonymous>";
function c(e) {
    try {
        if (!e || "function" != typeof e) return u;
        return e.name || u;
    } catch (e) {
        return u;
    }
}
