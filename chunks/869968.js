l.d(t, { A: () => o });
var n = l(17928),
    i = l(228366);
let r = !1,
    s = !1,
    a = !1;
class u extends n.Ay.Store {
    static displayName = "CheckoutRecoveryStore";
    getIsTargeted() {
        return a;
    }
    shouldFetchCheckoutRecovery() {
        return !r && !s;
    }
}
let o = new u(i.h, {
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
