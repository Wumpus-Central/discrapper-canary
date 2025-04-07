n.d(t, {
    ZP: () => I,
    dL: () => h,
    hC: () => g,
    hl: () => _,
    qx: () => f
}),
    n(388685),
    n(539854);
var a = n(392711),
    r = n(493683),
    l = n(212819),
    i = n(938078),
    s = n(823385),
    o = n(592125),
    c = n(496675),
    u = n(594174),
    d = n(823379),
    m = n(41837),
    p = n(981631);
function h(e) {
    let t = o.Z.getChannel(e);
    return (null == t ? void 0 : t.type) === p.d4z.DM
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
async function f(e) {
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
                  type: l.h8.USER,
                  record: t,
                  score: 0
              }
            : null;
    }
}
function y(e, t) {
    let n,
        a = new Set();
    if (null != t) for (let e of t) a.add(e);
    let r = [];
    for (let t of e)
        if (null == t) continue;
        else if (t.type === l.h8.HEADER) n = t;
        else {
            let { id: e } = t.record;
            a.has(e) || (a.add(e), null != n && (r.push(n), (n = void 0)), r.push(t));
        }
    return r;
}
function E(e, t) {
    return e.filter((e) => (0, d.lm)(e) && (e.type === l.h8.HEADER || ((0, m.o)(e) && (e.type === l.h8.USER ? t || null != o.Z.getDMChannelFromUserId(e.record.id) : e.type === l.h8.GROUP_DM || (e.record.type !== p.d4z.GUILD_FORUM && e.record.type !== p.d4z.GUILD_MEDIA && c.Z.can(p.Plq.VIEW_CHANNEL, e.record) && c.Z.can(p.Plq.SEND_MESSAGES, e.record))))));
}
function I(e) {
    let { results: t, hasQuery: n, queryMode: r, frequentChannels: l, targetDestination: o, selectedDestinations: c, pinnedDestinations: u, originDestination: d, includeMissingDMs: m } = e;
    if (n) return y(E(t, m));
    let p = null != u && u.length > 0 ? u.map((e) => b(e)) : [],
        h = s.Z.getChannelHistory(),
        g = h.length > 0 ? h.map((e) => (0, i.Z)(e)) : [],
        _ = l.length > 0 ? l.map((e) => (0, i.Z)(e.id)) : [],
        f = E([...p, null != o ? b(o) : null, ...g, ..._], m),
        I = (null == c ? void 0 : c.find((e) => (0, a.isEqual)(e, d))) != null,
        S = null == d || I ? [] : [d.id];
    return null != r ? y(f.filter((e) => e.type === r)) : y(f, S).slice(0, 15);
}
n(388032);
