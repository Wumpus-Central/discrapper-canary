(n.d(t, {
    Z: () => A,
    m: () => y
}),
    n(539854),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(512722),
    a = n.n(l),
    o = n(399606),
    s = n(704215),
    c = n(367907),
    u = n(266454),
    d = n(584825),
    _ = n(994592),
    E = n(160404),
    p = n(703656),
    I = n(984933),
    O = n(430824),
    S = n(626135),
    f = n(652515),
    h = n(550951),
    T = n(544978),
    m = n(333866),
    g = n(629481),
    N = n(981631);
let R = i.createContext(void 0);
function y() {
    let e = i.useContext(R);
    return (a()(null != e, 'must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider'), e);
}
function A(e) {
    var t;
    let { children: n, initialTab: l, guildId: a } = e,
        y = (0, o.e7)([O.Z], () => O.Z.getGuild(a)),
        A = (0, o.e7)([E.Z], () => E.Z.isViewingServerShop(a)),
        b = (0, h.g)(y, 'guild_shop_page'),
        C = (0, f.RF)(a, 'guild_shop_page'),
        P = (null == y ? void 0 : y.features.has(N.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0,
        D = (0, _.mY)(null == y ? void 0 : y.id),
        M = null == (t = (0, d.YB)(a)) ? void 0 : t.server_shop_tab_order,
        j = [],
        x = T.y.GUILD_SHOP_FULL_PREVIEW;
    (A || (P && D) ? (j.push(M === m.a3.PRODUCTS_FIRST ? T.y.GUILD_PRODUCTS : T.y.GUILD_ROLE_SUBSCRIPTIONS), j.push(M === m.a3.PRODUCTS_FIRST ? T.y.GUILD_ROLE_SUBSCRIPTIONS : T.y.GUILD_PRODUCTS), (x = j[0])) : P && !D ? (j.push(T.y.GUILD_PRODUCTS), (x = T.y.GUILD_PRODUCTS)) : !P && D && (j.push(T.y.GUILD_ROLE_SUBSCRIPTIONS), (x = T.y.GUILD_ROLE_SUBSCRIPTIONS), b && j.push(T.y.GUILD_PRODUCTS_PREVIEW)), (l = null != l ? l : x));
    let [v, k] = i.useState(l),
        Z = (b && !(D && C)) || v === T.y.GUILD_PRODUCTS_PREVIEW;
    return (
        i.useEffect(() => {
            k(l);
        }, [l]),
        (0, r.jsx)(R.Provider, {
            value: {
                selectedTab: v,
                setSelectedTab: k,
                categoryTabs: j,
                isPhantomPreview: Z,
                handlePreviewDismiss: (e) => {
                    (0, u.Q3)(s.z.SERVER_SHOP_PHANTOM_PREVIEW);
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
                    })({}, (0, c.hH)(a));
                    if (v === T.y.GUILD_PRODUCTS_PREVIEW) (e.stopPropagation(), k(T.y.GUILD_ROLE_SUBSCRIPTIONS), (t.action_taken = g.mz.DISMISS_TAB_PREVIEW));
                    else {
                        var n;
                        ((0, p.dL)(N.Z5c.CHANNEL(a, null == (n = I.ZP.getDefaultChannel(a)) ? void 0 : n.id)), (t.action_taken = g.mz.DISMISS_FULL_PREVIEW));
                    }
                    S.default.track(N.rMx.GUILD_SHOP_PREVIEW_CLICK, t);
                }
            },
            children: n
        })
    );
}
