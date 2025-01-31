n.d(t, {
    ZP: () => S,
    dL: () => f,
    hC: () => g,
    hl: () => m,
    qx: () => E
}),
    n(47120),
    n(653041);
var l = n(392711),
    i = n(493683),
    a = n(212819),
    s = n(938078),
    r = n(823385),
    o = n(592125),
    c = n(496675),
    u = n(594174),
    d = n(823379),
    _ = n(41837),
    h = n(981631);
function f(e) {
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
async function E(e) {
    let t = m(e);
    if (null != t) return t;
    if ('user' === e.type)
        try {
            return await i.Z.getOrEnsurePrivateChannel(e.id);
        } catch (e) {
            return;
        }
}
function p(e) {
    if ('user' !== e.type) return (0, s.Z)(e.id);
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
function I(e, t) {
    let n;
    let l = new Set();
    if (null != t) for (let e of t) l.add(e);
    let i = [];
    for (let t of e)
        if (null != t) {
            if (t.type === a.h8.HEADER) n = t;
            else {
                let { id: e } = t.record;
                l.has(e) || (l.add(e), null != n && (i.push(n), (n = void 0)), i.push(t));
            }
        }
    return i;
}
function A(e, t) {
    return e.filter((e) => (0, d.lm)(e) && (e.type === a.h8.HEADER || ((0, _.o)(e) && (e.type === a.h8.USER ? t || null != o.Z.getDMChannelFromUserId(e.record.id) : e.type === a.h8.GROUP_DM || (e.record.type !== h.d4z.GUILD_FORUM && e.record.type !== h.d4z.GUILD_MEDIA && c.Z.can(h.Plq.VIEW_CHANNEL, e.record) && c.Z.can(h.Plq.SEND_MESSAGES, e.record))))));
}
function S(e) {
    let { results: t, hasQuery: n, queryMode: i, frequentChannels: a, targetDestination: o, selectedDestinations: c, pinnedDestinations: u, originDestination: d, includeMissingDMs: _ } = e;
    if (n) return I(A(t, _));
    let h = null != u && u.length > 0 ? u.map((e) => p(e)) : [],
        f = r.Z.getChannelHistory(),
        g = f.length > 0 ? f.map((e) => (0, s.Z)(e)) : [],
        m = a.length > 0 ? a.map((e) => (0, s.Z)(e.id)) : [],
        E = A([...h, null != o ? p(o) : null, ...g, ...m], _),
        S = (null == c ? void 0 : c.find((e) => (0, l.isEqual)(e, d))) != null,
        C = null == d || S ? [] : [d.id];
    return null != i ? I(E.filter((e) => e.type === i)) : I(E, C).slice(0, 15);
}
n(388032);
