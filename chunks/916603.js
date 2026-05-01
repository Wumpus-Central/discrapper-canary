E.d(_, { F: () => I, G: () => h });
var e = E(228366),
    r = E(636537),
    R = E(845584),
    T = E(652215);
let c = async (t, _) => {
    try {
        return (
            await r.Bo.get({ url: T.Rsh.PRICE_TIERS, query: { price_tier_type: _, guild_id: t }, rejectWithError: !1 })
        ).body;
    } catch (t) {
        throw new R.LG(t);
    }
};
async function I(t, _) {
    e.h.dispatch({ type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH", guildId: t, priceTierType: _ });
    try {
        let E = await c(t, _);
        e.h.dispatch({
            type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_SUCCESS",
            guildId: t,
            priceTierType: _,
            priceTiers: E,
        });
    } catch (E) {
        e.h.dispatch({ type: "CREATOR_MONETIZATION_PRICE_TIERS_FETCH_FAILURE", guildId: t, priceTierType: _ });
    }
}
function h(t) {
    e.h.dispatch({ type: "CREATOR_MONETIZATION_SET_HAS_SEEN_ONBOARDING_FOR_GUILD", guildId: t });
}
