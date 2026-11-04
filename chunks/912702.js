var e = r(73153),
    a = r(627784),
    i = r(306522);
r.d(
    n,
    {},
    {
        GI: async function (t) {
            e.h.dispatch({ type: "GUILD_PRODUCTS_FETCH", guildId: t });
            try {
                let n = await i.oG(t);
                e.h.dispatch({ type: "GUILD_PRODUCTS_FETCH_SUCCESS", guildId: t, products: n });
            } catch (n) {
                e.h.dispatch({ type: "GUILD_PRODUCTS_FETCH_FAILURE", guildId: t });
            }
        },
        Oo: async function (t, n) {
            return (await i.Oo(t, n), e.h.dispatch({ type: "GUILD_PRODUCT_DELETE", productId: n }), !0);
        },
        Qm: async function (t, n, r) {
            let a = await i.Qm(t, n, r);
            return (e.h.dispatch({ type: "GUILD_PRODUCT_UPDATE", product: a }), a);
        },
        py: async function (t, n) {
            e.h.dispatch({ type: "GUILD_PRODUCT_FETCH", productId: n });
            try {
                let r = await i.bq(t, n);
                return (e.h.dispatch({ type: "GUILD_PRODUCT_FETCH_SUCCESS", product: r }), r);
            } catch (t) {
                throw (e.h.dispatch({ type: "GUILD_PRODUCT_FETCH_FAILURE", productId: n, error: new a.LG(t) }), t);
            }
        },
    },
);
