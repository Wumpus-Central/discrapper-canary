(n.d(t, {
    Z: () => m,
    m: () => A
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
    u = n(266454),
    d = n(584825),
    _ = n(994592),
    h = n(160404),
    E = n(703656),
    I = n(984933),
    p = n(430824),
    C = n(626135),
    O = n(652515),
    T = n(550951),
    g = n(544978),
    S = n(333866),
    f = n(629481),
    N = n(981631);
let R = 12633 == n.j ? r.createContext(void 0) : null;
function A() {
    let e = r.useContext(R);
    return (o()(null != e, 'must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider'), e);
}
function m(e) {
    var t;
    let { children: n, initialTab: l, guildId: o } = e,
        A = (0, s.e7)([p.Z], () => p.Z.getGuild(o)),
        m = (0, s.e7)([h.Z], () => h.Z.isViewingServerShop(o)),
        y = (0, T.g)(A, 'guild_shop_page'),
        P = (0, O.RF)(o, 'guild_shop_page'),
        b = (null == A ? void 0 : A.features.has(N.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0,
        D = (0, _.mY)(null == A ? void 0 : A.id),
        v = null == (t = (0, d.YB)(o)) ? void 0 : t.server_shop_tab_order,
        U = [],
        M = g.y.GUILD_SHOP_FULL_PREVIEW;
    (m || (b && D) ? (U.push(v === S.a3.PRODUCTS_FIRST ? g.y.GUILD_PRODUCTS : g.y.GUILD_ROLE_SUBSCRIPTIONS), U.push(v === S.a3.PRODUCTS_FIRST ? g.y.GUILD_ROLE_SUBSCRIPTIONS : g.y.GUILD_PRODUCTS), (M = U[0])) : b && !D ? (U.push(g.y.GUILD_PRODUCTS), (M = g.y.GUILD_PRODUCTS)) : !b && D && (U.push(g.y.GUILD_ROLE_SUBSCRIPTIONS), (M = g.y.GUILD_ROLE_SUBSCRIPTIONS), y && U.push(g.y.GUILD_PRODUCTS_PREVIEW)), (l = null != l ? l : M));
    let [L, Z] = r.useState(l),
        k = (y && !(D && P)) || L === g.y.GUILD_PRODUCTS_PREVIEW;
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
                    (0, u.Q3)(a.z.SERVER_SHOP_PHANTOM_PREVIEW);
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
                    if (L === g.y.GUILD_PRODUCTS_PREVIEW) (e.stopPropagation(), Z(g.y.GUILD_ROLE_SUBSCRIPTIONS), (t.action_taken = f.mz.DISMISS_TAB_PREVIEW));
                    else {
                        var n;
                        ((0, E.dL)(N.Z5c.CHANNEL(o, null == (n = I.ZP.getDefaultChannel(o)) ? void 0 : n.id)), (t.action_taken = f.mz.DISMISS_FULL_PREVIEW));
                    }
                    C.default.track(N.rMx.GUILD_SHOP_PREVIEW_CLICK, t);
                }
            },
            children: n
        })
    );
}
