n.d(t, {
    Z: () => m,
    m: () => f
}),
    n(539854),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(512722),
    o = n.n(l),
    a = n(399606),
    s = n(704215),
    c = n(367907),
    u = n(605236),
    E = n(584825),
    d = n(994592),
    _ = n(160404),
    I = n(703656),
    O = n(984933),
    T = n(430824),
    N = n(626135),
    S = n(652515),
    R = n(550951),
    A = n(544978),
    p = n(333866),
    P = n(629481),
    C = n(981631);
let D = 12633 == n.j ? i.createContext(void 0) : null;
function f() {
    let e = i.useContext(D);
    return o()(null != e, 'must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider'), e;
}
function m(e) {
    var t;
    let { children: n, initialTab: l, guildId: o } = e,
        f = (0, a.e7)([T.Z], () => T.Z.getGuild(o)),
        m = (0, a.e7)([_.Z], () => _.Z.isViewingServerShop(o)),
        g = (0, R.g)(f, 'guild_shop_page'),
        y = (0, S.RF)(o, 'guild_shop_page'),
        U = (null == f ? void 0 : f.hasFeature(C.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0,
        h = (0, d.mY)(null == f ? void 0 : f.id),
        b = null == (t = (0, E.YB)(o)) ? void 0 : t.server_shop_tab_order,
        M = [],
        k = A.y.GUILD_SHOP_FULL_PREVIEW;
    m || (U && h) ? (M.push(b === p.a3.PRODUCTS_FIRST ? A.y.GUILD_PRODUCTS : A.y.GUILD_ROLE_SUBSCRIPTIONS), M.push(b === p.a3.PRODUCTS_FIRST ? A.y.GUILD_ROLE_SUBSCRIPTIONS : A.y.GUILD_PRODUCTS), (k = M[0])) : U && !h ? (M.push(A.y.GUILD_PRODUCTS), (k = A.y.GUILD_PRODUCTS)) : !U && h && (M.push(A.y.GUILD_ROLE_SUBSCRIPTIONS), (k = A.y.GUILD_ROLE_SUBSCRIPTIONS), g && M.push(A.y.GUILD_PRODUCTS_PREVIEW)), (l = null != l ? l : k);
    let [Z, j] = i.useState(l),
        L = (g && !(h && y)) || Z === A.y.GUILD_PRODUCTS_PREVIEW;
    return (
        i.useEffect(() => {
            j(l);
        }, [l]),
        (0, r.jsx)(D.Provider, {
            value: {
                selectedTab: Z,
                setSelectedTab: j,
                categoryTabs: M,
                isPhantomPreview: L,
                handlePreviewDismiss: (e) => {
                    (0, u.EW)(s.z.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = (function (e) {
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
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, (0, c.hH)(o));
                    if (Z === A.y.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), j(A.y.GUILD_ROLE_SUBSCRIPTIONS), (t.action_taken = P.mz.DISMISS_TAB_PREVIEW);
                    else {
                        var n;
                        (0, I.dL)(C.Z5c.CHANNEL(o, null == (n = O.ZP.getDefaultChannel(o)) ? void 0 : n.id)), (t.action_taken = P.mz.DISMISS_FULL_PREVIEW);
                    }
                    N.default.track(C.rMx.GUILD_SHOP_PREVIEW_CLICK, t);
                }
            },
            children: n
        })
    );
}
