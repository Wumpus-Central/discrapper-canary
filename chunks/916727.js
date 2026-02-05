"use strict";
n.d(t, { v: () => _ });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(732955),
    s = n(397927),
    o = n(701273),
    l = n(71393),
    u = n(602461),
    c = n(985018),
    d = n(432959);
let _ = (e) => {
    let { onClose: t, listing: n, guildId: _ } = e,
        f = (0, i.bG)([l.A], () => l.A.getGuild(_), [_]),
        p = (0, u.A)({ listing: n, guildId: _ });
    return (0, r.jsxs)("div", {
        className: d.RP,
        children: [
            (0, r.jsx)(s.Heading, {
                className: d.RS,
                variant: "heading-lg/extrabold",
                children: c.intl.format(c.t.I5dYFs, { serverName: f?.name, tierName: n.name }),
            }),
            !p.isEmpty() &&
                (0, r.jsx)(s.Text, {
                    className: d.sT,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: c.intl.format(c.t.TnhFHv, { benefits: p.asString() }),
                }),
            (0, r.jsxs)("div", {
                className: d.o1,
                children: [
                    (0, r.jsx)(a.$nd, {
                        variant: "primary",
                        text: c.intl.string(c.t.WWvswD),
                        fullWidth: !0,
                        onClick: () => (0, o.A)("role_sub_mweb_success_modal"),
                    }),
                    (0, r.jsx)(a.$nd, {
                        variant: "secondary",
                        text: c.intl.string(c.t.y84Dhr),
                        fullWidth: !0,
                        onClick: () => t(!0),
                    }),
                ],
            }),
        ],
    });
};
