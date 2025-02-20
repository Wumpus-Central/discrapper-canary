n.d(t, { Z: () => m }), n(653041), n(47120), n(230036);
var r,
    i,
    s,
    a = n(442837),
    l = n(570140),
    o = n(461655);
let c = [];
function d(e) {
    let { payment: t } = e,
        n = o.Z.createFromServer(t),
        r = c.findIndex((e) => e.id === t.id);
    -1 === r ? (c.push(n), c.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : (c[r] = n), (c = [...c]);
}
class u extends (r = a.ZP.Store) {
    getPayment(e) {
        return c.find((t) => t.id === e);
    }
    getPayments() {
        return c;
    }
}
(s = 'PaymentStore'),
    (i = 'displayName') in u
        ? Object.defineProperty(u, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[i] = s);
let m = new u(l.Z, {
    BILLING_PAYMENTS_FETCH_SUCCESS: function (e) {
        let { payments: t } = e;
        for (let e of t) {
            let t = o.Z.createFromServer(e),
                n = c.findIndex((t) => t.id === e.id);
            -1 !== n ? (c[n] = t) : c.push(t);
        }
        c.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()), (c = [...c]);
    },
    PAYMENT_UPDATE: d,
    BILLING_PAYMENT_FETCH_SUCCESS: d,
    LOGOUT: function () {
        c = [];
    }
});
