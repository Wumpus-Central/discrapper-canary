n.d(t, { Z: () => b });
var r = n(951288);
n(647438);
var i = n(275726),
    l = n(442837),
    o = n(481060),
    a = n(739566),
    s = n(942951),
    c = n(834129),
    u = n(594174),
    d = n(764295),
    p = n(388032);
let m = {
        [i.u.REPORT_TO_MOD_BAN_USER]: () => d.default.komFTk,
        [i.u.REPORT_TO_MOD_KICK_USER]: () => d.default.FAJmJS,
        [i.u.REPORT_TO_MOD_TIMEOUT_USER]: () => d.default["90r/sb"],
    },
    f = {
        [i.u.REPORT_TO_MOD_DELETED_MESSAGE]: () => d.default["4023i4"],
        [i.u.REPORT_TO_MOD_CLOSED_REPORT]: () => d.default.UE81zc,
    };
function g(e) {
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
function _(e) {
    var t;
    let { message: n, channel: i, compact: o } = e,
        { author: d, mentions: f, type: _ } = n,
        h = (0, a.ZP)(n),
        b = n.getChannelId(),
        E = (0, l.e7)([u.default], () => u.default.getUser(f[0]), [f]),
        C = (0, a.JZ)(d, i),
        O = (0, s.l)({
            user: d,
            channelId: b,
            guildId: i.guild_id,
            messageId: n.id,
        })(C),
        v = (0, a.Sw)(E, i),
        y = (0, s.l)({
            user: E,
            channelId: b,
            guildId: i.guild_id,
            messageId: n.id,
        })(v),
        x = null != (t = m[_]) ? t : null;
    if (null == x) return null;
    let j = p.intl.format(x(), {
        actorName: h.nick,
        actorHook: O,
        targetName: null == v ? void 0 : v.nick,
        targetHook: y,
    });
    return (0, r.jsx)(c.Z, {
        iconNode: (0, r.jsx)(g, { type: _ }),
        timestamp: n.timestamp,
        compact: o,
        children: j,
    });
}
function h(e) {
    var t;
    let { message: n, channel: i, compact: l } = e,
        { author: o, type: u } = n,
        d = (0, a.ZP)(n),
        m = n.getChannelId(),
        _ = (0, a.JZ)(o, i),
        h = (0, s.l)({
            user: o,
            channelId: m,
            guildId: i.guild_id,
            messageId: n.id,
        })(_),
        b = null != (t = f[u]) ? t : null;
    if (null == b) return null;
    let E = p.intl.format(b(), {
        actorName: d.nick,
        actorHook: h,
    });
    return (0, r.jsx)(c.Z, {
        iconNode: (0, r.jsx)(g, { type: u }),
        timestamp: n.timestamp,
        compact: l,
        children: E,
    });
}
function b(e) {
    let { message: t, channel: n, compact: l } = e,
        { type: o } = t;
    return o === i.u.REPORT_TO_MOD_BAN_USER || o === i.u.REPORT_TO_MOD_KICK_USER || o === i.u.REPORT_TO_MOD_TIMEOUT_USER
        ? (0, r.jsx)(_, {
              message: t,
              channel: n,
              compact: l,
          })
        : (0, r.jsx)(h, {
              message: t,
              channel: n,
              compact: l,
          });
}
