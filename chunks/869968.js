n.d(t, { A: () => o });
var i = n(17928),
    l = n(228366);
let r = !1,
    s = !1,
    a = !1;
class c extends i.Ay.Store {
    static displayName = "CheckoutRecoveryStore";
    getIsTargeted() {
        return a;
    }
    shouldFetchCheckoutRecovery() {
        return !r && !s;
    }
}
let o = new c(l.h, {
    CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS: function (e) {
        (s = !0), (r = !1), (a = e.isTargeted);
    },
    CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE: function () {
        (s = !0), (r = !1);
    },
    CHECKOUT_RECOVERY_STATUS_FETCH: function () {
        r = !0;
    },
    LOGOUT: function () {
        (r = !1), (s = !1), (a = !1);
    },
});
