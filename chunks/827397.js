n.d(t, { Z: () => i });
var r = n(192379),
    o = n(481060),
    a = n(434404),
    s = n(535396),
    c = n(981631);
function i(e, t) {
    let n = r.useCallback(
        (n) => {
            if ((n.stopPropagation(), t.type !== s.Us.LEVEL))
                switch (((0, o.Mr3)(s.H2), t.skuId)) {
                    case s.IN:
                        a.Z.open(e, c.pNK.TAG, c.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case s.If:
                        a.Z.open(e, c.pNK.ROLES, c.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    default:
                        return;
                }
        },
        [e, t]
    );
    return t.type === s.Us.PERK ? n : void 0;
}
