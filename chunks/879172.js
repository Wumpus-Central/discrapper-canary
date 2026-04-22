"use strict";
n.d(t, { gq: () => s, rQ: () => a, tM: () => i });
let r = {};
function i(e, t) {
    return r[`${e}:${t}`];
}
function s(e, t, n) {
    let i = `${e}:${t}`;
    r[i] = { ...r[i], ...n };
}
function a(e) {
    for (let t in r) {
        let [n, i] = (function (e) {
            let [t, n] = e.split(":");
            return [t, n];
        })(t);
        e(n, i, r[t]);
    }
    r = {};
}
