n.d(t, {
    Z: () => h,
    m: () => p
}),
    n(653041),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(512722),
    a = n.n(r),
    s = n(399606),
    o = n(704215),
    c = n(367907),
    u = n(605236),
    E = n(584825),
    d = n(994592),
    _ = n(160404),
    I = n(703656),
    T = n(984933),
    N = n(430824),
    A = n(626135),
    S = n(652515),
    R = n(550951),
    C = n(544978),
    O = n(333866),
    P = n(629481),
    D = n(981631);
let m = 12633 == n.j ? l.createContext(void 0) : null;
function p() {
    let e = l.useContext(m);
    return a()(null != e, 'must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider'), e;
}
function h(e) {
    var t;
    let { children: n, initialTab: r, guildId: a } = e,
        p = (0, s.e7)([N.Z], () => N.Z.getGuild(a)),
        h = (0, s.e7)([_.Z], () => _.Z.isViewingServerShop(a)),
        U = (0, R.g)(p, 'guild_shop_page'),
        M = (0, S.RF)(a, 'guild_shop_page'),
        g = (null == p ? void 0 : p.hasFeature(D.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0,
        k = (0, d.mY)(null == p ? void 0 : p.id),
        Z = null === (t = (0, E.YB)(a)) || void 0 === t ? void 0 : t.server_shop_tab_order,
        f = [],
        L = C.y.GUILD_SHOP_FULL_PREVIEW;
    h || (g && k) ? (f.push(Z === O.a3.PRODUCTS_FIRST ? C.y.GUILD_PRODUCTS : C.y.GUILD_ROLE_SUBSCRIPTIONS), f.push(Z === O.a3.PRODUCTS_FIRST ? C.y.GUILD_ROLE_SUBSCRIPTIONS : C.y.GUILD_PRODUCTS), (L = f[0])) : g && !k ? (f.push(C.y.GUILD_PRODUCTS), (L = C.y.GUILD_PRODUCTS)) : !g && k && (f.push(C.y.GUILD_ROLE_SUBSCRIPTIONS), (L = C.y.GUILD_ROLE_SUBSCRIPTIONS), U && f.push(C.y.GUILD_PRODUCTS_PREVIEW)), (r = null != r ? r : L);
    let [V, F] = l.useState(r),
        x = (U && !(k && M)) || V === C.y.GUILD_PRODUCTS_PREVIEW;
    return (
        l.useEffect(() => {
            F(r);
        }, [r]),
        (0, i.jsx)(m.Provider, {
            value: {
                selectedTab: V,
                setSelectedTab: F,
                categoryTabs: f,
                isPhantomPreview: x,
                handlePreviewDismiss: (e) => {
                    (0, u.EW)(o.z.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = { ...(0, c.hH)(a) };
                    if (V === C.y.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), F(C.y.GUILD_ROLE_SUBSCRIPTIONS), (t.action_taken = P.mz.DISMISS_TAB_PREVIEW);
                    else {
                        var n;
                        (0, I.dL)(D.Z5c.CHANNEL(a, null === (n = T.ZP.getDefaultChannel(a)) || void 0 === n ? void 0 : n.id)), (t.action_taken = P.mz.DISMISS_FULL_PREVIEW);
                    }
                    A.default.track(D.rMx.GUILD_SHOP_PREVIEW_CLICK, t);
                }
            },
            children: n
        })
    );
}
