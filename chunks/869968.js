n.d(t, {
    A: () => d,
});
var r,
    i,
    l = n(311907),
    a = n(73153);
let s = !1,
    o = !1,
    c = !1;
class u extends (i = l.Ay.Store) {
    getIsTargeted() {
        return c;
    }
    shouldFetchCheckoutRecovery() {
        return !s && !o;
    }
}
(r = "displayName") in u
    ? Object.defineProperty(u, r, {
          value: "CheckoutRecoveryStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (u[r] = "CheckoutRecoveryStore");
let d = new u(a.h, {
    CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS: function (e) {
        (o = !0), (s = !1), (c = e.isTargeted);
    },
    CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE: function () {
        (o = !0), (s = !1);
    },
    CHECKOUT_RECOVERY_STATUS_FETCH: function () {
        s = !0;
    },
    LOGOUT: function () {
        (s = !1), (o = !1), (c = !1);
    },
});
