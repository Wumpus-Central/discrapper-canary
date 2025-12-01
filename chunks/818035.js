n.d(t, { Z: () => p }), n(539854), n(388685), n(642613);
var r,
    i = n(442837),
    a = n(570140),
    o = n(461655);
function s(e, t, n) {
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
        let t = o.Z.createFromServer(e),
            n = l.findIndex((t) => t.id === e.id);
        -1 !== n ? (l[n] = t) : l.push(t);
    }
    l.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()), (l = [...l]);
}
function u(e) {
    let { payment: t } = e,
        n = o.Z.createFromServer(t),
        r = l.findIndex((e) => e.id === t.id);
    -1 === r ? (l.push(n), l.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : (l[r] = n), (l = [...l]);
}
function d() {
    l = [];
}
class f extends (r = i.ZP.Store) {
    getPayment(e) {
        return l.find((t) => t.id === e);
    }
    getPayments() {
        return l;
    }
}
s(f, "displayName", "PaymentStore");
let p = new f(a.Z, {
    BILLING_PAYMENTS_FETCH_SUCCESS: c,
    PAYMENT_UPDATE: u,
    BILLING_PAYMENT_FETCH_SUCCESS: u,
    LOGOUT: d,
});
