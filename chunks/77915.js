l.d(t, { B6: () => c, MX: () => u, WK: () => o, XG: () => d });
var n = l(17928),
    i = l(30370),
    a = l(17085),
    s = l(652215);
function r(e) {
    return e.type === s.fg2.SPOTIFY && !e.revoked;
}
function d() {
    return i.A.getAccounts().filter(r);
}
function c() {
    return (0, n.bG)([i.A], () => i.A.getAccounts().filter(r).length > 0);
}
function o() {
    return (0, n.bG)([i.A], () =>
        i.A.getAccounts()
            .filter(r)
            .some((e) => e.showActivity),
    );
}
function u(e) {
    let { isSharingActivityInGuild: t, hasFetchedConsents: l, hasPersonalizationConsent: n } = (0, a.T4)(e);
    return { isSpotifyConnected: c(), hasFetchedConsents: l, isContributing: o() && t && n };
}
