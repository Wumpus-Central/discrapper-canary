n.d(t, { S: () => c, u: () => d });
var l = n(627968),
    i = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(17928),
    o = n(871109);
let u = i.createContext(void 0);
function c() {
    let e = i.useContext(u);
    return s()(null != e, "GuildProductPurchaseContext not found"), e;
}
function d(e) {
    let { children: t, skuId: n, ...i } = e,
        r = (0, a.bG)([o.A], () => o.A.getGuildProduct(n));
    return (
        s()(null != r, "guildProductListing cannot be null"),
        (0, l.jsx)(u.Provider, { value: { guildProductListing: r, ...i }, children: t })
    );
}
