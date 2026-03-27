n.d(t, { default: () => p });
var a = n(627968),
    s = n(397927),
    i = n(976860),
    r = n(523084),
    l = n(225180),
    d = n(285286),
    c = n(652215),
    o = n(746080),
    u = n(294726),
    m = n(985018),
    _ = n(944053),
    f = n(223655);
function p(e) {
    let { gameServerGame: t, guildId: n, status: p, ...x } = e,
        g = (0, l.A)(t.gameId, "cover");
    return (0, a.jsx)(r.A, {
        title: m.intl.string("created" === p ? u.default["4lLdBM"] : u.default.VPDgHa),
        description: m.intl.formatToPlainString(u.default.yL6BiH, { provider: (0, d.A)(t.provider) }),
        image: (0, a.jsx)("div", {
            className: f.Z,
            children: (0, a.jsx)("img", { className: f.S, alt: "", src: g ?? "" }),
        }),
        button: (0, a.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: _.x6,
            children: (0, a.jsx)(s.Button, {
                variant: "primary",
                text: m.intl.string(u.default.VkItSr),
                onClick: () => {
                    (0, i.pX)(c.BVt.CHANNEL(n, o.VV.GAME_SERVERS)), x.onClose();
                },
            }),
        }),
        ...x,
    });
}
