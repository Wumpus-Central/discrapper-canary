n.d(t, { NP: () => u, Rf: () => m, hd: () => d });
var a = n(562465),
    i = n(73153),
    l = n(198982),
    r = n(773669),
    s = n(371794),
    c = n(890060),
    o = n(652215);
let d = async (e) => {
        i.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
        try {
            let t = (
                await (0, s.aP)({
                    url: o.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: r.default.locale },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.flatMap((e) => e.sku_ids);
            i.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: t });
        } catch (t) {
            i.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
        }
    },
    u = async (e) => {
        try {
            let t = (
                (await a.Bo.get({ url: o.Rsh.SIMILAR_GAMES(e), rejectWithError: !1 })).body.similar_games ?? []
            ).filter((t) => t !== e);
            i.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", applicationId: e, games: t });
        } catch (e) {
            throw new l.LG(e);
        }
    },
    m = async (e, t) => {
        i.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
        try {
            let n = {};
            t?.limit != null && (n.limit = t.limit);
            let l = (await a.Bo.get({ url: o.Rsh.GAME_ANNOUNCEMENTS(e), query: n, rejectWithError: !1 })).body;
            i.h.dispatch({
                type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
                gameId: e,
                messages: (0, c.p)(l.messages),
                channelId: l.channel_id ?? void 0,
                guildId: l.guild_id ?? void 0,
            });
        } catch (t) {
            i.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
        }
    };
