t.d(n, { Z: () => d });
var l = t(951288);
t(647438);
var a = t(120356),
    i = t.n(a),
    r = t(481060),
    s = t(162190),
    o = t(269794),
    u = t(388032),
    c = t(722417);
function d(e) {
    let { className: n, game: t, onClick: a, imageClassName: d, titleClassName: m, disabled: v = !1 } = e,
        g = (0, s.Z)(t.gameId, "cover");
    return (0, l.jsxs)(r.P3F, {
        "aria-disabled": v,
        className: i()(c.game, { [c.disabled]: v }, n),
        onClick: v ? void 0 : () => a(t),
        children: [
            (0, l.jsxs)("div", {
                className: i()(c.gameImageContainer, d),
                children: [
                    (0, l.jsx)("img", {
                        className: c.image,
                        alt: "",
                        src: null != g ? g : "",
                    }),
                    (0, l.jsx)("div", { className: c.gameImageBorder }),
                    (0, l.jsx)("div", { className: c.gameImageOverlay }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: i()(c.textContainer, m),
                children: [
                    (0, l.jsx)(r.Heading, {
                        variant: "heading-sm/semibold",
                        lineClamp: 1,
                        title: t.name,
                        children: t.name,
                    }),
                    (0, l.jsxs)("div", {
                        className: c.boostContainer,
                        children: [
                            (0, l.jsx)(r.Ucv, {
                                size: "sm",
                                color: r.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                            }),
                            (0, l.jsx)(r.Text, {
                                variant: "text-sm/medium",
                                children: u.intl.formatToPlainString(
                                    t.plans.length > 1 ? o.default["G/aTXi"] : o.default.r9pa9K,
                                    { boostCount: t.baseCost },
                                ),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
