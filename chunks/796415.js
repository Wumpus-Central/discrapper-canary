a.d(t, { default: () => _ });
var n = a(627968),
    r = a(397927),
    i = a(976860),
    s = a(43594),
    l = a(523084),
    c = a(225180),
    o = a(285286),
    d = a(652215),
    u = a(746080),
    m = a(294726),
    f = a(985018),
    p = a(944053),
    x = a(223655);
function _(e) {
    let { gameServerGame: t, guildId: a, status: _, ...g } = e,
        v = (0, c.A)(t.gameId, "cover"),
        h = (0, s.D)("GameServerSuccessModal"),
        b = f.intl.string("created" === _ ? m.default["4lLdBM"] : m.default.VPDgHa),
        C = f.intl.formatToPlainString(m.default.yL6BiH, { provider: (0, o.A)(t.provider) }),
        j = () => {
            (0, i.pX)(d.BVt.CHANNEL(a, u.VV.GAME_SERVERS)), g.onClose();
        };
    return "control" !== h
        ? (0, n.jsx)(r.kpP, {
              ...g,
              graphic: { type: "image", src: v ?? "", aspectRatio: "16/9" },
              title: b,
              actions: [{ variant: "primary", text: f.intl.string(m.default.VkItSr), onClick: j }],
              children: (0, n.jsx)(r.Text, { variant: "text-md/normal", children: C }),
          })
        : (0, n.jsx)(l.A, {
              title: b,
              description: C,
              image: (0, n.jsx)("div", {
                  className: x.Z,
                  children: (0, n.jsx)("img", { className: x.S, alt: "", src: v ?? "" }),
              }),
              button: (0, n.jsx)("div", {
                  "data-button-hoisted-classname-wrapper": !0,
                  className: p.x6,
                  children: (0, n.jsx)(r.Button, {
                      variant: "primary",
                      text: f.intl.string(m.default.VkItSr),
                      onClick: j,
                  }),
              }),
              ...g,
          });
}
