t.d(s, { default: () => d });
var i = t(54381);
t(473749);
var a = t(481060),
    e = t(239091),
    c = t(934415),
    l = t(572004),
    o = t(176505),
    r = t(388032);
function d(n) {
    let { guild: s, onSelect: t } = n;
    return (0, i.jsx)(a.v2r, {
        navId: "game-shop-context",
        "aria-label": r.intl.string(r.t.vyaWs7),
        onClose: e.Zy,
        onSelect: t,
        children: (0, i.jsx)(a.kSQ, {
            children: (0, i.jsx)(a.sNh, {
                id: "game-shop-copy-link",
                label: r.intl.string(r.t.WqhZss),
                action: () => {
                    (0, l.JG)((0, c.wR)(s.id, o.oC.GAME_SHOP));
                },
            }),
        }),
    });
}
