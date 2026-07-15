"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366);
let a = !1,
    s = !1,
    l = !1;
class o extends i.Ay.Store {
    static displayName = "CheckoutRecoveryStore";
    getIsTargeted() {
        return l;
    }
    shouldFetchCheckoutRecovery() {
        return !a && !s;
    }
}
let d = new o(r.h, {
    CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS: function (e) {
        (s = !0), (a = !1), (l = e.isTargeted);
    },
    CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE: function () {
        (s = !0), (a = !1);
    },
    CHECKOUT_RECOVERY_STATUS_FETCH: function () {
        a = !0;
    },
    LOGOUT: function () {
        (a = !1), (s = !1), (l = !1);
    },
});
