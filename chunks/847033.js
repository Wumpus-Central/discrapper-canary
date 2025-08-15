n.d(t, {
    Z: () => C,
    m: () => P,
}),
    n(539854),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(512722),
    a = n.n(l),
    o = n(399606),
    c = n(704215),
    s = n(367907),
    u = n(266454),
    d = n(584825),
    _ = n(994592),
    E = n(160404),
    I = n(703656),
    T = n(984933),
    O = n(430824),
    p = n(626135),
    N = n(652515),
    f = n(550951),
    S = n(544978),
    m = n(333866),
    R = n(629481),
    A = n(981631);
let g = i.createContext(void 0);
function P() {
    let e = i.useContext(g);
    return a()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e;
}
function C(e) {
    var t;
    let { children: n, initialTab: l, guildId: a } = e,
        P = (0, o.e7)([O.Z], () => O.Z.getGuild(a)),
        C = (0, o.e7)([E.Z], () => E.Z.isViewingServerShop(a)),
        D = (0, f.g)(P, "guild_shop_page"),
        y = (0, N.RF)(a, "guild_shop_page"),
        h = (null == P ? void 0 : P.features.has(A.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0,
        b = (0, _.mY)(null == P ? void 0 : P.id),
        U = null == (t = (0, d.YB)(a)) ? void 0 : t.server_shop_tab_order,
        M = [],
        v = S.y.GUILD_SHOP_FULL_PREVIEW;
    C || (h && b)
        ? (M.push(U === m.a3.PRODUCTS_FIRST ? S.y.GUILD_PRODUCTS : S.y.GUILD_ROLE_SUBSCRIPTIONS),
          M.push(U === m.a3.PRODUCTS_FIRST ? S.y.GUILD_ROLE_SUBSCRIPTIONS : S.y.GUILD_PRODUCTS),
          (v = M[0]))
        : h && !b
          ? (M.push(S.y.GUILD_PRODUCTS), (v = S.y.GUILD_PRODUCTS))
          : !h &&
            b &&
            (M.push(S.y.GUILD_ROLE_SUBSCRIPTIONS),
            (v = S.y.GUILD_ROLE_SUBSCRIPTIONS),
            D && M.push(S.y.GUILD_PRODUCTS_PREVIEW)),
        (l = null != l ? l : v);
    let [Z, L] = i.useState(l),
        k = (D && !(b && y)) || Z === S.y.GUILD_PRODUCTS_PREVIEW;
    return (
        i.useEffect(() => {
            L(l);
        }, [l]),
        (0, r.jsx)(g.Provider, {
            value: {
                selectedTab: Z,
                setSelectedTab: L,
                categoryTabs: M,
                isPhantomPreview: k,
                handlePreviewDismiss: (e) => {
                    (0, u.Q3)(c.z.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = (function (e) {
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
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, (0, s.hH)(a));
                    if (Z === S.y.GUILD_PRODUCTS_PREVIEW)
                        e.stopPropagation(),
                            L(S.y.GUILD_ROLE_SUBSCRIPTIONS),
                            (t.action_taken = R.mz.DISMISS_TAB_PREVIEW);
                    else {
                        var n;
                        (0, I.dL)(A.Z5c.CHANNEL(a, null == (n = T.ZP.getDefaultChannel(a)) ? void 0 : n.id)),
                            (t.action_taken = R.mz.DISMISS_FULL_PREVIEW);
                    }
                    p.default.track(A.rMx.GUILD_SHOP_PREVIEW_CLICK, t);
                },
            },
            children: n,
        })
    );
}
