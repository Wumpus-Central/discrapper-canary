t.d(n, { S: () => o, u: () => d });
var r = t(627968),
    l = t(64700),
    s = t(284009),
    a = t.n(s),
    i = t(311907),
    u = t(871109);
let c = l.createContext(void 0);
function o() {
    let e = l.useContext(c);
    return a()(null != e, "GuildProductPurchaseContext not found"), e;
}
function d(e) {
    let { children: n, guildProductListingId: t, ...l } = e,
        s = (0, i.bG)([u.A], () => u.A.getGuildProduct(t));
    return (
        a()(null != s, "guildProductListing cannot be null"),
        (0, r.jsx)(c.Provider, { value: { guildProductListing: s, ...l }, children: n })
    );
}
