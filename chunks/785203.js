n.d(t, {
    R: () => T,
    Z: () => S
});
var i,
    l = n(192379),
    r = n(442837),
    a = n(179360),
    s = n(897285),
    o = n(300213),
    c = n(554747),
    d = n(499137),
    u = n(929507),
    h = n(270144),
    m = n(400271),
    p = n(678513),
    g = n(899667),
    _ = n(496675),
    f = n(541566),
    E = n(192513),
    I = n(255791),
    C = n(70956),
    N = n(267642),
    v = n(981631),
    T = (((i = {})[(i.ENABLE_PUBLIC_GUILD = 0)] = 'ENABLE_PUBLIC_GUILD'), (i[(i.APPLIED_GUILD_BOOST_GRACE_PERIOD = 1)] = 'APPLIED_GUILD_BOOST_GRACE_PERIOD'), (i[(i.MAX_MEMBER_COUNT = 2)] = 'MAX_MEMBER_COUNT'), (i[(i.GUILD_LIVE_CHANNEL = 3)] = 'GUILD_LIVE_CHANNEL'), (i[(i.GUILD_MFA_WARNING = 4)] = 'GUILD_MFA_WARNING'), (i[(i.COMMANDS_MIGRATION = 5)] = 'COMMANDS_MIGRATION'), (i[(i.APPLICATION_SUBSCRIPTION_EXPIRATION = 6)] = 'APPLICATION_SUBSCRIPTION_EXPIRATION'), (i[(i.HUB_STUDY_ROOM = 7)] = 'HUB_STUDY_ROOM'), (i[(i.SIGNUP = 8)] = 'SIGNUP'), (i[(i.CLAN_UPSELL = 9)] = 'CLAN_UPSELL'), i);
function S(e) {
    var t;
    let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : v.lds,
        { lastFetchedAt: i } = (0, r.cj)([g.Z], () => ({
            appliedGuildBoosts: g.Z.getAppliedGuildBoostsForGuild(n),
            lastFetchedAt: g.Z.getLastFetchedAtForGuild(n)
        })),
        { lastDismissedGracePeriod: T, isGracePeriodVisible: S } = (0, r.cj)([f.Z], () => ({
            lastDismissedGracePeriod: f.Z.getLastDismissedGracePeriodForGuild(n),
            isGracePeriodVisible: f.Z.isVisible(n)
        })),
        A = (0, r.e7)([m.Z], () => m.Z.isVisible(e)),
        b = (0, r.e7)([I.Z], () => I.Z.isVisible(e)),
        Z = (0, r.e7)([_.Z], () => _.Z.can(v.Plq.ADMINISTRATOR, e)),
        x = null != T && Date.now() - T <= v.Dge,
        L = null != e ? e.premiumSubscriberCount : 0,
        y = (0, N.rF)(L, n) !== v.Eu4.NONE,
        P = !(null != i && Date.now() - i <= 43200000) && !x && Z && y,
        O = (0, o.m)(n),
        R = (0, r.e7)([E.Z], () => E.Z.isVisible(e)),
        j = u.Z.useShouldShowChannelNotice(n),
        D = (0, h.h6)(e),
        { enableStudyGroup: w } = (0, d.s)(e),
        k = D.length > 0,
        M = w && !(null == e ? void 0 : e.hasFeature(v.oNc.HUB)),
        U = (0, c.Vm)(n),
        G = (0, r.e7)([p.Z], () => null != p.Z.getActiveGuildSignUp(n));
    if (
        (l.useEffect(() => {
            s.Z.getGuildEventsForCurrentUser(n);
        }, [n]),
        l.useEffect(() => {
            let e = -1;
            return (
                P &&
                    (e = window.setTimeout(
                        () => {
                            null != n && (0, a.C0)(n);
                        },
                        30 * Math.random() * C.Z.Millis.SECOND
                    )),
                () => {
                    window.clearTimeout(e);
                }
            );
        }, [n, P]),
        A)
    )
        return 0;
    if (S) return 1;
    if (b) return 2;
    if (O || null != U) return 3;
    if (R) return 4;
    else if (j) return 5;
    else if (k) return 6;
    else if (M) return 7;
    else if (G) return 8;
    return null;
}
