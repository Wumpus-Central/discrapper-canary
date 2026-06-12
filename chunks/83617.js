"use strict";
n.d(t, { _w: () => h, c_: () => _, jJ: () => f, oy: () => d });
var i = n(284009),
    r = n.n(i),
    s = n(228366),
    a = n(73825),
    o = n(97352),
    l = n(428262),
    u = n(652215),
    c = n(788868);
let d = 10027;
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...c.oz];
    return null == e || o.A.hasPaymentSourceForSKUIds(e, t)
        ? Promise.resolve()
        : new Promise((e, n) => {
              s.h.wait(async () => {
                  try {
                      await (0, a.jv)(t), e();
                  } catch (e) {
                      n(e);
                  }
              });
          });
}
function h(e, t, n) {
    let i,
        s = [],
        a = { purchaseType: n ? u.lid.GIFT : u.lid.DEFAULT };
    return (
        (i = "string" == typeof e ? o.A.get(e) : e),
        r()(i, "subscription plan not loaded"),
        null != t && o.A.hasPaymentSourceForSKUId(t, i.skuId) && (a.paymentSourceId = t),
        (s = (0, l.pb)(i.id, a).map((e) => e.currency)).length < 1 && (s = [u.Yri.USD]),
        s
    );
}
function f(e, t, n) {
    let i = o.A.get(e);
    return r()(null != i, "plan is undefined"), h(i, n, !1).includes(t);
}
