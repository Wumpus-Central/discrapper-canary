n.d(t, { Z: () => c });
var r = n(73800),
    o = n(494497),
    i = n(481060),
    l = n(434404),
    s = n(535396),
    a = n(981631);
function c(e, t) {
    let n = r.useCallback(
        (n) => {
            if ((n.stopPropagation(), t.type !== s.Us.LEVEL))
                switch (((0, i.Mr3)(s.H2), t.skuId)) {
                    case s.IN:
                        l.Z.open(e, a.pNK.TAG, a.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case s.If:
                        l.Z.open(e, a.pNK.ROLES, a.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case o.A$:
                        l.Z.open(e, a.pNK.BOOST_PERKS, a.jXE.GUILD_POWERUPS_OVERVIEW_CARD, a.KsC.BOOST_PERKS_VANITY_URL);
                        return;
                    default:
                        return;
                }
        },
        [e, t]
    );
    return t.type === s.Us.PERK ? n : void 0;
}
