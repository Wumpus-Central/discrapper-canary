r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(47120);
var a = r(442837),
    o = r(176919),
    s = r(975060),
    l = r(505649);
function u() {
    let e = (0, a.e7)([s.Z], () => s.Z.error),
        [n, r] = (0, a.Wu)([l.Z], () => [l.Z.error, l.Z.isAwaitingAuthentication]);
    return {
        paymentError: null != n ? n : e,
        paymentAuthenticationState: r ? o.wr.PENDING : null != n ? o.wr.ERROR : o.wr.NONE
    };
}
