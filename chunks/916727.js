i.d(t, { v: () => x });
var l = i(627968);
i(64700);
var n = i(311907),
    s = i(821609),
    a = i(534514),
    r = i(834730),
    c = i(701273),
    d = i(71393),
    o = i(602461),
    u = i(985018),
    m = i(207816);
let x = (e) => {
    let { onClose: t, listing: i, guildId: x } = e,
        h = (0, n.bG)([d.A], () => d.A.getGuild(x), [x]),
        g = (0, o.A)({ listing: i, guildId: x });
    return (0, l.jsxs)("div", {
        className: m.RP,
        children: [
            (0, l.jsx)(a.D, {
                className: m.RS,
                variant: "heading-lg/extrabold",
                children: u.intl.format(u.t.I5dYFs, { serverName: h?.name, tierName: i.name }),
            }),
            !g.isEmpty() &&
                (0, l.jsx)(r.E, {
                    className: m.sT,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: u.intl.format(u.t.TnhFHv, { benefits: g.asString() }),
                }),
            (0, l.jsxs)("div", {
                className: m.o1,
                children: [
                    (0, l.jsx)(s.$, {
                        variant: "primary",
                        text: u.intl.string(u.t.WWvswD),
                        fullWidth: !0,
                        onClick: () => (0, c.A)("role_sub_mweb_success_modal"),
                    }),
                    (0, l.jsx)(s.$, {
                        variant: "secondary",
                        text: u.intl.string(u.t.y84Dhr),
                        fullWidth: !0,
                        onClick: () => t(!0),
                    }),
                ],
            }),
        ],
    });
};
