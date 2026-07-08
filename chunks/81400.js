"use strict";
n.d(t, { EC: () => I, j8: () => T, uZ: () => A }), n(938796);
var i = n(64700),
    r = n(702841),
    s = n(159001),
    a = n(507553),
    o = n(591179),
    l = n(780964),
    u = n(280450),
    c = n(696451),
    d = n(71393),
    _ = n(576705),
    h = n(967198),
    f = n(229527),
    E = n(652215),
    p = n(340837),
    m = n(355097),
    g = n(375708);
function A(e) {
    return (0, r.bG)([u.default, c.Ay], () => {
        if (null == e) return !1;
        let t = u.default.getId();
        return (0, f.TR)(c.Ay.getMember(e, t));
    }, [e]);
}
function I(e) {
    return (0, r.cf)([u.default, c.Ay, h.A, d.A], () => {
        let t = { nick: void 0, bio: void 0 },
            n = h.A.getGuildId(),
            i = e ?? n,
            r = d.A.getGuild(i);
        if (null == r || null == i) return t;
        let s = u.default.getId(),
            a = c.Ay.getMember(i, s),
            o = (0, f.wR)(a?.flags);
        return (
            0 === o.size ||
                (o.has(p.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) &&
                    (null == e
                        ? (t.nick = [g.intl.formatToPlainString(g.t.WBUh3O, { guildName: r.name ?? "" })])
                        : (t.nick = [g.intl.string(g.t.EPZCrM)])),
                o.has(p.D.AUTOMOD_QUARANTINED_BIO) && (t.bio = [g.intl.string(g.t.dZh1vz)])),
            t
        );
    }, [e]);
}
function T(e) {
    let { guildId: t, scrollPosition: c, analyticsLocations: h } = e,
        f = (0, r.bG)([d.A], () => d.A.getGuild(t), [t]),
        p = (0, r.bG)([_.A], () => null != f && _.A.can(E.xBc.CHANGE_NICKNAME, f), [f]),
        g = (0, o.X)("AutomodQuarantineUtils");
    return [
        i.useCallback(() => {
            if (null == f) return;
            E.nc_.PROFILE_CUSTOMIZATION;
            let e = m.Eq.GUILD;
            if ((p ? (0, s.V2)(f.id) : (e = m.Eq.USER_PROFILE), g)) {
                let { openUserProfileModal: e } = n(975732);
                e({ userId: u.default.getId(), guildId: f.id, sourceAnalyticsLocations: h });
            } else {
                let { openUserSettings: t } = n(766075);
                a.A.setState({ subsection: e, scrollPosition: c }), t(l.X.PROFILE_PANEL, { analyticsLocations: h });
            }
        }, [p, c, h, f, g]),
        p,
    ];
}
