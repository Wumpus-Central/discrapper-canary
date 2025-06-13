n.d(t, { Z: () => h });
var i = n(255367),
    r = n(442837),
    s = n(481060),
    l = n(650774),
    a = n(626135),
    o = n(797670),
    c = n(304432),
    d = n(981631),
    u = n(29953),
    m = n(388032),
    g = n(236022);
function p(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: a } = e,
        c = (0, r.e7)([l.Z], () => l.Z.getMemberCount(t.id));
    return (0, i.jsx)(s.j7V, {
        className: g.guildRowWrapper,
        value: !n,
        onChange: (e) =>
            a({
                checked: e,
                guildId: t.id
            }),
        hideBorder: !0,
        children: (0, i.jsxs)('div', {
            className: g.guildRow,
            children: [
                (0, i.jsx)('div', {
                    children: (0, i.jsx)(o.V, {
                        guild: t,
                        size: 48
                    })
                }),
                (0, i.jsxs)('div', {
                    className: g.guildRowTextContainer,
                    children: [
                        (0, i.jsx)(s.Text, {
                            variant: 'text-md/medium',
                            lineClamp: 1,
                            color: 'text-normal',
                            children: t.toString()
                        }),
                        (0, i.jsxs)('div', {
                            className: g.memberDetailsContainer,
                            children: [
                                (0, i.jsx)('div', { className: g.memberCountDot }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-secondary',
                                    children: m.intl.format(m.t.zRl6XV, { count: c })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
let h = function () {
    let { guilds: e, searchQuery: t, setSearchQuery: n, sortOrder: r, setSortOrder: l, hasActivityRestrictedGuilds: o, onToggleAllActivityRestrictedGuilds: h, onToggleActivityRestrictedGuild: f, isActivityRestricted: b, numActivityRestrictedGuilds: _, numTotalGuilds: x } = (0, c.F)();
    return (0, i.jsxs)('div', {
        className: g.wrapper,
        children: [
            (0, i.jsxs)('div', {
                className: g.headerContainer,
                children: [
                    (0, i.jsx)(s.E1j, {
                        size: s.E1j.Sizes.MEDIUM,
                        query: t,
                        onChange: n,
                        onClear: () => {
                            a.default.track(d.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: 'search_cleared',
                                sort_order: r,
                                activity_restricted_guild_count: _,
                                total_guild_count: x
                            }),
                                n('');
                        },
                        onFocus: () =>
                            a.default.track(d.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: 'search_focused',
                                sort_order: r,
                                activity_restricted_guild_count: _,
                                total_guild_count: x
                            }),
                        onBlur: () =>
                            a.default.track(d.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: 'search_blurred',
                                sort_order: r,
                                activity_restricted_guild_count: _,
                                total_guild_count: x
                            }),
                        placeholder: m.intl.string(m.t['H+nRY2']),
                        'aria-label': m.intl.string(m.t['5h0QOD'])
                    }),
                    e.length > 0 &&
                        (0, i.jsxs)('div', {
                            className: g.controlsContainer,
                            children: [
                                (0, i.jsx)(s.PhF, {
                                    className: g.sortOrderSelect,
                                    look: s.qQH.CUSTOM,
                                    popoutWidth: 'auto',
                                    options: [
                                        {
                                            label: m.intl.string(m.t.STMPJy),
                                            value: c.W.SERVER_ORDER
                                        },
                                        {
                                            label: m.intl.string(m.t.CbaapK),
                                            value: c.W.RECENTLY_JOINED
                                        },
                                        {
                                            label: m.intl.string(u.default.ZI51JS),
                                            value: c.W.ACTIVITY_SHARING_ON
                                        },
                                        {
                                            label: m.intl.string(u.default['+kxafn']),
                                            value: c.W.ACTIVITY_SHARING_OFF
                                        }
                                    ],
                                    select: (e) => {
                                        a.default.track(d.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                            interaction: 'sort_order_changed',
                                            sort_order: e,
                                            activity_restricted_guild_count: _,
                                            total_guild_count: x
                                        }),
                                            l(e);
                                    },
                                    isSelected: (e) => r === e,
                                    serialize: String
                                }),
                                (0, i.jsx)(s.zxk, {
                                    className: g.toggleAllButton,
                                    look: s.zxk.Looks.LINK,
                                    color: s.zxk.Colors.LINK,
                                    onClick: h,
                                    children: o ? m.intl.string(m.t['7lxcLC']) : m.intl.string(m.t.zh6UEh)
                                })
                            ]
                        })
                ]
            }),
            0 === e.length &&
                (0, i.jsx)('div', {
                    className: g.noResultsContainer,
                    children: (0, i.jsx)(s.Text, {
                        className: g.noResultsText,
                        variant: 'text-lg/medium',
                        children: m.intl.string(m.t['Xe+fJC'])
                    })
                }),
            e.map((e) =>
                (0, i.jsx)(
                    p,
                    {
                        guild: e,
                        isActivityRestricted: b(e.id),
                        onToggleActivityRestrictedGuild: f
                    },
                    e.id
                )
            )
        ]
    });
};
