n.d(t, { Z: () => g });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(199849),
    s = n(481060),
    l = n(650774),
    c = n(626135),
    u = n(797670),
    d = n(304432),
    f = n(981631),
    p = n(779334),
    _ = n(388032),
    m = n(378976);
function h(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i } = e,
        o = (0, a.e7)([l.Z], () => l.Z.getMemberCount(t.id));
    return (0, r.jsxs)(s.Kqy, {
        as: "li",
        direction: "horizontal",
        align: "center",
        gap: 20,
        children: [
            (0, r.jsx)(u.V, {
                guild: t,
                size: 48,
            }),
            (0, r.jsx)(s.rsf, {
                label: t.name,
                description: _.intl.format(_.t.zRl6XR, { count: null != o ? o : 0 }),
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
let g = function () {
    let {
            guilds: e,
            searchQuery: t,
            setSearchQuery: n,
            sortOrder: a,
            setSortOrder: l,
            hasActivityRestrictedGuilds: u,
            onToggleAllActivityRestrictedGuilds: g,
            onToggleActivityRestrictedGuild: E,
            isActivityRestricted: b,
            numActivityRestrictedGuilds: y,
            numTotalGuilds: O,
        } = (0, d.F)(),
        v = () => {
            c.default.track(f.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                interaction: "search_cleared",
                sort_order: a,
                activity_restricted_guild_count: y,
                total_guild_count: O,
            }),
                n("");
        },
        S = (0, i.useId)();
    return (0, r.jsxs)("div", {
        className: m.wrapper,
        children: [
            (0, r.jsxs)("div", {
                className: m.headerContainer,
                children: [
                    (0, r.jsx)(s.E1j, {
                        query: t,
                        onChange: n,
                        onClear: v,
                        onFocus: () =>
                            c.default.track(f.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_focused",
                                sort_order: a,
                                activity_restricted_guild_count: y,
                                total_guild_count: O,
                            }),
                        onBlur: () =>
                            c.default.track(f.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                interaction: "search_blurred",
                                sort_order: a,
                                activity_restricted_guild_count: y,
                                total_guild_count: O,
                            }),
                        placeholder: _.intl.string(_.t["H+nRYw"]),
                        "aria-label": _.intl.string(_.t["5h0QOP"]),
                        inputProps: {
                            "aria-controls": S,
                            "aria-expanded": !0,
                        },
                    }),
                    e.length > 0 &&
                        (0, r.jsxs)("div", {
                            className: m.controlsContainer,
                            children: [
                                (0, r.jsx)(o.B6, {
                                    className: m.select,
                                    variant: "text-only",
                                    options: [
                                        {
                                            label: _.intl.string(_.t.STMPJ2),
                                            value: d.W.SERVER_ORDER,
                                        },
                                        {
                                            label: _.intl.string(_.t.CbaapP),
                                            value: d.W.RECENTLY_JOINED,
                                        },
                                        {
                                            label: _.intl.string(p.default.ZI51JZ),
                                            value: d.W.ACTIVITY_SHARING_ON,
                                        },
                                        {
                                            label: _.intl.string(p.default["+kxafn"]),
                                            value: d.W.ACTIVITY_SHARING_OFF,
                                        },
                                    ],
                                    select: (e) => {
                                        c.default.track(f.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                            interaction: "sort_order_changed",
                                            sort_order: e,
                                            activity_restricted_guild_count: y,
                                            total_guild_count: O,
                                        }),
                                            l(e);
                                    },
                                    isSelected: (e) => a === e,
                                    serialize: String,
                                }),
                                (0, r.jsx)(s.Avr, {
                                    variant: "primary",
                                    onClick: g,
                                    text: u ? _.intl.string(_.t["7lxcLO"]) : _.intl.string(_.t.zh6UEs),
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(s.nn4, {
                "aria-live": "polite",
                role: "region",
                children: _.intl.format(p.default.EvzDff, { count: e.length }),
            }),
            (0, r.jsxs)("ul", {
                className: m.guildsList,
                id: S,
                "aria-label": _.intl.string(_.t["7hB4kg"]),
                children: [
                    0 === e.length &&
                        (0, r.jsx)("div", {
                            className: m.noResultsContainer,
                            children: (0, r.jsx)(s.Text, {
                                className: m.noResultsText,
                                variant: "text-lg/medium",
                                children: _.intl.string(_.t["Xe+fJM"]),
                            }),
                        }),
                    e.map((e) =>
                        (0, r.jsx)(
                            h,
                            {
                                guild: e,
                                isActivityRestricted: b(e.id),
                                onToggleActivityRestrictedGuild: E,
                            },
                            e.id,
                        ),
                    ),
                ],
            }),
        ],
    });
};
