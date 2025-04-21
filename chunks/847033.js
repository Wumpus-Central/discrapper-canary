n.d(t, {
    Z: () => g,
    m: () => D
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
    d = n(584825),
    E = n(994592),
    _ = n(160404),
    I = n(703656),
    O = n(984933),
    T = n(430824),
    N = n(626135),
    S = n(652515),
    p = n(550951),
    A = n(544978),
    f = n(333866),
    R = n(629481),
    P = n(981631);
let C = i.createContext(void 0);
function D() {
    let e = i.useContext(C);
    return o()(null != e, 'must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider'), e;
}
function g(e) {
    var t;
    let { children: n, initialTab: l, guildId: o } = e,
        D = (0, a.e7)([T.Z], () => T.Z.getGuild(o)),
        g = (0, a.e7)([_.Z], () => _.Z.isViewingServerShop(o)),
        y = (0, p.g)(D, 'guild_shop_page'),
        m = (0, S.RF)(o, 'guild_shop_page'),
        h = (null == D ? void 0 : D.hasFeature(P.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0,
        b = (0, E.mY)(null == D ? void 0 : D.id),
        U = null == (t = (0, d.YB)(o)) ? void 0 : t.server_shop_tab_order,
        M = [],
        Z = A.y.GUILD_SHOP_FULL_PREVIEW;
    g || (h && b) ? (M.push(U === f.a3.PRODUCTS_FIRST ? A.y.GUILD_PRODUCTS : A.y.GUILD_ROLE_SUBSCRIPTIONS), M.push(U === f.a3.PRODUCTS_FIRST ? A.y.GUILD_ROLE_SUBSCRIPTIONS : A.y.GUILD_PRODUCTS), (Z = M[0])) : h && !b ? (M.push(A.y.GUILD_PRODUCTS), (Z = A.y.GUILD_PRODUCTS)) : !h && b && (M.push(A.y.GUILD_ROLE_SUBSCRIPTIONS), (Z = A.y.GUILD_ROLE_SUBSCRIPTIONS), y && M.push(A.y.GUILD_PRODUCTS_PREVIEW)), (l = null != l ? l : Z);
    let [L, v] = i.useState(l),
        k = (y && !(b && m)) || L === A.y.GUILD_PRODUCTS_PREVIEW;
    return (
        i.useEffect(() => {
            v(l);
        }, [l]),
        (0, r.jsx)(C.Provider, {
            value: {
                selectedTab: L,
                setSelectedTab: v,
                categoryTabs: M,
                isPhantomPreview: k,
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
                    if (L === A.y.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), v(A.y.GUILD_ROLE_SUBSCRIPTIONS), (t.action_taken = R.mz.DISMISS_TAB_PREVIEW);
                    else {
                        var n;
                        (0, I.dL)(P.Z5c.CHANNEL(o, null == (n = O.ZP.getDefaultChannel(o)) ? void 0 : n.id)), (t.action_taken = R.mz.DISMISS_FULL_PREVIEW);
                    }
                    N.default.track(P.rMx.GUILD_SHOP_PREVIEW_CLICK, t);
                }
            },
            children: n
        })
    );
}
