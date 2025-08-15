r.d(t, { Z: () => a });
var n = r(647438),
    o = r(494497),
    i = r(481060),
    l = r(434404),
    u = r(535396),
    s = r(981631);
function a(e, t) {
    let r = n.useCallback(
        (r) => {
            if ((r.stopPropagation(), t.type !== u.Us.LEVEL))
                switch (((0, i.Mr3)(u.H2), t.skuId)) {
                    case o.IN:
                        l.Z.open(e, s.pNK.TAG, s.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case o.If:
                        l.Z.open(e, s.pNK.ROLES, s.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case o.A$:
                        l.Z.open(
                            e,
                            s.pNK.BOOST_PERKS,
                            s.jXE.GUILD_POWERUPS_OVERVIEW_CARD,
                            s.KsC.BOOST_PERKS_VANITY_URL,
                        );
                        return;
                    case o.Vk:
                    case o.MB:
                        (0, i.pTH)(), l.Z.open(e, s.pNK.TAG, s.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    default:
                        return;
                }
        },
        [e, t],
    );
    return t.type === u.Us.PERK ? r : void 0;
}
