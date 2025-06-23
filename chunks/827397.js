t.d(n, { Z: () => l });
var r = t(73800),
    i = t(481060),
    o = t(434404),
    a = t(535396),
    s = t(981631);
function l(e, n) {
    let t = r.useCallback(
        (t) => {
            if ((t.stopPropagation(), n.type !== a.Us.LEVEL))
                switch (((0, i.Mr3)(a.H2), n.skuId)) {
                    case a.IN:
                        o.Z.open(e, s.pNK.TAG, s.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case a.If:
                        o.Z.open(e, s.pNK.ROLES, s.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    default:
                        return;
                }
        },
        [e, n]
    );
    return n.type === a.Us.PERK ? t : void 0;
}
