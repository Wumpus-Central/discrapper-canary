n.d(t, { Z: () => s }), n(47120);
var r = n(442837),
    i = n(176919),
    o = n(975060),
    a = n(505649);
function s() {
    let e = (0, r.e7)([o.Z], () => o.Z.error),
        [t, n] = (0, r.Wu)([a.Z], () => [a.Z.error, a.Z.isAwaitingAuthentication]);
    return {
        paymentError: null != t ? t : e,
        paymentAuthenticationState: n ? i.wr.PENDING : null != t ? i.wr.ERROR : i.wr.NONE
    };
}
