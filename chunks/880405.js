var l = n(158390),
    i = n(855986),
    r = n(620632),
    a = n(73153),
    u = n(103348),
    d = n(773669),
    s = n(927813),
    o = n(371794),
    c = n(890060),
    m = n(422069),
    h = n(652215),
    p = n(277450);
let _ = (0, i.UT)(m.A, {
    getQueryId: (e, t) => (t && null != e ? `similar-games:${e}` : null),
    get: (e) => (null != e ? (m.A.getSimilarGames(e) ?? null) : null),
    load: async (e) => {
        null != e &&
            (await (async function (e) {
                let t = (
                    (await r.Bo.get({ url: h.Rsh.SIMILAR_GAMES(e), rejectWithError: !0 })).body.similar_games ?? []
                ).filter((t) => t !== e && !p.b.has(t));
                a.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: e, games: t });
            })(e));
    },
    retryConfig: { backoff: () => new l.A(5 * s.A.Millis.SECOND, 5 * s.A.Millis.MINUTE) },
    failureStaleAfter: s.A.Seconds.MINUTE,
});
n.d(
    t,
    {},
    {
        $M: _,
        Rf: async function (e, t) {
            a.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: e });
            try {
                let n = {};
                t?.limit != null && (n.limit = t.limit);
                let l = (await r.Bo.get({ url: h.Rsh.GAME_ANNOUNCEMENTS(e), query: n, rejectWithError: !1 })).body;
                a.h.dispatch({
                    type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS",
                    gameId: e,
                    messages: (0, c.pp)(l.messages),
                    channelId: l.channel_id ?? void 0,
                    guildId: l.guild_id ?? void 0,
                });
            } catch (t) {
                a.h.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: e });
            }
        },
        hd: async function (e) {
            a.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: e });
            try {
                let t = (
                        await (0, o.aP)({
                            url: h.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(e),
                            query: { locale: d.default.locale, include_pricing: !0, with_bundled_skus: !0 },
                            rejectWithError: !1,
                            retries: 2,
                        })
                    ).body.products.map(u.A.fromServer),
                    n = t.flatMap((e) => e.skuIds);
                (a.h.dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: n, products: t }),
                    a.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: e, skuIds: n }));
            } catch (t) {
                a.h.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: e });
            }
        },
    },
);
