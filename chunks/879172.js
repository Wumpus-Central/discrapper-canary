"use strict";
n.d(t, { gq: () => o, rQ: () => l, tM: () => s });
let r = {};
function i(e, t) {
    return `${e}:${t}`;
}
function a(e) {
    let [t, n] = e.split(":");
    return [t, n];
}
function s(e, t) {
    return r[i(e, t)];
}
function o(e, t, n) {
    let a = i(e, t);
    r[a] = { ...r[a], ...n };
}
function l(e) {
    for (let t in r) {
        let [n, i] = a(t);
        e(n, i, r[t]);
    }
    r = {};
}
