n.d(t, { L: () => c });
var r = n(54381),
    i = n(793030),
    l = n(760632),
    s = n(578053),
    a = n(388032),
    o = n(354962);
function c(e) {
    let { canManageGuild: t, guild: n } = e;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)("div", {
                className: o.inactiveSelects,
                children: [
                    (0, r.jsx)("div", {
                        className: o.halfWidth,
                        children: (0, r.jsx)(s.g, {
                            label: a.intl.string(a.t.KuYcnU),
                            canManageGuild: t,
                            guildId: n.id,
                            afkChannelId: n.afkChannelId,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: o.halfWidth,
                        children: (0, r.jsx)(l.M, {
                            label: a.intl.string(a.t.brhYaR),
                            canManageGuild: t,
                            afkChannelId: n.afkChannelId,
                            afkTimeout: n.afkTimeout,
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(i.xvT, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: a.intl.string(a.t.ffEOKP),
            }),
        ],
    });
}
