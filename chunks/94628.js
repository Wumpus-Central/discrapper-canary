n.d(t, {
    B: function () {
        return s;
    }
});
var a = n(200651),
    r = n(192379),
    o = n(481060),
    i = n(69580),
    l = n(787025),
    c = n(944844);
function s(e) {
    let { data: t, onDenied: n, onError: s, onSuccess: d } = e,
        u = (0, c.t)(n, s, d),
        f = r.useCallback((e) => u(t, e), [t, u]);
    return (0, a.jsx)(l.G, {
        removeChildWrapper: !0,
        children: (0, a.jsx)(i.OAuth2AuthorizeModal, {
            transitionState: o.ModalTransitionState.ENTERED,
            clientId: t.clientId,
            scopes: t.scopes,
            showLogout: !0,
            isTrustedName: !0,
            callbackWithoutPost: f
        })
    });
}
