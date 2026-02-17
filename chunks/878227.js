n.d(t, { I: () => o });
var i = n(311907),
    r = n(576705),
    l = n(125022),
    a = n(558593),
    s = n(652215);
function o(e) {
    let t = (0, a.q)(e, "useCanShowGameClaimCoachmark");
    return (0, i.bG)(
        [r.A, l.A],
        () => !!t && !!r.A.canWithPartialContext(s.xBc.ADMINISTRATOR, { guildId: e }) && l.A.hasUnclaimedGames(e),
        [e, t],
    );
}
