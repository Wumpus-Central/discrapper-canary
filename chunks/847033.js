n.d(t, {
    Z: function () {
        return A;
    },
    m: function () {
        return S;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(512722),
    a = n.n(l),
    o = n(399606),
    s = n(704215),
    c = n(367907),
    u = n(605236),
    d = n(584825),
    m = n(994592),
    h = n(160404),
    f = n(703656),
    p = n(984933),
    _ = n(430824),
    g = n(626135),
    E = n(652515),
    C = n(550951),
    I = n(544978),
    x = n(333866),
    N = n(629481),
    v = n(981631);
let T = r.createContext(void 0);
function S() {
    let e = r.useContext(T);
    return a()(null != e, 'must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider'), e;
}
function A(e) {
    var t;
    let { children: n, initialTab: l, guildId: a } = e,
        S = (0, o.e7)([_.Z], () => _.Z.getGuild(a)),
        A = (0, o.e7)([h.Z], () => h.Z.isViewingServerShop(a)),
        b = (0, C.g)(S, 'guild_shop_page'),
        j = (0, E.RF)(a, 'guild_shop_page'),
        R = (null == S ? void 0 : S.hasFeature(v.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0,
        Z = (0, m.mY)(null == S ? void 0 : S.id),
        P = null === (t = (0, d.YB)(a)) || void 0 === t ? void 0 : t.server_shop_tab_order,
        L = [],
        y = I.y.GUILD_SHOP_FULL_PREVIEW;
    A || (R && Z) ? (L.push(P === x.a3.PRODUCTS_FIRST ? I.y.GUILD_PRODUCTS : I.y.GUILD_ROLE_SUBSCRIPTIONS), L.push(P === x.a3.PRODUCTS_FIRST ? I.y.GUILD_ROLE_SUBSCRIPTIONS : I.y.GUILD_PRODUCTS), (y = L[0])) : R && !Z ? (L.push(I.y.GUILD_PRODUCTS), (y = I.y.GUILD_PRODUCTS)) : !R && Z && (L.push(I.y.GUILD_ROLE_SUBSCRIPTIONS), (y = I.y.GUILD_ROLE_SUBSCRIPTIONS), b && L.push(I.y.GUILD_PRODUCTS_PREVIEW)), (l = null != l ? l : y);
    let [O, M] = r.useState(l),
        k = (b && !(Z && j)) || O === I.y.GUILD_PRODUCTS_PREVIEW;
    return (
        r.useEffect(() => {
            M(l);
        }, [l]),
        (0, i.jsx)(T.Provider, {
            value: {
                selectedTab: O,
                setSelectedTab: M,
                categoryTabs: L,
                isPhantomPreview: k,
                handlePreviewDismiss: (e) => {
                    (0, u.EW)(s.z.SERVER_SHOP_PHANTOM_PREVIEW);
                    let t = { ...(0, c.hH)(a) };
                    if (O === I.y.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), M(I.y.GUILD_ROLE_SUBSCRIPTIONS), (t.action_taken = N.mz.DISMISS_TAB_PREVIEW);
                    else {
                        var n;
                        (0, f.dL)(v.Z5c.CHANNEL(a, null === (n = p.ZP.getDefaultChannel(a)) || void 0 === n ? void 0 : n.id)), (t.action_taken = N.mz.DISMISS_FULL_PREVIEW);
                    }
                    g.default.track(v.rMx.GUILD_SHOP_PREVIEW_CLICK, t);
                }
            },
            children: n
        })
    );
}
