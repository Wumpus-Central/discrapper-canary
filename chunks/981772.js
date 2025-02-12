n.d(t, {
    Cn: () => p,
    R6: () => f,
    Ue: () => g
});
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(942951),
    s = n(834129),
    o = n(703656),
    c = n(314897),
    d = n(271383),
    u = n(594174),
    m = n(805519),
    _ = n(388032);
let h = (e, t) => {
    let { joinRequest: n, joinRequestGuild: i } = (0, m.Z)(t.id),
        s = (0, a.e7)([u.default], () => u.default.getUser(null == n ? void 0 : n.userId)),
        _ = (0, r.l)({
            user: s,
            channelId: t.id,
            guildId: t.guild_id,
            messageId: e.id
        }),
        h = (0, a.e7)([d.ZP, c.default], () => d.ZP.isMember(null == i ? void 0 : i.id, c.default.getId())),
        p = l.useCallback(() => {
            h && null != i && (0, o.XU)(i.id);
        }, [i, h]);
    return {
        guild: i,
        joinRequest: n,
        usernameHook: _,
        guildNameClick: p
    };
};
function p(e) {
    var t;
    let { message: l, channel: a, compact: r } = e,
        { guild: o, joinRequest: c, usernameHook: d, guildNameClick: u } = h(l, a),
        m = null == c ? void 0 : null === (t = c.user) || void 0 === t ? void 0 : t.username,
        p = null == o ? void 0 : o.name;
    return (0, i.jsx)(s.Z, {
        icon: n(570111),
        timestamp: l.timestamp,
        compact: r,
        children:
            null != m && null != p
                ? _.intl.format(_.t['21R6Cg'], {
                      username: m,
                      usernameHook: d(),
                      guildName: p,
                      guildNameClick: u
                  })
                : _.intl.string(_.t['2VLV0d'])
    });
}
function g(e) {
    var t;
    let { message: l, channel: a, compact: r } = e,
        { guild: o, joinRequest: c, usernameHook: d, guildNameClick: u } = h(l, a),
        m = null == c ? void 0 : null === (t = c.user) || void 0 === t ? void 0 : t.username,
        p = null == o ? void 0 : o.name;
    return (0, i.jsx)(s.Z, {
        icon: n(474019),
        timestamp: l.timestamp,
        compact: r,
        children:
            null != m && null != p
                ? _.intl.format(_.t['Bz/QCw'], {
                      username: m,
                      usernameHook: d(),
                      guildName: p,
                      guildNameClick: u
                  })
                : _.intl.string(_.t.FVF6qa)
    });
}
function f(e) {
    var t;
    let { message: l, channel: a, compact: r } = e,
        { guild: o, joinRequest: c, usernameHook: d, guildNameClick: u } = h(l, a),
        m = null == c ? void 0 : null === (t = c.user) || void 0 === t ? void 0 : t.username,
        p = null == o ? void 0 : o.name;
    return (0, i.jsx)(s.Z, {
        icon: n(474019),
        timestamp: l.timestamp,
        compact: r,
        children:
            null != m && null != p
                ? _.intl.format(_.t.Kpkesr, {
                      username: m,
                      usernameHook: d(),
                      guildName: p,
                      guildNameClick: u
                  })
                : _.intl.string(_.t.BMlbEx)
    });
}
