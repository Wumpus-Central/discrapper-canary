n.d(t, { m: () => u });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(17894),
    s = n(430824),
    o = n(313550),
    c = n(388032),
    d = n(88348);
let u = (e) => {
    let { onClose: t, listing: n, guildId: u } = e,
        m = (0, l.e7)([s.Z], () => s.Z.getGuild(u), [u]),
        _ = (0, o.Z)({
            listing: n,
            guildId: u
        });
    return (0, i.jsxs)('div', {
        className: d.confirmationContainer,
        children: [
            (0, i.jsx)(a.X6q, {
                className: d.confirmationHeader,
                variant: 'heading-lg/extrabold',
                children: c.intl.format(c.t.I5dYFh, {
                    serverName: null == m ? void 0 : m.toString(),
                    tierName: n.name
                })
            }),
            !_.isEmpty() &&
                (0, i.jsx)(a.Text, {
                    className: d.confirmationSubtitle,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: c.intl.format(c.t.TnhFHh, { benefits: _.asString() })
                }),
            (0, i.jsx)(a.zxk, {
                className: d.openDiscordButton,
                onClick: () => (0, r.Z)('role_sub_mweb_success_modal'),
                children: c.intl.string(c.t.WWvswM)
            }),
            (0, i.jsx)(a.zxk, {
                className: d.doneButton,
                look: a.zxk.Looks.BLANK,
                onClick: () => t(!0),
                children: c.intl.string(c.t.y84Dho)
            })
        ]
    });
};
