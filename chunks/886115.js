a.d(e, {
    $G: () => n,
    JM: () => _,
    U0: () => i,
    nK: () => o
});
var r = a(573736);
function n(t, e = 0) {
    return 'string' != typeof t || 0 === e || t.length <= e ? t : `${t.slice(0, e)}...`;
}
function _(t, e) {
    let a = t,
        r = a.length;
    if (r <= 150) return a;
    e > r && (e = r);
    let n = Math.max(e - 60, 0);
    n < 5 && (n = 0);
    let _ = Math.min(n + 140, r);
    return _ > r - 5 && (_ = r), _ === r && (n = Math.max(_ - 140, 0)), (a = a.slice(n, _)), n > 0 && (a = `'{snip} ${a}`), _ < r && (a += ' {snip}'), a;
}
function o(t, e) {
    if (!Array.isArray(t)) return '';
    let a = [];
    for (let e = 0; e < t.length; e++) {
        let n = t[e];
        try {
            (0, r.y1)(n) ? a.push('[VueViewModel]') : a.push(String(n));
        } catch (t) {
            a.push('[value cannot be serialized]');
        }
    }
    return a.join(e);
}
function i(t, e = [], a = !1) {
    return e.some((e) =>
        (function (t, e, a = !1) {
            return !!(0, r.HD)(t) && ((0, r.Kj)(e) ? e.test(t) : !!(0, r.HD)(e) && (a ? t === e : t.includes(e)));
        })(t, e, a)
    );
}
