(n.d(t, {
    HI: () => h,
    _H: () => m,
    af: () => g,
    tx: () => E
}),
    n(388685));
var r = n(524846),
    i = n(911969),
    o = n(592125),
    a = n(271383),
    s = n(485386),
    l = n(430824),
    c = n(594174),
    u = n(483360),
    d = n(823379),
    f = n(5192),
    _ = n(280501);
n(892902);
let p = 15,
    h = 1000;
function m(e, t, n) {
    let r = o.Z.getChannel(n);
    if (null == r) return [];
    let a = e === i.re.USER_SELECT || e === i.re.MENTIONABLE_SELECT,
        s = e === i.re.ROLE_SELECT || e === i.re.MENTIONABLE_SELECT,
        { users: l, roles: c } = u.ZP.queryMentionResults({
            query: t,
            channel: r,
            canMentionEveryone: !1,
            canMentionHere: !1,
            canMentionUsers: a,
            canMentionRoles: s,
            includeAllGuildUsers: !0,
            includeNonMentionableRoles: !0,
            checkRecentlyTalkedOnEmptyQuery: !1,
            limit: p
        });
    return [
        ...l.map((e) => {
            var t;
            let i = f.ZP.getNickname(r.getGuildId(), n, e.user);
            return {
                type: _.tM.USER,
                value: e.user.id,
                label: null != (t = null != i ? i : e.user.globalName) ? t : e.user.username
            };
        }),
        ...c.map((e) => ({
            type: _.tM.ROLE,
            value: e.id,
            label: e.name
        }))
    ];
}
function g(e, t, n) {
    let r = o.Z.getChannel(t);
    return null == r
        ? []
        : u.ZP.queryApplicationCommandChannelResults({
              query: e,
              channel: r,
              channelTypes: n,
              limit: p
          }).channels.map((e) => ({
              type: _.tM.CHANNEL,
              value: e.id,
              label: e.name
          }));
}
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    if (null == e) return;
    let i = l.Z.getGuild(t);
    return e
        .map((e) => {
            switch (e.type) {
                case r.$.USER: {
                    var t;
                    let n = c.default.getUser(e.id);
                    if (null == n) return null;
                    let r = null != i ? a.ZP.getNick(i.id, n.id) : void 0;
                    return {
                        type: _.tM.USER,
                        value: n.id,
                        label: null != (t = null != r ? r : n.globalName) ? t : n.username
                    };
                }
                case r.$.ROLE: {
                    if (null == i) return null;
                    let t = s.Z.getRole(i.id, e.id);
                    if (null == t) return null;
                    return {
                        type: _.tM.ROLE,
                        value: t.id,
                        label: t.name
                    };
                }
                case r.$.CHANNEL: {
                    if (null == i) return null;
                    let t = o.Z.getChannel(e.id);
                    if (null == t || t.guild_id !== i.id || (n.length > 0 && !n.includes(t.type))) return null;
                    return {
                        type: _.tM.CHANNEL,
                        value: t.id,
                        label: t.name
                    };
                }
            }
        })
        .filter(d.lm);
}
