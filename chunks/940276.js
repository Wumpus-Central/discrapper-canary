n.d(t, { Z: () => m });
var i = n(255367),
    r = n(442837),
    s = n(481060),
    l = n(650774),
    a = n(304432),
    o = n(622123),
    c = n(388032),
    d = n(236022);
function u(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: a } = e,
        o = (0, r.e7)([l.Z], () => l.Z.getMemberCount(t.id)),
        u = t.toString();
    return (0, i.jsx)(s.j7V, {
        className: d.guildRowWrapper,
        value: !n,
        onChange: (e) =>
            a({
                checked: e,
                guildId: t.id
            }),
        hideBorder: !0,
        children: (0, i.jsxs)('div', {
            className: d.guildRow,
            children: [
                (0, i.jsx)(s.aRk, {
                    children: (0, i.jsx)(s.LYs, {
                        ariaLabel: u,
                        name: u,
                        icon: t.getIconURL(80, !1, !0),
                        tabIndex: -1
                    })
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(s.Text, {
                            variant: 'text-md/medium',
                            lineClamp: 1,
                            color: 'text-normal',
                            children: t.toString()
                        }),
                        (0, i.jsxs)('div', {
                            className: d.memberDetailsContainer,
                            children: [
                                (0, i.jsx)('div', { className: d.memberCountDot }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-secondary',
                                    children: c.intl.format(c.t.zRl6XV, { count: o })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
let m = function () {
    let { guilds: e, searchQuery: t, setSearchQuery: n, sortOrder: r, setSortOrder: l, hasActivityRestrictedGuilds: m, onToggleAllActivityRestrictedGuilds: g, onToggleShowAllGuilds: p, isShowingAllGuilds: h, numTotalGuilds: f, onToggleActivityRestrictedGuild: b, isActivityRestricted: _ } = (0, a.F)();
    return (0, i.jsxs)('div', {
        className: d.wrapper,
        children: [
            (0, i.jsx)(s.E1j, {
                size: s.E1j.Sizes.MEDIUM,
                query: t,
                onChange: n,
                onClear: () => n(''),
                placeholder: c.intl.string(c.t['5h0QOD']),
                'aria-label': c.intl.string(c.t['5h0QOD'])
            }),
            (0, i.jsxs)('div', {
                className: d.controlsContainer,
                children: [
                    (0, i.jsx)(s.PhF, {
                        className: d.sortOrderSelect,
                        look: s.qQH.CUSTOM,
                        popoutWidth: 'auto',
                        options: [
                            {
                                label: c.intl.string(c.t.STMPJy),
                                value: a.W.SERVER_ORDER
                            },
                            {
                                label: c.intl.string(c.t.CbaapK),
                                value: a.W.RECENTLY_JOINED
                            },
                            {
                                label: c.intl.string(o.default.ZI51JS),
                                value: a.W.ACTIVITY_SHARING_ON
                            },
                            {
                                label: c.intl.string(o.default['+kxafn']),
                                value: a.W.ACTIVITY_SHARING_OFF
                            }
                        ],
                        select: l,
                        isSelected: (e) => r === e,
                        serialize: String
                    }),
                    (0, i.jsx)(s.zxk, {
                        className: d.toggleAllButton,
                        look: s.zxk.Looks.LINK,
                        color: s.zxk.Colors.LINK,
                        onClick: g,
                        children: m ? c.intl.string(c.t['7lxcLC']) : c.intl.string(c.t.zh6UEh)
                    })
                ]
            }),
            e.map((e) =>
                (0, i.jsx)(
                    u,
                    {
                        guild: e,
                        isActivityRestricted: _(e.id),
                        onToggleActivityRestrictedGuild: b
                    },
                    e.id
                )
            ),
            (0, i.jsxs)(s.P3F, {
                className: d.showAllButton,
                onClick: p,
                children: [
                    h
                        ? (0, i.jsx)(s.u04, {
                              className: d.showAllIcon,
                              size: 'md',
                              color: s.TVs.colors.ICON_PRIMARY
                          })
                        : (0, i.jsx)(s.CJ0, {
                              className: d.showAllIcon,
                              size: 'md',
                              color: s.TVs.colors.ICON_PRIMARY
                          }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/semibold',
                        color: 'text-primary',
                        children: h ? c.intl.string(c.t['8fJE7+']) : c.intl.format(c.t.jcANeH, { count: f })
                    })
                ]
            })
        ]
    });
};
