i.d(t, { v: () => m });
var l = i(627968);
i(64700);
var n = i(311907),
    a = i(732955),
    s = i(397927),
    r = i(701273),
    c = i(71393),
    d = i(602461),
    o = i(985018),
    u = i(432959);
let m = (e) => {
    let { onClose: t, listing: i, guildId: m } = e,
        x = (0, n.bG)([c.A], () => c.A.getGuild(m), [m]),
        h = (0, d.A)({ listing: i, guildId: m });
    return (0, l.jsxs)("div", {
        className: u.RP,
        children: [
            (0, l.jsx)(s.Heading, {
                className: u.RS,
                variant: "heading-lg/extrabold",
                children: o.intl.format(o.t.I5dYFs, { serverName: x?.name, tierName: i.name }),
            }),
            !h.isEmpty() &&
                (0, l.jsx)(s.Text, {
                    className: u.sT,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: o.intl.format(o.t.TnhFHv, { benefits: h.asString() }),
                }),
            (0, l.jsxs)("div", {
                className: u.o1,
                children: [
                    (0, l.jsx)(a.$nd, {
                        variant: "primary",
                        text: o.intl.string(o.t.WWvswD),
                        fullWidth: !0,
                        onClick: () => (0, r.A)("role_sub_mweb_success_modal"),
                    }),
                    (0, l.jsx)(a.$nd, {
                        variant: "secondary",
                        text: o.intl.string(o.t.y84Dhr),
                        fullWidth: !0,
                        onClick: () => t(!0),
                    }),
                ],
            }),
        ],
    });
};
