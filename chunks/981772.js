n.d(t, {
    Cn: function () {
        return p;
    },
    R6: function () {
        return g;
    },
    Ue: function () {
        return _;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(942951),
    o = n(834129),
    s = n(703656),
    c = n(314897),
    d = n(271383),
    u = n(594174),
    m = n(805519),
    h = n(388032);
let f = (e, t) => {
    let { joinRequest: n, joinRequestGuild: i } = (0, m.Z)(t.id),
        o = (0, l.e7)([u.default], () => u.default.getUser(null == n ? void 0 : n.userId)),
        h = (0, a.l)({
            user: o,
            channelId: t.id,
            guildId: t.guild_id,
            messageId: e.id
        }),
        f = (0, l.e7)([d.ZP, c.default], () => d.ZP.isMember(null == i ? void 0 : i.id, c.default.getId())),
        p = r.useCallback(() => {
            f && null != i && (0, s.XU)(i.id);
        }, [i, f]);
    return {
        guild: i,
        joinRequest: n,
        usernameHook: h,
        guildNameClick: p
    };
};
function p(e) {
    var t, r, l;
    let { message: a, channel: s, compact: c } = e,
        { guild: d, joinRequest: u, usernameHook: m, guildNameClick: p } = f(a, s);
    return (0, i.jsx)(o.Z, {
        icon: n(570111),
        timestamp: a.timestamp,
        compact: c,
        children: h.intl.format(h.t['21R6Cg'], {
            username: null !== (r = null == u ? void 0 : null === (t = u.user) || void 0 === t ? void 0 : t.username) && void 0 !== r ? r : '',
            usernameHook: m(),
            guildName: null !== (l = null == d ? void 0 : d.name) && void 0 !== l ? l : '',
            guildNameClick: p
        })
    });
}
function _(e) {
    var t, r, l;
    let { message: a, channel: s, compact: c } = e,
        { guild: d, joinRequest: u, usernameHook: m, guildNameClick: p } = f(a, s);
    return (0, i.jsx)(o.Z, {
        icon: n(474019),
        timestamp: a.timestamp,
        compact: c,
        children: h.intl.format(h.t['Bz/QCw'], {
            username: null !== (r = null == u ? void 0 : null === (t = u.user) || void 0 === t ? void 0 : t.username) && void 0 !== r ? r : '',
            usernameHook: m(),
            guildName: null !== (l = null == d ? void 0 : d.name) && void 0 !== l ? l : '',
            guildNameClick: p
        })
    });
}
function g(e) {
    var t, r, l;
    let { message: a, channel: s, compact: c } = e,
        { guild: d, joinRequest: u, usernameHook: m, guildNameClick: p } = f(a, s);
    return (0, i.jsx)(o.Z, {
        icon: n(474019),
        timestamp: a.timestamp,
        compact: c,
        children: h.intl.format(h.t.Kpkesr, {
            username: null !== (r = null == u ? void 0 : null === (t = u.user) || void 0 === t ? void 0 : t.username) && void 0 !== r ? r : '',
            usernameHook: m(),
            guildName: null !== (l = null == d ? void 0 : d.name) && void 0 !== l ? l : '',
            guildNameClick: p
        })
    });
}
