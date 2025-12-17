r.d(t, {
    Z: () => d,
    s: () => a,
}),
    r(388685);
var n = r(54381),
    i = r(473749),
    o = r(512722),
    l = r.n(o),
    c = r(333866);
let s = i.createContext(void 0);
function a() {
    let e = i.useContext(s);
    return l()(null != e, "must use useGuildShopSortContext within a GuildShopSortOptionsContextProvider"), e;
}
function d(e) {
    let { children: t, defaultSortOption: r = c.zJ.NEWEST_ARRIVALS } = e,
        [o, l] = i.useState(r);
    return (0, n.jsx)(s.Provider, {
        value: {
            sortOption: o,
            setSortOption: l,
            onReset: () => l(r),
        },
        children: t,
    });
}
