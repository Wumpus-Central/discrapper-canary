l.d(t, {
    ZP: () => E,
    dL: () => m,
    hC: () => p,
    hl: () => x,
    qx: () => g
}),
    l(47120),
    l(653041);
var n = l(392711),
    s = l(493683),
    r = l(212819),
    a = l(938078),
    i = l(823385),
    u = l(592125),
    o = l(496675),
    c = l(594174),
    d = l(823379),
    h = l(41837),
    f = l(981631);
function m(e) {
    let t = u.Z.getChannel(e);
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
function p(e) {
    return ''.concat(e.type, '-').concat(e.id);
}
function x(e) {
    if ('channel' === e.type) return e.id;
    let t = u.Z.getDMFromUserId(e.id);
    if (null != t) return t;
}
async function g(e) {
    let t = x(e);
    if (null != t) return t;
    if ('user' === e.type)
        try {
            return await s.Z.getOrEnsurePrivateChannel(e.id);
        } catch (e) {
            return;
        }
}
function b(e) {
    if ('user' !== e.type) return (0, a.Z)(e.id);
    {
        let t = c.default.getUser(e.id);
        return null != t
            ? {
                  type: r.h8.USER,
                  record: t,
                  score: 0
              }
            : null;
    }
}
function _(e, t) {
    let l;
    let n = new Set();
    if (null != t) for (let e of t) n.add(e);
    let s = [];
    for (let t of e)
        if (null != t) {
            if (t.type === r.h8.HEADER) l = t;
            else {
                let { id: e } = t.record;
                n.has(e) || (n.add(e), null != l && (s.push(l), (l = void 0)), s.push(t));
            }
        }
    return s;
}
function y(e, t) {
    return e.filter((e) => (0, d.lm)(e) && (e.type === r.h8.HEADER || ((0, h.o)(e) && (e.type === r.h8.USER ? t || null != u.Z.getDMChannelFromUserId(e.record.id) : e.type === r.h8.GROUP_DM || (e.record.type !== f.d4z.GUILD_FORUM && e.record.type !== f.d4z.GUILD_MEDIA && o.Z.can(f.Plq.VIEW_CHANNEL, e.record) && o.Z.can(f.Plq.SEND_MESSAGES, e.record))))));
}
function E(e) {
    let { results: t, hasQuery: l, queryMode: s, frequentChannels: r, targetDestination: u, selectedDestinations: o, pinnedDestinations: c, originDestination: d, includeMissingDMs: h } = e;
    if (l) return _(y(t, h));
    let f = null != c && c.length > 0 ? c.map((e) => b(e)) : [],
        m = i.Z.getChannelHistory(),
        p = m.length > 0 ? m.map((e) => (0, a.Z)(e)) : [],
        x = r.length > 0 ? r.map((e) => (0, a.Z)(e.id)) : [],
        g = y([...f, null != u ? b(u) : null, ...p, ...x], h),
        E = (null == o ? void 0 : o.find((e) => (0, n.isEqual)(e, d))) != null,
        S = null == d || E ? [] : [d.id];
    return null != s ? _(g.filter((e) => e.type === s)) : _(g, S).slice(0, 15);
}
l(388032);
