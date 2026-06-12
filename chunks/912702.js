r.d(e, { GI: () => c, Oo: () => l, Qm: () => s, py: () => o });
var n = r(228366),
    a = r(913122),
    i = r(306522);
let c = async (t) => {
        n.h.dispatch({ type: "GUILD_PRODUCTS_FETCH", guildId: t });
        try {
            let e = await i.oG(t);
            n.h.dispatch({ type: "GUILD_PRODUCTS_FETCH_SUCCESS", guildId: t, products: e });
        } catch (e) {
            n.h.dispatch({ type: "GUILD_PRODUCTS_FETCH_FAILURE", guildId: t });
        }
    },
    o = async (t, e) => {
        n.h.dispatch({ type: "GUILD_PRODUCT_FETCH", productId: e });
        try {
            let r = await i.bq(t, e);
            return n.h.dispatch({ type: "GUILD_PRODUCT_FETCH_SUCCESS", product: r }), r;
        } catch (t) {
            throw (n.h.dispatch({ type: "GUILD_PRODUCT_FETCH_FAILURE", productId: e, error: new a.LG(t) }), t);
        }
    };
async function s(t, e, r) {
    let a = await i.Qm(t, e, r);
    return n.h.dispatch({ type: "GUILD_PRODUCT_UPDATE", product: a }), a;
}
async function l(t, e) {
    return await i.Oo(t, e), n.h.dispatch({ type: "GUILD_PRODUCT_DELETE", productId: e }), !0;
}
