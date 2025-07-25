n.d(t, { Z: () => c });
var r = n(73800),
    o = n(494497),
    i = n(481060),
    s = n(434404),
    l = n(535396),
    a = n(981631);
function c(e, t) {
    let n = r.useCallback(
        (n) => {
            if ((n.stopPropagation(), t.type !== l.Us.LEVEL))
                switch (((0, i.Mr3)(l.H2), t.skuId)) {
                    case l.IN:
                        s.Z.open(e, a.pNK.TAG, a.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case l.If:
                        s.Z.open(e, a.pNK.ROLES, a.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case o.A$:
                        s.Z.open(e, a.pNK.BOOST_PERKS, a.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    default:
                        return;
                }
        },
        [e, t]
    );
    return t.type === l.Us.PERK ? n : void 0;
}
