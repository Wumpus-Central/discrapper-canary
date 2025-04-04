n.d(t, { Z: () => x });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(91192),
    l = n(442837),
    c = n(481060),
    u = n(880949),
    d = n(806966),
    f = n(254494),
    _ = n(593618),
    p = n(594174),
    h = n(74538),
    m = n(697426),
    g = n(526617),
    E = n(474936),
    b = n(388032),
    y = n(865006);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = N(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let A = [8, 8, 8, 8],
    C = 40;
function R(e) {
    var { icon: t, isSelected: n, onClick: i, listItemProps: o } = e,
        s = T(e, ['icon', 'isSelected', 'onClick', 'listItemProps']);
    return (0, r.jsx)(
        c.P3F,
        S(O({}, o, s), {
            onClick: i,
            className: a()(y.categoryIcon, { [y.selected]: n }),
            children: (0, r.jsx)(t, {
                className: y.categoryIconIcon,
                color: 'currentColor'
            })
        })
    );
}
function P(e, t, n, i, o, a) {
    switch (e.categoryInfo.type) {
        case m.bg.FAVORITES:
            return (0, r.jsx)(
                R,
                S(O({}, i), {
                    icon: c.r7p,
                    onClick: t,
                    isSelected: n,
                    listItemProps: o
                }),
                e.key
            );
        case m.bg.RECENTLY_HEARD:
            return (0, r.jsx)(
                R,
                S(O({}, i), {
                    icon: c.T39,
                    onClick: t,
                    isSelected: n,
                    listItemProps: o
                }),
                e.key
            );
        case m.bg.FREQUENTLY_USED:
            return (0, r.jsx)(
                R,
                S(O({}, i), {
                    icon: c.IeX,
                    onClick: t,
                    isSelected: n,
                    listItemProps: o
                }),
                e.key
            );
        case m.bg.GUILD:
            return (0, r.jsx)(
                c.P3F,
                S(O({}, o, i), {
                    className: y.category,
                    onClick: t,
                    children: (0, r.jsx)(u.Z, {
                        guild: e.categoryInfo.guild,
                        isSelected: n,
                        isLocked: a
                    })
                }),
                e.key
            );
        case m.bg.DEFAULTS:
            return (0, r.jsx)(
                R,
                S(O({}, i), {
                    icon: c.gw7,
                    onClick: t,
                    isSelected: n,
                    listItemProps: o
                }),
                e.key
            );
        default:
            return null;
    }
}
function w(e) {
    switch (e.categoryInfo.type) {
        case m.bg.FAVORITES:
            return b.NW.string(b.t.k8fFjo);
        case m.bg.RECENTLY_HEARD:
            return b.NW.string(b.t['8i/+SE']);
        case m.bg.FREQUENTLY_USED:
            return b.NW.string(b.t['+cGVV1']);
        case m.bg.GUILD:
            return (0, r.jsx)(_.K, {
                guild: e.categoryInfo.guild,
                includeActivity: !1
            });
        case m.bg.DEFAULTS:
            return b.NW.string(b.t.Rtvk9f);
    }
}
function D(e) {
    switch (e.categoryInfo.type) {
        case m.bg.FAVORITES:
            return b.NW.string(b.t.k8fFjo);
        case m.bg.RECENTLY_HEARD:
            return b.NW.string(b.t['8i/+SE']);
        case m.bg.FREQUENTLY_USED:
            return b.NW.string(b.t['+cGVV1']);
        case m.bg.GUILD:
            return e.categoryInfo.guild.name;
        case m.bg.DEFAULTS:
            return b.NW.string(b.t.Rtvk9f);
    }
}
function L(e) {
    let { category: t, categoryIndex: n, onClick: i, isSelected: o, isNitroLocked: a } = e,
        l = (0, s.JA)('soundboard_guild_'.concat(n));
    return (0, r.jsx)(c.ua7, {
        text: w(t),
        'aria-label': D(t),
        position: 'right',
        children: (e) => P(t, i, o, e, l, a)
    });
}
function x(e) {
    let { soundboardListRef: t, categories: n, shouldUpsellLockedCategories: o, listPadding: a = A, guildId: s, inExpressionPicker: c } = e,
        u = i.useRef(null),
        _ = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        m = (0, h.I5)(_, E.p9.TIER_2),
        b = i.useCallback(
            (e, t, n, i) => {
                let a = o && (0, g.O)(e.categoryInfo, m, s);
                return (0, r.jsx)(L, {
                    category: e,
                    categoryIndex: t,
                    onClick: n,
                    isSelected: i,
                    isNitroLocked: a
                });
            },
            [s, o, m]
        );
    return (0, r.jsx)(f.Z, {
        className: c ? y.expressionPickerCategoryList : y.categoryList,
        categoryListRef: u,
        expressionsListRef: t,
        store: d.Wq,
        categories: n,
        listPadding: a,
        renderCategoryListItem: b,
        rowCount: n.length,
        categoryHeight: C
    });
}
