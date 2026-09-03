n.d(t, { _w: () => E, c_: () => _, jJ: () => A, oy: () => u });
var i = n(284009),
    r = n.n(i),
    a = n(228366),
    s = n(73825),
    l = n(97352),
    o = n(158045),
    d = n(652215),
    c = n(202541);
let u = 10027;
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...c.oz];
    return null == e || l.A.hasPaymentSourceForSKUIds(e, t)
        ? Promise.resolve()
        : new Promise((e, n) => {
              a.h.wait(async () => {
                  try {
                      await (0, s.jv)(t), e();
                  } catch (e) {
                      n(e);
                  }
              });
          });
}
function E(e, t, n) {
    let i,
        a = [],
        s = { purchaseType: n ? d.lid.GIFT : d.lid.DEFAULT };
    return (
        (i = "string" == typeof e ? l.A.get(e) : e),
        r()(null != i, "subscription plan not loaded"),
        null != t && l.A.hasPaymentSourceForSKUId(t, i.skuId) && (s.paymentSourceId = t),
        (a = (0, o.pb)(i.id, s).map((e) => e.currency)).length < 1 && (a = [d.Yri.USD]),
        a
    );
}
function A(e, t, n) {
    let i = l.A.get(e);
    return r()(null != i, "plan is undefined"), E(i, n, !1).includes(t);
}
