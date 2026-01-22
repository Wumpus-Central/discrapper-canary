n.d(t, {
    A: () => p,
}),
    n(321073),
    n(896048),
    n(638769);
var r,
    i = n(311907),
    a = n(73153),
    s = n(380098);

function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let l = [];

function c(e) {
    let { payments: t } = e;
    for (let e of t) {
        let t = s.A.createFromServer(e),
            n = l.findIndex((t) => t.id === e.id);
        -1 !== n ? (l[n] = t) : l.push(t);
    }
    l.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()), (l = [...l]);
}

function u(e) {
    let { payment: t } = e,
        n = s.A.createFromServer(t),
        r = l.findIndex((e) => e.id === t.id);
    -1 === r ? (l.push(n), l.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : (l[r] = n), (l = [...l]);
}

function d() {
    l = [];
}
class f extends (r = i.Ay.Store) {
    getPayment(e) {
        return l.find((t) => t.id === e);
    }
    getPayments() {
        return l;
    }
}
o(f, "displayName", "PaymentStore");
let p = new f(a.h, {
    BILLING_PAYMENTS_FETCH_SUCCESS: c,
    PAYMENT_UPDATE: u,
    BILLING_PAYMENT_FETCH_SUCCESS: u,
    LOGOUT: d,
});
