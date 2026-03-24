n.d(t, { N: () => d, h: () => c });
var a = n(562465),
    l = n(73153),
    i = n(198982),
    r = n(773669),
    s = n(371794),
    o = n(652215);
let c = async (e) => {
        l.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
        try {
            let t = (
                await (0, s.aP)({
                    url: o.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: r.default.locale },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.flatMap((e) => e.sku_ids);
            l.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: t });
        } catch (t) {
            l.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
        }
    },
    d = async (e) => {
        try {
            let t = (
                (await a.Bo.get({ url: o.Rsh.SIMILAR_GAMES(e), rejectWithError: !1 })).body.similar_games ?? []
            ).filter((t) => t !== e);
            l.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", applicationId: e, games: t });
        } catch (e) {
            throw new i.LG(e);
        }
    };
