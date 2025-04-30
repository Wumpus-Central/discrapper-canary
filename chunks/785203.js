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
    g = n(899667),
    m = n(496675),
    b = n(541566),
    _ = n(192513),
    E = n(255791),
    O = n(70956),
    y = n(267642),
    I = n(981631),
    v = (((r = {})[(r.ENABLE_PUBLIC_GUILD = 0)] = 'ENABLE_PUBLIC_GUILD'), (r[(r.APPLIED_GUILD_BOOST_GRACE_PERIOD = 1)] = 'APPLIED_GUILD_BOOST_GRACE_PERIOD'), (r[(r.MAX_MEMBER_COUNT = 2)] = 'MAX_MEMBER_COUNT'), (r[(r.GUILD_LIVE_CHANNEL = 3)] = 'GUILD_LIVE_CHANNEL'), (r[(r.GUILD_MFA_WARNING = 4)] = 'GUILD_MFA_WARNING'), (r[(r.COMMANDS_MIGRATION = 5)] = 'COMMANDS_MIGRATION'), (r[(r.APPLICATION_SUBSCRIPTION_EXPIRATION = 6)] = 'APPLICATION_SUBSCRIPTION_EXPIRATION'), (r[(r.HUB_STUDY_ROOM = 7)] = 'HUB_STUDY_ROOM'), (r[(r.CLAN_UPSELL = 8)] = 'CLAN_UPSELL'), r);
function C(e) {
    var t;
    let n = null != (t = null == e ? void 0 : e.id) ? t : I.lds,
        { lastFetchedAt: r } = (0, l.cj)([g.Z], () => ({
            appliedGuildBoosts: g.Z.getAppliedGuildBoostsForGuild(n),
            lastFetchedAt: g.Z.getLastFetchedAtForGuild(n)
        })),
        { lastDismissedGracePeriod: v, isGracePeriodVisible: C } = (0, l.cj)([b.Z], () => ({
            lastDismissedGracePeriod: b.Z.getLastDismissedGracePeriodForGuild(n),
            isGracePeriodVisible: b.Z.isVisible(n)
        })),
        S = (0, p.Ek)(n, 'GuildBoostingNoticeStore'),
        N = (0, l.e7)([f.Z], () => f.Z.isVisible(e)),
        T = (0, l.e7)([E.Z], () => E.Z.isVisible(e)),
        P = (0, l.e7)([m.Z], () => m.Z.can(I.Plq.ADMINISTRATOR, e)),
        j = null != v && Date.now() - v <= I.Dge,
        A = (0, y.Jh)(n) !== I.Eu4.NONE,
        Z = !(null != r && Date.now() - r <= 43200000) && !j && P && A,
        x = (0, s.m)(n),
        w = (0, l.e7)([_.Z], () => _.Z.isVisible(e)),
        L = d.Z.useShouldShowChannelNotice(n),
        R = (0, h.h6)(e),
        { enableStudyGroup: D } = (0, u.s)(e),
        k = R.length > 0,
        M = D && !(null == e ? void 0 : e.hasFeature(I.oNc.HUB)),
        U = (0, c.Vm)(n);
    if (
        (i.useEffect(() => {
            o.Z.getGuildEventsForCurrentUser(n);
        }, [n]),
        i.useEffect(() => {
            let e = -1;
            return (
                Z &&
                    (e = window.setTimeout(
                        () => {
                            null != n && (0, a.C0)(n);
                        },
                        30 * Math.random() * O.Z.Millis.SECOND
                    )),
                () => {
                    window.clearTimeout(e);
                }
            );
        }, [n, Z]),
        N)
    )
        return 0;
    if (C && !S) return 1;
    if (T) return 2;
    if (x || null != U) return 3;
    if (w) return 4;
    else if (L) return 5;
    else if (k) return 6;
    else if (M) return 7;
    return null;
}
