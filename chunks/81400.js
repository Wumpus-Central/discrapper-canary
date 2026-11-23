i(938796);
var n = i(582128),
    l = i(164636),
    u = i(159001);
i(729934);
var r = i(46653),
    d = i(696451),
    A = i(71393),
    a = i(576705),
    c = i(967198),
    s = i(229527),
    I = i(652215),
    o = i(340837),
    f = i(355097),
    g = i(792996);
i.d(
    e,
    {},
    {
        EC: function (t) {
            return (0, l.cf)(
                [r.default, d.Ay, c.A, A.A],
                () => {
                    let e = { nick: void 0, bio: void 0 },
                        i = c.A.getGuildId(),
                        n = t ?? i,
                        l = A.A.getGuild(n);
                    if (null == l || null == n) return e;
                    let u = r.default.getId(),
                        a = d.Ay.getMember(n, u),
                        I = (0, s.wR)(a?.flags);
                    return (
                        0 === I.size ||
                            (I.has(o.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) &&
                                (null == t
                                    ? (e.nick = [g.intl.formatToPlainString(g.t.WBUh3O, { guildName: l.name ?? "" })])
                                    : (e.nick = [g.intl.string(g.t.EPZCrM)])),
                            I.has(o.D.AUTOMOD_QUARANTINED_BIO) && (e.bio = [g.intl.string(g.t.dZh1vz)])),
                        e
                    );
                },
                [t],
            );
        },
        j8: function (t) {
            let { guildId: e, scrollPosition: d, analyticsLocations: c } = t,
                s = (0, l.bG)([A.A], () => A.A.getGuild(e), [e]),
                o = (0, l.bG)([a.A], () => null != s && a.A.can(I.xBc.CHANGE_NICKNAME, s), [s]);
            return [
                n.useCallback(() => {
                    if (null != s) {
                        (I.nc_.PROFILE_CUSTOMIZATION, f.Eq.GUILD, o ? (0, u.V2)(s.id) : f.Eq.USER_PROFILE);
                        {
                            let { openUserProfileModal: t } = i(100663);
                            t({ userId: r.default.getId(), guildId: o ? s.id : void 0, sourceAnalyticsLocations: c });
                        }
                    }
                }, [o, d, c, s]),
                o,
            ];
        },
        uZ: function (t) {
            return (0, l.bG)(
                [r.default, d.Ay],
                () => {
                    if (null == t) return !1;
                    let e = r.default.getId();
                    return (0, s.TR)(d.Ay.getMember(t, e));
                },
                [t],
            );
        },
    },
);
