n.d(t, { Z: () => j });
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(91192),
    l = n(442837),
    c = n(681715),
    u = n(481060),
    d = n(880949),
    f = n(806966),
    p = n(254494),
    _ = n(648307),
    m = n(594174),
    h = n(626135),
    g = n(74538),
    E = n(697426),
    b = n(526617),
    y = n(981631),
    O = n(957825),
    v = n(474936),
    S = n(388032),
    I = n(422840);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
let P = [8, 8, 8, 8],
    R = 40;
function w(e) {
    let { icon: t, isSelected: n, onClick: i, listItemProps: o } = e;
    return (0, r.jsx)(
        u.P3F,
        N(C({}, o), {
            onClick: i,
            className: a()(I.categoryIcon, { [I.selected]: n }),
            children: (0, r.jsx)(t, {
                className: I.categoryIconIcon,
                color: "currentColor",
            }),
        }),
    );
}
function D(e, t, n, i, o) {
    switch (e.categoryInfo.type) {
        case E.bg.FAVORITES:
            return (0, r.jsx)(
                w,
                {
                    icon: u.r7p,
                    onClick: t,
                    isSelected: n,
                    listItemProps: i,
                },
                e.key,
            );
        case E.bg.RECENTLY_HEARD:
            return (0, r.jsx)(
                w,
                {
                    icon: u.T39,
                    onClick: t,
                    isSelected: n,
                    listItemProps: i,
                },
                e.key,
            );
        case E.bg.FREQUENTLY_USED:
            return (0, r.jsx)(
                w,
                {
                    icon: u.IeX,
                    onClick: t,
                    isSelected: n,
                    listItemProps: i,
                },
                e.key,
            );
        case E.bg.GUILD:
            return (0, r.jsx)(
                u.P3F,
                N(C({}, i), {
                    className: I.category,
                    onClick: t,
                    children: (0, r.jsx)(d.Z, {
                        guild: e.categoryInfo.guild,
                        isSelected: n,
                        isLocked: o,
                    }),
                }),
                e.key,
            );
        case E.bg.DEFAULTS:
            return (0, r.jsx)(
                w,
                {
                    icon: u.gw7,
                    onClick: t,
                    isSelected: n,
                    listItemProps: i,
                },
                e.key,
            );
        default:
            return null;
    }
}
function x(e) {
    switch (e.categoryInfo.type) {
        case E.bg.FAVORITES:
            return S.intl.string(S.t.k8fFjp);
        case E.bg.RECENTLY_HEARD:
            return S.intl.string(S.t["8i/+SA"]);
        case E.bg.FREQUENTLY_USED:
            return S.intl.string(S.t["+cGVV6"]);
        case E.bg.GUILD:
            return e.categoryInfo.guild.name;
        case E.bg.DEFAULTS:
            return S.intl.string(S.t.Rtvk9X);
    }
}
function L(e) {
    let { category: t, categoryIndex: n, onClick: i, isSelected: o, isNitroLocked: a } = e,
        l = (0, s.JA)("soundboard_guild_".concat(n));
    return t.categoryInfo.type === E.bg.GUILD
        ? (0, r.jsx)(_.V, {
              guild: t.categoryInfo.guild,
              children: D(t, i, o, l, a),
          })
        : (0, r.jsx)(c.u, {
              text: x(t),
              position: "right",
              align: "center",
              children: D(t, i, o, l, a),
          });
}
function j(e) {
    let {
            soundboardListRef: t,
            categories: n,
            shouldUpsellLockedCategories: o,
            listPadding: a = P,
            guildId: s,
            inExpressionPicker: c,
        } = e,
        u = i.useRef(null),
        d = (0, l.e7)([m.default], () => m.default.getCurrentUser()),
        _ = (0, g.I5)(d, v.PremiumTypes.TIER_2),
        E = i.useCallback(
            (e, t, n, i) => {
                let a = o && (0, b.O)(e.categoryInfo, _, s),
                    l = () => {
                        h.default.track(y.rMx.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                            location: { page: y.ZY5.SOUNDBOARD_POPOUT },
                            guild_id: null != s ? s : null,
                            num_expressions: e.items.length,
                            tab: O.X1.SOUNDBOARD,
                            sticker_pack_id: null,
                            pack_id: null,
                        }),
                            n();
                    };
                return (0, r.jsx)(L, {
                    category: e,
                    categoryIndex: t,
                    onClick: l,
                    isSelected: i,
                    isNitroLocked: a,
                });
            },
            [s, o, _],
        );
    return (0, r.jsx)(p.Z, {
        className: c ? I.expressionPickerCategoryList : I.categoryList,
        categoryListRef: u,
        expressionsListRef: t,
        store: f.Wq,
        categories: n,
        listPadding: a,
        renderCategoryListItem: E,
        rowCount: n.length,
        categoryHeight: R,
    });
}
