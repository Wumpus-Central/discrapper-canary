n.d(t, { v: () => r });
var i = n(97352),
    s = n(83617);
function r(e, t) {
    let n = i.A.get(e.premiumPlanIdFromItems ?? "");
    if (null != n) {
        let i = (0, s._w)(n, t?.id, !1),
            r = i.length > 0 ? i[0] : e.currency;
        if (1 === i.length && t?.id === e.paymentSourceId && (0, s.jJ)(n.id, r, t?.id)) return !0;
    }
    return !1;
}
