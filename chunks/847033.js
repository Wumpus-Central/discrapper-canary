(n.d(t, {
    Z: () => y,
    m: () => b
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
    O = n(984933),
    f = n(430824),
    I = n(626135),
    h = n(652515),
    T = n(550951),
    S = n(544978),
    m = n(333866),
    g = n(629481),
    N = n(981631);
let R = i.createContext(void 0);
function b() {
    let e = i.useContext(R);
    return (a()(null != e, 'must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider'), e);
}
function y(e) {
    var t;
    let { children: n, initialTab: l, guildId: a } = e,
        b = (0, o.e7)([f.Z], () => f.Z.getGuild(a)),
        y = (0, o.e7)([E.Z], () => E.Z.isViewingServerShop(a)),
        A = (0, T.g)(b, 'guild_shop_page'),
        C = (0, h.RF)(a, 'guild_shop_page'),
        P = (null == b ? void 0 : b.features.has(N.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0,
        D = (0, _.mY)(null == b ? void 0 : b.id),
        M = null == (t = (0, d.YB)(a)) ? void 0 : t.server_shop_tab_order,
        j = [],
        x = S.y.GUILD_SHOP_FULL_PREVIEW;
    (y || (P && D) ? (j.push(M === m.a3.PRODUCTS_FIRST ? S.y.GUILD_PRODUCTS : S.y.GUILD_ROLE_SUBSCRIPTIONS), j.push(M === m.a3.PRODUCTS_FIRST ? S.y.GUILD_ROLE_SUBSCRIPTIONS : S.y.GUILD_PRODUCTS), (x = j[0])) : P && !D ? (j.push(S.y.GUILD_PRODUCTS), (x = S.y.GUILD_PRODUCTS)) : !P && D && (j.push(S.y.GUILD_ROLE_SUBSCRIPTIONS), (x = S.y.GUILD_ROLE_SUBSCRIPTIONS), A && j.push(S.y.GUILD_PRODUCTS_PREVIEW)), (l = null != l ? l : x));
    let [k, v] = i.useState(l),
        L = (A && !(D && C)) || k === S.y.GUILD_PRODUCTS_PREVIEW;
    return (
        i.useEffect(() => {
            v(l);
        }, [l]),
        (0, r.jsx)(R.Provider, {
            value: {
                selectedTab: k,
                setSelectedTab: v,
                categoryTabs: j,
                isPhantomPreview: L,
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
                    if (k === S.y.GUILD_PRODUCTS_PREVIEW) (e.stopPropagation(), v(S.y.GUILD_ROLE_SUBSCRIPTIONS), (t.action_taken = g.mz.DISMISS_TAB_PREVIEW));
                    else {
                        var n;
                        ((0, p.dL)(N.Z5c.CHANNEL(a, null == (n = O.ZP.getDefaultChannel(a)) ? void 0 : n.id)), (t.action_taken = g.mz.DISMISS_FULL_PREVIEW));
                    }
                    I.default.track(N.rMx.GUILD_SHOP_PREVIEW_CLICK, t);
                }
            },
            children: n
        })
    );
}
