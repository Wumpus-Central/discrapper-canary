n.d(t, { X: () => s });
var r = n(562465),
    i = n(198982),
    a = n(652215);
let s = async (e, t) => {
    try {
        return (
            await r.Bo.get({
                url: a.Rsh.PRICE_TIERS,
                query: {
                    price_tier_type: t,
                    guild_id: e,
                },
                rejectWithError: !1,
            })
        ).body;
    } catch (e) {
        throw new i.LG(e);
    }
};
