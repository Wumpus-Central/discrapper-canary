n.d(t, {
    ZP: function () {
        return A;
    },
    dL: function () {
        return _;
    },
    hC: function () {
        return g;
    },
    hl: function () {
        return m;
    },
    qx: function () {
        return E;
    }
}),
    n(47120),
    n(653041);
var l = n(392711),
    i = n(493683),
    a = n(212819),
    r = n(938078),
    s = n(823385),
    o = n(592125),
    c = n(496675),
    u = n(594174),
    d = n(823379),
    h = n(41837),
    f = n(981631);
n(388032);
function _(e) {
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
function I(e) {
    if ('user' !== e.type) return (0, r.Z)(e.id);
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
function p(e, t) {
    let n;
    let l = new Set();
    if (null != t) for (let e of t) l.add(e);
    let i = [];
    for (let t of e) {
        if (null != t)
            if (t.type === a.h8.HEADER) n = t;
            else {
                let { id: e } = t.record;
                !l.has(e) && (l.add(e), null != n && (i.push(n), (n = void 0)), i.push(t));
            }
    }
    return i;
}
function S(e, t) {
    return e.filter((e) => {
        var n, l;
        return (0, d.lm)(e) && (e.type === a.h8.HEADER || ((0, h.o)(e) && ((n = e), (l = t), n.type === a.h8.USER ? l || null != o.Z.getDMChannelFromUserId(n.record.id) : n.type === a.h8.GROUP_DM || (n.record.type !== f.d4z.GUILD_FORUM && n.record.type !== f.d4z.GUILD_MEDIA && c.Z.can(f.Plq.VIEW_CHANNEL, n.record) && c.Z.can(f.Plq.SEND_MESSAGES, n.record)))));
    });
}
function A(e) {
    let { results: t, hasQuery: n, queryMode: i, frequentChannels: a, targetDestination: o, selectedDestinations: c, pinnedDestinations: u, originDestination: d, includeMissingDMs: h } = e;
    if (n) return p(S(t, h));
    let f = null != u && u.length > 0 ? u.map((e) => I(e)) : [],
        _ = s.Z.getChannelHistory(),
        g = _.length > 0 ? _.map((e) => (0, r.Z)(e)) : [],
        m = a.length > 0 ? a.map((e) => (0, r.Z)(e.id)) : [],
        E = S([...f, null != o ? I(o) : null, ...g, ...m], h),
        A = (null == c ? void 0 : c.find((e) => (0, l.isEqual)(e, d))) != null,
        C = null == d || A ? [] : [d.id];
    return null != i ? p(E.filter((e) => e.type === i)) : p(E, C).slice(0, 15);
}
