n.d(t, {
    m: function () {
        return d;
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
    u = n(522477);
let d = (e) => {
    let { onClose: t, listing: n, guildId: d } = e,
        m = (0, r.e7)([o.Z], () => o.Z.getGuild(d), [d]),
        h = (0, s.Z)({
            listing: n,
            guildId: d
        });
    return (0, i.jsxs)('div', {
        className: u.confirmationContainer,
        children: [
            (0, i.jsx)(l.Heading, {
                className: u.confirmationHeader,
                variant: 'heading-lg/extrabold',
                children: c.intl.format(c.t.I5dYFh, {
                    serverName: null == m ? void 0 : m.toString(),
                    tierName: n.name
                })
            }),
            !h.isEmpty() &&
                (0, i.jsx)(l.Text, {
                    className: u.confirmationSubtitle,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: c.intl.format(c.t.TnhFHh, { benefits: h.asString() })
                }),
            (0, i.jsx)(l.Button, {
                className: u.openDiscordButton,
                onClick: () => (0, a.Z)('role_sub_mweb_success_modal'),
                children: c.intl.string(c.t.WWvswM)
            }),
            (0, i.jsx)(l.Button, {
                className: u.doneButton,
                look: l.Button.Looks.BLANK,
                onClick: () => t(!0),
                children: c.intl.string(c.t.y84Dho)
            })
        ]
    });
};
