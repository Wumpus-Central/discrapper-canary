n.d(t, {
    Z: () => N,
    m: () => C,
}),
    n(539854),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
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
function C() {
    let e = i.useContext(A);
    return o()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e;
}
function N(e) {
    var t;
    let { children: n, initialTab: a, guildId: o } = e,
        T = (0, s.e7)([m.Z], () => m.Z.getGuild(o)),
        C = (0, s.e7)([_.Z], () => _.Z.isViewingServerShop(o)),
        N = (0, b.g)(T, "guild_shop_page"),
        R = (0, E.RF)(o, "guild_shop_page"),
        P = (null == T ? void 0 : T.features.has(I.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0,
        D = (0, f.mY)(null == T ? void 0 : T.id),
        w = D && R,
        x = null == (t = (0, d.YB)(o)) ? void 0 : t.server_shop_tab_order,
        L = [],
        M = y.y.GUILD_SHOP_FULL_PREVIEW;
    C || (P && D)
        ? (L.push(x === O.a3.PRODUCTS_FIRST ? y.y.GUILD_PRODUCTS : y.y.GUILD_ROLE_SUBSCRIPTIONS),
          L.push(x === O.a3.PRODUCTS_FIRST ? y.y.GUILD_ROLE_SUBSCRIPTIONS : y.y.GUILD_PRODUCTS),
          (M = L[0]))
        : P && !D
          ? (L.push(y.y.GUILD_PRODUCTS), (M = y.y.GUILD_PRODUCTS))
          : !P &&
            D &&
            (L.push(y.y.GUILD_ROLE_SUBSCRIPTIONS),
            (M = y.y.GUILD_ROLE_SUBSCRIPTIONS),
            N && L.push(y.y.GUILD_PRODUCTS_PREVIEW)),
        (a = null != a ? a : M);
    let [j, k] = i.useState(a),
        U = (N && !w) || j === y.y.GUILD_PRODUCTS_PREVIEW;
    i.useEffect(() => {
        k(a);
    }, [a]);
    let G = (e) => {
        (0, u.Q3)(l.z.SERVER_SHOP_PHANTOM_PREVIEW);
        let t = S({}, (0, c.hH)(o));
        if (j === y.y.GUILD_PRODUCTS_PREVIEW)
            e.stopPropagation(), k(y.y.GUILD_ROLE_SUBSCRIPTIONS), (t.action_taken = v.mz.DISMISS_TAB_PREVIEW);
        else {
            var n;
            (0, p.dL)(I.Z5c.CHANNEL(o, null == (n = h.ZP.getDefaultChannel(o)) ? void 0 : n.id)),
                (t.action_taken = v.mz.DISMISS_FULL_PREVIEW);
        }
        g.default.track(I.rMx.GUILD_SHOP_PREVIEW_CLICK, t);
    };
    return (0, r.jsx)(A.Provider, {
        value: {
            selectedTab: j,
            setSelectedTab: k,
            categoryTabs: L,
            isPhantomPreview: U,
            handlePreviewDismiss: G,
        },
        children: n,
    });
}
