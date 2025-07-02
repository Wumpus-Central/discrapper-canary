n.d(t, { Z: () => f });
var i = n(255367),
    r = n(73800),
    s = n(442837),
    l = n(481060),
    a = n(650774),
    o = n(626135),
    c = n(797670),
    d = n(304432),
    u = n(981631),
    m = n(29953),
    g = n(388032),
    p = n(236022);
function h(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: r } = e,
        o = (0, s.e7)([a.Z], () => a.Z.getMemberCount(t.id));
    return (0, i.jsx)('li', {
        children: (0, i.jsx)(l.j7V, {
            className: p.guildRowWrapper,
            value: !n,
            onChange: (e) =>
                r({
                    checked: e,
                    guildId: t.id
                }),
            hideBorder: !0,
            children: (0, i.jsxs)('div', {
                className: p.guildRow,
                children: [
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(c.V, {
                            guild: t,
                            size: 48
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: p.guildRowTextContainer,
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: 'text-md/medium',
                                lineClamp: 1,
                                color: 'text-default',
                                children: t.toString()
                            }),
                            (0, i.jsxs)('div', {
                                className: p.memberDetailsContainer,
                                children: [
                                    (0, i.jsx)('div', { className: p.memberCountDot }),
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-secondary',
                                        children: g.intl.format(g.t.zRl6XV, { count: o })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}
let f = function () {
    let { guilds: e, searchQuery: t, setSearchQuery: n, sortOrder: s, setSortOrder: a, hasActivityRestrictedGuilds: c, onToggleAllActivityRestrictedGuilds: f, onToggleActivityRestrictedGuild: b, isActivityRestricted: x, numActivityRestrictedGuilds: _, numTotalGuilds: E } = (0, d.F)(),
        j = (0, r.useId)();
    return (0, i.jsxs)('div', {
        className: p.wrapper,
        children: [
            (0, i.jsxs)('div', {
                className: p.headerContainer,
                children: [
                    (0, i.jsx)(l.E1j, {
                        size: l.E1j.Sizes.MEDIUM,
                        query: t,
                        onChange: n,
                        onClear: () => {
                            (o.default.track(u.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: 'search_cleared',
                                sort_order: s,
                                activity_restricted_guild_count: _,
                                total_guild_count: E
                            }),
                                n(''));
                        },
                        onFocus: () =>
                            o.default.track(u.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: 'search_focused',
                                sort_order: s,
                                activity_restricted_guild_count: _,
                                total_guild_count: E
                            }),
                        onBlur: () =>
                            o.default.track(u.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: 'search_blurred',
                                sort_order: s,
                                activity_restricted_guild_count: _,
                                total_guild_count: E
                            }),
                        placeholder: g.intl.string(g.t['H+nRY2']),
                        'aria-label': g.intl.string(g.t['5h0QOD']),
                        inputProps: {
                            'aria-controls': j,
                            'aria-expanded': !0
                        }
                    }),
                    e.length > 0 &&
                        (0, i.jsxs)('div', {
                            className: p.controlsContainer,
                            children: [
                                (0, i.jsx)(l.PhF, {
                                    className: p.sortOrderSelect,
                                    look: l.qQH.CUSTOM,
                                    popoutWidth: 'auto',
                                    options: [
                                        {
                                            label: g.intl.string(g.t.STMPJy),
                                            value: d.W.SERVER_ORDER
                                        },
                                        {
                                            label: g.intl.string(g.t.CbaapK),
                                            value: d.W.RECENTLY_JOINED
                                        },
                                        {
                                            label: g.intl.string(m.default.ZI51JS),
                                            value: d.W.ACTIVITY_SHARING_ON
                                        },
                                        {
                                            label: g.intl.string(m.default['+kxafn']),
                                            value: d.W.ACTIVITY_SHARING_OFF
                                        }
                                    ],
                                    select: (e) => {
                                        (o.default.track(u.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                            interaction: 'sort_order_changed',
                                            sort_order: e,
                                            activity_restricted_guild_count: _,
                                            total_guild_count: E
                                        }),
                                            a(e));
                                    },
                                    isSelected: (e) => s === e,
                                    serialize: String
                                }),
                                (0, i.jsx)(l.zxk, {
                                    className: p.toggleAllButton,
                                    look: l.zxk.Looks.LINK,
                                    color: l.zxk.Colors.LINK,
                                    onClick: f,
                                    children: c ? g.intl.string(g.t['7lxcLC']) : g.intl.string(g.t.zh6UEh)
                                })
                            ]
                        })
                ]
            }),
            (0, i.jsx)(l.nn4, {
                'aria-live': 'polite',
                role: 'region',
                children: g.intl.format(m.default.EvzDfX, { count: e.length })
            }),
            (0, i.jsxs)('ul', {
                className: p.guildsList,
                id: j,
                'aria-label': g.intl.string(g.t['7hB4kp']),
                children: [
                    0 === e.length &&
                        (0, i.jsx)('div', {
                            className: p.noResultsContainer,
                            children: (0, i.jsx)(l.Text, {
                                className: p.noResultsText,
                                variant: 'text-lg/medium',
                                children: g.intl.string(g.t['Xe+fJC'])
                            })
                        }),
                    e.map((e) =>
                        (0, i.jsx)(
                            h,
                            {
                                guild: e,
                                isActivityRestricted: x(e.id),
                                onToggleActivityRestrictedGuild: b
                            },
                            e.id
                        )
                    )
                ]
            })
        ]
    });
};
