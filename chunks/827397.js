t.d(n, { Z: () => l });
var r = t(73800),
    i = t(481060),
    o = t(434404),
    s = t(535396),
    a = t(981631);
function l(e, n) {
    let t = r.useCallback(
        (t) => {
            if ((t.stopPropagation(), n.type !== s.Us.LEVEL))
                switch (((0, i.Mr3)(s.H2), n.skuId)) {
                    case s.IN:
                        o.Z.open(e, a.pNK.TAG, a.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case s.If:
                        o.Z.open(e, a.pNK.ROLES, a.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    default:
                        return;
                }
        },
        [e, n]
    );
    return n.type === s.Us.PERK ? t : void 0;
}
