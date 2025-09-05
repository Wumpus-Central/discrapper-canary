n.d(t, { Z: () => m });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(650774),
    l = n(626135),
    c = n(797670),
    u = n(304432),
    d = n(981631),
    f = n(893867),
    _ = n(388032),
    p = n(62023);
function h(e) {
    let { guild: t, isActivityRestricted: n, onToggleActivityRestrictedGuild: i } = e,
        l = (0, a.e7)([s.Z], () => s.Z.getMemberCount(t.id));
    return (0, r.jsx)("li", {
        children: (0, r.jsx)(o.j7V, {
            className: p.guildRowWrapper,
            value: !n,
            onChange: (e) =>
                i({
                    checked: e,
                    guildId: t.id,
                }),
            hideBorder: !0,
            children: (0, r.jsxs)("div", {
                className: p.guildRow,
                children: [
                    (0, r.jsx)("div", {
                        children: (0, r.jsx)(c.V, {
                            guild: t,
                            size: 48,
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: p.guildRowTextContainer,
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: "text-md/medium",
                                lineClamp: 1,
                                color: "text-default",
                                children: t.name,
                            }),
                            (0, r.jsxs)("div", {
                                className: p.memberDetailsContainer,
                                children: [
                                    (0, r.jsx)("div", { className: p.memberCountDot }),
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-secondary",
                                        children: _.intl.format(_.t.zRl6XV, { count: l }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        }),
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
        className: p.wrapper,
        children: [
            (0, r.jsxs)("div", {
                className: p.headerContainer,
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
                        placeholder: _.intl.string(_.t["H+nRY2"]),
                        "aria-label": _.intl.string(_.t["5h0QOD"]),
                        inputProps: {
                            "aria-controls": v,
                            "aria-expanded": !0,
                        },
                    }),
                    e.length > 0 &&
                        (0, r.jsxs)("div", {
                            className: p.controlsContainer,
                            children: [
                                (0, r.jsx)(o.PhF, {
                                    variant: "text-only",
                                    popoutWidth: "auto",
                                    options: [
                                        {
                                            label: _.intl.string(_.t.STMPJy),
                                            value: u.W.SERVER_ORDER,
                                        },
                                        {
                                            label: _.intl.string(_.t.CbaapK),
                                            value: u.W.RECENTLY_JOINED,
                                        },
                                        {
                                            label: _.intl.string(f.default.ZI51JS),
                                            value: u.W.ACTIVITY_SHARING_ON,
                                        },
                                        {
                                            label: _.intl.string(f.default["+kxafn"]),
                                            value: u.W.ACTIVITY_SHARING_OFF,
                                        },
                                    ],
                                    select: (e) => {
                                        l.default.track(d.rMx.ACTIVITY_SHARING_SETTINGS_INTERACTED, {
                                            interaction: "sort_order_changed",
                                            sort_order: e,
                                            activity_restricted_guild_count: b,
                                            total_guild_count: y,
                                        }),
                                            s(e);
                                    },
                                    isSelected: (e) => a === e,
                                    serialize: String,
                                }),
                                (0, r.jsx)(o.Avr, {
                                    variant: "primary",
                                    onClick: m,
                                    text: c ? _.intl.string(_.t["7lxcLC"]) : _.intl.string(_.t.zh6UEh),
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(o.nn4, {
                "aria-live": "polite",
                role: "region",
                children: _.intl.format(f.default.EvzDfX, { count: e.length }),
            }),
            (0, r.jsxs)("ul", {
                className: p.guildsList,
                id: v,
                "aria-label": _.intl.string(_.t["7hB4kp"]),
                children: [
                    0 === e.length &&
                        (0, r.jsx)("div", {
                            className: p.noResultsContainer,
                            children: (0, r.jsx)(o.Text, {
                                className: p.noResultsText,
                                variant: "text-lg/medium",
                                children: _.intl.string(_.t["Xe+fJC"]),
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
