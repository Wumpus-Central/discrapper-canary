_.d(e, {
    $G: () => r,
    JM: () => n,
    U0: () => E,
    nK: () => o,
});
var a = _(573736);
function r(t, e = 0) {
    return "string" != typeof t || 0 === e || t.length <= e ? t : `${t.slice(0, e)}...`;
}
function n(t, e) {
    let _ = t,
        a = _.length;
    if (a <= 150) return _;
    e > a && (e = a);
    let r = Math.max(e - 60, 0);
    r < 5 && (r = 0);
    let n = Math.min(r + 140, a);
    return (
        n > a - 5 && (n = a),
        n === a && (r = Math.max(n - 140, 0)),
        (_ = _.slice(r, n)),
        r > 0 && (_ = `'{snip} ${_}`),
        n < a && (_ += " {snip}"),
        _
    );
}
function o(t, e) {
    if (!Array.isArray(t)) return "";
    let _ = [];
    for (let e = 0; e < t.length; e++) {
        let r = t[e];
        try {
            (0, a.y1)(r) ? _.push("[VueViewModel]") : _.push(String(r));
        } catch (t) {
            _.push("[value cannot be serialized]");
        }
    }
    return _.join(e);
}
function E(t, e = [], _ = !1) {
    return e.some((e) =>
        (function (t, e, _ = !1) {
            return !!(0, a.HD)(t) && ((0, a.Kj)(e) ? e.test(t) : !!(0, a.HD)(e) && (_ ? t === e : t.includes(e)));
        })(t, e, _),
    );
}
