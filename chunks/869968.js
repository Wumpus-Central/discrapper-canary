n.d(t, { A: () => h });
var r,
    i = n(311907),
    a = n(73153);
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
let o = !1,
    l = !1,
    c = !1;
function u(e) {
    (l = !0), (o = !1), (c = e.isTargeted);
}
function d() {
    (l = !0), (o = !1);
}
function f() {
    o = !0;
}
function p() {
    (o = !1), (l = !1), (c = !1);
}
class _ extends (r = i.Ay.Store) {
    getIsTargeted() {
        return c;
    }
    shouldFetchCheckoutRecovery() {
        return !o && !l;
    }
}
s(_, "displayName", "CheckoutRecoveryStore");
let h = new _(a.h, {
    CHECKOUT_RECOVERY_STATUS_FETCH_SUCCESS: u,
    CHECKOUT_RECOVERY_STATUS_FETCH_FAILURE: d,
    CHECKOUT_RECOVERY_STATUS_FETCH: f,
    LOGOUT: p,
});
