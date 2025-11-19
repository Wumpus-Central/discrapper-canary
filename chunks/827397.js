n.d(t, { Z: () => c });
var r = n(473749),
    i = n(494497),
    l = n(481060),
    o = n(434404),
    a = n(535396),
    s = n(981631);
function c(e, t) {
    let n = r.useCallback(
        (n) => {
            if ((n.stopPropagation(), t.type !== a.Us.LEVEL))
                switch (((0, l.Mr3)(a.H2), t.skuId)) {
                    case i.IN:
                        o.Z.open(e, s.pNK.TAG, s.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case i.If:
                        o.Z.open(e, s.pNK.ROLES, s.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case i.A$:
                        o.Z.open(
                            e,
                            s.pNK.BOOST_PERKS,
                            s.jXE.GUILD_POWERUPS_OVERVIEW_CARD,
                            s.KsC.BOOST_PERKS_VANITY_URL,
                        );
                        return;
                    case i.Vk:
                    case i.MB:
                        (0, l.pTH)(), o.Z.open(e, s.pNK.TAG, s.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    default:
                        return;
                }
        },
        [e, t],
    );
    return t.type === a.Us.PERK ? n : void 0;
}
