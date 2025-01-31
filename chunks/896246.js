n.d(t, { Z: () => o }), n(47120);
var i = n(442837),
    r = n(176919),
    a = n(975060),
    s = n(505649);
function o() {
    let e = (0, i.e7)([a.Z], () => a.Z.error),
        [t, n] = (0, i.Wu)([s.Z], () => [s.Z.error, s.Z.isAwaitingAuthentication]);
    return {
        paymentError: null != t ? t : e,
        paymentAuthenticationState: n ? r.wr.PENDING : null != t ? r.wr.ERROR : r.wr.NONE
    };
}
