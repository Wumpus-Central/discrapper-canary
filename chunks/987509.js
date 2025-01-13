n.d(t, {
    ZP: function () {
        return C;
    },
    dL: function () {
        return m;
    },
    hC: function () {
        return b;
    },
    hl: function () {
        return p;
    },
    qx: function () {
        return x;
    }
}),
    n(47120),
    n(653041);
var l = n(392711),
    r = n(493683),
    s = n(212819),
    i = n(938078),
    a = n(823385),
    u = n(592125),
    o = n(496675),
    c = n(594174),
    d = n(823379),
    f = n(41837),
    h = n(981631);
n(388032);
function m(e) {
    let t = u.Z.getChannel(e);
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
function b(e) {
    return ''.concat(e.type, '-').concat(e.id);
}
function p(e) {
    if ('channel' === e.type) return e.id;
    let t = u.Z.getDMFromUserId(e.id);
    if (null != t) return t;
}
async function x(e) {
    let t = p(e);
    if (null != t) return t;
    if ('user' === e.type)
        try {
            return await r.Z.getOrEnsurePrivateChannel(e.id);
        } catch (e) {
            return;
        }
}
function g(e) {
    if ('user' !== e.type) return (0, i.Z)(e.id);
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
function y(e, t) {
    let n;
    let l = new Set();
    if (null != t) for (let e of t) l.add(e);
    let r = [];
    for (let t of e) {
        if (null != t)
            if (t.type === s.h8.HEADER) n = t;
            else {
                let { id: e } = t.record;
                !l.has(e) && (l.add(e), null != n && (r.push(n), (n = void 0)), r.push(t));
            }
    }
    return r;
}
function S(e, t) {
    return e.filter((e) => {
        var n, l;
        return (0, d.lm)(e) && (e.type === s.h8.HEADER || ((0, f.o)(e) && ((n = e), (l = t), n.type === s.h8.USER ? l || null != u.Z.getDMChannelFromUserId(n.record.id) : n.type === s.h8.GROUP_DM || (n.record.type !== h.d4z.GUILD_FORUM && n.record.type !== h.d4z.GUILD_MEDIA && o.Z.can(h.Plq.VIEW_CHANNEL, n.record) && o.Z.can(h.Plq.SEND_MESSAGES, n.record)))));
    });
}
function C(e) {
    let { results: t, hasQuery: n, queryMode: r, frequentChannels: s, targetDestination: u, selectedDestinations: o, pinnedDestinations: c, originDestination: d, includeMissingDMs: f } = e;
    if (n) return y(S(t, f));
    let h = null != c && c.length > 0 ? c.map((e) => g(e)) : [],
        m = a.Z.getChannelHistory(),
        b = m.length > 0 ? m.map((e) => (0, i.Z)(e)) : [],
        p = s.length > 0 ? s.map((e) => (0, i.Z)(e.id)) : [],
        x = S([...h, null != u ? g(u) : null, ...b, ...p], f),
        C = (null == o ? void 0 : o.find((e) => (0, l.isEqual)(e, d))) != null,
        v = null == d || C ? [] : [d.id];
    return null != r ? y(x.filter((e) => e.type === r)) : y(x, v).slice(0, 15);
}
