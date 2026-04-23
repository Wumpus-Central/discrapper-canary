n.d(t, { A: () => d }), n(321073);
var i = n(311907),
    s = n(73153),
    l = n(380098);
let a = [];
function r(e) {
    let { payment: t } = e,
        n = l.A.createFromServer(t),
        i = a.findIndex((e) => e.id === t.id);
    -1 === i ? (a.push(n), a.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime())) : (a[i] = n), (a = [...a]);
}
class o extends i.Ay.Store {
    static displayName = "PaymentStore";
    getPayment(e) {
        return a.find((t) => t.id === e);
    }
    getPayments() {
        return a;
    }
}
let d = new o(s.h, {
    BILLING_PAYMENTS_FETCH_SUCCESS: function (e) {
        let { payments: t } = e;
        for (let e of t) {
            let t = l.A.createFromServer(e),
                n = a.findIndex((t) => t.id === e.id);
            -1 !== n ? (a[n] = t) : a.push(t);
        }
        a.sort((e, t) => t.createdAt.getTime() - e.createdAt.getTime()), (a = [...a]);
    },
    PAYMENT_UPDATE: r,
    BILLING_PAYMENT_FETCH_SUCCESS: r,
    LOGOUT: function () {
        a = [];
    },
});
