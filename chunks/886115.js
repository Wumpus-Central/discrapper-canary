r.d(t, {
    $G: () => a,
    JM: () => i,
    U0: () => _,
    nK: () => o,
});
var n = r(573736);
function a(e, t = 0) {
    return "string" != typeof e || 0 === t || e.length <= t ? e : `${e.slice(0, t)}...`;
}
function i(e, t) {
    let r = e,
        n = r.length;
    if (n <= 150) return r;
    t > n && (t = n);
    let a = Math.max(t - 60, 0);
    a < 5 && (a = 0);
    let i = Math.min(a + 140, n);
    return (
        i > n - 5 && (i = n),
        i === n && (a = Math.max(i - 140, 0)),
        (r = r.slice(a, i)),
        a > 0 && (r = `'{snip} ${r}`),
        i < n && (r += " {snip}"),
        r
    );
}
function o(e, t) {
    if (!Array.isArray(e)) return "";
    let r = [];
    for (let t = 0; t < e.length; t++) {
        let a = e[t];
        try {
            (0, n.y1)(a) ? r.push("[VueViewModel]") : r.push(String(a));
        } catch (e) {
            r.push("[value cannot be serialized]");
        }
    }
    return r.join(t);
}
function _(e, t = [], r = !1) {
    return t.some((t) =>
        (function (e, t, r = !1) {
            return !!(0, n.HD)(e) && ((0, n.Kj)(t) ? t.test(e) : !!(0, n.HD)(t) && (r ? e === t : e.includes(t)));
        })(e, t, r),
    );
}
