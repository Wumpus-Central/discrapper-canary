n.d(t, { Z: () => u }), n(539854), n(388685), n(642613);
var i,
    r,
    s = n(442837),
    a = n(570140),
    l = n(461655);
let o = [];
function c(e) {
    let { payment: t } = e,
        n = l.Z.createFromServer(t),
        i = o.findIndex((e) => e.id === t.id);
    -1 === i ? (o.push(n), o.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : (o[i] = n), (o = [...o]);
}
class d extends (i = s.ZP.Store) {
    getPayment(e) {
        return o.find((t) => t.id === e);
    }
    getPayments() {
        return o;
    }
}
(r = "displayName") in d
    ? Object.defineProperty(d, r, {
          value: "PaymentStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (d[r] = "PaymentStore");
let u = new d(a.Z, {
    BILLING_PAYMENTS_FETCH_SUCCESS: function (e) {
        let { payments: t } = e;
        for (let e of t) {
            let t = l.Z.createFromServer(e),
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
