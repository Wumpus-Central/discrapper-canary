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
    h = n(388032);
let _ = (e, t) => {
    let { joinRequest: n, joinRequestGuild: i } = (0, m.Z)(t.id),
        s = (0, a.e7)([u.default], () => u.default.getUser(null == n ? void 0 : n.userId)),
        h = (0, r.l)({
            user: s,
            channelId: t.id,
            guildId: t.guild_id,
            messageId: e.id
        }),
        _ = (0, a.e7)([d.ZP, c.default], () => d.ZP.isMember(null == i ? void 0 : i.id, c.default.getId())),
        p = l.useCallback(() => {
            _ && null != i && (0, o.XU)(i.id);
        }, [i, _]);
    return {
        guild: i,
        joinRequest: n,
        usernameHook: h,
        guildNameClick: p
    };
};
function p(e) {
    var t, l, a;
    let { message: r, channel: o, compact: c } = e,
        { guild: d, joinRequest: u, usernameHook: m, guildNameClick: p } = _(r, o);
    return (0, i.jsx)(s.Z, {
        icon: n(570111),
        timestamp: r.timestamp,
        compact: c,
        children: h.intl.format(h.t['21R6Cg'], {
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
        { guild: d, joinRequest: u, usernameHook: m, guildNameClick: p } = _(r, o);
    return (0, i.jsx)(s.Z, {
        icon: n(474019),
        timestamp: r.timestamp,
        compact: c,
        children: h.intl.format(h.t['Bz/QCw'], {
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
        { guild: d, joinRequest: u, usernameHook: m, guildNameClick: p } = _(r, o);
    return (0, i.jsx)(s.Z, {
        icon: n(474019),
        timestamp: r.timestamp,
        compact: c,
        children: h.intl.format(h.t.Kpkesr, {
            username: null !== (l = null == u ? void 0 : null === (t = u.user) || void 0 === t ? void 0 : t.username) && void 0 !== l ? l : '',
            usernameHook: m(),
            guildName: null !== (a = null == d ? void 0 : d.name) && void 0 !== a ? a : '',
            guildNameClick: p
        })
    });
}
