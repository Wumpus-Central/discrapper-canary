n.d(t, {
    Z: () => m,
    m: () => g
}),
    n(653041),
    n(47120);
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
    N = n(984933),
    O = n(430824),
    T = n(626135),
    S = n(652515),
    p = n(550951),
    f = n(544978),
    A = n(333866),
    R = n(629481),
    P = n(981631);
let C = i.createContext(void 0);
function g() {
    let e = i.useContext(C);
    return o()(null != e, 'must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider'), e;
}
function m(e) {
    var t;
    let { children: n, initialTab: l, guildId: o } = e,
        g = (0, a.e7)([O.Z], () => O.Z.getGuild(o)),
        m = (0, a.e7)([_.Z], () => _.Z.isViewingServerShop(o)),
        D = (0, p.g)(g, 'guild_shop_page'),
        y = (0, S.RF)(o, 'guild_shop_page'),
        h = (null == g ? void 0 : g.hasFeature(P.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0,
        b = (0, E.mY)(null == g ? void 0 : g.id),
        U = null == (t = (0, d.YB)(o)) ? void 0 : t.server_shop_tab_order,
        M = [],
        L = f.y.GUILD_SHOP_FULL_PREVIEW;
    m || (h && b) ? (M.push(U === A.a3.PRODUCTS_FIRST ? f.y.GUILD_PRODUCTS : f.y.GUILD_ROLE_SUBSCRIPTIONS), M.push(U === A.a3.PRODUCTS_FIRST ? f.y.GUILD_ROLE_SUBSCRIPTIONS : f.y.GUILD_PRODUCTS), (L = M[0])) : h && !b ? (M.push(f.y.GUILD_PRODUCTS), (L = f.y.GUILD_PRODUCTS)) : !h && b && (M.push(f.y.GUILD_ROLE_SUBSCRIPTIONS), (L = f.y.GUILD_ROLE_SUBSCRIPTIONS), D && M.push(f.y.GUILD_PRODUCTS_PREVIEW)), (l = null != l ? l : L);
    let [Z, k] = i.useState(l),
        v = (D && !(b && y)) || Z === f.y.GUILD_PRODUCTS_PREVIEW;
    return (
        i.useEffect(() => {
            k(l);
        }, [l]),
        (0, r.jsx)(C.Provider, {
            value: {
                selectedTab: Z,
                setSelectedTab: k,
                categoryTabs: M,
                isPhantomPreview: v,
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
                    if (Z === f.y.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), k(f.y.GUILD_ROLE_SUBSCRIPTIONS), (t.action_taken = R.mz.DISMISS_TAB_PREVIEW);
                    else {
                        var n;
                        (0, I.dL)(P.Z5c.CHANNEL(o, null == (n = N.ZP.getDefaultChannel(o)) ? void 0 : n.id)), (t.action_taken = R.mz.DISMISS_FULL_PREVIEW);
                    }
                    T.default.track(P.rMx.GUILD_SHOP_PREVIEW_CLICK, t);
                }
            },
            children: n
        })
    );
}
