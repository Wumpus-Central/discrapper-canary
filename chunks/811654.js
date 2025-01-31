l.d(n, {
    HI: () => h,
    _H: () => p,
    af: () => x,
    tx: () => v
}),
    l(47120);
var t = l(524846),
    i = l(911969),
    r = l(592125),
    a = l(271383),
    s = l(430824),
    o = l(594174),
    u = l(483360),
    c = l(823379),
    d = l(5192),
    m = l(280501);
l(892902);
let h = 1000;
function p(e, n, l) {
    let t = r.Z.getChannel(l);
    if (null == t) return [];
    let a = e === i.re.USER_SELECT || e === i.re.MENTIONABLE_SELECT,
        s = e === i.re.ROLE_SELECT || e === i.re.MENTIONABLE_SELECT,
        { users: o, roles: c } = u.ZP.queryMentionResults({
            query: n,
            channel: t,
            canMentionEveryone: !1,
            canMentionHere: !1,
            canMentionUsers: a,
            canMentionRoles: s,
            includeAllGuildUsers: !0,
            includeNonMentionableRoles: !0,
            checkRecentlyTalkedOnEmptyQuery: !1,
            limit: 15
        });
    return [
        ...o.map((e) => {
            var n;
            let i = d.ZP.getNickname(t.getGuildId(), l, e.user);
            return {
                type: m.tM.USER,
                value: e.user.id,
                label: null !== (n = null != i ? i : e.user.globalName) && void 0 !== n ? n : e.user.username
            };
        }),
        ...c.map((e) => ({
            type: m.tM.ROLE,
            value: e.id,
            label: e.name
        }))
    ];
}
function x(e, n, l) {
    let t = r.Z.getChannel(n);
    return null == t
        ? []
        : u.ZP.queryApplicationCommandChannelResults({
              query: e,
              channel: t,
              channelTypes: l,
              limit: 15
          }).channels.map((e) => ({
              type: m.tM.CHANNEL,
              value: e.id,
              label: e.name
          }));
}
function v(e, n) {
    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    if (null == e) return;
    let i = s.Z.getGuild(n);
    return e
        .map((e) => {
            switch (e.type) {
                case t.$.USER: {
                    var n;
                    let l = o.default.getUser(e.id);
                    if (null == l) return null;
                    let t = null != i ? a.ZP.getNick(i.id, l.id) : void 0;
                    return {
                        type: m.tM.USER,
                        value: l.id,
                        label: null !== (n = null != t ? t : l.globalName) && void 0 !== n ? n : l.username
                    };
                }
                case t.$.ROLE: {
                    if (null == i) return null;
                    let n = s.Z.getRole(i.id, e.id);
                    if (null == n) return null;
                    return {
                        type: m.tM.ROLE,
                        value: n.id,
                        label: n.name
                    };
                }
                case t.$.CHANNEL: {
                    if (null == i) return null;
                    let n = r.Z.getChannel(e.id);
                    if (null == n || n.guild_id !== i.id || (l.length > 0 && !l.includes(n.type))) return null;
                    return {
                        type: m.tM.CHANNEL,
                        value: n.id,
                        label: n.name
                    };
                }
            }
        })
        .filter(c.lm);
}
