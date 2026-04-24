i.d(t, { F: () => d, G: () => l });
var n = i(228366),
    r = i(636537),
    a = i(845584),
    o = i(652215);
let s = async (e, t) => {
    try {
        return (
            await r.Bo.get({ url: o.Rsh.PRICE_TIERS, query: { price_tier_type: t, guild_id: e }, rejectWithError: !1 })
        ).body;
    } catch (e) {
        throw new a.LG(e);
    }
};
async function d(e, t) {
    n.h.dispatch({ type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH", guildId: e, priceTierType: t });
    try {
        let i = await s(e, t);
        n.h.dispatch({
            type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS",
            guildId: e,
            priceTierType: t,
            priceTiers: i,
        });
    } catch (i) {
        n.h.dispatch({ type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE", guildId: e, priceTierType: t });
    }
}
function l(e) {
    n.h.dispatch({ type: "CREATOR_MONETIZATION_SET_HAS_SEEN_ONBOARDING_FOR_GUILD", guildId: e });
}
