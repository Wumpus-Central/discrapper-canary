n.d(t, { m: () => p });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(755721),
    a = n(481060),
    o = n(17894),
    s = n(430824),
    c = n(313550),
    u = n(388032),
    d = n(107782);
let p = (e) => {
    let { onClose: t, listing: n, guildId: p } = e,
        m = (0, i.e7)([s.Z], () => s.Z.getGuild(p), [p]),
        f = (0, c.Z)({
            listing: n,
            guildId: p
        });
    return (0, r.jsxs)('div', {
        className: d.confirmationContainer,
        children: [
            (0, r.jsx)(a.X6q, {
                className: d.confirmationHeader,
                variant: 'heading-lg/extrabold',
                children: u.intl.format(u.t.I5dYFh, {
                    serverName: null == m ? void 0 : m.name,
                    tierName: n.name
                })
            }),
            !f.isEmpty() &&
                (0, r.jsx)(a.Text, {
                    className: d.confirmationSubtitle,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: u.intl.format(u.t.TnhFHh, { benefits: f.asString() })
                }),
            (0, r.jsx)(l.zx, {
                className: d.openDiscordButton,
                onClick: () => (0, o.Z)('role_sub_mweb_success_modal'),
                children: u.intl.string(u.t.WWvswM)
            }),
            (0, r.jsx)(l.zx, {
                className: d.doneButton,
                look: l.zx.Looks.BLANK,
                onClick: () => t(!0),
                children: u.intl.string(u.t.y84Dho)
            })
        ]
    });
};
