i.d(t, { default: () => d });
var s = i(951288);
i(647438);
var a = i(481060),
    e = i(239091),
    r = i(934415),
    c = i(572004),
    l = i(176505),
    o = i(388032);
function d(n) {
    let { guild: t, onSelect: i } = n;
    return (0, s.jsx)(a.v2r, {
        navId: "game-shop-context",
        "aria-label": o.intl.string(o.t.vyaWs7),
        onClose: e.Zy,
        onSelect: i,
        children: (0, s.jsx)(a.kSQ, {
            children: (0, s.jsx)(a.sNh, {
                id: "game-shop-copy-link",
                label: o.intl.string(o.t.WqhZsr),
                action: () => {
                    (0, c.JG)((0, r.wR)(t.id, l.oC.GAME_SHOP));
                },
            }),
        }),
    });
}
