n.d(t, { Z: () => c });
var r = n(73800),
    o = n(494497),
    a = n(481060),
    i = n(434404),
    s = n(535396),
    l = n(981631);
function c(e, t) {
    let n = r.useCallback(
        (n) => {
            if ((n.stopPropagation(), t.type !== s.Us.LEVEL))
                switch (((0, a.Mr3)(s.H2), t.skuId)) {
                    case s.IN:
                        i.Z.open(e, l.pNK.TAG, l.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case s.If:
                        i.Z.open(e, l.pNK.ROLES, l.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case o.A$:
                        i.Z.open(e, l.pNK.BOOST_PERKS, l.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    default:
                        return;
                }
        },
        [e, t]
    );
    return t.type === s.Us.PERK ? n : void 0;
}
