n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(650774),
    l = n(626135),
    c = n(797670),
    u = n(304432),
    d = n(981631),
    f = n(418924),
    p = n(388032),
    _ = n(964385);
function h(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i } = e,
        l = (0, a.e7)([s.Z], () => s.Z.getMemberCount(t.id));
    return (0, r.jsxs)(o.Kqy, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 20,
        children: [
            (0, r.jsx)(c.V, {
                guild: t,
                size: 48,
            }),
            (0, r.jsx)(o.rsf, {
                label: t.name,
                description: p.intl.format(p.t.zRl6XR, { count: null != l ? l : 0 }),
                checked: !n,
                onChange: (e) =>
                    i({
                        checked: e,
                        guildId: t.id,
                    }),
            }),
        ],
    });
}
let m = function () {
    let {
            guilds: e,
            searchQuery: t,
            setSearchQuery: n,
            sortOrder: a,
            setSortOrder: s,
            hasActivityRestrictedGuilds: c,
            onToggleAllActivityRestrictedGuilds: m,
            onToggleActivityRestrictedGuild: g,
            isActivityRestricted: E,
            numActivityRestrictedGuilds: b,
            numTotalGuilds: y,
        } = (0, u.F)(),
        O = () => {
            l.default.track(d.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                interaction: "search_cleared",
                sort_order: a,
                activity_restricted_guild_count: b,
                total_guild_count: y,
            }),
                n("");
        },
        v = (0, i.useId)();
    return (0, r.jsxs)("div", {
        className: _.wrapper,
        children: [
            (0, r.jsxs)("div", {
                className: _.headerContainer,
                children: [
                    (0, r.jsx)(o.E1j, {
                        query: t,
                        onChange: n,
                        onClear: O,
                        onFocus: () =>
                            l.default.track(d.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: a,
                                activity_restricted_guild_count: b,
                                total_guild_count: y,
                            }),
                        onBlur: () =>
                            l.default.track(d.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: a,
                                activity_restricted_guild_count: b,
                                total_guild_count: y,
                            }),
                        placeholder: p.intl.string(p.t["H+nRYw"]),
                        "aria-label": p.intl.string(p.t["5h0QOP"]),
                        inputProps: {
                            "aria-controls": v,
                            "aria-expanded": !0,
                        },
                    }),
                    e.length > 0 &&
                        (0, r.jsxs)("div", {
                            className: _.controlsContainer,
                            children: [
                                (0, r.jsx)(o.PhF, {
                                    label: p.intl.string(p.t.LxVjvJ),
                                    hideLabel: !0,
                                    options: [
                                        {
                                            id: u.W.SERVER_ORDER,
                                            label: p.intl.string(p.t.STMPJ2),
                                            value: u.W.SERVER_ORDER,
                                        },
                                        {
                                            id: u.W.RECENTLY_JOINED,
                                            label: p.intl.string(p.t.CbaapP),
                                            value: u.W.RECENTLY_JOINED,
                                        },
                                        {
                                            id: u.W.ACTIVITY_SHARING_ON,
                                            label: p.intl.string(f.default.ZI51JZ),
                                            value: u.W.ACTIVITY_SHARING_ON,
                                        },
                                        {
                                            id: u.W.ACTIVITY_SHARING_OFF,
                                            label: p.intl.string(f.default["+kxafn"]),
                                            value: u.W.ACTIVITY_SHARING_OFF,
                                        },
                                    ],
                                    onSelectionChange: (e) => {
                                        l.default.track(d.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                            interaction: "sort_order_changed",
                                            sort_order: e,
                                            activity_restricted_guild_count: b,
                                            total_guild_count: y,
                                        }),
                                            s(e);
                                    },
                                    value: a,
                                    selectionMode: "single",
                                }),
                                (0, r.jsx)(o.Avr, {
                                    variant: "primary",
                                    onClick: m,
                                    text: c ? p.intl.string(p.t["7lxcLO"]) : p.intl.string(p.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(o.nn4, {
                "aria-live": "polite",
                role: "region",
                children: p.intl.format(f.default.EvzDff, { count: e.length }),
            }),
            (0, r.jsxs)("ul", {
                className: _.guildsList,
                id: v,
                "aria-label": p.intl.string(p.t["7hB4kg"]),
                children: [
                    0 === e.length &&
                        (0, r.jsx)("div", {
                            className: _.noResultsContainer,
                            children: (0, r.jsx)(o.Text, {
                                className: _.noResultsText,
                                variant: "text-lg/medium",
                                children: p.intl.string(p.t["Xe+fJM"]),
                            }),
                        }),
                    e.map((e) =>
                        (0, r.jsx)(
                            h,
                            {
                                guild: e,
                                isActivityRestricted: E(e.id),
                                onToggleActivityRestrictedGuild: g,
                            },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
