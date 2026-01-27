n.d(t, {
    A: () => u,
}),
    n(321073),
    n(896048),
    n(638769);
var r,
    i,
    l = n(311907),
    s = n(73153),
    a = n(380098);
let o = [];

function c(e) {
    let { payment: t } = e,
        n = a.A.createFromServer(t),
        r = o.findIndex((e) => e.id === t.id);
    -1 === r ? (o.push(n), o.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : (o[r] = n), (o = [...o]);
}
class d extends (r = l.Ay.Store) {
    getPayment(e) {
        return o.find((t) => t.id === e);
    }
    getPayments() {
        return o;
    }
}
(i = "displayName") in d
    ? Object.defineProperty(d, i, {
          value: "PaymentStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (d[i] = "PaymentStore");
let u = new d(s.h, {
    BILLING_PAYMENTS_FETCH_SUCCESS: function (e) {
        let { payments: t } = e;
        for (let e of t) {
            let t = a.A.createFromServer(e),
                n = o.findIndex((t) => t.id === e.id);
            -1 !== n ? (o[n] = t) : o.push(t);
        }
        o.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()), (o = [...o]);
    },
    PAYMENT_UPDATE: c,
    BILLING_PAYMENT_FETCH_SUCCESS: c,
    LOGOUT: function () {
        o = [];
    },
});
