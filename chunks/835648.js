r.d(n, {
    Z: function () {
        return O;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(91192),
    u = r(442837),
    c = r(481060),
    d = r(880949),
    f = r(806966),
    p = r(254494),
    h = r(593618),
    _ = r(594174),
    m = r(74538),
    g = r(697426),
    E = r(526617),
    v = r(474936),
    y = r(388032),
    b = r(843282);
let I = [8, 8, 8, 8],
    T = 40;
function S(e) {
    let { icon: n, isSelected: r, onClick: a, listItemProps: o, ...l } = e;
    return (0, i.jsx)(c.Clickable, {
        ...o,
        ...l,
        onClick: a,
        className: s()(b.categoryIcon, { [b.selected]: r }),
        children: (0, i.jsx)(n, {
            className: b.categoryIconIcon,
            color: 'currentColor'
        })
    });
}
function A(e, n, r, a, o, s) {
    switch (e.categoryInfo.type) {
        case g.bg.FAVORITES:
            return (0, i.jsx)(
                S,
                {
                    ...a,
                    icon: c.StarIcon,
                    onClick: n,
                    isSelected: r,
                    listItemProps: o
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
                    listItemProps: o
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
                    listItemProps: o
                },
                e.key
            );
        case g.bg.GUILD:
            return (0, i.jsx)(
                c.Clickable,
                {
                    ...o,
                    ...a,
                    className: b.category,
                    onClick: n,
                    children: (0, i.jsx)(d.Z, {
                        guild: e.categoryInfo.guild,
                        isSelected: r,
                        isLocked: s
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
                    listItemProps: o
                },
                e.key
            );
        default:
            return null;
    }
}
function C(e) {
    switch (e.categoryInfo.type) {
        case g.bg.FAVORITES:
            return y.intl.string(y.t.k8fFjo);
        case g.bg.RECENTLY_HEARD:
            return y.intl.string(y.t['8i/+SE']);
        case g.bg.FREQUENTLY_USED:
            return y.intl.string(y.t['+cGVV1']);
        case g.bg.GUILD:
            return (0, i.jsx)(h.K, {
                guild: e.categoryInfo.guild,
                includeActivity: !1
            });
        case g.bg.DEFAULTS:
            return y.intl.string(y.t.Rtvk9f);
    }
}
function N(e) {
    switch (e.categoryInfo.type) {
        case g.bg.FAVORITES:
            return y.intl.string(y.t.k8fFjo);
        case g.bg.RECENTLY_HEARD:
            return y.intl.string(y.t['8i/+SE']);
        case g.bg.FREQUENTLY_USED:
            return y.intl.string(y.t['+cGVV1']);
        case g.bg.GUILD:
            return e.categoryInfo.guild.name;
        case g.bg.DEFAULTS:
            return y.intl.string(y.t.Rtvk9f);
    }
}
function R(e) {
    let { category: n, categoryIndex: r, onClick: a, isSelected: o, isNitroLocked: s } = e,
        u = (0, l.JA)('soundboard_guild_'.concat(r));
    return (0, i.jsx)(c.Tooltip, {
        text: C(n),
        'aria-label': N(n),
        position: 'right',
        children: (e) => A(n, a, o, e, u, s)
    });
}
function O(e) {
    let { soundboardListRef: n, categories: r, shouldUpsellLockedCategories: o, listPadding: s = I, guildId: l, inExpressionPicker: c } = e,
        d = a.useRef(null),
        h = (0, u.e7)([_.default], () => _.default.getCurrentUser()),
        g = (0, m.I5)(h, v.p9.TIER_2),
        y = a.useCallback(
            (e, n, r, a) => {
                let s = o && (0, E.O)(e.categoryInfo, g, l);
                return (0, i.jsx)(R, {
                    category: e,
                    categoryIndex: n,
                    onClick: r,
                    isSelected: a,
                    isNitroLocked: s
                });
            },
            [l, o, g]
        );
    return (0, i.jsx)(p.Z, {
        className: c ? b.expressionPickerCategoryList : b.categoryList,
        categoryListRef: d,
        expressionsListRef: n,
        store: f.Wq,
        categories: r,
        listPadding: s,
        renderCategoryListItem: y,
        rowCount: r.length,
        categoryHeight: T
    });
}
