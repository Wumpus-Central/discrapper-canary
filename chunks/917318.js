n.d(t, { Z: () => E });
var r = n(951288);
n(647438);
var i = n(275726),
    a = n(442837),
    o = n(481060),
    s = n(739566),
    l = n(942951),
    c = n(834129),
    u = n(594174),
    d = n(797013),
    f = n(388032);
let _ = {
        [i.u.REPORT_TO_MOD_BAN_USER]: () => d.default.komFTv,
        [i.u.REPORT_TO_MOD_KICK_USER]: () => d.default.FAJmJV,
        [i.u.REPORT_TO_MOD_TIMEOUT_USER]: () => d.default["90r/sR"],
    },
    p = {
        [i.u.REPORT_TO_MOD_DELETED_MESSAGE]: () => d.default["4023i8"],
        [i.u.REPORT_TO_MOD_CLOSED_REPORT]: () => d.default.UE81zV,
    };
function h(e) {
    let { type: t } = e,
        n = null;
    switch (t) {
        case i.u.REPORT_TO_MOD_BAN_USER:
            n = o.pgN;
            break;
        case i.u.REPORT_TO_MOD_KICK_USER:
            n = o.I9k;
            break;
        case i.u.REPORT_TO_MOD_TIMEOUT_USER:
            n = o.YlB;
            break;
        case i.u.REPORT_TO_MOD_DELETED_MESSAGE:
            n = o.XHJ;
            break;
        case i.u.REPORT_TO_MOD_CLOSED_REPORT:
            n = o.kmB;
    }
    return null != n
        ? (0, r.jsx)(n, {
              size: "refresh_sm",
              color: "currentColor",
          })
        : null;
}
function m(e) {
    var t;
    let { message: n, channel: i, compact: o } = e,
        { author: d, mentions: p, type: m } = n,
        g = (0, s.ZP)(n),
        E = n.getChannelId(),
        b = (0, a.e7)([u.default], () => u.default.getUser(p[0]), [p]),
        y = (0, s.JZ)(d, i),
        O = (0, l.l)({
            user: d,
            channelId: E,
            guildId: i.guild_id,
            messageId: n.id,
        })(y),
        v = (0, s.Sw)(b, i),
        I = (0, l.l)({
            user: b,
            channelId: E,
            guildId: i.guild_id,
            messageId: n.id,
        })(v),
        T = null != (t = _[m]) ? t : null;
    if (null == T) return null;
    let S = f.intl.format(T(), {
        actorName: g.nick,
        actorHook: O,
        targetName: null == v ? void 0 : v.nick,
        targetHook: I,
    });
    return (0, r.jsx)(c.Z, {
        iconNode: (0, r.jsx)(h, { type: m }),
        timestamp: n.timestamp,
        compact: o,
        children: S,
    });
}
function g(e) {
    var t;
    let { message: n, channel: i, compact: a } = e,
        { author: o, type: u } = n,
        d = (0, s.ZP)(n),
        _ = n.getChannelId(),
        m = (0, s.JZ)(o, i),
        g = (0, l.l)({
            user: o,
            channelId: _,
            guildId: i.guild_id,
            messageId: n.id,
        })(m),
        E = null != (t = p[u]) ? t : null;
    if (null == E) return null;
    let b = f.intl.format(E(), {
        actorName: d.nick,
        actorHook: g,
    });
    return (0, r.jsx)(c.Z, {
        iconNode: (0, r.jsx)(h, { type: u }),
        timestamp: n.timestamp,
        compact: a,
        children: b,
    });
}
function E(e) {
    let { message: t, channel: n, compact: a } = e,
        { type: o } = t;
    return o === i.u.REPORT_TO_MOD_BAN_USER || o === i.u.REPORT_TO_MOD_KICK_USER || o === i.u.REPORT_TO_MOD_TIMEOUT_USER
        ? (0, r.jsx)(m, {
              message: t,
              channel: n,
              compact: a,
          })
        : (0, r.jsx)(g, {
              message: t,
              channel: n,
              compact: a,
          });
}
