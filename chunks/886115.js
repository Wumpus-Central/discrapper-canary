a.d(e, {
    $G: () => _,
    JM: () => n,
    U0: () => i,
    nK: () => o
});
var r = a(573736);
function _(t, e = 0) {
    return 'string' != typeof t || 0 === e || t.length <= e ? t : `${t.slice(0, e)}...`;
}
function n(t, e) {
    let a = t,
        r = a.length;
    if (r <= 150) return a;
    e > r && (e = r);
    let _ = Math.max(e - 60, 0);
    _ < 5 && (_ = 0);
    let n = Math.min(_ + 140, r);
    return (n > r - 5 && (n = r), n === r && (_ = Math.max(n - 140, 0)), (a = a.slice(_, n)), _ > 0 && (a = `'{snip} ${a}`), n < r && (a += ' {snip}'), a);
}
function o(t, e) {
    if (!Array.isArray(t)) return '';
    let a = [];
    for (let e = 0; e < t.length; e++) {
        let _ = t[e];
        try {
            (0, r.y1)(_) ? a.push('[VueViewModel]') : a.push(String(_));
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
