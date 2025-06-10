n.d(t, { Z: () => g });
var i = n(255367),
    r = n(442837),
    s = n(481060),
    l = n(650774),
    a = n(797670),
    o = n(304432),
    c = n(29953),
    d = n(388032),
    u = n(236022);
function m(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: o } = e,
        c = (0, r.e7)([l.Z], () => l.Z.getMemberCount(t.id));
    return (0, i.jsx)(s.j7V, {
        className: u.guildRowWrapper,
        value: !n,
        onChange: (e) =>
            o({
                checked: e,
                guildId: t.id
            }),
        hideBorder: !0,
        children: (0, i.jsxs)('div', {
            className: u.guildRow,
            children: [
                (0, i.jsx)('div', {
                    children: (0, i.jsx)(a.V, {
                        guild: t,
                        size: 48
                    })
                }),
                (0, i.jsxs)('div', {
                    className: u.guildRowTextContainer,
                    children: [
                        (0, i.jsx)(s.Text, {
                            variant: 'text-md/medium',
                            lineClamp: 1,
                            color: 'text-normal',
                            children: t.toString()
                        }),
                        (0, i.jsxs)('div', {
                            className: u.memberDetailsContainer,
                            children: [
                                (0, i.jsx)('div', { className: u.memberCountDot }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-secondary',
                                    children: d.intl.format(d.t.zRl6XV, { count: c })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
let g = function () {
    let { guilds: e, searchQuery: t, setSearchQuery: n, sortOrder: r, setSortOrder: l, hasActivityRestrictedGuilds: a, onToggleAllActivityRestrictedGuilds: g, onToggleActivityRestrictedGuild: p, isActivityRestricted: h } = (0, o.F)();
    return (0, i.jsxs)('div', {
        className: u.wrapper,
        children: [
            (0, i.jsxs)('div', {
                className: u.headerContainer,
                children: [
                    (0, i.jsx)(s.E1j, {
                        size: s.E1j.Sizes.MEDIUM,
                        query: t,
                        onChange: n,
                        onClear: () => n(''),
                        placeholder: d.intl.string(d.t['H+nRY2']),
                        'aria-label': d.intl.string(d.t['5h0QOD'])
                    }),
                    e.length > 0 &&
                        (0, i.jsxs)('div', {
                            className: u.controlsContainer,
                            children: [
                                (0, i.jsx)(s.PhF, {
                                    className: u.sortOrderSelect,
                                    look: s.qQH.CUSTOM,
                                    popoutWidth: 'auto',
                                    options: [
                                        {
                                            label: d.intl.string(d.t.STMPJy),
                                            value: o.W.SERVER_ORDER
                                        },
                                        {
                                            label: d.intl.string(d.t.CbaapK),
                                            value: o.W.RECENTLY_JOINED
                                        },
                                        {
                                            label: d.intl.string(c.default.ZI51JS),
                                            value: o.W.ACTIVITY_SHARING_ON
                                        },
                                        {
                                            label: d.intl.string(c.default['+kxafn']),
                                            value: o.W.ACTIVITY_SHARING_OFF
                                        }
                                    ],
                                    select: l,
                                    isSelected: (e) => r === e,
                                    serialize: String
                                }),
                                (0, i.jsx)(s.zxk, {
                                    className: u.toggleAllButton,
                                    look: s.zxk.Looks.LINK,
                                    color: s.zxk.Colors.LINK,
                                    onClick: g,
                                    children: a ? d.intl.string(d.t['7lxcLC']) : d.intl.string(d.t.zh6UEh)
                                })
                            ]
                        })
                ]
            }),
            0 === e.length &&
                (0, i.jsx)('div', {
                    className: u.noResultsContainer,
                    children: (0, i.jsx)(s.Text, {
                        className: u.noResultsText,
                        variant: 'text-lg/medium',
                        children: d.intl.string(d.t['Xe+fJC'])
                    })
                }),
            e.map((e) =>
                (0, i.jsx)(
                    m,
                    {
                        guild: e,
                        isActivityRestricted: h(e.id),
                        onToggleActivityRestrictedGuild: p
                    },
                    e.id
                )
            )
        ]
    });
};
