n.d(t, { Z: () => c });
var r = n(73800),
    l = n(494497),
    a = n(481060),
    s = n(434404),
    o = n(535396),
    i = n(981631);
function c(e, t) {
    let n = r.useCallback(
        (n) => {
            if ((n.stopPropagation(), t.type !== o.Us.LEVEL))
                switch (((0, a.Mr3)(o.H2), t.skuId)) {
                    case o.IN:
                        s.Z.open(e, i.pNK.TAG, i.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case o.If:
                        s.Z.open(e, i.pNK.ROLES, i.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case l.A$:
                        s.Z.open(e, i.pNK.BOOST_PERKS, i.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    default:
                        return;
                }
        },
        [e, t]
    );
    return t.type === o.Us.PERK ? n : void 0;
}
