n.d(t, { B: () => c });
var a = n(200651),
    r = n(192379),
    o = n(481060),
    i = n(69580),
    l = n(787025),
    s = n(944844);
function c(e) {
    let { data: t, onDenied: n, onError: c, onSuccess: d } = e,
        u = (0, s.t)(n, c, d),
        f = r.useCallback((e) => u(t, e), [t, u]);
    return (0, a.jsx)(l.G, {
        removeChildWrapper: !0,
        children: (0, a.jsx)(i.OAuth2AuthorizeModal, {
            transitionState: o.Dvm.ENTERED,
            clientId: t.clientId,
            scopes: t.scopes,
            showLogout: !0,
            isTrustedName: !0,
            callbackWithoutPost: f
        })
    });
}
