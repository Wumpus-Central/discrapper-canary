n.d(t, { m: () => u });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(17894),
    s = n(430824),
    o = n(313550),
    c = n(388032),
    d = n(107782);
let u = (e) => {
    let { onClose: t, listing: n, guildId: u } = e,
        m = (0, i.e7)([s.Z], () => s.Z.getGuild(u), [u]),
        p = (0, o.Z)({
            listing: n,
            guildId: u
        });
    return (0, r.jsxs)('div', {
        className: d.confirmationContainer,
        children: [
            (0, r.jsx)(l.X6q, {
                className: d.confirmationHeader,
                variant: 'heading-lg/extrabold',
                children: c.intl.format(c.t.I5dYFh, {
                    serverName: null == m ? void 0 : m.toString(),
                    tierName: n.name
                })
            }),
            !p.isEmpty() &&
                (0, r.jsx)(l.Text, {
                    className: d.confirmationSubtitle,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: c.intl.format(c.t.TnhFHh, { benefits: p.asString() })
                }),
            (0, r.jsx)(l.zxk, {
                className: d.openDiscordButton,
                onClick: () => (0, a.Z)('role_sub_mweb_success_modal'),
                children: c.intl.string(c.t.WWvswM)
            }),
            (0, r.jsx)(l.zxk, {
                className: d.doneButton,
                look: l.zxk.Looks.BLANK,
                onClick: () => t(!0),
                children: c.intl.string(c.t.y84Dho)
            })
        ]
    });
};
