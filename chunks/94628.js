n.d(t, { B: () => c });
var r = n(54381),
    a = n(473749),
    i = n(481060),
    o = n(69580),
    s = n(787025),
    l = n(944844);
function c(e) {
    let { data: t, onDenied: n, onError: c, onSuccess: d } = e,
        u = (0, l.t)(n, c, d),
        f = a.useCallback((e) => u(t, e), [t, u]);
    return (0, r.jsx)(s.G, {
        removeChildWrapper: !0,
        children: (0, r.jsx)(o.OAuth2AuthorizeModal, {
            transitionState: i.Dvm.ENTERED,
            clientId: t.clientId,
            scopes: t.scopes,
            showLogout: !0,
            isTrustedName: !0,
            callbackWithoutPost: f,
        }),
    });
}
