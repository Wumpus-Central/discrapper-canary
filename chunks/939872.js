n.d(t, {
    m: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    a = n(17894),
    o = n(430824),
    s = n(313550),
    c = n(388032),
    d = n(522477);
let u = (e) => {
    let { onClose: t, listing: n, guildId: u } = e,
        m = (0, r.e7)([o.Z], () => o.Z.getGuild(u), [u]),
        h = (0, s.Z)({
            listing: n,
            guildId: u
        });
    return (0, i.jsxs)('div', {
        className: d.confirmationContainer,
        children: [
            (0, i.jsx)(l.Heading, {
                className: d.confirmationHeader,
                variant: 'heading-lg/extrabold',
                children: c.intl.format(c.t.I5dYFh, {
                    serverName: null == m ? void 0 : m.toString(),
                    tierName: n.name
                })
            }),
            !h.isEmpty() &&
                (0, i.jsx)(l.Text, {
                    className: d.confirmationSubtitle,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: c.intl.format(c.t.TnhFHh, { benefits: h.asString() })
                }),
            (0, i.jsx)(l.Button, {
                className: d.openDiscordButton,
                onClick: () => (0, a.Z)('role_sub_mweb_success_modal'),
                children: c.intl.string(c.t.WWvswM)
            }),
            (0, i.jsx)(l.Button, {
                className: d.doneButton,
                look: l.Button.Looks.BLANK,
                onClick: () => t(!0),
                children: c.intl.string(c.t.y84Dho)
            })
        ]
    });
};
