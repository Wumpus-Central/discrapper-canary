n.d(t, { m: () => d });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(17894),
    o = n(430824),
    s = n(313550),
    c = n(388032),
    u = n(107782);
let d = (e) => {
    let { onClose: t, listing: n, guildId: d } = e,
        m = (0, i.e7)([o.Z], () => o.Z.getGuild(d), [d]),
        p = (0, s.Z)({
            listing: n,
            guildId: d
        });
    return (0, r.jsxs)('div', {
        className: u.confirmationContainer,
        children: [
            (0, r.jsx)(l.X6q, {
                className: u.confirmationHeader,
                variant: 'heading-lg/extrabold',
                children: c.intl.format(c.t.I5dYFh, {
                    serverName: null == m ? void 0 : m.toString(),
                    tierName: n.name
                })
            }),
            !p.isEmpty() &&
                (0, r.jsx)(l.Text, {
                    className: u.confirmationSubtitle,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: c.intl.format(c.t.TnhFHh, { benefits: p.asString() })
                }),
            (0, r.jsx)(l.zxk, {
                className: u.openDiscordButton,
                onClick: () => (0, a.Z)('role_sub_mweb_success_modal'),
                children: c.intl.string(c.t.WWvswM)
            }),
            (0, r.jsx)(l.zxk, {
                className: u.doneButton,
                look: l.zxk.Looks.BLANK,
                onClick: () => t(!0),
                children: c.intl.string(c.t.y84Dho)
            })
        ]
    });
};
