n.d(t, { _w: () => _, c_: () => u, jJ: () => E, oy: () => c });
var i = n(284009),
    r = n.n(i),
    a = n(73825),
    s = n(97352),
    l = n(24482),
    o = n(652215),
    d = n(202541);
let c = 10027;
async function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...d.oz];
    null == e || s.A.hasPaymentSourceForSKUIds(e, t) || (await (0, a.jv)(t));
}
function _(e, t, n) {
    let i,
        a = [],
        d = { purchaseType: n ? o.lid.GIFT : o.lid.DEFAULT };
    return (
        (i = "string" == typeof e ? s.A.get(e) : e),
        r()(null != i, "subscription plan not loaded"),
        null != t && s.A.hasPaymentSourceForSKUId(t, i.skuId) && (d.paymentSourceId = t),
        (a = (0, l.pb)(i.id, d).map((e) => e.currency)).length < 1 && (a = [o.Yri.USD]),
        a
    );
}
function E(e, t, n) {
    let i = s.A.get(e);
    return (r()(null != i, "plan is undefined"), _(i, n, !1).includes(t));
}
