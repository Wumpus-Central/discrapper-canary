n.d(t, { A: () => d });
var i = n(311907),
    l = n(73153);
let a = !1,
    r = !1,
    s = !1;
class o extends i.Ay.Store {
    static displayName = "CheckoutRecoveryStore";
    getIsTargeted() {
        return s;
    }
    shouldFetchCheckoutRecovery() {
        return !a && !r;
    }
}
let d = new o(l.h, {
    CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS: function (e) {
        (r = !0), (a = !1), (s = e.isTargeted);
    },
    CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE: function () {
        (r = !0), (a = !1);
    },
    CHECKOUT_RECOVERY_STATUS_FETCH: function () {
        a = !0;
    },
    LOGOUT: function () {
        (a = !1), (r = !1), (s = !1);
    },
});
