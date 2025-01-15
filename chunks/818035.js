n(653041), n(47120);
var i,
    r,
    s,
    a,
    l = n(442837),
    o = n(570140),
    c = n(461655);
let d = [];
function u(e) {
    let { payment: t } = e,
        n = c.Z.createFromServer(t),
        i = d.findIndex((e) => e.id === t.id);
    -1 === i ? (d.push(n), d.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : (d[i] = n), (d = [...d]);
}
class m extends (i = l.ZP.Store) {
    getPayment(e) {
        return d.find((t) => t.id === e);
    }
    getPayments() {
        return d;
    }
}
(a = 'PaymentStore'),
    (s = 'displayName') in (r = m)
        ? Object.defineProperty(r, s, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[s] = a),
    (t.Z = new m(o.Z, {
        BILLING_PAYMENTS_FETCH_SUCCESS: function (e) {
            let { payments: t } = e;
            for (let e of t) {
                let t = c.Z.createFromServer(e),
                    n = d.findIndex((t) => t.id === e.id);
                -1 !== n ? (d[n] = t) : d.push(t);
            }
            d.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()), (d = [...d]);
        },
        PAYMENT_UPDATE: u,
        BILLING_PAYMENT_FETCH_SUCCESS: u,
        LOGOUT: function () {
            d = [];
        }
    }));
