t.d(n, { S: () => c, u: () => d });
var r = t(627968),
    l = t(64700),
    s = t(284009),
    a = t.n(s),
    i = t(311907),
    u = t(871109);
let o = l.createContext(void 0);
function c() {
    let e = l.useContext(o);
    return a()(null != e, "GuildProductPurchaseContext not found"), e;
}
function d(e) {
    let { children: n, guildProductListingId: t, ...l } = e,
        s = (0, i.bG)([u.A], () => u.A.getGuildProduct(t));
    return (
        a()(null != s, "guildProductListing cannot be null"),
        (0, r.jsx)(o.Provider, { value: { guildProductListing: s, ...l }, children: n })
    );
}
