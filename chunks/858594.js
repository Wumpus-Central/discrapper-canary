n.d(t, { Z: () => d });
var l = n(951288);
n(647438);
var a = n(120356),
    i = n.n(a),
    r = n(481060),
    s = n(162190),
    o = n(948208),
    c = n(388032),
    u = n(722417);
function d(e) {
    let { className: t, game: n, onClick: a, imageClassName: d, titleClassName: m, disabled: v = !1 } = e,
        g = (0, s.Z)(n.gameId, "cover");
    return (0, l.jsxs)(r.P3F, {
        "aria-disabled": v,
        className: i()(u.game, { [u.disabled]: v }, t),
        onClick: v ? void 0 : () => a(n),
        children: [
            (0, l.jsxs)("div", {
                className: i()(u.gameImageContainer, d),
                children: [
                    (0, l.jsx)("img", {
                        className: u.image,
                        alt: "",
                        src: null != g ? g : "",
                    }),
                    (0, l.jsx)("div", { className: u.gameImageBorder }),
                    (0, l.jsx)("div", { className: u.gameImageOverlay }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: i()(u.textContainer, m),
                children: [
                    (0, l.jsx)(r.X6q, {
                        variant: "heading-sm/semibold",
                        lineClamp: 1,
                        title: n.name,
                        children: n.name,
                    }),
                    (0, l.jsxs)("div", {
                        className: u.boostContainer,
                        children: [
                            (0, l.jsx)(r.Ucv, {
                                size: "sm",
                                color: r.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                            }),
                            (0, l.jsx)(r.Text, {
                                variant: "text-sm/medium",
                                children: c.intl.formatToPlainString(
                                    n.plans.length > 1 ? o.default["G/aTXl"] : o.default.r9pa9P,
                                    { boostCount: n.baseCost },
                                ),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
