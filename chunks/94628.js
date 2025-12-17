n.d(t, { B: () => l });
var a = n(54381),
    r = n(473749),
    o = n(481060),
    i = n(69580),
    s = n(787025),
    c = n(944844);
function l(e) {
    let { data: t, onDenied: n, onError: l, onSuccess: d } = e,
        u = (0, c.t)(n, l, d),
        f = r.useCallback((e) => u(t, e), [t, u]);
    return (0, a.jsx)(s.G, {
        removeChildWrapper: !0,
        children: (0, a.jsx)(i.OAuth2AuthorizeModal, {
            transitionState: o.Dvm.ENTERED,
            clientId: t.clientId,
            scopes: t.scopes,
            showLogout: !0,
            isTrustedName: !0,
            callbackWithoutPost: f,
        }),
    });
}
