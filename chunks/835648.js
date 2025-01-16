r.d(n, {
    Z: function () {
        return O;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(91192),
    u = r(442837),
    c = r(481060),
    d = r(880949),
    f = r(806966),
    _ = r(254494),
    h = r(593618),
    p = r(594174),
    m = r(74538),
    g = r(697426),
    E = r(526617),
    v = r(474936),
    I = r(388032),
    T = r(843282);
let b = [8, 8, 8, 8],
    y = 40;
function S(e) {
    let { icon: n, isSelected: r, onClick: a, listItemProps: s, ...l } = e;
    return (0, i.jsx)(c.Clickable, {
        ...s,
        ...l,
        onClick: a,
        className: o()(T.categoryIcon, { [T.selected]: r }),
        children: (0, i.jsx)(n, {
            className: T.categoryIconIcon,
            color: 'currentColor'
        })
    });
}
function A(e, n, r, a, s, o) {
    switch (e.categoryInfo.type) {
        case g.bg.FAVORITES:
            return (0, i.jsx)(
                S,
                {
                    ...a,
                    icon: c.StarIcon,
                    onClick: n,
                    isSelected: r,
                    listItemProps: s
                },
                e.key
            );
        case g.bg.RECENTLY_HEARD:
            return (0, i.jsx)(
                S,
                {
                    ...a,
                    icon: c.ClockIcon,
                    onClick: n,
                    isSelected: r,
                    listItemProps: s
                },
                e.key
            );
        case g.bg.FREQUENTLY_USED:
            return (0, i.jsx)(
                S,
                {
                    ...a,
                    icon: c.AnalyticsIcon,
                    onClick: n,
                    isSelected: r,
                    listItemProps: s
                },
                e.key
            );
        case g.bg.GUILD:
            return (0, i.jsx)(
                c.Clickable,
                {
                    ...s,
                    ...a,
                    className: T.category,
                    onClick: n,
                    children: (0, i.jsx)(d.Z, {
                        guild: e.categoryInfo.guild,
                        isSelected: r,
                        isLocked: o
                    })
                },
                e.key
            );
        case g.bg.DEFAULTS:
            return (0, i.jsx)(
                S,
                {
                    ...a,
                    icon: c.ClydeIcon,
                    onClick: n,
                    isSelected: r,
                    listItemProps: s
                },
                e.key
            );
        default:
            return null;
    }
}
function N(e) {
    switch (e.categoryInfo.type) {
        case g.bg.FAVORITES:
            return I.intl.string(I.t.k8fFjo);
        case g.bg.RECENTLY_HEARD:
            return I.intl.string(I.t['8i/+SE']);
        case g.bg.FREQUENTLY_USED:
            return I.intl.string(I.t['+cGVV1']);
        case g.bg.GUILD:
            return (0, i.jsx)(h.K, {
                guild: e.categoryInfo.guild,
                includeActivity: !1
            });
        case g.bg.DEFAULTS:
            return I.intl.string(I.t.Rtvk9f);
    }
}
function C(e) {
    switch (e.categoryInfo.type) {
        case g.bg.FAVORITES:
            return I.intl.string(I.t.k8fFjo);
        case g.bg.RECENTLY_HEARD:
            return I.intl.string(I.t['8i/+SE']);
        case g.bg.FREQUENTLY_USED:
            return I.intl.string(I.t['+cGVV1']);
        case g.bg.GUILD:
            return e.categoryInfo.guild.name;
        case g.bg.DEFAULTS:
            return I.intl.string(I.t.Rtvk9f);
    }
}
function R(e) {
    let { category: n, categoryIndex: r, onClick: a, isSelected: s, isNitroLocked: o } = e,
        u = (0, l.JA)('soundboard_guild_'.concat(r));
    return (0, i.jsx)(c.Tooltip, {
        text: N(n),
        'aria-label': C(n),
        position: 'right',
        children: (e) => A(n, a, s, e, u, o)
    });
}
function O(e) {
    let { soundboardListRef: n, categories: r, shouldUpsellLockedCategories: s, listPadding: o = b, guildId: l, inExpressionPicker: c } = e,
        d = a.useRef(null),
        h = (0, u.e7)([p.default], () => p.default.getCurrentUser()),
        g = (0, m.I5)(h, v.p9.TIER_2),
        I = a.useCallback(
            (e, n, r, a) => {
                let o = s && (0, E.O)(e.categoryInfo, g, l);
                return (0, i.jsx)(R, {
                    category: e,
                    categoryIndex: n,
                    onClick: r,
                    isSelected: a,
                    isNitroLocked: o
                });
            },
            [l, s, g]
        );
    return (0, i.jsx)(_.Z, {
        className: c ? T.expressionPickerCategoryList : T.categoryList,
        categoryListRef: d,
        expressionsListRef: n,
        store: f.Wq,
        categories: r,
        listPadding: o,
        renderCategoryListItem: I,
        rowCount: r.length,
        categoryHeight: y
    });
}
