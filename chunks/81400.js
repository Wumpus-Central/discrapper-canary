n.d(t, { EC: () => m, j8: () => R, uZ: () => N }), n(938796);
var i = n(64700),
    l = n(417597),
    r = n(159001),
    s = n(507553),
    a = n(780964),
    o = n(961350),
    c = n(696451),
    u = n(71393),
    d = n(576705),
    _ = n(967198),
    E = n(229527),
    T = n(652215),
    A = n(340837),
    I = n(355097),
    p = n(985018);
function N(e) {
    return (0, l.bG)([o.default, c.Ay], () => {
        if (null == e) return !1;
        let t = o.default.getId();
        return (0, E.TR)(c.Ay.getMember(e, t));
    }, [e]);
}
function m(e) {
    return (0, l.cf)([o.default, c.Ay, _.A, u.A], () => {
        let t = { nick: void 0, bio: void 0 },
            n = _.A.getGuildId(),
            i = e ?? n,
            l = u.A.getGuild(i);
        if (null == l || null == i) return t;
        let r = o.default.getId(),
            s = c.Ay.getMember(i, r),
            a = (0, E.wR)(s?.flags);
        return (
            0 === a.size ||
                (a.has(A.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) &&
                    (null == e
                        ? (t.nick = [p.intl.formatToPlainString(p.t.WBUh3O, { guildName: l.name ?? "" })])
                        : (t.nick = [p.intl.string(p.t.EPZCrM)])),
                a.has(A.D.AUTOMOD_QUARANTINED_BIO) && (t.bio = [p.intl.string(p.t.dZh1vz)])),
            t
        );
    }, [e]);
}
function R(e) {
    let { guildId: t, scrollPosition: o, analyticsLocations: c } = e,
        _ = (0, l.bG)([u.A], () => u.A.getGuild(t), [t]),
        E = (0, l.bG)([d.A], () => null != _ && d.A.can(T.xBc.CHANGE_NICKNAME, _), [_]);
    return [
        i.useCallback(() => {
            if (null == _) return;
            T.nc_.PROFILE_CUSTOMIZATION;
            let e = I.Eq.GUILD;
            E ? (0, r.V2)(_.id) : (e = I.Eq.USER_PROFILE);
            {
                let { openUserSettings: t } = n(840065);
                s.A.setState({ subsection: e, scrollPosition: o }), t(a.X.PROFILE_PANEL, { analyticsLocations: c });
            }
        }, [E, o, c, _]),
        E,
    ];
}
