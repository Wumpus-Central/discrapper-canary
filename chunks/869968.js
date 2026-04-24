n.d(t, { A: () => u });
var i = n(17928),
    l = n(228366);
let r = !1,
    a = !1,
    o = !1;
class s extends i.Ay.Store {
    static displayName = "CheckoutRecoveryStore";
    getIsTargeted() {
        return o;
    }
    shouldFetchCheckoutRecovery() {
        return !r && !a;
    }
}
let u = new s(l.h, {
    CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS: function (e) {
        (a = !0), (r = !1), (o = e.isTargeted);
    },
    CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE: function () {
        (a = !0), (r = !1);
    },
    CHECKOUT_RECOVERY_STATUS_FETCH: function () {
        r = !0;
    },
    LOGOUT: function () {
        (r = !1), (a = !1), (o = !1);
    },
});
