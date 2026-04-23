n.d(t, { NP: () => u, Rf: () => m, hd: () => d });
var l = n(562465),
    a = n(73153),
    i = n(198982),
    r = n(773669),
    s = n(371794),
    o = n(890060),
    c = n(652215);
let d = async (e) => {
        a.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
        try {
            let t = (
                await (0, s.aP)({
                    url: c.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                    query: { locale: r.default.locale },
                    rejectWithError: !1,
                    retries: 2,
                })
            ).body.products.flatMap((e) => e.sku_ids);
            a.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: t });
        } catch (t) {
            a.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
        }
    },
    u = async (e) => {
        try {
            let t = (
                (await l.Bo.get({ url: c.Rsh.SIMILAR_GAMES(e), rejectWithError: !1 })).body.similar_games ?? []
            ).filter((t) => t !== e);
            a.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", applicationId: e, games: t });
        } catch (e) {
            throw new i.LG(e);
        }
    },
    m = async (e, t) => {
        a.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
        try {
            let n = {};
            t?.limit != null && (n.limit = t.limit);
            let i = (await l.Bo.get({ url: c.Rsh.GAME_ANNOUNCEMENTS(e), query: n, rejectWithError: !1 })).body;
            a.h.dispatch({
                type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
                gameId: e,
                messages: (0, o.p)(i.messages),
                channelId: i.channel_id ?? void 0,
                guildId: i.guild_id ?? void 0,
            });
        } catch (t) {
            a.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
        }
    };
