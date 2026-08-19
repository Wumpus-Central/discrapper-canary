e.d(n, { GI: () => c, Oo: () => l, Qm: () => s, py: () => o });
var r = e(228366),
    a = e(913122),
    i = e(306522);
async function c(t) {
    r.h.dispatch({ type: "GUILD_PRODUCTS_FETCH", guildId: t });
    try {
        let n = await i.oG(t);
        r.h.dispatch({ type: "GUILD_PRODUCTS_FETCH_SUCCESS", guildId: t, products: n });
    } catch (n) {
        r.h.dispatch({ type: "GUILD_PRODUCTS_FETCH_FAILURE", guildId: t });
    }
}
async function o(t, n) {
    r.h.dispatch({ type: "GUILD_PRODUCT_FETCH", productId: n });
    try {
        let e = await i.bq(t, n);
        return r.h.dispatch({ type: "GUILD_PRODUCT_FETCH_SUCCESS", product: e }), e;
    } catch (t) {
        throw (r.h.dispatch({ type: "GUILD_PRODUCT_FETCH_FAILURE", productId: n, error: new a.LG(t) }), t);
    }
}
async function s(t, n, e) {
    let a = await i.Qm(t, n, e);
    return r.h.dispatch({ type: "GUILD_PRODUCT_UPDATE", product: a }), a;
}
async function l(t, n) {
    return await i.Oo(t, n), r.h.dispatch({ type: "GUILD_PRODUCT_DELETE", productId: n }), !0;
}
