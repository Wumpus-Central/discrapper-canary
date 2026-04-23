i.d(e, { EC: () => M, j8: () => U, uZ: () => O }), i(938796);
var l = i(64700),
    n = i(702841),
    u = i(159001),
    r = i(507553),
    A = i(591179),
    a = i(780964),
    d = i(495544),
    o = i(696451),
    s = i(71393),
    f = i(576705),
    E = i(967198),
    _ = i(229527),
    c = i(652215),
    g = i(340837),
    I = i(355097),
    N = i(985018);
function O(t) {
    return (0, n.bG)([d.default, o.Ay], () => {
        if (null == t) return !1;
        let e = d.default.getId();
        return (0, _.TR)(o.Ay.getMember(t, e));
    }, [t]);
}
function M(t) {
    return (0, n.cf)([d.default, o.Ay, E.A, s.A], () => {
        let e = { nick: void 0, bio: void 0 },
            i = E.A.getGuildId(),
            l = t ?? i,
            n = s.A.getGuild(l);
        if (null == n || null == l) return e;
        let u = d.default.getId(),
            r = o.Ay.getMember(l, u),
            A = (0, _.wR)(r?.flags);
        return (
            0 === A.size ||
                (A.has(g.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) &&
                    (null == t
                        ? (e.nick = [N.intl.formatToPlainString(N.t.WBUh3O, { guildName: n.name ?? "" })])
                        : (e.nick = [N.intl.string(N.t.EPZCrM)])),
                A.has(g.D.AUTOMOD_QUARANTINED_BIO) && (e.bio = [N.intl.string(N.t.dZh1vz)])),
            e
        );
    }, [t]);
}
function U(t) {
    let { guildId: e, scrollPosition: o, analyticsLocations: E } = t,
        _ = (0, n.bG)([s.A], () => s.A.getGuild(e), [e]),
        g = (0, n.bG)([f.A], () => null != _ && f.A.can(c.xBc.CHANGE_NICKNAME, _), [_]),
        N = (0, A.X)("AutomodQuarantineUtils");
    return [
        l.useCallback(() => {
            if (null == _) return;
            c.nc_.PROFILE_CUSTOMIZATION;
            let t = I.Eq.GUILD;
            if ((g ? (0, u.V2)(_.id) : (t = I.Eq.USER_PROFILE), N)) {
                let { openUserProfileModal: t } = i(975732);
                t({ userId: d.default.getId(), guildId: _.id, sourceAnalyticsLocations: E });
            } else {
                let { openUserSettings: e } = i(858897);
                r.A.setState({ subsection: t, scrollPosition: o }), e(a.X.PROFILE_PANEL, { analyticsLocations: E });
            }
        }, [g, o, E, _, N]),
        g,
    ];
}
