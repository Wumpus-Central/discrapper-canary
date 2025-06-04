n.d(t, { c: () => b }), n(388685), n(290780);
var r = n(255367),
    i = n(73800),
    l = n(468194),
    o = n(442837),
    s = n(481060),
    a = n(686546),
    c = n(430824),
    u = n(914010),
    d = n(622123),
    h = n(388032),
    p = n(836344);
function f(e) {
    let { children: t } = e;
    return (0, r.jsx)(a.ZP, {
        className: p.facepileItemContainer,
        mask: a.ZP.Masks.SQUIRCLE,
        width: 25,
        height: 25,
        children: t
    });
}
function g(e) {
    let { guild: t } = e,
        n = t.getIconURL(20, !1, !0),
        i = (0, l.Zg)(t.name);
    return (0, r.jsx)(a.ZP, {
        className: p.facepileItem,
        mask: a.ZP.Masks.SQUIRCLE,
        width: 20,
        height: 20,
        children:
            null != n
                ? (0, r.jsx)('img', {
                      src: n,
                      alt: t.name,
                      height: 20,
                      width: 20
                  })
                : (0, r.jsx)(s.Text, {
                      className: p.textItem,
                      color: 'text-secondary',
                      variant: 'text-md/semibold',
                      children: i
                  })
    });
}
function m(e) {
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
                            (0, r.jsx)('div', { children: (0, r.jsx)(g, { guild: e }) }),
                            (0, r.jsx)(s.Text, {
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
                (0, r.jsx)(s.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-secondary',
                    children: h.intl.format(d.default.bAzBIS, { numServers: n })
                })
        ]
    });
}
function b(e) {
    let { guildIds: t } = e,
        n = (0, o.e7)([u.Z], () => u.Z.getGuildId()),
        l = (0, o.Wu)([c.Z], () => t.map((e) => c.Z.getGuild(e)), [t]),
        a = (0, i.useMemo)(() => l.filter((e) => null != e), [l]),
        {
            visibleGuilds: b,
            numTruncated: y,
            visibleGuildsTooltip: O,
            numTruncatedTooltipGuilds: v
        } = (0, i.useMemo)(() => {
            let e = [...a];
            if (null != n) {
                let t = a.findIndex((e) => e.id === n);
                -1 !== t && (e.splice(t, 1), e.unshift(a[t]));
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
        }, [a, n]);
    return (0, r.jsx)(s.DY3, {
        'aria-label': h.intl.string(d.default.TG0Qsb),
        text: (0, r.jsx)(m, {
            guilds: O,
            numTruncated: v
        }),
        position: 'top',
        children: (0, r.jsxs)('div', {
            className: p.facepile,
            children: [
                b.map((e) => (0, r.jsx)(f, { children: (0, r.jsx)(g, { guild: e }) }, e.id)),
                y > 0 &&
                    (0, r.jsx)(f, {
                        children: (0, r.jsxs)(s.Text, {
                            className: p.textItem,
                            color: 'text-secondary',
                            variant: 'text-md/semibold',
                            children: ['+', y]
                        })
                    })
            ]
        })
    });
}
