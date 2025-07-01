(n.d(t, {
    Z: () => C,
    m: () => P
}),
    n(539854),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(512722),
    o = n.n(l),
    a = n(399606),
    c = n(704215),
    s = n(367907),
    u = n(605236),
    d = n(584825),
    _ = n(994592),
    E = n(160404),
    O = n(703656),
    I = n(984933),
    T = n(430824),
    p = n(626135),
    S = n(652515),
    N = n(550951),
    A = n(544978),
    f = n(333866),
    m = n(629481),
    R = n(981631);
let g = i.createContext(void 0);
function P() {
    let e = i.useContext(g);
    return (o()(null != e, 'must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider'), e);
}
function C(e) {
    var t;
    let { children: n, initialTab: l, guildId: o } = e,
        P = (0, a.e7)([T.Z], () => T.Z.getGuild(o)),
        C = (0, a.e7)([E.Z], () => E.Z.isViewingServerShop(o)),
        y = (0, N.g)(P, 'guild_shop_page'),
        b = (0, S.RF)(o, 'guild_shop_page'),
        D = (null == P ? void 0 : P.hasFeature(R.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0,
        h = (0, _.mY)(null == P ? void 0 : P.id),
        U = null == (t = (0, d.YB)(o)) ? void 0 : t.server_shop_tab_order,
        M = [],
        v = A.y.GUILD_SHOP_FULL_PREVIEW;
    (C || (D && h) ? (M.push(U === f.a3.PRODUCTS_FIRST ? A.y.GUILD_PRODUCTS : A.y.GUILD_ROLE_SUBSCRIPTIONS), M.push(U === f.a3.PRODUCTS_FIRST ? A.y.GUILD_ROLE_SUBSCRIPTIONS : A.y.GUILD_PRODUCTS), (v = M[0])) : D && !h ? (M.push(A.y.GUILD_PRODUCTS), (v = A.y.GUILD_PRODUCTS)) : !D && h && (M.push(A.y.GUILD_ROLE_SUBSCRIPTIONS), (v = A.y.GUILD_ROLE_SUBSCRIPTIONS), y && M.push(A.y.GUILD_PRODUCTS_PREVIEW)), (l = null != l ? l : v));
    let [k, L] = i.useState(l),
        Z = (y && !(h && b)) || k === A.y.GUILD_PRODUCTS_PREVIEW;
    return (
        i.useEffect(() => {
            L(l);
        }, [l]),
        (0, r.jsx)(g.Provider, {
            value: {
                selectedTab: k,
                setSelectedTab: L,
                categoryTabs: M,
                isPhantomPreview: Z,
                handlePreviewDismiss: (e) => {
                    (0, u.EW)(c.z.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = (function (e) {
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
                                    var r;
                                    ((r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r));
                                }));
                        }
                        return e;
                    })({}, (0, s.hH)(o));
                    if (k === A.y.GUILD_PRODUCTS_PREVIEW) (e.stopPropagation(), L(A.y.GUILD_ROLE_SUBSCRIPTIONS), (t.action_taken = m.mz.DISMISS_TAB_PREVIEW));
                    else {
                        var n;
                        ((0, O.dL)(R.Z5c.CHANNEL(o, null == (n = I.ZP.getDefaultChannel(o)) ? void 0 : n.id)), (t.action_taken = m.mz.DISMISS_FULL_PREVIEW));
                    }
                    p.default.track(R.rMx.GUILD_SHOP_PREVIEW_CLICK, t);
                }
            },
            children: n
        })
    );
}
