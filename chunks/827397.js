t.d(n, { Z: () => c });
var r = t(73800),
    i = t(494497),
    o = t(481060),
    a = t(434404),
    s = t(535396),
    l = t(981631);
function c(e, n) {
    let t = r.useCallback(
        (t) => {
            if ((t.stopPropagation(), n.type !== s.Us.LEVEL))
                switch (((0, o.Mr3)(s.H2), n.skuId)) {
                    case s.IN:
                        a.Z.open(e, l.pNK.TAG, l.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case s.If:
                        a.Z.open(e, l.pNK.ROLES, l.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case i.A:
                        a.Z.open(e, l.pNK.BOOST_PERKS, l.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    default:
                        return;
                }
        },
        [e, n]
    );
    return n.type === s.Us.PERK ? t : void 0;
}
