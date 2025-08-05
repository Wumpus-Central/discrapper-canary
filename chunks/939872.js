n.d(t, { m: () => m });
var i = n(255367);
n(73800);
var r = n(442837),
    l = n(755721),
    a = n(481060),
    s = n(17894),
    o = n(430824),
    c = n(313550),
    d = n(388032),
    u = n(107782);
let m = (e) => {
    let { onClose: t, listing: n, guildId: m } = e,
        f = (0, r.e7)([o.Z], () => o.Z.getGuild(m), [m]),
        h = (0, c.Z)({
            listing: n,
            guildId: m
        });
    return (0, i.jsxs)('div', {
        className: u.confirmationContainer,
        children: [
            (0, i.jsx)(a.X6q, {
                className: u.confirmationHeader,
                variant: 'heading-lg/extrabold',
                children: d.intl.format(d.t.I5dYFh, {
                    serverName: null == f ? void 0 : f.name,
                    tierName: n.name
                })
            }),
            !h.isEmpty() &&
                (0, i.jsx)(a.Text, {
                    className: u.confirmationSubtitle,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: d.intl.format(d.t.TnhFHh, { benefits: h.asString() })
                }),
            (0, i.jsx)(l.zx, {
                className: u.openDiscordButton,
                onClick: () => (0, s.Z)('role_sub_mweb_success_modal'),
                children: d.intl.string(d.t.WWvswM)
            }),
            (0, i.jsx)(l.zx, {
                className: u.doneButton,
                look: l.zx.Looks.BLANK,
                onClick: () => t(!0),
                children: d.intl.string(d.t.y84Dho)
            })
        ]
    });
};
