n.d(t, { GI: () => s, Oo: () => d, Qm: () => o, py: () => r });
var i = n(73153),
    l = n(198982),
    a = n(306522);
let s = async (e) => {
        i.h.dispatch({ type: "GUILD_PRODUCTS_FETCH", guildId: e });
        try {
            let t = await a.oG(e);
            i.h.dispatch({ type: "GUILD_PRODUCTS_FETCH_SUCCESS", guildId: e, products: t });
        } catch (t) {
            i.h.dispatch({ type: "GUILD_PRODUCTS_FETCH_FAILURE", guildId: e });
        }
    },
    r = async (e, t) => {
        i.h.dispatch({ type: "GUILD_PRODUCT_FETCH", productId: t });
        try {
            let n = await a.bq(e, t);
            return i.h.dispatch({ type: "GUILD_PRODUCT_FETCH_SUCCESS", product: n }), n;
        } catch (e) {
            throw (i.h.dispatch({ type: "GUILD_PRODUCT_FETCH_FAILURE", productId: t, error: new l.LG(e) }), e);
        }
    };
async function o(e, t, n) {
    let l = await a.Qm(e, t, n);
    return i.h.dispatch({ type: "GUILD_PRODUCT_UPDATE", product: l }), l;
}
async function d(e, t) {
    return await a.Oo(e, t), i.h.dispatch({ type: "GUILD_PRODUCT_DELETE", productId: t }), !0;
}
