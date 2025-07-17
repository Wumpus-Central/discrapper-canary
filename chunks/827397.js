r.d(t, { Z: () => c });
var n = r(73800),
    o = r(494497),
    a = r(481060),
    i = r(434404),
    s = r(535396),
    l = r(981631);
function c(e, t) {
    let r = n.useCallback(
        (r) => {
            if ((r.stopPropagation(), t.type !== s.Us.LEVEL))
                switch (((0, a.Mr3)(s.H2), t.skuId)) {
                    case s.IN:
                        i.Z.open(e, l.pNK.TAG, l.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case s.If:
                        i.Z.open(e, l.pNK.ROLES, l.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case o.A:
                        i.Z.open(e, l.pNK.BOOST_PERKS, l.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    default:
                        return;
                }
        },
        [e, t]
    );
    return t.type === s.Us.PERK ? r : void 0;
}
