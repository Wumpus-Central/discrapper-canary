(n.d(t, {
    Z: () => A,
    m: () => m
}),
    n(539854),
    n(388685));
var i = n(255367),
    r = n(73800),
    l = n(512722),
    o = n.n(l),
    s = n(399606),
    a = n(704215),
    c = n(367907),
    d = n(266454),
    u = n(584825),
    _ = n(994592),
    h = n(160404),
    E = n(703656),
    I = n(984933),
    p = n(430824),
    C = n(626135),
    g = n(652515),
    T = n(550951),
    O = n(544978),
    S = n(333866),
    N = n(629481),
    f = n(981631);
let R = 12633 == n.j ? r.createContext(void 0) : null;
function m() {
    let e = r.useContext(R);
    return (o()(null != e, 'must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider'), e);
}
function A(e) {
    var t;
    let { children: n, initialTab: l, guildId: o } = e,
        m = (0, s.e7)([p.Z], () => p.Z.getGuild(o)),
        A = (0, s.e7)([h.Z], () => h.Z.isViewingServerShop(o)),
        y = (0, T.g)(m, 'guild_shop_page'),
        P = (0, g.RF)(o, 'guild_shop_page'),
        b = (null == m ? void 0 : m.features.has(f.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0,
        D = (0, _.mY)(null == m ? void 0 : m.id),
        v = null == (t = (0, u.YB)(o)) ? void 0 : t.server_shop_tab_order,
        U = [],
        M = O.y.GUILD_SHOP_FULL_PREVIEW;
    (A || (b && D) ? (U.push(v === S.a3.PRODUCTS_FIRST ? O.y.GUILD_PRODUCTS : O.y.GUILD_ROLE_SUBSCRIPTIONS), U.push(v === S.a3.PRODUCTS_FIRST ? O.y.GUILD_ROLE_SUBSCRIPTIONS : O.y.GUILD_PRODUCTS), (M = U[0])) : b && !D ? (U.push(O.y.GUILD_PRODUCTS), (M = O.y.GUILD_PRODUCTS)) : !b && D && (U.push(O.y.GUILD_ROLE_SUBSCRIPTIONS), (M = O.y.GUILD_ROLE_SUBSCRIPTIONS), y && U.push(O.y.GUILD_PRODUCTS_PREVIEW)), (l = null != l ? l : M));
    let [L, Z] = r.useState(l),
        k = (y && !(D && P)) || L === O.y.GUILD_PRODUCTS_PREVIEW;
    return (
        r.useEffect(() => {
            Z(l);
        }, [l]),
        (0, i.jsx)(R.Provider, {
            value: {
                selectedTab: L,
                setSelectedTab: Z,
                categoryTabs: U,
                isPhantomPreview: k,
                handlePreviewDismiss: (e) => {
                    (0, d.Q3)(a.z.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    ((i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = i));
                                }));
                        }
                        return e;
                    })({}, (0, c.hH)(o));
                    if (L === O.y.GUILD_PRODUCTS_PREVIEW) (e.stopPropagation(), Z(O.y.GUILD_ROLE_SUBSCRIPTIONS), (t.action_taken = N.mz.DISMISS_TAB_PREVIEW));
                    else {
                        var n;
                        ((0, E.dL)(f.Z5c.CHANNEL(o, null == (n = I.ZP.getDefaultChannel(o)) ? void 0 : n.id)), (t.action_taken = N.mz.DISMISS_FULL_PREVIEW));
                    }
                    C.default.track(f.rMx.GUILD_SHOP_PREVIEW_CLICK, t);
                }
            },
            children: n
        })
    );
}
