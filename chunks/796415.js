e.d(a, { default: () => k });
var i = e(627968),
    r = e(772707),
    s = e(834730),
    n = e(821609),
    l = e(976860),
    c = e(43594),
    d = e(523084),
    o = e(225180),
    p = e(285286),
    u = e(652215),
    m = e(746080),
    h = e(76660),
    x = e(375708),
    g = e(774469),
    v = e(562743);
function k(t) {
    let { gameServerGame: a, guildId: e, status: k, ...f } = t,
        S = (0, o.A)(a.gameId, "cover"),
        j = (0, c.D)("GameServerSuccessModal"),
        V = x.intl.string("created" === k ? h.default["4lLdBM"] : h.default.VPDgHa),
        C = x.intl.formatToPlainString(h.default.yL6BiH, { provider: (0, p.A)(a.provider) }),
        A = () => {
            (0, l.pX)(u.BVt.CHANNEL(e, m.VV.GAME_SERVERS)), f.onClose();
        };
    return "control" !== j
        ? (0, i.jsx)(r.k, {
              ...f,
              graphic: { type: "image", src: S ?? "", aspectRatio: "16/9" },
              title: V,
              actions: [{ variant: "primary", text: x.intl.string(h.default.VkItSr), onClick: A }],
              children: (0, i.jsx)(s.E, { variant: "text-md/normal", children: C }),
          })
        : (0, i.jsx)(d.A, {
              title: V,
              description: C,
              image: (0, i.jsx)("div", {
                  className: v.Z,
                  children: (0, i.jsx)("img", { className: v.S, alt: "", src: S ?? "" }),
              }),
              button: (0, i.jsx)("div", {
                  "data-button-hoisted-classname-wrapper": !0,
                  className: g.x6,
                  children: (0, i.jsx)(n.$, { variant: "primary", text: x.intl.string(h.default.VkItSr), onClick: A }),
              }),
              ...f,
          });
}
