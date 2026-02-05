n.d(t, { EC: () => R, j8: () => S, uZ: () => N }), n(938796);
var i = n(64700),
    l = n(417597),
    r = n(159001),
    s = n(780964),
    a = n(961350),
    o = n(696451),
    E = n(71393),
    c = n(576705),
    _ = n(967198),
    d = n(229527),
    A = n(652215),
    u = n(340837),
    T = n(355097),
    I = n(985018);
function N(e) {
    return (0, l.bG)([a.default, o.Ay], () => {
        if (null == e) return !1;
        let t = a.default.getId();
        return (0, d.TR)(o.Ay.getMember(e, t));
    }, [e]);
}
function R(e) {
    return (0, l.cf)([a.default, o.Ay, _.A, E.A], () => {
        let t = { nick: void 0, bio: void 0 },
            n = _.A.getGuildId(),
            i = e ?? n,
            l = E.A.getGuild(i);
        if (null == l || null == i) return t;
        let r = a.default.getId(),
            s = o.Ay.getMember(i, r),
            c = (0, d.wR)(s?.flags);
        return (
            0 === c.size ||
                (c.has(u.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) &&
                    (null == e
                        ? (t.nick = [I.intl.formatToPlainString(I.t.WBUh3O, { guildName: l.name ?? "" })])
                        : (t.nick = [I.intl.string(I.t.EPZCrM)])),
                c.has(u.D.AUTOMOD_QUARANTINED_BIO) && (t.bio = [I.intl.string(I.t.dZh1vz)])),
            t
        );
    }, [e]);
}
function S(e) {
    let { guildId: t, scrollPosition: a, analyticsLocations: o } = e,
        _ = (0, l.bG)([E.A], () => E.A.getGuild(t), [t]),
        d = (0, l.bG)([c.A], () => null != _ && c.A.can(A.xBc.CHANGE_NICKNAME, _), [_]);
    return [
        i.useCallback(() => {
            if (null == _) return;
            let e = A.nc_.PROFILE_CUSTOMIZATION,
                t = T.Eq.GUILD;
            d ? (0, r.V2)(_) : (t = T.Eq.USER_PROFILE);
            {
                let { openUserSettings: i } = n(840065);
                i(s.X.PROFILE_PANEL, { section: e, subsection: t, scrollPosition: a, analyticsLocations: o });
            }
        }, [d, a, o, _]),
        d,
    ];
}
