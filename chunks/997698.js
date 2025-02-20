n.d(t, { L: () => c });
var r = n(200651);
n(192379);
var i = n(793030),
    s = n(760632),
    a = n(578053),
    l = n(388032),
    o = n(903599);
function c(e) {
    let { canManageGuild: t, guild: n } = e;
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsxs)('div', {
                className: o.inactiveSelects,
                children: [
                    (0, r.jsxs)('div', {
                        className: o.halfWidth,
                        children: [
                            (0, r.jsx)(i.X6, {
                                variant: 'text-xs/bold',
                                color: 'interactive-normal',
                                className: o.subtitle,
                                children: l.NW.string(l.t.KuYcnZ)
                            }),
                            (0, r.jsx)(a.g, {
                                canManageGuild: t,
                                guildId: n.id,
                                afkChannelId: n.afkChannelId
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: o.halfWidth,
                        children: [
                            (0, r.jsx)(i.X6, {
                                variant: 'text-xs/bold',
                                color: 'interactive-normal',
                                className: o.subtitle,
                                children: l.NW.string(l.t.brhYaW)
                            }),
                            (0, r.jsx)(s.M, {
                                canManageGuild: t,
                                afkChannelId: n.afkChannelId,
                                afkTimeout: n.afkTimeout
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(i.xv, {
                variant: 'text-sm/medium',
                color: 'text-secondary',
                children: l.NW.string(l.t.ffEOKC)
            })
        ]
    });
}
