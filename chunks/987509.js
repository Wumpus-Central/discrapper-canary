n.d(t, {
    ZP: () => x,
    dL: () => h,
    hC: () => m,
    hl: () => p,
    qx: () => g
}),
    n(388685),
    n(539854);
var r = n(392711),
    l = n(493683),
    a = n(212819),
    s = n(938078),
    i = n(823385),
    o = n(592125),
    u = n(496675),
    c = n(594174),
    d = n(823379),
    f = n(41837),
    b = n(981631);
function h(e) {
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
function m(e) {
    return ''.concat(e.type, '-').concat(e.id);
}
function p(e) {
    if ('channel' === e.type) return e.id;
    let t = o.Z.getDMFromUserId(e.id);
    if (null != t) return t;
}
async function g(e) {
    let t = p(e);
    if (null != t) return t;
    if ('user' === e.type)
        try {
            return await l.Z.getOrEnsurePrivateChannel(e.id);
        } catch (e) {
            return;
        }
}
function y(e) {
    if ('user' !== e.type) return (0, s.Z)(e.id);
    {
        let t = c.default.getUser(e.id);
        return null != t
            ? {
                  type: a.h8.USER,
                  record: t,
                  score: 0
              }
            : null;
    }
}
function v(e, t) {
    let n,
        r = new Set();
    if (null != t) for (let e of t) r.add(e);
    let l = [];
    for (let t of e)
        if (null == t) continue;
        else if (t.type === a.h8.HEADER) n = t;
        else {
            let { id: e } = t.record;
            r.has(e) || (r.add(e), null != n && (l.push(n), (n = void 0)), l.push(t));
        }
    return l;
}
function j(e, t) {
    return e.filter((e) => (0, d.lm)(e) && (e.type === a.h8.HEADER || ((0, f.o)(e) && (e.type === a.h8.USER ? t || null != o.Z.getDMChannelFromUserId(e.record.id) : e.type === a.h8.GROUP_DM || (e.record.type !== b.d4z.GUILD_FORUM && e.record.type !== b.d4z.GUILD_MEDIA && u.Z.can(b.Plq.VIEW_CHANNEL, e.record) && u.Z.can(b.Plq.SEND_MESSAGES, e.record))))));
}
function x(e) {
    let { results: t, hasQuery: n, queryMode: l, frequentChannels: a, targetDestination: o, selectedDestinations: u, pinnedDestinations: c, originDestination: d, includeMissingDMs: f } = e;
    if (n) return v(j(t, f));
    let b = null != c && c.length > 0 ? c.map((e) => y(e)) : [],
        h = i.Z.getChannelHistory(),
        m = h.length > 0 ? h.map((e) => (0, s.Z)(e)) : [],
        p = a.length > 0 ? a.map((e) => (0, s.Z)(e.id)) : [],
        g = j([...b, null != o ? y(o) : null, ...m, ...p], f),
        x = (null == u ? void 0 : u.find((e) => (0, r.isEqual)(e, d))) != null,
        O = null == d || x ? [] : [d.id];
    return null != l ? v(g.filter((e) => e.type === l)) : v(g, O).slice(0, 15);
}
n(388032);
