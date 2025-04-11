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
    E = n(584825),
    d = n(994592),
    _ = n(160404),
    I = n(703656),
    N = n(984933),
    O = n(430824),
    T = n(626135),
    S = n(652515),
    p = n(550951),
    R = n(544978),
    A = n(333866),
    P = n(629481),
    f = n(981631);
let C = i.createContext(void 0);
function D() {
    let e = i.useContext(C);
    return o()(null != e, 'must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider'), e;
}
function g(e) {
    var t;
    let { children: n, initialTab: l, guildId: o } = e,
        D = (0, a.e7)([O.Z], () => O.Z.getGuild(o)),
        g = (0, a.e7)([_.Z], () => _.Z.isViewingServerShop(o)),
        m = (0, p.g)(D, 'guild_shop_page'),
        y = (0, S.RF)(o, 'guild_shop_page'),
        h = (null == D ? void 0 : D.hasFeature(f.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0,
        U = (0, d.mY)(null == D ? void 0 : D.id),
        b = null == (t = (0, E.YB)(o)) ? void 0 : t.server_shop_tab_order,
        M = [],
        L = R.y.GUILD_SHOP_FULL_PREVIEW;
    g || (h && U) ? (M.push(b === A.a3.PRODUCTS_FIRST ? R.y.GUILD_PRODUCTS : R.y.GUILD_ROLE_SUBSCRIPTIONS), M.push(b === A.a3.PRODUCTS_FIRST ? R.y.GUILD_ROLE_SUBSCRIPTIONS : R.y.GUILD_PRODUCTS), (L = M[0])) : h && !U ? (M.push(R.y.GUILD_PRODUCTS), (L = R.y.GUILD_PRODUCTS)) : !h && U && (M.push(R.y.GUILD_ROLE_SUBSCRIPTIONS), (L = R.y.GUILD_ROLE_SUBSCRIPTIONS), m && M.push(R.y.GUILD_PRODUCTS_PREVIEW)), (l = null != l ? l : L);
    let [Z, k] = i.useState(l),
        j = (m && !(U && y)) || Z === R.y.GUILD_PRODUCTS_PREVIEW;
    return (
        i.useEffect(() => {
            k(l);
        }, [l]),
        (0, r.jsx)(C.Provider, {
            value: {
                selectedTab: Z,
                setSelectedTab: k,
                categoryTabs: M,
                isPhantomPreview: j,
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
                    if (Z === R.y.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), k(R.y.GUILD_ROLE_SUBSCRIPTIONS), (t.action_taken = P.mz.DISMISS_TAB_PREVIEW);
                    else {
                        var n;
                        (0, I.dL)(f.Z5c.CHANNEL(o, null == (n = N.ZP.getDefaultChannel(o)) ? void 0 : n.id)), (t.action_taken = P.mz.DISMISS_FULL_PREVIEW);
                    }
                    T.default.track(f.rMx.GUILD_SHOP_PREVIEW_CLICK, t);
                }
            },
            children: n
        })
    );
}
