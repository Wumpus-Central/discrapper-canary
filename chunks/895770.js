n.d(t, { A: () => v, e: () => x });
var a,
    s = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    r = n(397927),
    d = n(397400),
    o = n(225180),
    c = n(294726),
    u = n(985018),
    m = n(667760),
    x = (((a = {}).CLICKABLE = "clickable"), (a.VIEWABLE = "viewable"), (a.DISABLED = "disabled"), a);
function v(e) {
    let {
            className: t,
            guildId: n,
            game: a,
            onClick: l,
            imageClassName: x,
            titleClassName: v,
            variant: g = "clickable",
            location: b,
        } = e,
        f = (0, o.A)(a.gameId, "cover"),
        {
            containerClass: j,
            boostGemColor: p,
            boostPriceTextColor: h,
            handleClick: N,
        } = {
            clickable: {
                containerClass: null,
                boostGemColor: r.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                boostPriceTextColor: void 0,
                handleClick: () => {
                    (0, d.oT)(n, a.id, a.name, b), l?.(a);
                },
            },
            viewable: {
                containerClass: m.Oe,
                boostGemColor: void 0,
                boostPriceTextColor: "text-muted",
                handleClick: void 0,
            },
            disabled: {
                containerClass: m.r9,
                boostGemColor: r.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                boostPriceTextColor: void 0,
                handleClick: void 0,
            },
        }[g];
    return (0, s.jsxs)(r.DUT, {
        "aria-disabled": "disabled" === g,
        className: i()(m.LO, j, t),
        onClick: N,
        children: [
            (0, s.jsxs)("div", {
                className: i()(m.Rf, x),
                children: [
                    (0, s.jsx)("img", { className: m.Sl, alt: "", src: f ?? "" }),
                    (0, s.jsx)("div", { className: m.Gj }),
                    (0, s.jsx)("div", { className: m.Uf }),
                ],
            }),
            (0, s.jsxs)("div", {
                className: i()(m.FS, v),
                children: [
                    (0, s.jsx)(r.Heading, {
                        variant: "heading-sm/semibold",
                        lineClamp: 1,
                        title: a.name,
                        children: a.name,
                    }),
                    (0, s.jsxs)("div", {
                        className: m.PW,
                        children: [
                            (0, s.jsx)(r._Jp, { size: "sm", color: p }),
                            (0, s.jsx)(r.Text, {
                                variant: "text-sm/medium",
                                color: h,
                                children: u.intl.formatToPlainString(
                                    a.plans.length > 1 ? c.default["G/aTXi"] : c.default.r9pa9K,
                                    { boostCount: a.baseCost },
                                ),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
