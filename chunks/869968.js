"use strict";
n.d(t, { A: () => c });
var i = n(311907),
    r = n(73153);
let l = !1,
    s = !1,
    a = !1;
class o extends i.Ay.Store {
    static displayName = "CheckoutRecoveryStore";
    getIsTargeted() {
        return a;
    }
    shouldFetchCheckoutRecovery() {
        return !l && !s;
    }
}
let c = new o(r.h, {
    CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS: function (e) {
        (s = !0), (l = !1), (a = e.isTargeted);
    },
    CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE: function () {
        (s = !0), (l = !1);
    },
    CHECKOUT_RECOVERY_STATUS_FETCH: function () {
        l = !0;
    },
    LOGOUT: function () {
        (l = !1), (s = !1), (a = !1);
    },
});
