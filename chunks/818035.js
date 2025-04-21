n.d(t, { Z: () => m }), n(539854), n(388685), n(642613);
var i,
    r,
    s,
    l = n(442837),
    a = n(570140),
    o = n(461655);
let c = [];
function d(e) {
    let { payment: t } = e,
        n = o.Z.createFromServer(t),
        i = c.findIndex((e) => e.id === t.id);
    -1 === i ? (c.push(n), c.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : (c[i] = n), (c = [...c]);
}
class u extends (i = l.ZP.Store) {
    getPayment(e) {
        return c.find((t) => t.id === e);
    }
    getPayments() {
        return c;
    }
}
(s = 'PaymentStore'),
    (r = 'displayName') in u
        ? Object.defineProperty(u, r, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[r] = s);
let m = new u(a.Z, {
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
