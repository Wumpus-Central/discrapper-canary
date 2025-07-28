n.d(t, { Z: () => c });
var r = n(73800),
    a = n(494497),
    o = n(481060),
    l = n(434404),
    s = n(535396),
    i = n(981631);
function c(e, t) {
    let n = r.useCallback(
        (n) => {
            if ((n.stopPropagation(), t.type !== s.Us.LEVEL))
                switch (((0, o.Mr3)(s.H2), t.skuId)) {
                    case s.IN:
                        l.Z.open(e, i.pNK.TAG, i.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case s.If:
                        l.Z.open(e, i.pNK.ROLES, i.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case a.A$:
                        l.Z.open(e, i.pNK.BOOST_PERKS, i.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    default:
                        return;
                }
        },
        [e, t]
    );
    return t.type === s.Us.PERK ? n : void 0;
}
