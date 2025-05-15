n.d(t, { Z: () => s }), n(388685);
var r = n(442837),
    i = n(176919),
    a = n(975060),
    o = n(505649);
function s() {
    let e = (0, r.e7)([a.Z], () => a.Z.error),
        [t, n] = (0, r.Wu)([o.Z], () => [o.Z.error, o.Z.isAwaitingAuthentication]);
    return {
        paymentError: null != t ? t : e,
        paymentAuthenticationState: n ? i.wr.PENDING : null != t ? i.wr.ERROR : i.wr.NONE
    };
}
