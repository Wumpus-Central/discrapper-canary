n.d(t, {
    Z: () => C,
    m: () => N,
}),
    n(539854),
    n(388685);
var r = n(255367),
    i = n(73800),
    o = n(512722),
    a = n.n(o),
    s = n(399606),
    l = n(704215),
    c = n(367907),
    u = n(266454),
    d = n(584825),
    f = n(994592),
    _ = n(160404),
    p = n(703656),
    h = n(984933),
    m = n(430824),
    g = n(626135),
    E = n(652515),
    b = n(550951),
    y = n(544978),
    O = n(333866),
    v = n(629481),
    I = n(981631);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            });
    }
    return e;
}
let A = i.createContext(void 0);
function N() {
    let e = i.useContext(A);
    return a()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e;
}
function C(e) {
    var t;
    let { children: n, initialTab: o, guildId: a } = e,
        T = (0, s.e7)([m.Z], () => m.Z.getGuild(a)),
        N = (0, s.e7)([_.Z], () => _.Z.isViewingServerShop(a)),
        C = (0, b.g)(T, "guild_shop_page"),
        R = (0, E.RF)(a, "guild_shop_page"),
        P = (null == T ? void 0 : T.features.has(I.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0,
        w = (0, f.mY)(null == T ? void 0 : T.id),
        D = w && R,
        L = null == (t = (0, d.YB)(a)) ? void 0 : t.server_shop_tab_order,
        x = [],
        M = y.y.GUILD_SHOP_FULL_PREVIEW;
    N || (P && w)
        ? (x.push(L === O.a3.PRODUCTS_FIRST ? y.y.GUILD_PRODUCTS : y.y.GUILD_ROLE_SUBSCRIPTIONS),
          x.push(L === O.a3.PRODUCTS_FIRST ? y.y.GUILD_ROLE_SUBSCRIPTIONS : y.y.GUILD_PRODUCTS),
          (M = x[0]))
        : P && !w
          ? (x.push(y.y.GUILD_PRODUCTS), (M = y.y.GUILD_PRODUCTS))
          : !P &&
            w &&
            (x.push(y.y.GUILD_ROLE_SUBSCRIPTIONS),
            (M = y.y.GUILD_ROLE_SUBSCRIPTIONS),
            C && x.push(y.y.GUILD_PRODUCTS_PREVIEW)),
        (o = null != o ? o : M);
    let [k, j] = i.useState(o),
        U = (C && !D) || k === y.y.GUILD_PRODUCTS_PREVIEW;
    i.useEffect(() => {
        j(o);
    }, [o]);
    let G = (e) => {
        (0, u.Q3)(l.z.SERVER_SHOP_PHANTOM_PREVIEW);
        let t = S({}, (0, c.hH)(a));
        if (k === y.y.GUILD_PRODUCTS_PREVIEW)
            e.stopPropagation(), j(y.y.GUILD_ROLE_SUBSCRIPTIONS), (t.action_taken = v.mz.DISMISS_TAB_PREVIEW);
        else {
            var n;
            (0, p.dL)(I.Z5c.CHANNEL(a, null == (n = h.ZP.getDefaultChannel(a)) ? void 0 : n.id)),
                (t.action_taken = v.mz.DISMISS_FULL_PREVIEW);
        }
        g.default.track(I.rMx.GUILD_SHOP_PREVIEW_CLICK, t);
    };
    return (0, r.jsx)(A.Provider, {
        value: {
            selectedTab: k,
            setSelectedTab: j,
            categoryTabs: x,
            isPhantomPreview: U,
            handlePreviewDismiss: G,
        },
        children: n,
    });
}
