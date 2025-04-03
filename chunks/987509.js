n.d(t, {
    ZP: () => O,
    dL: () => p,
    hC: () => h,
    hl: () => m,
    qx: () => y
}),
    n(47120),
    n(653041);
var r = n(392711),
    l = n(493683),
    s = n(212819),
    a = n(938078),
    i = n(823385),
    o = n(592125),
    u = n(496675),
    c = n(594174),
    d = n(823379),
    f = n(41837),
    b = n(981631);
function p(e) {
    let t = o.Z.getChannel(e);
    return (null == t ? void 0 : t.type) === b.d4z.DM
        ? {
              type: 'user',
              id: t.recipients[0]
          }
        : {
              type: 'channel',
              id: e
          };
}
function h(e) {
    return ''.concat(e.type, '-').concat(e.id);
}
function m(e) {
    if ('channel' === e.type) return e.id;
    let t = o.Z.getDMFromUserId(e.id);
    if (null != t) return t;
}
async function y(e) {
    let t = m(e);
    if (null != t) return t;
    if ('user' === e.type)
        try {
            return await l.Z.getOrEnsurePrivateChannel(e.id);
        } catch (e) {
            return;
        }
}
function g(e) {
    if ('user' !== e.type) return (0, a.Z)(e.id);
    {
        let t = c.default.getUser(e.id);
        return null != t
            ? {
                  type: s.h8.USER,
                  record: t,
                  score: 0
              }
            : null;
    }
}
function j(e, t) {
    let n,
        r = new Set();
    if (null != t) for (let e of t) r.add(e);
    let l = [];
    for (let t of e)
        if (null == t) continue;
        else if (t.type === s.h8.HEADER) n = t;
        else {
            let { id: e } = t.record;
            r.has(e) || (r.add(e), null != n && (l.push(n), (n = void 0)), l.push(t));
        }
    return l;
}
function x(e, t) {
    return e.filter((e) => (0, d.lm)(e) && (e.type === s.h8.HEADER || ((0, f.o)(e) && (e.type === s.h8.USER ? t || null != o.Z.getDMChannelFromUserId(e.record.id) : e.type === s.h8.GROUP_DM || (e.record.type !== b.d4z.GUILD_FORUM && e.record.type !== b.d4z.GUILD_MEDIA && u.Z.can(b.Plq.VIEW_CHANNEL, e.record) && u.Z.can(b.Plq.SEND_MESSAGES, e.record))))));
}
function O(e) {
    let { results: t, hasQuery: n, queryMode: l, frequentChannels: s, targetDestination: o, selectedDestinations: u, pinnedDestinations: c, originDestination: d, includeMissingDMs: f } = e;
    if (n) return j(x(t, f));
    let b = null != c && c.length > 0 ? c.map((e) => g(e)) : [],
        p = i.Z.getChannelHistory(),
        h = p.length > 0 ? p.map((e) => (0, a.Z)(e)) : [],
        m = s.length > 0 ? s.map((e) => (0, a.Z)(e.id)) : [],
        y = x([...b, null != o ? g(o) : null, ...h, ...m], f),
        O = (null == u ? void 0 : u.find((e) => (0, r.isEqual)(e, d))) != null,
        v = null == d || O ? [] : [d.id];
    return null != l ? j(y.filter((e) => e.type === l)) : j(y, v).slice(0, 15);
}
n(388032);
