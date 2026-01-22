n.d(t, {
    v: () => f,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(732955),
    s = n(397927),
    o = n(701273),
    l = n(71393),
    c = n(602461),
    u = n(985018),
    d = n(432959);
let f = (e) => {
    let { onClose: t, listing: n, guildId: f } = e,
        p = (0, i.bG)([l.A], () => l.A.getGuild(f), [f]),
        _ = (0, c.A)({
            listing: n,
            guildId: f,
        });
    return (0, r.jsxs)("div", {
        className: d.RP,
        children: [
            (0, r.jsx)(s.Heading, {
                className: d.RS,
                variant: "heading-lg/extrabold",
                children: u.intl.format(u.t.I5dYFs, {
                    serverName: null == p ? void 0 : p.name,
                    tierName: n.name,
                }),
            }),
            !_.isEmpty() &&
                (0, r.jsx)(s.Text, {
                    className: d.sT,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: u.intl.format(u.t.TnhFHv, {
                        benefits: _.asString(),
                    }),
                }),
            (0, r.jsxs)("div", {
                className: d.o1,
                children: [
                    (0, r.jsx)(a.$nd, {
                        variant: "primary",
                        text: u.intl.string(u.t.WWvswD),
                        fullWidth: !0,
                        onClick: () => (0, o.A)("role_sub_mweb_success_modal"),
                    }),
                    (0, r.jsx)(a.$nd, {
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
