t.d(n, { Z: () => l });
var r = t(192379),
    o = t(481060),
    s = t(434404),
    i = t(535396),
    a = t(981631);
function l(e, n) {
    let t = r.useCallback(
        (t) => {
            if ((t.stopPropagation(), n.type !== i.Us.LEVEL))
                switch (((0, o.Mr3)(i.H2), n.skuId)) {
                    case i.IN:
                        s.Z.open(e, a.pNK.TAG, a.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case i.If:
                        s.Z.open(e, a.pNK.ROLES, a.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    default:
                        return;
                }
        },
        [e, n]
    );
    return n.type === i.Us.PERK ? t : void 0;
}
