n.d(t, { Z: () => c });
var r = n(192379),
    o = n(481060),
    a = n(434404),
    i = n(535396),
    s = n(981631);
function c(e, t) {
    let n = r.useCallback(
        (n) => {
            if ((n.stopPropagation(), t.type !== i.Us.LEVEL))
                switch (((0, o.Mr3)(i.H2), t.skuId)) {
                    case i.IN:
                        a.Z.open(e, s.pNK.TAG, s.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case i.If:
                        a.Z.open(e, s.pNK.ROLES, s.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    default:
                        return;
                }
        },
        [e, t]
    );
    return t.type === i.Us.PERK ? n : void 0;
}
