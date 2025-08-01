n.d(t, { Z: () => b });
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(755721),
    l = n(481060),
    o = n(650774),
    c = n(626135),
    d = n(797670),
    u = n(304432),
    m = n(981631),
    p = n(29953),
    g = n(388032),
    h = n(236022);
function f(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: r } = e,
        a = (0, s.e7)([o.Z], () => o.Z.getMemberCount(t.id));
    return (0, i.jsx)('li', {
        children: (0, i.jsx)(l.j7V, {
            className: h.guildRowWrapper,
            value: !n,
            onChange: (e) =>
                r({
                    checked: e,
                    guildId: t.id
                }),
            hideBorder: !0,
            children: (0, i.jsxs)('div', {
                className: h.guildRow,
                children: [
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(d.V, {
                            guild: t,
                            size: 48
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: h.guildRowTextContainer,
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: 'text-md/medium',
                                lineClamp: 1,
                                color: 'text-default',
                                children: t.name
                            }),
                            (0, i.jsxs)('div', {
                                className: h.memberDetailsContainer,
                                children: [
                                    (0, i.jsx)('div', { className: h.memberCountDot }),
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-secondary',
                                        children: g.intl.format(g.t.zRl6XV, { count: a })
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
let b = function () {
    let { guilds: e, searchQuery: t, setSearchQuery: n, sortOrder: s, setSortOrder: o, hasActivityRestrictedGuilds: d, onToggleAllActivityRestrictedGuilds: b, onToggleActivityRestrictedGuild: x, isActivityRestricted: _, numActivityRestrictedGuilds: j, numTotalGuilds: C } = (0, u.F)(),
        O = (0, r.useId)();
    return (0, i.jsxs)('div', {
        className: h.wrapper,
        children: [
            (0, i.jsxs)('div', {
                className: h.headerContainer,
                children: [
                    (0, i.jsx)(l.E1j, {
                        query: t,
                        onChange: n,
                        onClear: () => {
                            (c.default.track(m.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: 'search_cleared',
                                sort_order: s,
                                activity_restricted_guild_count: j,
                                total_guild_count: C
                            }),
                                n(''));
                        },
                        onFocus: () =>
                            c.default.track(m.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: 'search_focused',
                                sort_order: s,
                                activity_restricted_guild_count: j,
                                total_guild_count: C
                            }),
                        onBlur: () =>
                            c.default.track(m.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: 'search_blurred',
                                sort_order: s,
                                activity_restricted_guild_count: j,
                                total_guild_count: C
                            }),
                        placeholder: g.intl.string(g.t['H+nRY2']),
                        'aria-label': g.intl.string(g.t['5h0QOD']),
                        inputProps: {
                            'aria-controls': O,
                            'aria-expanded': !0
                        }
                    }),
                    e.length > 0 &&
                        (0, i.jsxs)('div', {
                            className: h.controlsContainer,
                            children: [
                                (0, i.jsx)(l.PhF, {
                                    className: h.sortOrderSelect,
                                    look: l.qQH.CUSTOM,
                                    popoutWidth: 'auto',
                                    options: [
                                        {
                                            label: g.intl.string(g.t.STMPJy),
                                            value: u.W.SERVER_ORDER
                                        },
                                        {
                                            label: g.intl.string(g.t.CbaapK),
                                            value: u.W.RECENTLY_JOINED
                                        },
                                        {
                                            label: g.intl.string(p.default.ZI51JS),
                                            value: u.W.ACTIVITY_SHARING_ON
                                        },
                                        {
                                            label: g.intl.string(p.default['+kxafn']),
                                            value: u.W.ACTIVITY_SHARING_OFF
                                        }
                                    ],
                                    select: (e) => {
                                        (c.default.track(m.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                            interaction: 'sort_order_changed',
                                            sort_order: e,
                                            activity_restricted_guild_count: j,
                                            total_guild_count: C
                                        }),
                                            o(e));
                                    },
                                    isSelected: (e) => s === e,
                                    serialize: String
                                }),
                                (0, i.jsx)(a.zx, {
                                    className: h.toggleAllButton,
                                    look: a.zx.Looks.LINK,
                                    color: a.zx.Colors.LINK,
                                    onClick: b,
                                    children: d ? g.intl.string(g.t['7lxcLC']) : g.intl.string(g.t.zh6UEh)
                                })
                            ]
                        })
                ]
            }),
            (0, i.jsx)(l.nn4, {
                'aria-live': 'polite',
                role: 'region',
                children: g.intl.format(p.default.EvzDfX, { count: e.length })
            }),
            (0, i.jsxs)('ul', {
                className: h.guildsList,
                id: O,
                'aria-label': g.intl.string(g.t['7hB4kp']),
                children: [
                    0 === e.length &&
                        (0, i.jsx)('div', {
                            className: h.noResultsContainer,
                            children: (0, i.jsx)(l.Text, {
                                className: h.noResultsText,
                                variant: 'text-lg/medium',
                                children: g.intl.string(g.t['Xe+fJC'])
                            })
                        }),
                    e.map((e) =>
                        (0, i.jsx)(
                            f,
                            {
                                guild: e,
                                isActivityRestricted: _(e.id),
                                onToggleActivityRestrictedGuild: x
                            },
                            e.id
                        )
                    )
                ]
            })
        ]
    });
};
