l.d(t, { A: () => h, e: () => j });
var n,
    a = l(627968);
l(64700);
var s = l(503698),
    i = l.n(s),
    r = l(827734),
    d = l(939249),
    o = l(534514),
    c = l(104510),
    u = l(834730),
    m = l(397400),
    v = l(225180),
    x = l(576709),
    g = l(985018),
    f = l(439155),
    j = (((n = {}).CLICKABLE = "clickable"), (n.VIEWABLE = "viewable"), (n.DISABLED = "disabled"), n);
function h(e) {
    let {
            className: t,
            guildId: l,
            game: n,
            onClick: s,
            imageClassName: j,
            titleClassName: h,
            variant: b = "clickable",
            location: p,
        } = e,
        N = (0, v.A)(n.gameId, "cover"),
        {
            containerClass: A,
            boostGemColor: I,
            boostPriceTextColor: S,
            handleClick: C,
        } = {
            clickable: {
                containerClass: null,
                boostGemColor: r.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                boostPriceTextColor: void 0,
                handleClick: () => {
                    (0, m.oT)(l, n.id, n.name, p), s?.(n);
                },
            },
            viewable: {
                containerClass: f.Oe,
                boostGemColor: void 0,
                boostPriceTextColor: "text-muted",
                handleClick: void 0,
            },
            disabled: {
                containerClass: f.r9,
                boostGemColor: r.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                boostPriceTextColor: void 0,
                handleClick: void 0,
            },
        }[b];
    return (0, a.jsxs)(d.D, {
        "aria-disabled": "disabled" === b,
        className: i()(f.LO, A, t),
        onClick: C,
        children: [
            (0, a.jsxs)("div", {
                className: i()(f.Rf, j),
                children: [
                    (0, a.jsx)("img", { className: f.Sl, alt: "", src: N ?? "" }),
                    (0, a.jsx)("div", { className: f.Gj }),
                    (0, a.jsx)("div", { className: f.Uf }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: i()(f.FS, h),
                children: [
                    (0, a.jsx)(o.D, { variant: "heading-sm/semibold", lineClamp: 2, title: n.name, children: n.name }),
                    (0, a.jsxs)("div", {
                        className: f.PW,
                        children: [
                            (0, a.jsx)(c._, { size: "sm", color: I }),
                            (0, a.jsx)(u.E, {
                                variant: "text-sm/medium",
                                color: S,
                                children: g.intl.formatToPlainString(
                                    n.plans.length > 1 ? x.default["G/aTXi"] : x.default.r9pa9K,
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
