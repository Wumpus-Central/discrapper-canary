n.d(t, {
    ZP: () => x,
    dL: () => h,
    hC: () => g,
    hl: () => p,
    qx: () => f
}),
    n(47120),
    n(653041);
var a = n(392711),
    l = n(493683),
    i = n(212819),
    s = n(938078),
    r = n(823385),
    o = n(592125),
    c = n(496675),
    d = n(594174),
    u = n(823379),
    m = n(41837),
    _ = n(981631);
function h(e) {
    let t = o.Z.getChannel(e);
    return (null == t ? void 0 : t.type) === _.d4z.DM
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
function p(e) {
    if ('channel' === e.type) return e.id;
    let t = o.Z.getDMFromUserId(e.id);
    if (null != t) return t;
}
async function f(e) {
    let t = p(e);
    if (null != t) return t;
    if ('user' === e.type)
        try {
            return await l.Z.getOrEnsurePrivateChannel(e.id);
        } catch (e) {
            return;
        }
}
function E(e) {
    if ('user' !== e.type) return (0, s.Z)(e.id);
    {
        let t = d.default.getUser(e.id);
        return null != t
            ? {
                  type: i.h8.USER,
                  record: t,
                  score: 0
              }
            : null;
    }
}
function I(e, t) {
    let n;
    let a = new Set();
    if (null != t) for (let e of t) a.add(e);
    let l = [];
    for (let t of e)
        if (null != t) {
            if (t.type === i.h8.HEADER) n = t;
            else {
                let { id: e } = t.record;
                a.has(e) || (a.add(e), null != n && (l.push(n), (n = void 0)), l.push(t));
            }
        }
    return l;
}
function C(e, t) {
    return e.filter((e) => (0, u.lm)(e) && (e.type === i.h8.HEADER || ((0, m.o)(e) && (e.type === i.h8.USER ? t || null != o.Z.getDMChannelFromUserId(e.record.id) : e.type === i.h8.GROUP_DM || (e.record.type !== _.d4z.GUILD_FORUM && e.record.type !== _.d4z.GUILD_MEDIA && c.Z.can(_.Plq.VIEW_CHANNEL, e.record) && c.Z.can(_.Plq.SEND_MESSAGES, e.record))))));
}
function x(e) {
    let { results: t, hasQuery: n, queryMode: l, frequentChannels: i, targetDestination: o, selectedDestinations: c, pinnedDestinations: d, originDestination: u, includeMissingDMs: m } = e;
    if (n) return I(C(t, m));
    let _ = null != d && d.length > 0 ? d.map((e) => E(e)) : [],
        h = r.Z.getChannelHistory(),
        g = h.length > 0 ? h.map((e) => (0, s.Z)(e)) : [],
        p = i.length > 0 ? i.map((e) => (0, s.Z)(e.id)) : [],
        f = C([..._, null != o ? E(o) : null, ...g, ...p], m),
        x = (null == c ? void 0 : c.find((e) => (0, a.isEqual)(e, u))) != null,
        A = null == u || x ? [] : [u.id];
    return null != l ? I(f.filter((e) => e.type === l)) : I(f, A).slice(0, 15);
}
n(388032);
