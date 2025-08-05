(n.d(t, {
    ZP: () => x,
    dL: () => m,
    hC: () => g,
    hl: () => _,
    qx: () => p
}),
    n(388685),
    n(539854));
var l = n(392711),
    r = n(493683),
    a = n(212819),
    i = n(938078),
    s = n(823385),
    o = n(592125),
    c = n(496675),
    u = n(594174),
    d = n(823379),
    h = n(41837),
    f = n(981631);
function m(e) {
    let t = o.Z.getChannel(e);
    return (null == t ? void 0 : t.type) === f.d4z.DM
        ? {
              type: 'user',
              id: t.recipients[0]
          }
        : {
              type: 'channel',
              id: e
          };
}
function g(e) {
    return ''.concat(e.type, '-').concat(e.id);
}
function _(e) {
    if ('channel' === e.type) return e.id;
    let t = o.Z.getDMFromUserId(e.id);
    if (null != t) return t;
}
async function p(e) {
    let t = _(e);
    if (null != t) return t;
    if ('user' === e.type)
        try {
            return await r.Z.getOrEnsurePrivateChannel(e.id);
        } catch (e) {
            return;
        }
}
function b(e) {
    if ('user' !== e.type) return (0, i.Z)(e.id);
    {
        let t = u.default.getUser(e.id);
        return null != t
            ? {
                  type: a.h8.USER,
                  record: t,
                  score: 0
              }
            : null;
    }
}
function y(e, t) {
    let n,
        l = new Set();
    if (null != t) for (let e of t) l.add(e);
    let r = [];
    for (let t of e)
        if (null == t) continue;
        else if (t.type === a.h8.HEADER) n = t;
        else {
            let { id: e } = t.record;
            l.has(e) || (l.add(e), null != n && (r.push(n), (n = void 0)), r.push(t));
        }
    return r;
}
function v(e, t) {
    return e.filter((e) => (0, d.lm)(e) && (e.type === a.h8.HEADER || ((0, h.o)(e) && (e.type === a.h8.USER ? t || null != o.Z.getDMChannelFromUserId(e.record.id) : e.type === a.h8.GROUP_DM || (e.record.type !== f.d4z.GUILD_FORUM && e.record.type !== f.d4z.GUILD_MEDIA && c.Z.can(f.Plq.VIEW_CHANNEL, e.record) && c.Z.can(f.Plq.SEND_MESSAGES, e.record))))));
}
function x(e) {
    let { results: t, hasQuery: n, queryMode: r, frequentChannels: a, targetDestination: o, selectedDestinations: c, pinnedDestinations: u, originDestination: d, includeMissingDMs: h } = e;
    if (n) return y(v(t, h));
    let f = null != u && u.length > 0 ? u.map((e) => b(e)) : [],
        m = s.Z.getChannelHistory(),
        g = m.length > 0 ? m.map((e) => (0, i.Z)(e)) : [],
        _ = a.length > 0 ? a.map((e) => (0, i.Z)(e.id)) : [],
        p = v([...f, null != o ? b(o) : null, ...g, ..._], h),
        x = (null == c ? void 0 : c.find((e) => (0, l.isEqual)(e, d))) != null,
        E = null == d || x ? [] : [d.id];
    return null != r ? y(p.filter((e) => e.type === r)) : y(p, E).slice(0, 15);
}
n(388032);
