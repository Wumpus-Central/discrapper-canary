r.d(t, {
    Z: () => d,
    s: () => a
}),
    r(47120);
var n = r(200651),
    i = r(192379),
    o = r(512722),
    s = r.n(o),
    c = r(333866);
let l = i.createContext(void 0);
function a() {
    let e = i.useContext(l);
    return s()(null != e, 'must use useGuildShopSortContext within a GuildShopSortOptionsContextProvider'), e;
}
function d(e) {
    let { children: t, defaultSortOption: r = c.zJ.NEWEST_ARRIVALS } = e,
        [o, s] = i.useState(r);
    return (0, n.jsx)(l.Provider, {
        value: {
            sortOption: o,
            setSortOption: s,
            onReset: () => s(r)
        },
        children: t
    });
}
