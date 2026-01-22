n.d(t, {
    EC: () => E,
    j8: () => b,
    uZ: () => g,
}),
    n(938796);
var r = n(64700),
    i = n(417597),
    a = n(159001),
    s = n(780964),
    o = n(961350),
    l = n(696451),
    c = n(71393),
    u = n(576705),
    d = n(967198),
    f = n(229527),
    p = n(652215),
    _ = n(340837),
    h = n(355097),
    m = n(985018);

function g(e) {
    return (0, i.bG)([o.default, l.Ay], () => {
        if (null == e) return !1;
        let t = o.default.getId();
        return (0, f.TR)(l.Ay.getMember(e, t));
    }, [e]);
}

function E(e) {
    return (0, i.cf)([o.default, l.Ay, d.A, c.A], () => {
        let t = {
                nick: void 0,
                bio: void 0,
            },
            n = d.A.getGuildId(),
            r = null != e ? e : n,
            i = c.A.getGuild(r);
        if (null == i || null == r) return t;
        let a = o.default.getId(),
            s = l.Ay.getMember(r, a),
            u = (0, f.wR)(null == s ? void 0 : s.flags);
        if (0 === u.size) return t;
        if (u.has(_.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME))
            if (null == e) {
                var p;
                t.nick = [
                    m.intl.formatToPlainString(m.t.WBUh3O, {
                        guildName: null != (p = i.name) ? p : "",
                    }),
                ];
            } else t.nick = [m.intl.string(m.t.EPZCrM)];
        return u.has(_.D.AUTOMOD_QUARANTINED_BIO) && (t.bio = [m.intl.string(m.t.dZh1vz)]), t;
    }, [e]);
}

function b(e) {
    let { guildId: t, scrollPosition: o, analyticsLocations: l } = e,
        d = (0, i.bG)([c.A], () => c.A.getGuild(t), [t]),
        f = (0, i.bG)([u.A], () => null != d && u.A.can(p.xBc.CHANGE_NICKNAME, d), [d]);
    return [
        r.useCallback(() => {
            if (null == d) return;
            let e = p.nc_.PROFILE_CUSTOMIZATION,
                t = h.Eq.GUILD;
            f ? (0, a.V2)(d) : (t = h.Eq.USER_PROFILE);
            {
                let { openUserSettings: r } = n(840065);
                r(s.X.PROFILE_PANEL, {
                    section: e,
                    subsection: t,
                    scrollPosition: o,
                    analyticsLocations: l,
                });
            }
        }, [f, o, l, d]),
        f,
    ];
}
