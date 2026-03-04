n.d(t, { EC: () => R, j8: () => S, uZ: () => N }), n(938796);
var i = n(64700),
    l = n(417597),
    r = n(159001),
    a = n(780964),
    s = n(961350),
    o = n(696451),
    c = n(71393),
    _ = n(576705),
    E = n(967198),
    d = n(229527),
    u = n(652215),
    A = n(340837),
    T = n(355097),
    I = n(985018);
function N(e) {
    return (0, l.bG)([s.default, o.Ay], () => {
        if (null == e) return !1;
        let t = s.default.getId();
        return (0, d.TR)(o.Ay.getMember(e, t));
    }, [e]);
}
function R(e) {
    return (0, l.cf)([s.default, o.Ay, E.A, c.A], () => {
        let t = { nick: void 0, bio: void 0 },
            n = E.A.getGuildId(),
            i = e ?? n,
            l = c.A.getGuild(i);
        if (null == l || null == i) return t;
        let r = s.default.getId(),
            a = o.Ay.getMember(i, r),
            _ = (0, d.wR)(a?.flags);
        return (
            0 === _.size ||
                (_.has(A.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) &&
                    (null == e
                        ? (t.nick = [I.intl.formatToPlainString(I.t.WBUh3O, { guildName: l.name ?? "" })])
                        : (t.nick = [I.intl.string(I.t.EPZCrM)])),
                _.has(A.D.AUTOMOD_QUARANTINED_BIO) && (t.bio = [I.intl.string(I.t.dZh1vz)])),
            t
        );
    }, [e]);
}
function S(e) {
    let { guildId: t, scrollPosition: s, analyticsLocations: o } = e,
        E = (0, l.bG)([c.A], () => c.A.getGuild(t), [t]),
        d = (0, l.bG)([_.A], () => null != E && _.A.can(u.xBc.CHANGE_NICKNAME, E), [E]);
    return [
        i.useCallback(() => {
            if (null == E) return;
            let e = u.nc_.PROFILE_CUSTOMIZATION,
                t = T.Eq.GUILD;
            d ? (0, r.V2)(E.id) : (t = T.Eq.USER_PROFILE);
            {
                let { openUserSettings: i } = n(840065);
                i(a.X.PROFILE_PANEL, { section: e, subsection: t, scrollPosition: s, analyticsLocations: o });
            }
        }, [d, s, o, E]),
        d,
    ];
}
