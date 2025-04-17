n.d(t, {
    R: () => v,
    Z: () => C
});
var r,
    i = n(192379),
    l = n(442837),
    a = n(179360),
    o = n(897285),
    s = n(300213),
    c = n(554747),
    u = n(499137),
    d = n(929507),
    p = n(50101),
    h = n(270144),
    f = n(400271),
    g = n(678513),
    m = n(899667),
    b = n(496675),
    _ = n(541566),
    E = n(192513),
    O = n(255791),
    N = n(70956),
    y = n(267642),
    I = n(981631),
    v = (((r = {})[(r.ENABLE_PUBLIC_GUILD = 0)] = 'ENABLE_PUBLIC_GUILD'), (r[(r.APPLIED_GUILD_BOOST_GRACE_PERIOD = 1)] = 'APPLIED_GUILD_BOOST_GRACE_PERIOD'), (r[(r.MAX_MEMBER_COUNT = 2)] = 'MAX_MEMBER_COUNT'), (r[(r.GUILD_LIVE_CHANNEL = 3)] = 'GUILD_LIVE_CHANNEL'), (r[(r.GUILD_MFA_WARNING = 4)] = 'GUILD_MFA_WARNING'), (r[(r.COMMANDS_MIGRATION = 5)] = 'COMMANDS_MIGRATION'), (r[(r.APPLICATION_SUBSCRIPTION_EXPIRATION = 6)] = 'APPLICATION_SUBSCRIPTION_EXPIRATION'), (r[(r.HUB_STUDY_ROOM = 7)] = 'HUB_STUDY_ROOM'), (r[(r.SIGNUP = 8)] = 'SIGNUP'), (r[(r.CLAN_UPSELL = 9)] = 'CLAN_UPSELL'), r);
function C(e) {
    var t;
    let n = null != (t = null == e ? void 0 : e.id) ? t : I.lds,
        { lastFetchedAt: r } = (0, l.cj)([m.Z], () => ({
            appliedGuildBoosts: m.Z.getAppliedGuildBoostsForGuild(n),
            lastFetchedAt: m.Z.getLastFetchedAtForGuild(n)
        })),
        { lastDismissedGracePeriod: v, isGracePeriodVisible: C } = (0, l.cj)([_.Z], () => ({
            lastDismissedGracePeriod: _.Z.getLastDismissedGracePeriodForGuild(n),
            isGracePeriodVisible: _.Z.isVisible(n)
        })),
        S = (0, p.Ek)(n, 'GuildBoostingNoticeStore'),
        T = (0, l.e7)([f.Z], () => f.Z.isVisible(e)),
        P = (0, l.e7)([O.Z], () => O.Z.isVisible(e)),
        j = (0, l.e7)([b.Z], () => b.Z.can(I.Plq.ADMINISTRATOR, e)),
        A = null != v && Date.now() - v <= I.Dge,
        Z = (0, y.Jh)(n) !== I.Eu4.NONE,
        x = !(null != r && Date.now() - r <= 43200000) && !A && j && Z,
        L = (0, s.m)(n),
        w = (0, l.e7)([E.Z], () => E.Z.isVisible(e)),
        R = d.Z.useShouldShowChannelNotice(n),
        D = (0, h.h6)(e),
        { enableStudyGroup: k } = (0, u.s)(e),
        M = D.length > 0,
        U = k && !(null == e ? void 0 : e.hasFeature(I.oNc.HUB)),
        G = (0, c.Vm)(n),
        W = (0, l.e7)([g.Z], () => null != g.Z.getActiveGuildSignUp(n));
    if (
        (i.useEffect(() => {
            o.Z.getGuildEventsForCurrentUser(n);
        }, [n]),
        i.useEffect(() => {
            let e = -1;
            return (
                x &&
                    (e = window.setTimeout(
                        () => {
                            null != n && (0, a.C0)(n);
                        },
                        30 * Math.random() * N.Z.Millis.SECOND
                    )),
                () => {
                    window.clearTimeout(e);
                }
            );
        }, [n, x]),
        T)
    )
        return 0;
    if (C && !S) return 1;
    if (P) return 2;
    if (L || null != G) return 3;
    if (w) return 4;
    else if (R) return 5;
    else if (M) return 6;
    else if (U) return 7;
    else if (W) return 8;
    return null;
}
