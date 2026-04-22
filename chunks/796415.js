a.d(t, { default: () => g });
var n = a(627968),
    r = a(772707),
    i = a(834730),
    s = a(821609),
    l = a(976860),
    c = a(43594),
    o = a(523084),
    d = a(225180),
    u = a(285286),
    m = a(652215),
    f = a(746080),
    p = a(576709),
    _ = a(985018),
    v = a(372165),
    x = a(276791);
function g(e) {
    let { gameServerGame: t, guildId: a, status: g, ...h } = e,
        b = (0, d.A)(t.gameId, "cover"),
        C = (0, c.D)("GameServerSuccessModal"),
        j = _.intl.string("created" === g ? p.default["4lLdBM"] : p.default.VPDgHa),
        N = _.intl.formatToPlainString(p.default.yL6BiH, { provider: (0, u.A)(t.provider) }),
        k = () => {
            (0, l.pX)(m.BVt.CHANNEL(a, f.VV.GAME_SERVERS)), h.onClose();
        };
    return "control" !== C
        ? (0, n.jsx)(r.k, {
              ...h,
              graphic: { type: "image", src: b ?? "", aspectRatio: "16/9" },
              title: j,
              actions: [{ variant: "primary", text: _.intl.string(p.default.VkItSr), onClick: k }],
              children: (0, n.jsx)(i.E, { variant: "text-md/normal", children: N }),
          })
        : (0, n.jsx)(o.A, {
              title: j,
              description: N,
              image: (0, n.jsx)("div", {
                  className: x.Z,
                  children: (0, n.jsx)("img", { className: x.S, alt: "", src: b ?? "" }),
              }),
              button: (0, n.jsx)("div", {
                  "data-button-hoisted-classname-wrapper": !0,
                  className: v.x6,
                  children: (0, n.jsx)(s.$, { variant: "primary", text: _.intl.string(p.default.VkItSr), onClick: k }),
              }),
              ...h,
          });
}
