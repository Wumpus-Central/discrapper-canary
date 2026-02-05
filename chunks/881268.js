n.d(t, { X: () => r });
var i = n(562465),
    l = n(198982),
    a = n(652215);
let r = async (e, t) => {
    try {
        return (
            await i.Bo.get({ url: a.Rsh.PRICE_TIERS, query: { price_tier_type: t, guild_id: e }, rejectWithError: !1 })
        ).body;
    } catch (e) {
        throw new l.LG(e);
    }
};
