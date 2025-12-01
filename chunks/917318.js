n.d(t, { Z: () => E });
var r = n(54381);
n(473749);
var i = n(275726),
    a = n(442837),
    o = n(481060),
    s = n(739566),
    l = n(942951),
    c = n(834129),
    u = n(594174),
    d = n(342153),
    f = n(388032);
let p = {
        [i.u.REPORT_TO_MOD_BAN_USER]: () => d.default.komFTv,
        [i.u.REPORT_TO_MOD_KICK_USER]: () => d.default.FAJmJV,
        [i.u.REPORT_TO_MOD_TIMEOUT_USER]: () => d.default["90r/sR"],
    },
    _ = {
        [i.u.REPORT_TO_MOD_DELETED_MESSAGE]: () => d.default["4023i8"],
        [i.u.REPORT_TO_MOD_CLOSED_REPORT]: () => d.default.UE81zV,
    };
function m(e) {
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
function h(e) {
    var t;
    let { message: n, channel: i, compact: o } = e,
        { author: d, mentions: _, type: h } = n,
        g = (0, s.ZP)(n),
        E = n.getChannelId(),
        b = (0, a.e7)([u.default], () => u.default.getUser(_[0]), [_]),
        y = (0, s.JZ)(d, i),
        O = (0, l.l)({
            user: d,
            channelId: E,
            guildId: i.guild_id,
            messageId: n.id,
        })(y),
        v = (0, s.Sw)(b, i),
        S = (0, l.l)({
            user: b,
            channelId: E,
            guildId: i.guild_id,
            messageId: n.id,
        })(v),
        I = null != (t = p[h]) ? t : null;
    if (null == I) return null;
    let T = f.intl.format(I(), {
        actorName: g.nick,
        actorHook: O,
        targetName: null == v ? void 0 : v.nick,
        targetHook: S,
    });
    return (0, r.jsx)(c.Z, {
        iconNode: (0, r.jsx)(m, { type: h }),
        timestamp: n.timestamp,
        compact: o,
        children: T,
    });
}
function g(e) {
    var t;
    let { message: n, channel: i, compact: a } = e,
        { author: o, type: u } = n,
        d = (0, s.ZP)(n),
        p = n.getChannelId(),
        h = (0, s.JZ)(o, i),
        g = (0, l.l)({
            user: o,
            channelId: p,
            guildId: i.guild_id,
            messageId: n.id,
        })(h),
        E = null != (t = _[u]) ? t : null;
    if (null == E) return null;
    let b = f.intl.format(E(), {
        actorName: d.nick,
        actorHook: g,
    });
    return (0, r.jsx)(c.Z, {
        iconNode: (0, r.jsx)(m, { type: u }),
        timestamp: n.timestamp,
        compact: a,
        children: b,
    });
}
function E(e) {
    let { message: t, channel: n, compact: a } = e,
        { type: o } = t;
    return o === i.u.REPORT_TO_MOD_BAN_USER || o === i.u.REPORT_TO_MOD_KICK_USER || o === i.u.REPORT_TO_MOD_TIMEOUT_USER
        ? (0, r.jsx)(h, {
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
