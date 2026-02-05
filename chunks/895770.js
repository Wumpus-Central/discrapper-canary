n.d(t, { A: () => m });
var a = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(397927),
    r = n(397400),
    d = n(225180),
    u = n(294726),
    c = n(985018),
    o = n(667760);
function m(e) {
    let {
            className: t,
            guildId: n,
            game: i,
            onClick: m,
            imageClassName: g,
            titleClassName: f,
            disabled: _ = !1,
            location: v,
        } = e,
        p = (0, d.A)(i.gameId, "cover");
    return (0, a.jsxs)(s.DUT, {
        "aria-disabled": _,
        className: l()(o.LO, { [o.r9]: _ }, t),
        onClick: _
            ? void 0
            : () => {
                  (0, r.oT)(n, i.id, i.name, v), m(i);
              },
        children: [
            (0, a.jsxs)("div", {
                className: l()(o.Rf, g),
                children: [
                    (0, a.jsx)("img", { className: o.Sl, alt: "", src: p ?? "" }),
                    (0, a.jsx)("div", { className: o.Gj }),
                    (0, a.jsx)("div", { className: o.Uf }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: l()(o.FS, f),
                children: [
                    (0, a.jsx)(s.Heading, {
                        variant: "heading-sm/semibold",
                        lineClamp: 1,
                        title: i.name,
                        children: i.name,
                    }),
                    (0, a.jsxs)("div", {
                        className: o.PW,
                        children: [
                            (0, a.jsx)(s._Jp, { size: "sm", color: s.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK }),
                            (0, a.jsx)(s.Text, {
                                variant: "text-sm/medium",
                                children: c.intl.formatToPlainString(
                                    i.plans.length > 1 ? u.default["G/aTXi"] : u.default.r9pa9K,
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
