r.d(t, {
    Z: () => d,
    s: () => a
}),
    r(388685);
var n = r(255367),
    i = r(73800),
    o = r(512722),
    l = r.n(o),
    s = r(333866);
let c = i.createContext(void 0);
function a() {
    let e = i.useContext(c);
    return l()(null != e, 'must use useGuildShopSortContext within a GuildShopSortOptionsContextProvider'), e;
}
function d(e) {
    let { children: t, defaultSortOption: r = s.zJ.NEWEST_ARRIVALS } = e,
        [o, l] = i.useState(r);
    return (0, n.jsx)(c.Provider, {
        value: {
            sortOption: o,
            setSortOption: l,
            onReset: () => l(r)
        },
        children: t
    });
}
