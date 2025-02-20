n.d(t, {
    Cn: () => h,
    R6: () => _,
    Ue: () => g
});
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(942951),
    l = n(834129),
    s = n(703656),
    c = n(314897),
    d = n(271383),
    u = n(594174),
    p = n(805519),
    m = n(388032);
let f = (e, t) => {
    let { joinRequest: n, joinRequestGuild: r } = (0, p.Z)(t.id),
        l = (0, a.e7)([u.default], () => u.default.getUser(null == n ? void 0 : n.userId)),
        m = (0, o.l)({
            user: l,
            channelId: t.id,
            guildId: t.guild_id,
            messageId: e.id
        }),
        f = (0, a.e7)([d.ZP, c.default], () => d.ZP.isMember(null == r ? void 0 : r.id, c.default.getId())),
        h = i.useCallback(() => {
            f && null != r && (0, s.XU)(r.id);
        }, [r, f]);
    return {
        guild: r,
        joinRequest: n,
        usernameHook: m,
        guildNameClick: h
    };
};
function h(e) {
    var t;
    let { message: i, channel: a, compact: o } = e,
        { guild: s, joinRequest: c, usernameHook: d, guildNameClick: u } = f(i, a),
        p = null == c ? void 0 : null === (t = c.user) || void 0 === t ? void 0 : t.username,
        h = null == s ? void 0 : s.name;
    return (0, r.jsx)(l.Z, {
        icon: n(570111),
        timestamp: i.timestamp,
        compact: o,
        children:
            null != p && null != h
                ? m.NW.format(m.t['21R6Cg'], {
                      username: p,
                      usernameHook: d(),
                      guildName: h,
                      guildNameClick: u
                  })
                : m.NW.string(m.t['2VLV0d'])
    });
}
function g(e) {
    var t;
    let { message: i, channel: a, compact: o } = e,
        { guild: s, joinRequest: c, usernameHook: d, guildNameClick: u } = f(i, a),
        p = null == c ? void 0 : null === (t = c.user) || void 0 === t ? void 0 : t.username,
        h = null == s ? void 0 : s.name;
    return (0, r.jsx)(l.Z, {
        icon: n(474019),
        timestamp: i.timestamp,
        compact: o,
        children:
            null != p && null != h
                ? m.NW.format(m.t['Bz/QCw'], {
                      username: p,
                      usernameHook: d(),
                      guildName: h,
                      guildNameClick: u
                  })
                : m.NW.string(m.t.FVF6qa)
    });
}
function _(e) {
    var t;
    let { message: i, channel: a, compact: o } = e,
        { guild: s, joinRequest: c, usernameHook: d, guildNameClick: u } = f(i, a),
        p = null == c ? void 0 : null === (t = c.user) || void 0 === t ? void 0 : t.username,
        h = null == s ? void 0 : s.name;
    return (0, r.jsx)(l.Z, {
        icon: n(474019),
        timestamp: i.timestamp,
        compact: o,
        children:
            null != p && null != h
                ? m.NW.format(m.t.Kpkesr, {
                      username: p,
                      usernameHook: d(),
                      guildName: h,
                      guildNameClick: u
                  })
                : m.NW.string(m.t.BMlbEx)
    });
}
