n.d(t, { L: () => d });
var r = n(200651);
n(192379);
var i = n(793030),
    l = n(481060),
    s = n(760632),
    a = n(578053),
    o = n(388032),
    c = n(863926);
function d(e) {
    let { canManageGuild: t, guild: n } = e;
    return (0, r.jsxs)(l.hjN, {
        children: [
            (0, r.jsxs)('div', {
                className: c.inactiveSelects,
                children: [
                    (0, r.jsxs)('div', {
                        className: c.halfWidth,
                        children: [
                            (0, r.jsx)(l.vwX, { children: o.intl.string(o.t.KuYcnZ) }),
                            (0, r.jsx)(a.g, {
                                canManageGuild: t,
                                guildId: n.id,
                                afkChannelId: n.afkChannelId
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: c.halfWidth,
                        children: [
                            (0, r.jsx)(l.vwX, { children: o.intl.string(o.t.brhYaW) }),
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
                children: o.intl.string(o.t.ffEOKC)
            })
        ]
    });
}
