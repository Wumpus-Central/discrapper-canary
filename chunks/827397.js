n.d(t, { Z: () => i });
var r = n(192379),
    o = n(481060),
    s = n(434404),
    a = n(535396),
    c = n(981631);
function i(e, t) {
    let n = r.useCallback(
        (n) => {
            if ((n.stopPropagation(), t.type !== a.Us.LEVEL))
                switch (((0, o.Mr3)(a.H2), t.skuId)) {
                    case a.IN:
                        s.Z.open(e, c.pNK.TAG, c.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    case a.If:
                        s.Z.open(e, c.pNK.ROLES, c.jXE.GUILD_POWERUPS_OVERVIEW_CARD);
                        return;
                    default:
                        return;
                }
        },
        [e, t]
    );
    return t.type === a.Us.PERK ? n : void 0;
}
