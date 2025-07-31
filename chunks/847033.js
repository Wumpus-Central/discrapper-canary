(n.d(t, {
    Z: () => A,
    m: () => R
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
    h = n(994592),
    _ = n(160404),
    E = n(703656),
    p = n(984933),
    I = n(430824),
    g = n(626135),
    f = n(652515),
    C = n(550951),
    O = n(544978),
    T = n(333866),
    S = n(629481),
    m = n(981631);
let N = 12633 == n.j ? r.createContext(void 0) : null;
function R() {
    let e = r.useContext(N);
    return (o()(null != e, 'must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider'), e);
}
function A(e) {
    var t;
    let { children: n, initialTab: l, guildId: o } = e,
        R = (0, s.e7)([I.Z], () => I.Z.getGuild(o)),
        A = (0, s.e7)([_.Z], () => _.Z.isViewingServerShop(o)),
        y = (0, C.g)(R, 'guild_shop_page'),
        b = (0, f.RF)(o, 'guild_shop_page'),
        P = (null == R ? void 0 : R.features.has(m.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0,
        D = (0, h.mY)(null == R ? void 0 : R.id),
        v = null == (t = (0, u.YB)(o)) ? void 0 : t.server_shop_tab_order,
        M = [],
        k = O.y.GUILD_SHOP_FULL_PREVIEW;
    (A || (P && D) ? (M.push(v === T.a3.PRODUCTS_FIRST ? O.y.GUILD_PRODUCTS : O.y.GUILD_ROLE_SUBSCRIPTIONS), M.push(v === T.a3.PRODUCTS_FIRST ? O.y.GUILD_ROLE_SUBSCRIPTIONS : O.y.GUILD_PRODUCTS), (k = M[0])) : P && !D ? (M.push(O.y.GUILD_PRODUCTS), (k = O.y.GUILD_PRODUCTS)) : !P && D && (M.push(O.y.GUILD_ROLE_SUBSCRIPTIONS), (k = O.y.GUILD_ROLE_SUBSCRIPTIONS), y && M.push(O.y.GUILD_PRODUCTS_PREVIEW)), (l = null != l ? l : k));
    let [U, L] = r.useState(l),
        j = (y && !(D && b)) || U === O.y.GUILD_PRODUCTS_PREVIEW;
    return (
        r.useEffect(() => {
            L(l);
        }, [l]),
        (0, i.jsx)(N.Provider, {
            value: {
                selectedTab: U,
                setSelectedTab: L,
                categoryTabs: M,
                isPhantomPreview: j,
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
                    if (U === O.y.GUILD_PRODUCTS_PREVIEW) (e.stopPropagation(), L(O.y.GUILD_ROLE_SUBSCRIPTIONS), (t.action_taken = S.mz.DISMISS_TAB_PREVIEW));
                    else {
                        var n;
                        ((0, E.dL)(m.Z5c.CHANNEL(o, null == (n = p.ZP.getDefaultChannel(o)) ? void 0 : n.id)), (t.action_taken = S.mz.DISMISS_FULL_PREVIEW));
                    }
                    g.default.track(m.rMx.GUILD_SHOP_PREVIEW_CLICK, t);
                }
            },
            children: n
        })
    );
}
