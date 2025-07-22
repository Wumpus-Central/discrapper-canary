n.d(t, { Z: () => j });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(91192),
    l = n(442837),
    c = n(481060),
    u = n(880949),
    d = n(806966),
    f = n(254494),
    _ = n(593618),
    p = n(594174),
    h = n(626135),
    m = n(74538),
    g = n(697426),
    E = n(526617),
    b = n(981631),
    y = n(957825),
    O = n(474936),
    v = n(388032),
    I = n(865006);
function T(e, t, n) {
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
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            }));
    }
    return e;
}
function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = R(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let P = [8, 8, 8, 8],
    w = 40;
function D(e) {
    var { icon: t, isSelected: n, onClick: i, listItemProps: a } = e,
        s = C(e, ['icon', 'isSelected', 'onClick', 'listItemProps']);
    return (0, r.jsx)(
        c.P3F,
        N(S({}, a, s), {
            onClick: i,
            className: o()(I.categoryIcon, { [I.selected]: n }),
            children: (0, r.jsx)(t, {
                className: I.categoryIconIcon,
                color: 'currentColor'
            })
        })
    );
}
function L(e, t, n, i, a, o) {
    switch (e.categoryInfo.type) {
        case g.bg.FAVORITES:
            return (0, r.jsx)(
                D,
                N(S({}, i), {
                    icon: c.r7p,
                    onClick: t,
                    isSelected: n,
                    listItemProps: a
                }),
                e.key
            );
        case g.bg.RECENTLY_HEARD:
            return (0, r.jsx)(
                D,
                N(S({}, i), {
                    icon: c.T39,
                    onClick: t,
                    isSelected: n,
                    listItemProps: a
                }),
                e.key
            );
        case g.bg.FREQUENTLY_USED:
            return (0, r.jsx)(
                D,
                N(S({}, i), {
                    icon: c.IeX,
                    onClick: t,
                    isSelected: n,
                    listItemProps: a
                }),
                e.key
            );
        case g.bg.GUILD:
            return (0, r.jsx)(
                c.P3F,
                N(S({}, a, i), {
                    className: I.category,
                    onClick: t,
                    children: (0, r.jsx)(u.Z, {
                        guild: e.categoryInfo.guild,
                        isSelected: n,
                        isLocked: o
                    })
                }),
                e.key
            );
        case g.bg.DEFAULTS:
            return (0, r.jsx)(
                D,
                N(S({}, i), {
                    icon: c.gw7,
                    onClick: t,
                    isSelected: n,
                    listItemProps: a
                }),
                e.key
            );
        default:
            return null;
    }
}
function x(e) {
    switch (e.categoryInfo.type) {
        case g.bg.FAVORITES:
            return v.intl.string(v.t.k8fFjo);
        case g.bg.RECENTLY_HEARD:
            return v.intl.string(v.t['8i/+SE']);
        case g.bg.FREQUENTLY_USED:
            return v.intl.string(v.t['+cGVV1']);
        case g.bg.GUILD:
            return (0, r.jsx)(_.K, {
                guild: e.categoryInfo.guild,
                includeActivity: !1
            });
        case g.bg.DEFAULTS:
            return v.intl.string(v.t.Rtvk9f);
    }
}
function M(e) {
    switch (e.categoryInfo.type) {
        case g.bg.FAVORITES:
            return v.intl.string(v.t.k8fFjo);
        case g.bg.RECENTLY_HEARD:
            return v.intl.string(v.t['8i/+SE']);
        case g.bg.FREQUENTLY_USED:
            return v.intl.string(v.t['+cGVV1']);
        case g.bg.GUILD:
            return e.categoryInfo.guild.name;
        case g.bg.DEFAULTS:
            return v.intl.string(v.t.Rtvk9f);
    }
}
function k(e) {
    let { category: t, categoryIndex: n, onClick: i, isSelected: a, isNitroLocked: o } = e,
        l = (0, s.JA)('soundboard_guild_'.concat(n));
    return (0, r.jsx)(c.ua7, {
        text: x(t),
        'aria-label': M(t),
        position: 'right',
        children: (e) => L(t, i, a, e, l, o)
    });
}
function j(e) {
    let { soundboardListRef: t, categories: n, shouldUpsellLockedCategories: a, listPadding: o = P, guildId: s, inExpressionPicker: c } = e,
        u = i.useRef(null),
        _ = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        g = (0, m.I5)(_, O.p9.TIER_2),
        v = i.useCallback(
            (e, t, n, i) => {
                let o = a && (0, E.O)(e.categoryInfo, g, s),
                    l = () => {
                        (h.default.track(b.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: b.ZY5.SOUNDBOARD_POPOUT },
                            guild_id: null != s ? s : null,
                            num_expressions: e.items.length,
                            tab: y.X1.SOUNDBOARD,
                            sticker_pack_id: null,
                            pack_id: null
                        }),
                            n());
                    };
                return (0, r.jsx)(k, {
                    category: e,
                    categoryIndex: t,
                    onClick: l,
                    isSelected: i,
                    isNitroLocked: o
                });
            },
            [s, a, g]
        );
    return (0, r.jsx)(f.Z, {
        className: c ? I.expressionPickerCategoryList : I.categoryList,
        categoryListRef: u,
        expressionsListRef: t,
        store: d.Wq,
        categories: n,
        listPadding: o,
        renderCategoryListItem: v,
        rowCount: n.length,
        categoryHeight: w
    });
}
