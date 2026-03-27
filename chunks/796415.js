t.d(a, { default: () => g });
var n = t(627968),
    s = t(397927),
    i = t(976860),
    r = t(523084),
    l = t(225180),
    d = t(285286),
    c = t(652215),
    o = t(746080),
    u = t(738072),
    m = t(985018),
    p = t(62296),
    x = t(501442);
function g(e) {
    let { gameServerGame: a, guildId: t, status: g, ...f } = e,
        h = (0, l.A)(a.gameId, "cover");
    return (0, n.jsx)(r.default, {
        title: m.intl.string("created" === g ? u.default["4lLdBM"] : u.default.VPDgHa),
        description: m.intl.formatToPlainString(u.default.yL6BiH, { provider: (0, d.A)(a.provider) }),
        image: (0, n.jsx)("div", {
            className: x.Z,
            children: (0, n.jsx)("img", { className: x.S, alt: "", src: h ?? "" }),
        }),
        button: (0, n.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: p.x6,
            children: (0, n.jsx)(s.Button, {
                variant: "primary",
                text: m.intl.string(u.default.VkItSr),
                onClick: () => {
                    (0, i.pX)(c.BVt.CHANNEL(t, o.VV.GAME_SERVERS)), f.onClose();
                },
            }),
        }),
        ...f,
    });
}
