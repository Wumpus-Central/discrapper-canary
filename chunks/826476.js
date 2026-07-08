n.d(t, { Xr: () => s, gt: () => a, nC: () => o, xv: () => i });
var r = n(875565);
function i(e, t = 0) {
    return "string" != typeof e || 0 === t || e.length <= t ? e : `${e.slice(0, t)}...`;
}
function o(e, t) {
    let n = e,
        r = n.length;
    if (r <= 150) return n;
    t > r && (t = r);
    let i = Math.max(t - 60, 0);
    i < 5 && (i = 0);
    let o = Math.min(i + 140, r);
    return (
        o > r - 5 && (o = r),
        o === r && (i = Math.max(o - 140, 0)),
        (n = n.slice(i, o)),
        i > 0 && (n = `'{snip} ${n}`),
        o < r && (n += " {snip}"),
        n
    );
}
function a(e, t) {
    if (!Array.isArray(e)) return "";
    let n = [];
    for (let t = 0; t < e.length; t++) {
        let i = e[t];
        try {
            (0, r.L2)(i) ? n.push("[VueViewModel]") : n.push(String(i));
        } catch (e) {
            n.push("[value cannot be serialized]");
        }
    }
    return n.join(t);
}
function s(e, t = [], n = !1) {
    return t.some((t) =>
        (function (e, t, n = !1) {
            return !!(0, r.Kg)(e) && ((0, r.gd)(t) ? t.test(e) : !!(0, r.Kg)(t) && (n ? e === t : e.includes(t)));
        })(e, t, n),
    );
}
