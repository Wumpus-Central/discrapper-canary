n.d(t, { B6: () => c, MX: () => u, WK: () => o, XG: () => d });
var l = n(17928),
    i = n(30370),
    a = n(606072),
    s = n(652215);
function r(e) {
    return e.type === s.fg2.SPOTIFY && !e.revoked;
}
function d() {
    return i.A.getAccounts().filter(r);
}
function c() {
    return (0, l.bG)([i.A], () => i.A.getAccounts().filter(r).length > 0);
}
function o() {
    return (0, l.bG)([i.A], () =>
        i.A.getAccounts()
            .filter(r)
            .some((e) => e.showActivity),
    );
}
function u(e) {
    let { isSharingActivityInGuild: t, hasFetchedConsents: n, hasPersonalizationConsent: l } = (0, a.T4)(e);
    return { isSpotifyConnected: c(), hasFetchedConsents: n, isContributing: o() && t && l };
}
