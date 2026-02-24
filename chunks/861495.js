r.d(t, { Q: () => l, Y: () => s });
var n = r(892227),
    a = r(649032);
function l(e, t) {
    if (!t || null == e) return !1;
    let r = e.next_reward_date,
        n = e.program_current_state;
    if (null == n) return !1;
    if (null == r || "" === r) {
        if (![a.L.PAYMENT_PROCESSING, a.L.PAYMENT_ERROR].includes(n)) return !1;
    } else {
        let e = new Date(r).getTime();
        if (Number.isNaN(e) || e < Date.now()) return !1;
    }
    return !0;
}
function s(e, t, r) {
    if (!r || null == e || null == t) return !1;
    let a = e.next_reward_date;
    if (null == a || "" === a) return !1;
    let l = new Date(a).getTime();
    return !(Number.isNaN(l) || l <= Date.now() || (0, n.default)(new Date(a), new Date()) > t);
}
