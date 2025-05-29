r.d(t, { Z: () => s });
var n = r(73800),
    o = r(481060),
    a = r(434404),
    i = r(535396),
    l = r(981631);
function s(e, t) {
    let r = n.useCallback(
        (r) => {
            if ((r.stopPropagation(), t.type !== i.Us.LEVEL))
                switch (((0, o.Mr3)(i.H2), t.skuId)) {
                    case i.IN:
                        a.Z.open(e, l.pNK.TAG, l.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case i.If:
                        a.Z.open(e, l.pNK.ROLES, l.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    default:
                        return;
                }
        },
        [e, t]
    );
    return t.type === i.Us.PERK ? r : void 0;
}
