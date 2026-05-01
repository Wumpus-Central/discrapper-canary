"use strict";
n.d(t, { A: () => u });
var i = n(17928),
    r = n(228366);
let s = !1,
    a = !1,
    o = !1;
class l extends i.Ay.Store {
    static displayName = "CheckoutRecoveryStore";
    getIsTargeted() {
        return o;
    }
    shouldFetchCheckoutRecovery() {
        return !s && !a;
    }
}
let u = new l(r.h, {
    CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS: function (e) {
        (a = !0), (s = !1), (o = e.isTargeted);
    },
    CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE: function () {
        (a = !0), (s = !1);
    },
    CHECKOUT_RECOVERY_STATUS_FETCH: function () {
        s = !0;
    },
    LOGOUT: function () {
        (s = !1), (a = !1), (o = !1);
    },
});
