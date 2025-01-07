n.d(t, {
    ZP: function () {
        return S;
    },
    dL: function () {
        return m;
    },
    hC: function () {
        return g;
    },
    hl: function () {
        return p;
    },
    qx: function () {
        return b;
    }
}),
    n(47120),
    n(653041);
var l = n(392711),
    r = n(493683),
    i = n(212819),
    s = n(938078),
    a = n(823385),
    o = n(592125),
    u = n(496675),
    c = n(594174),
    d = n(823379),
    h = n(41837),
    f = n(981631);
n(388032);
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
function p(e) {
    if ('channel' === e.type) return e.id;
    let t = o.Z.getDMFromUserId(e.id);
    if (null != t) return t;
}
async function b(e) {
    let t = p(e);
    if (null != t) return t;
    if ('user' === e.type)
        try {
            return await r.Z.getOrEnsurePrivateChannel(e.id);
        } catch (e) {
            return;
        }
}
function x(e) {
    if ('user' !== e.type) return (0, s.Z)(e.id);
    {
        let t = c.default.getUser(e.id);
        return null != t
            ? {
                  type: i.h8.USER,
                  record: t,
                  score: 0
              }
            : null;
    }
}
function v(e, t) {
    let n;
    let l = new Set();
    if (null != t) for (let e of t) l.add(e);
    let r = [];
    for (let t of e) {
        if (null != t)
            if (t.type === i.h8.HEADER) n = t;
            else {
                let { id: e } = t.record;
                !l.has(e) && (l.add(e), null != n && (r.push(n), (n = void 0)), r.push(t));
            }
    }
    return r;
}
function C(e, t) {
    return e.filter((e) => {
        var n, l;
        return (0, d.lm)(e) && (e.type === i.h8.HEADER || ((0, h.o)(e) && ((n = e), (l = t), n.type === i.h8.USER ? l || null != o.Z.getDMChannelFromUserId(n.record.id) : n.type === i.h8.GROUP_DM || (n.record.type !== f.d4z.GUILD_FORUM && n.record.type !== f.d4z.GUILD_MEDIA && u.Z.can(f.Plq.VIEW_CHANNEL, n.record) && u.Z.can(f.Plq.SEND_MESSAGES, n.record)))));
    });
}
function S(e) {
    let { results: t, hasQuery: n, queryMode: r, frequentChannels: i, targetDestination: o, selectedDestinations: u, pinnedDestinations: c, originDestination: d, includeMissingDMs: h } = e;
    if (n) return v(C(t, h));
    let f = null != c && c.length > 0 ? c.map((e) => x(e)) : [],
        m = a.Z.getChannelHistory(),
        g = m.length > 0 ? m.map((e) => (0, s.Z)(e)) : [],
        p = i.length > 0 ? i.map((e) => (0, s.Z)(e.id)) : [],
        b = C([...f, null != o ? x(o) : null, ...g, ...p], h),
        S = (null == u ? void 0 : u.find((e) => (0, l.isEqual)(e, d))) != null,
        y = null == d || S ? [] : [d.id];
    return null != r ? v(b.filter((e) => e.type === r)) : v(b, y).slice(0, 15);
}
