n.d(t, { v: () => l });
var i = n(97352),
    s = n(83617);
function l(e, t) {
    let n = i.A.get(e.premiumPlanIdFromItems ?? "");
    if (null != n) {
        let i = (0, s._w)(n, t?.id, !1),
            l = i.length > 0 ? i[0] : e.currency;
        if (1 === i.length && t?.id === e.paymentSourceId && (0, s.jJ)(n.id, l, t?.id)) return !0;
    }
    return !1;
}
