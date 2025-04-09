n.d(t, {
    ZP: () => I,
    dL: () => _,
    hC: () => g,
    hl: () => m,
    qx: () => p
}),
    n(388685),
    n(539854);
var l = n(392711),
    r = n(493683),
    a = n(212819),
    i = n(938078),
    s = n(823385),
    o = n(592125),
    c = n(496675),
    u = n(594174),
    d = n(823379),
    f = n(41837),
    h = n(981631);
function _(e) {
    let t = o.Z.getChannel(e);
    return (null == t ? void 0 : t.type) === h.d4z.DM
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
function m(e) {
    if ('channel' === e.type) return e.id;
    let t = o.Z.getDMFromUserId(e.id);
    if (null != t) return t;
}
async function p(e) {
    let t = m(e);
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
function E(e, t) {
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
function y(e, t) {
    return e.filter((e) => (0, d.lm)(e) && (e.type === a.h8.HEADER || ((0, f.o)(e) && (e.type === a.h8.USER ? t || null != o.Z.getDMChannelFromUserId(e.record.id) : e.type === a.h8.GROUP_DM || (e.record.type !== h.d4z.GUILD_FORUM && e.record.type !== h.d4z.GUILD_MEDIA && c.Z.can(h.Plq.VIEW_CHANNEL, e.record) && c.Z.can(h.Plq.SEND_MESSAGES, e.record))))));
}
function I(e) {
    let { results: t, hasQuery: n, queryMode: r, frequentChannels: a, targetDestination: o, selectedDestinations: c, pinnedDestinations: u, originDestination: d, includeMissingDMs: f } = e;
    if (n) return E(y(t, f));
    let h = null != u && u.length > 0 ? u.map((e) => b(e)) : [],
        _ = s.Z.getChannelHistory(),
        g = _.length > 0 ? _.map((e) => (0, i.Z)(e)) : [],
        m = a.length > 0 ? a.map((e) => (0, i.Z)(e.id)) : [],
        p = y([...h, null != o ? b(o) : null, ...g, ...m], f),
        I = (null == c ? void 0 : c.find((e) => (0, l.isEqual)(e, d))) != null,
        S = null == d || I ? [] : [d.id];
    return null != r ? E(p.filter((e) => e.type === r)) : E(p, S).slice(0, 15);
}
n(388032);
