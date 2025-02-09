n.d(t, { Z: () => R });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(91192),
    l = n(442837),
    u = n(481060),
    c = n(880949),
    d = n(806966),
    f = n(254494),
    _ = n(593618),
    p = n(594174),
    h = n(74538),
    m = n(697426),
    g = n(526617),
    E = n(474936),
    v = n(388032),
    y = n(38554);
let I = [8, 8, 8, 8],
    T = 40;
function b(e) {
    let { icon: t, isSelected: n, onClick: r, listItemProps: a, ...o } = e;
    return (0, i.jsx)(u.P3F, {
        ...a,
        ...o,
        onClick: r,
        className: s()(y.categoryIcon, { [y.selected]: n }),
        children: (0, i.jsx)(t, {
            className: y.categoryIconIcon,
            color: 'currentColor'
        })
    });
}
function S(e, t, n, r, a, s) {
    switch (e.categoryInfo.type) {
        case m.bg.FAVORITES:
            return (0, i.jsx)(
                b,
                {
                    ...r,
                    icon: u.r7p,
                    onClick: t,
                    isSelected: n,
                    listItemProps: a
                },
                e.key
            );
        case m.bg.RECENTLY_HEARD:
            return (0, i.jsx)(
                b,
                {
                    ...r,
                    icon: u.T39,
                    onClick: t,
                    isSelected: n,
                    listItemProps: a
                },
                e.key
            );
        case m.bg.FREQUENTLY_USED:
            return (0, i.jsx)(
                b,
                {
                    ...r,
                    icon: u.IeX,
                    onClick: t,
                    isSelected: n,
                    listItemProps: a
                },
                e.key
            );
        case m.bg.GUILD:
            return (0, i.jsx)(
                u.P3F,
                {
                    ...a,
                    ...r,
                    className: y.category,
                    onClick: t,
                    children: (0, i.jsx)(c.Z, {
                        guild: e.categoryInfo.guild,
                        isSelected: n,
                        isLocked: s
                    })
                },
                e.key
            );
        case m.bg.DEFAULTS:
            return (0, i.jsx)(
                b,
                {
                    ...r,
                    icon: u.gw7,
                    onClick: t,
                    isSelected: n,
                    listItemProps: a
                },
                e.key
            );
        default:
            return null;
    }
}
function A(e) {
    switch (e.categoryInfo.type) {
        case m.bg.FAVORITES:
            return v.intl.string(v.t.k8fFjo);
        case m.bg.RECENTLY_HEARD:
            return v.intl.string(v.t['8i/+SE']);
        case m.bg.FREQUENTLY_USED:
            return v.intl.string(v.t['+cGVV1']);
        case m.bg.GUILD:
            return (0, i.jsx)(_.K, {
                guild: e.categoryInfo.guild,
                includeActivity: !1
            });
        case m.bg.DEFAULTS:
            return v.intl.string(v.t.Rtvk9f);
    }
}
function N(e) {
    switch (e.categoryInfo.type) {
        case m.bg.FAVORITES:
            return v.intl.string(v.t.k8fFjo);
        case m.bg.RECENTLY_HEARD:
            return v.intl.string(v.t['8i/+SE']);
        case m.bg.FREQUENTLY_USED:
            return v.intl.string(v.t['+cGVV1']);
        case m.bg.GUILD:
            return e.categoryInfo.guild.name;
        case m.bg.DEFAULTS:
            return v.intl.string(v.t.Rtvk9f);
    }
}
function C(e) {
    let { category: t, categoryIndex: n, onClick: r, isSelected: a, isNitroLocked: s } = e,
        l = (0, o.JA)('soundboard_guild_'.concat(n));
    return (0, i.jsx)(u.ua7, {
        text: A(t),
        'aria-label': N(t),
        position: 'right',
        children: (e) => S(t, r, a, e, l, s)
    });
}
function R(e) {
    let { soundboardListRef: t, categories: n, shouldUpsellLockedCategories: a, listPadding: s = I, guildId: o, inExpressionPicker: u } = e,
        c = r.useRef(null),
        _ = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        m = (0, h.I5)(_, E.p9.TIER_2),
        v = r.useCallback(
            (e, t, n, r) => {
                let s = a && (0, g.O)(e.categoryInfo, m, o);
                return (0, i.jsx)(C, {
                    category: e,
                    categoryIndex: t,
                    onClick: n,
                    isSelected: r,
                    isNitroLocked: s
                });
            },
            [o, a, m]
        );
    return (0, i.jsx)(f.Z, {
        className: u ? y.expressionPickerCategoryList : y.categoryList,
        categoryListRef: c,
        expressionsListRef: t,
        store: d.Wq,
        categories: n,
        listPadding: s,
        renderCategoryListItem: v,
        rowCount: n.length,
        categoryHeight: T
    });
}
