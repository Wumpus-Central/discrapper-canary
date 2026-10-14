l.d(t, { B6: () => c, MX: () => o, WK: () => u, XG: () => d });
var n = l(17928),
    i = l(30370),
    s = l(606072),
    a = l(652215);
function r(e) {
    return e.type === a.fg2.SPOTIFY && !e.revoked;
}
function d() {
    return i.A.getAccounts().filter(r);
}
function c() {
    return (0, n.bG)([i.A], () => i.A.getAccounts().filter(r).length > 0);
}
function u() {
    return (0, n.bG)([i.A], () =>
        i.A.getAccounts()
            .filter(r)
            .some((e) => e.showActivity),
    );
}
function o(e) {
    let { isSharingActivityInGuild: t, hasFetchedConsents: l, hasPersonalizationConsent: n } = (0, s.T4)(e);
    return { isSpotifyConnected: c(), hasFetchedConsents: l, isContributing: u() && t && n };
}
