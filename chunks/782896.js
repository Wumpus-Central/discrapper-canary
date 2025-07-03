(n.d(t, { c: () => m }), n(388685), n(290780));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(481060),
    s = n(686546),
    a = n(430824),
    c = n(914010),
    u = n(797670),
    d = n(29953),
    h = n(388032),
    p = n(836344);
function f(e) {
    let { children: t } = e;
    return (0, r.jsx)(s.ZP, {
        className: p.facepileItemContainer,
        mask: s.ZP.Masks.SQUIRCLE,
        width: 25,
        height: 25,
        children: t
    });
}
function g(e) {
    let { guilds: t, numTruncated: n } = e;
    return (0, r.jsxs)('div', {
        className: p.guildIconList,
        children: [
            t.map((e) =>
                (0, r.jsxs)(
                    'div',
                    {
                        className: p.guildIconItem,
                        children: [
                            (0, r.jsx)('div', {
                                children: (0, r.jsx)(u.V, {
                                    guild: e,
                                    size: 20
                                })
                            }),
                            (0, r.jsx)(o.Text, {
                                className: p.guildIconItemText,
                                variant: 'text-xs/medium',
                                children: e.name
                            })
                        ]
                    },
                    e.id
                )
            ),
            n > 0 &&
                (0, r.jsx)(o.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-secondary',
                    children: h.intl.format(d.default.bAzBIS, { numServers: n })
                })
        ]
    });
}
function m(e) {
    let { guildIds: t } = e,
        n = (0, l.e7)([c.Z], () => c.Z.getGuildId()),
        s = (0, l.Wu)([a.Z], () => t.map((e) => a.Z.getGuild(e)), [t]),
        m = (0, i.useMemo)(() => s.filter((e) => null != e), [s]),
        {
            visibleGuilds: b,
            numTruncated: _,
            visibleGuildsTooltip: O,
            numTruncatedTooltipGuilds: y
        } = (0, i.useMemo)(() => {
            let e = [...m];
            if (null != n) {
                let t = m.findIndex((e) => e.id === n);
                -1 !== t && (e.splice(t, 1), e.unshift(m[t]));
            }
            return 4 === e.length
                ? {
                      visibleGuilds: e,
                      numTruncated: 0,
                      visibleGuildsTooltip: e,
                      numTruncatedTooltipGuilds: 0
                  }
                : {
                      visibleGuilds: e.slice(0, 3),
                      numTruncated: e.length - 3,
                      visibleGuildsTooltip: e.slice(0, 15),
                      numTruncatedTooltipGuilds: e.length - 15
                  };
        }, [m, n]);
    return (0, r.jsx)(o.DY3, {
        'aria-label': h.intl.string(d.default.TG0Qsb),
        text: (0, r.jsx)(g, {
            guilds: O,
            numTruncated: y
        }),
        position: 'top',
        children: (0, r.jsxs)('div', {
            className: p.facepile,
            children: [
                b.map((e) =>
                    (0, r.jsx)(
                        f,
                        {
                            children: (0, r.jsx)(u.V, {
                                guild: e,
                                size: 20
                            })
                        },
                        e.id
                    )
                ),
                _ > 0 &&
                    (0, r.jsx)(f, {
                        children: (0, r.jsxs)(o.Text, {
                            className: p.textItem,
                            color: 'text-secondary',
                            variant: 'text-xxs/semibold',
                            children: ['+', _]
                        })
                    })
            ]
        })
    });
}
