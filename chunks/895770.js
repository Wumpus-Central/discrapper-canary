n.d(t, { A: () => v, e: () => x });
var a,
    l = n(627968);
n(64700);
var s = n(503698),
    i = n.n(s),
    r = n(397927),
    d = n(397400),
    o = n(225180),
    c = n(576709),
    u = n(985018),
    m = n(439155),
    x = (((a = {}).CLICKABLE = "clickable"), (a.VIEWABLE = "viewable"), (a.DISABLED = "disabled"), a);
function v(e) {
    let {
            className: t,
            guildId: n,
            game: a,
            onClick: s,
            imageClassName: x,
            titleClassName: v,
            variant: g = "clickable",
            location: f,
        } = e,
        j = (0, o.A)(a.gameId, "cover"),
        {
            containerClass: b,
            boostGemColor: h,
            boostPriceTextColor: p,
            handleClick: N,
        } = {
            clickable: {
                containerClass: null,
                boostGemColor: r.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                boostPriceTextColor: void 0,
                handleClick: () => {
                    (0, d.oT)(n, a.id, a.name, f), s?.(a);
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
    return (0, l.jsxs)(r.DUT, {
        "aria-disabled": "disabled" === g,
        className: i()(m.LO, b, t),
        onClick: N,
        children: [
            (0, l.jsxs)("div", {
                className: i()(m.Rf, x),
                children: [
                    (0, l.jsx)("img", { className: m.Sl, alt: "", src: j ?? "" }),
                    (0, l.jsx)("div", { className: m.Gj }),
                    (0, l.jsx)("div", { className: m.Uf }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: i()(m.FS, v),
                children: [
                    (0, l.jsx)(r.Heading, {
                        variant: "heading-sm/semibold",
                        lineClamp: 2,
                        title: a.name,
                        children: a.name,
                    }),
                    (0, l.jsxs)("div", {
                        className: m.PW,
                        children: [
                            (0, l.jsx)(r._Jp, { size: "sm", color: h }),
                            (0, l.jsx)(r.Text, {
                                variant: "text-sm/medium",
                                color: p,
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
