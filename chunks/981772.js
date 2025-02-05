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
    var t, l, a;
    let { message: r, channel: o, compact: c } = e,
        { guild: d, joinRequest: u, usernameHook: m, guildNameClick: p } = h(r, o);
    return (0, i.jsx)(s.Z, {
        icon: n(570111),
        timestamp: r.timestamp,
        compact: c,
        children: _.intl.format(_.t['21R6Cg'], {
            username: null !== (l = null == u ? void 0 : null === (t = u.user) || void 0 === t ? void 0 : t.username) && void 0 !== l ? l : '',
            usernameHook: m(),
            guildName: null !== (a = null == d ? void 0 : d.name) && void 0 !== a ? a : '',
            guildNameClick: p
        })
    });
}
function g(e) {
    var t, l, a;
    let { message: r, channel: o, compact: c } = e,
        { guild: d, joinRequest: u, usernameHook: m, guildNameClick: p } = h(r, o);
    return (0, i.jsx)(s.Z, {
        icon: n(474019),
        timestamp: r.timestamp,
        compact: c,
        children: _.intl.format(_.t['Bz/QCw'], {
            username: null !== (l = null == u ? void 0 : null === (t = u.user) || void 0 === t ? void 0 : t.username) && void 0 !== l ? l : '',
            usernameHook: m(),
            guildName: null !== (a = null == d ? void 0 : d.name) && void 0 !== a ? a : '',
            guildNameClick: p
        })
    });
}
function f(e) {
    var t, l, a;
    let { message: r, channel: o, compact: c } = e,
        { guild: d, joinRequest: u, usernameHook: m, guildNameClick: p } = h(r, o);
    return (0, i.jsx)(s.Z, {
        icon: n(474019),
        timestamp: r.timestamp,
        compact: c,
        children: _.intl.format(_.t.Kpkesr, {
            username: null !== (l = null == u ? void 0 : null === (t = u.user) || void 0 === t ? void 0 : t.username) && void 0 !== l ? l : '',
            usernameHook: m(),
            guildName: null !== (a = null == d ? void 0 : d.name) && void 0 !== a ? a : '',
            guildNameClick: p
        })
    });
}
