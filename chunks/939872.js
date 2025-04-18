n.d(t, { m: () => u });
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    o = n(17894),
    l = n(430824),
    s = n(313550),
    c = n(388032),
    d = n(107782);
let u = (e) => {
    let { onClose: t, listing: n, guildId: u } = e,
        _ = (0, i.e7)([l.Z], () => l.Z.getGuild(u), [u]),
        m = (0, s.Z)({
            listing: n,
            guildId: u
        });
    return (0, r.jsxs)('div', {
        className: d.confirmationContainer,
        children: [
            (0, r.jsx)(a.X6q, {
                className: d.confirmationHeader,
                variant: 'heading-lg/extrabold',
                children: c.NW.format(c.t.I5dYFh, {
                    serverName: null == _ ? void 0 : _.toString(),
                    tierName: n.name
                })
            }),
            !m.isEmpty() &&
                (0, r.jsx)(a.Text, {
                    className: d.confirmationSubtitle,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: c.NW.format(c.t.TnhFHh, { benefits: m.asString() })
                }),
            (0, r.jsx)(a.zxk, {
                className: d.openDiscordButton,
                onClick: () => (0, o.Z)('role_sub_mweb_success_modal'),
                children: c.NW.string(c.t.WWvswM)
            }),
            (0, r.jsx)(a.zxk, {
                className: d.doneButton,
                look: a.zxk.Looks.BLANK,
                onClick: () => t(!0),
                children: c.NW.string(c.t.y84Dho)
            })
        ]
    });
};
