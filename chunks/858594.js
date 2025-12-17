t.d(n, { Z: () => m });
var l = t(54381);
t(473749);
var i = t(120356),
    a = t.n(i),
    r = t(481060),
    s = t(578756),
    u = t(162190),
    o = t(914820),
    c = t(388032),
    d = t(618701);
function m(e) {
    let {
            className: n,
            guildId: t,
            game: i,
            onClick: m,
            imageClassName: v,
            titleClassName: f,
            disabled: g = !1,
            location: p,
        } = e,
        b = (0, u.Z)(i.gameId, "cover");
    return (0, l.jsxs)(r.P3F, {
        "aria-disabled": g,
        className: a()(d.game, { [d.disabled]: g }, n),
        onClick: g
            ? void 0
            : () => {
                  (0, s.GA)(t, i.id, i.name, p), m(i);
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
                className: a()(d.textContainer, f),
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
