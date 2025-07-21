n.d(t, { Z: () => c });
var r = n(73800),
    o = n(494497),
    i = n(481060),
    s = n(434404),
    a = n(535396),
    l = n(981631);
function c(e, t) {
    let n = r.useCallback(
        (n) => {
            if ((n.stopPropagation(), t.type !== a.Us.LEVEL))
                switch (((0, i.Mr3)(a.H2), t.skuId)) {
                    case a.IN:
                        s.Z.open(e, l.pNK.TAG, l.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case a.If:
                        s.Z.open(e, l.pNK.ROLES, l.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case o.A$:
                        s.Z.open(e, l.pNK.BOOST_PERKS, l.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    default:
                        return;
                }
        },
        [e, t]
    );
    return t.type === a.Us.PERK ? n : void 0;
}
