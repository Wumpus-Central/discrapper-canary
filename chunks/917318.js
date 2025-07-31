n.d(t, { Z: () => b });
var r = n(255367);
n(73800);
var i = n(275726),
    l = n(442837),
    a = n(481060),
    o = n(739566),
    s = n(942951),
    c = n(834129),
    u = n(594174),
    d = n(130883),
    p = n(388032);
let m = {
        [i.u.REPORT_TO_MOD_BAN_USER]: () => d.default.komFTk,
        [i.u.REPORT_TO_MOD_KICK_USER]: () => d.default.FAJmJS,
        [i.u.REPORT_TO_MOD_TIMEOUT_USER]: () => d.default['90r/sb']
    },
    f = {
        [i.u.REPORT_TO_MOD_DELETED_MESSAGE]: () => d.default['4023i4'],
        [i.u.REPORT_TO_MOD_CLOSED_REPORT]: () => d.default.UE81zc
    };
function _(e) {
    let { type: t } = e,
        n = null;
    switch (t) {
        case i.u.REPORT_TO_MOD_BAN_USER:
            n = a.pgN;
            break;
        case i.u.REPORT_TO_MOD_KICK_USER:
            n = a.I9k;
            break;
        case i.u.REPORT_TO_MOD_TIMEOUT_USER:
            n = a.YlB;
            break;
        case i.u.REPORT_TO_MOD_DELETED_MESSAGE:
            n = a.XHJ;
            break;
        case i.u.REPORT_TO_MOD_CLOSED_REPORT:
            n = a.kmB;
    }
    return null != n
        ? (0, r.jsx)(n, {
              size: 'refresh_sm',
              color: 'currentColor'
          })
        : null;
}
function g(e) {
    var t;
    let { message: n, channel: i, compact: a } = e,
        { author: d, mentions: f, type: g } = n,
        h = (0, o.ZP)(n),
        b = n.getChannelId(),
        E = (0, l.e7)([u.default], () => u.default.getUser(f[0]), [f]),
        C = (0, o.JZ)(d, i),
        O = (0, s.l)({
            user: d,
            channelId: b,
            guildId: i.guild_id,
            messageId: n.id
        })(C),
        v = (0, o.Sw)(E, i),
        y = (0, s.l)({
            user: E,
            channelId: b,
            guildId: i.guild_id,
            messageId: n.id
        })(v),
        x = null != (t = m[g]) ? t : null;
    if (null == x) return null;
    let I = p.intl.format(x(), {
        actorName: h.nick,
        actorHook: O,
        targetName: null == v ? void 0 : v.nick,
        targetHook: y
    });
    return (0, r.jsx)(c.Z, {
        iconNode: (0, r.jsx)(_, { type: g }),
        timestamp: n.timestamp,
        compact: a,
        children: I
    });
}
function h(e) {
    var t;
    let { message: n, channel: i, compact: l } = e,
        { author: a, type: u } = n,
        d = (0, o.ZP)(n),
        m = n.getChannelId(),
        g = (0, o.JZ)(a, i),
        h = (0, s.l)({
            user: a,
            channelId: m,
            guildId: i.guild_id,
            messageId: n.id
        })(g),
        b = null != (t = f[u]) ? t : null;
    if (null == b) return null;
    let E = p.intl.format(b(), {
        actorName: d.nick,
        actorHook: h
    });
    return (0, r.jsx)(c.Z, {
        iconNode: (0, r.jsx)(_, { type: u }),
        timestamp: n.timestamp,
        compact: l,
        children: E
    });
}
function b(e) {
    let { message: t, channel: n, compact: l } = e,
        { type: a } = t;
    return a === i.u.REPORT_TO_MOD_BAN_USER || a === i.u.REPORT_TO_MOD_KICK_USER || a === i.u.REPORT_TO_MOD_TIMEOUT_USER
        ? (0, r.jsx)(g, {
              message: t,
              channel: n,
              compact: l
          })
        : (0, r.jsx)(h, {
              message: t,
              channel: n,
              compact: l
          });
}
