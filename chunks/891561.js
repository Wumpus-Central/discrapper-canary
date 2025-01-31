n.d(t, {
    Z: () => d,
    s: () => c
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(512722),
    l = n.n(s),
    o = n(333866);
let a = r.createContext(void 0);
function c() {
    let e = r.useContext(a);
    return l()(null != e, 'must use useGuildShopSortContext within a GuildShopSortOptionsContextProvider'), e;
}
function d(e) {
    let { children: t, defaultSortOption: n = o.zJ.NEWEST_ARRIVALS } = e,
        [s, l] = r.useState(n);
    return (0, i.jsx)(a.Provider, {
        value: {
            sortOption: s,
            setSortOption: l,
            onReset: () => l(n)
        },
        children: t
    });
}
