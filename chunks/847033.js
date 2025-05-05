n.d(t, {
    Z: () => g,
    m: () => D
}),
    n(539854),
    n(388685);
var r = n(255367),
    i = n(73800),
    l = n(512722),
    o = n.n(l),
    a = n(399606),
    s = n(704215),
    c = n(367907),
    u = n(605236),
    d = n(584825),
    E = n(994592),
    _ = n(160404),
    O = n(703656),
    I = n(984933),
    T = n(430824),
    N = n(626135),
    S = n(652515),
    p = n(550951),
    R = n(544978),
    A = n(333866),
    f = n(629481),
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
        Z = R.y.GUILD_SHOP_FULL_PREVIEW;
    g || (h && b) ? (M.push(U === A.a3.PRODUCTS_FIRST ? R.y.GUILD_PRODUCTS : R.y.GUILD_ROLE_SUBSCRIPTIONS), M.push(U === A.a3.PRODUCTS_FIRST ? R.y.GUILD_ROLE_SUBSCRIPTIONS : R.y.GUILD_PRODUCTS), (Z = M[0])) : h && !b ? (M.push(R.y.GUILD_PRODUCTS), (Z = R.y.GUILD_PRODUCTS)) : !h && b && (M.push(R.y.GUILD_ROLE_SUBSCRIPTIONS), (Z = R.y.GUILD_ROLE_SUBSCRIPTIONS), y && M.push(R.y.GUILD_PRODUCTS_PREVIEW)), (l = null != l ? l : Z);
    let [L, v] = i.useState(l),
        k = (y && !(b && m)) || L === R.y.GUILD_PRODUCTS_PREVIEW;
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
                    if (L === R.y.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), v(R.y.GUILD_ROLE_SUBSCRIPTIONS), (t.action_taken = f.mz.DISMISS_TAB_PREVIEW);
                    else {
                        var n;
                        (0, O.dL)(P.Z5c.CHANNEL(o, null == (n = I.ZP.getDefaultChannel(o)) ? void 0 : n.id)), (t.action_taken = f.mz.DISMISS_FULL_PREVIEW);
                    }
                    N.default.track(P.rMx.GUILD_SHOP_PREVIEW_CLICK, t);
                }
            },
            children: n
        })
    );
}
