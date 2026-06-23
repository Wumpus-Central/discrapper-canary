n.d(e, { GI: () => c, Oo: () => l, Qm: () => s, py: () => o });
var r = n(228366),
    a = n(913122),
    i = n(306522);
async function c(t) {
    r.h.dispatch({ type: "GUILD_PRODUCTS_FETCH", guildId: t });
    try {
        let e = await i.oG(t);
        r.h.dispatch({ type: "GUILD_PRODUCTS_FETCH_SUCCESS", guildId: t, products: e });
    } catch (e) {
        r.h.dispatch({ type: "GUILD_PRODUCTS_FETCH_FAILURE", guildId: t });
    }
}
async function o(t, e) {
    r.h.dispatch({ type: "GUILD_PRODUCT_FETCH", productId: e });
    try {
        let n = await i.bq(t, e);
        return r.h.dispatch({ type: "GUILD_PRODUCT_FETCH_SUCCESS", product: n }), n;
    } catch (t) {
        throw (r.h.dispatch({ type: "GUILD_PRODUCT_FETCH_FAILURE", productId: e, error: new a.LG(t) }), t);
    }
}
async function s(t, e, n) {
    let a = await i.Qm(t, e, n);
    return r.h.dispatch({ type: "GUILD_PRODUCT_UPDATE", product: a }), a;
}
async function l(t, e) {
    return await i.Oo(t, e), r.h.dispatch({ type: "GUILD_PRODUCT_DELETE", productId: e }), !0;
}
