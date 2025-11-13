n.d(t, { Z: () => m });
var l = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    r = n(481060),
    s = n(578756),
    u = n(162190),
    o = n(732031),
    c = n(388032),
    d = n(722417);
function m(e) {
    let {
            className: t,
            guildId: n,
            game: i,
            onClick: m,
            imageClassName: v,
            titleClassName: g,
            disabled: f = !1,
            location: p,
        } = e,
        b = (0, u.Z)(i.gameId, "cover");
    return (0, l.jsxs)(r.P3F, {
        "aria-disabled": f,
        className: a()(d.game, { [d.disabled]: f }, t),
        onClick: f
            ? void 0
            : () => {
                  (0, s.GA)(n, i.id, i.name, p), m(i);
              },
        children: [
            (0, l.jsxs)("div", {
                className: a()(d.gameImageContainer, v),
                children: [
                    (0, l.jsx)("img", {
                        className: d.image,
                        alt: "",
                        src: null != b ? b : "",
                    }),
                    (0, l.jsx)("div", { className: d.gameImageBorder }),
                    (0, l.jsx)("div", { className: d.gameImageOverlay }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: a()(d.textContainer, g),
                children: [
                    (0, l.jsx)(r.Heading, {
                        variant: "heading-sm/semibold",
                        lineClamp: 1,
                        title: i.name,
                        children: i.name,
                    }),
                    (0, l.jsxs)("div", {
                        className: d.boostContainer,
                        children: [
                            (0, l.jsx)(r.Ucv, {
                                size: "sm",
                                color: r.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                            }),
                            (0, l.jsx)(r.Text, {
                                variant: "text-sm/medium",
                                children: c.intl.formatToPlainString(
                                    i.plans.length > 1 ? o.default["G/aTXi"] : o.default.r9pa9K,
                                    { boostCount: i.baseCost },
                                ),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
