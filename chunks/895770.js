n.d(t, { A: () => m });
var l = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    r = n(397927),
    s = n(397400),
    u = n(225180),
    o = n(294726),
    d = n(985018),
    c = n(667760);
function m(e) {
    let {
            className: t,
            guildId: n,
            game: i,
            onClick: m,
            imageClassName: v,
            titleClassName: f,
            disabled: g = !1,
            location: b,
        } = e,
        p = (0, u.A)(i.gameId, "cover");
    return (0, l.jsxs)(r.DUT, {
        "aria-disabled": g,
        className: a()(c.LO, { [c.r9]: g }, t),
        onClick: g
            ? void 0
            : () => {
                  (0, s.oT)(n, i.id, i.name, b), m(i);
              },
        children: [
            (0, l.jsxs)("div", {
                className: a()(c.Rf, v),
                children: [
                    (0, l.jsx)("img", {
                        className: c.Sl,
                        alt: "",
                        src: null != p ? p : "",
                    }),
                    (0, l.jsx)("div", { className: c.Gj }),
                    (0, l.jsx)("div", { className: c.Uf }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: a()(c.FS, f),
                children: [
                    (0, l.jsx)(r.Heading, {
                        variant: "heading-sm/semibold",
                        lineClamp: 1,
                        title: i.name,
                        children: i.name,
                    }),
                    (0, l.jsxs)("div", {
                        className: c.PW,
                        children: [
                            (0, l.jsx)(r._Jp, {
                                size: "sm",
                                color: r.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                            }),
                            (0, l.jsx)(r.Text, {
                                variant: "text-sm/medium",
                                children: d.intl.formatToPlainString(
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
