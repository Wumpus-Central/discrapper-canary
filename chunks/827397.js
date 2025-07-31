n.d(t, { Z: () => c });
var r = n(73800),
    s = n(494497),
    o = n(481060),
    l = n(434404),
    a = n(535396),
    i = n(981631);
function c(e, t) {
    let n = r.useCallback(
        (n) => {
            if ((n.stopPropagation(), t.type !== a.Us.LEVEL))
                switch (((0, o.Mr3)(a.H2), t.skuId)) {
                    case a.IN:
                        l.Z.open(e, i.pNK.TAG, i.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case a.If:
                        l.Z.open(e, i.pNK.ROLES, i.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case s.A$:
                        l.Z.open(e, i.pNK.BOOST_PERKS, i.jXE.GUILD_POWERUPS_OVERVIEW_CARD, i.KsC.BOOST_PERKS_VANITY_URL);
                        return;
                    default:
                        return;
                }
        },
        [e, t]
    );
    return t.type === a.Us.PERK ? n : void 0;
}
