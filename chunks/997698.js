n.d(t, { L: () => c });
var i = n(200651);
n(192379);
var r = n(793030),
    l = n(760632),
    s = n(578053),
    a = n(388032),
    o = n(234755);
function c(e) {
    let { canManageGuild: t, guild: n } = e;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)('div', {
                className: o.inactiveSelects,
                children: [
                    (0, i.jsxs)('div', {
                        className: o.halfWidth,
                        children: [
                            (0, i.jsx)(r.X6, {
                                variant: 'text-xs/bold',
                                color: 'text-muted',
                                className: o.subtitle,
                                children: a.intl.string(a.t.KuYcnZ)
                            }),
                            (0, i.jsx)(s.g, {
                                canManageGuild: t,
                                guildId: n.id,
                                afkChannelId: n.afkChannelId
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: o.halfWidth,
                        children: [
                            (0, i.jsx)(r.X6, {
                                variant: 'text-xs/bold',
                                color: 'text-muted',
                                className: o.subtitle,
                                children: a.intl.string(a.t.brhYaW)
                            }),
                            (0, i.jsx)(l.M, {
                                canManageGuild: t,
                                afkChannelId: n.afkChannelId,
                                afkTimeout: n.afkTimeout
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(r.xv, {
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: a.intl.string(a.t.ffEOKC)
            })
        ]
    });
}
