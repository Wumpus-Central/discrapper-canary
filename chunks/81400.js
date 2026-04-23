"use strict";
n.d(t, { EC: () => p, j8: () => C, uZ: () => g }), n(938796);
var i = n(64700),
    r = n(417597),
    l = n(159001),
    s = n(507553),
    a = n(591179),
    o = n(780964),
    c = n(961350),
    u = n(696451),
    d = n(71393),
    _ = n(576705),
    E = n(967198),
    A = n(229527),
    m = n(652215),
    I = n(340837),
    T = n(355097),
    N = n(985018);
function g(e) {
    return (0, r.bG)([c.default, u.Ay], () => {
        if (null == e) return !1;
        let t = c.default.getId();
        return (0, A.TR)(u.Ay.getMember(e, t));
    }, [e]);
}
function p(e) {
    return (0, r.cf)([c.default, u.Ay, E.A, d.A], () => {
        let t = { nick: void 0, bio: void 0 },
            n = E.A.getGuildId(),
            i = e ?? n,
            r = d.A.getGuild(i);
        if (null == r || null == i) return t;
        let l = c.default.getId(),
            s = u.Ay.getMember(i, l),
            a = (0, A.wR)(s?.flags);
        return (
            0 === a.size ||
                (a.has(I.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) &&
                    (null == e
                        ? (t.nick = [N.intl.formatToPlainString(N.t.WBUh3O, { guildName: r.name ?? "" })])
                        : (t.nick = [N.intl.string(N.t.EPZCrM)])),
                a.has(I.D.AUTOMOD_QUARANTINED_BIO) && (t.bio = [N.intl.string(N.t.dZh1vz)])),
            t
        );
    }, [e]);
}
function C(e) {
    let { guildId: t, scrollPosition: u, analyticsLocations: E } = e,
        A = (0, r.bG)([d.A], () => d.A.getGuild(t), [t]),
        I = (0, r.bG)([_.A], () => null != A && _.A.can(m.xBc.CHANGE_NICKNAME, A), [A]),
        N = (0, a.X)("AutomodQuarantineUtils");
    return [
        i.useCallback(() => {
            if (null == A) return;
            m.nc_.PROFILE_CUSTOMIZATION;
            let e = T.Eq.GUILD;
            if ((I ? (0, l.V2)(A.id) : (e = T.Eq.USER_PROFILE), N)) {
                let { openUserProfileModal: e } = n(657331);
                e({ userId: c.default.getId(), guildId: A.id, sourceAnalyticsLocations: E });
            } else {
                let { openUserSettings: t } = n(858897);
                s.A.setState({ subsection: e, scrollPosition: u }), t(o.X.PROFILE_PANEL, { analyticsLocations: E });
            }
        }, [I, u, E, A, N]),
        I,
    ];
}
