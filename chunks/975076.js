n.d(t, { I: () => o });
var i = n(311907),
    r = n(576705),
    a = n(125022),
    l = n(558593),
    s = n(652215);
function o(e) {
    let t = (0, l.q)(e, "useCanShowGameClaimCoachmark");
    return (0, i.bG)(
        [r.A, a.A],
        () => !!t && !!r.A.canWithPartialContext(s.xBc.ADMINISTRATOR, { guildId: e }) && a.A.hasUnclaimedGames(e),
        [e, t],
    );
}
