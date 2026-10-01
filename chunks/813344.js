i.d(e, { default: () => C });
var n = i(477900),
    r = i(23339),
    a = i(189213),
    l = i(975571),
    s = i(123917),
    o = i(498480),
    d = i(628049),
    p = i(652215),
    c = i(394107),
    u = i(375708);
function C(t) {
    let { provider: e, onAccept: i, ...C } = t;
    return (0, n.jsx)(a.a, {
        title: u.intl.string(c.default.ny8Szd),
        subtitle: u.intl.format(c.default.D3STVx, {
            provider: (0, r.$G)(e),
            providerUrl: () => (0, s.h)({ href: d.eh[e] }),
            helpCenterUrl: l.A.getArticleURL(p.MVz.GAME_SERVER_HOSTING),
        }),
        size: "md",
        actions: [
            { text: u.intl.string(u.t["/g10LC"]), onClick: C.onClose, variant: "secondary" },
            {
                text: u.intl.string(c.default.K1xIXf),
                onClick: () => {
                    ((0, o.Wp)(!0, e), i?.(), C.onClose());
                },
                variant: "primary",
            },
        ],
        transitionState: C.transitionState,
        onClose: C.onClose,
    });
}
