n.d(t, { m: () => f });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(159691),
    o = n(481060),
    s = n(17894),
    l = n(430824),
    c = n(313550),
    u = n(388032),
    d = n(406671);
let f = (e) => {
    let { onClose: t, listing: n, guildId: f } = e,
        p = (0, i.e7)([l.Z], () => l.Z.getGuild(f), [f]),
        _ = (0, c.Z)({
            listing: n,
            guildId: f,
        });
    return (0, r.jsxs)("div", {
        className: d.confirmationContainer,
        children: [
            (0, r.jsx)(o.Heading, {
                className: d.confirmationHeader,
                variant: "heading-lg/extrabold",
                children: u.intl.format(u.t.I5dYFs, {
                    serverName: null == p ? void 0 : p.name,
                    tierName: n.name,
                }),
            }),
            !_.isEmpty() &&
                (0, r.jsx)(o.Text, {
                    className: d.confirmationSubtitle,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: u.intl.format(u.t.TnhFHv, { benefits: _.asString() }),
                }),
            (0, r.jsxs)("div", {
                className: d.actions,
                children: [
                    (0, r.jsx)(a.zxk, {
                        variant: "primary",
                        text: u.intl.string(u.t.WWvswD),
                        fullWidth: !0,
                        onClick: () => (0, s.Z)("role_sub_mweb_success_modal"),
                    }),
                    (0, r.jsx)(a.zxk, {
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
