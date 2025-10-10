n.d(t, {
    ZP: () => j,
    dL: () => b,
    hC: () => m,
    hl: () => h,
    qx: () => g,
}),
    n(388685),
    n(539854);
var l = n(392711),
    r = n(493683),
    i = n(212819),
    a = n(938078),
    s = n(823385),
    o = n(592125),
    u = n(496675),
    c = n(594174),
    d = n(823379),
    f = n(41837),
    p = n(981631);
function b(e) {
    let t = o.Z.getChannel(e);
    return (null == t ? void 0 : t.type) === p.d4z.DM
        ? {
              type: "user",
              id: t.recipients[0],
          }
        : {
              type: "channel",
              id: e,
          };
}
function m(e) {
    return "".concat(e.type, "-").concat(e.id);
}
function h(e) {
    if ("channel" === e.type) return e.id;
    let t = o.Z.getDMFromUserId(e.id);
    if (null != t) return t;
}
async function g(e) {
    let t = h(e);
    if (null != t) return t;
    if ("user" === e.type)
        try {
            return await r.Z.getOrEnsurePrivateChannel(e.id);
        } catch (e) {
            return;
        }
}
function y(e) {
    if ("user" !== e.type) return (0, a.Z)(e.id);
    {
        let t = c.default.getUser(e.id);
        return null != t
            ? {
                  type: i.h8.USER,
                  record: t,
                  score: 0,
              }
            : null;
    }
}
function v(e, t) {
    let n,
        l = new Set();
    if (null != t) for (let e of t) l.add(e);
    let r = [];
    for (let t of e)
        if (null == t) continue;
        else if (t.type === i.h8.HEADER) n = t;
        else {
            let { id: e } = t.record;
            l.has(e) || (l.add(e), null != n && (r.push(n), (n = void 0)), r.push(t));
        }
    return r;
}
function x(e, t) {
    return e.filter(
        (e) =>
            (0, d.lm)(e) &&
            (e.type === i.h8.HEADER ||
                ((0, f.o)(e) &&
                    (e.type === i.h8.USER
                        ? t || null != o.Z.getDMChannelFromUserId(e.record.id)
                        : e.type === i.h8.GROUP_DM ||
                          (e.record.type !== p.d4z.GUILD_FORUM &&
                              e.record.type !== p.d4z.GUILD_MEDIA &&
                              u.Z.can(p.Plq.VIEW_CHANNEL, e.record) &&
                              u.Z.can(p.Plq.SEND_MESSAGES, e.record))))),
    );
}
function j(e) {
    let {
        results: t,
        hasQuery: n,
        queryMode: r,
        frequentChannels: i,
        targetDestination: o,
        selectedDestinations: u,
        pinnedDestinations: c,
        originDestination: d,
        includeMissingDMs: f,
    } = e;
    if (n) return v(x(t, f));
    let p = null != c && c.length > 0 ? c.map((e) => y(e)) : [],
        b = s.Z.getChannelHistory(),
        m = b.length > 0 ? b.map((e) => (0, a.Z)(e)) : [],
        h = i.length > 0 ? i.map((e) => (0, a.Z)(e.id)) : [],
        g = x([...p, null != o ? y(o) : null, ...m, ...h], f),
        j = (null == u ? void 0 : u.find((e) => (0, l.isEqual)(e, d))) != null,
        S = null == d || j ? [] : [d.id];
    return null != r ? v(g.filter((e) => e.type === r)) : v(g, S).slice(0, 15);
}
n(388032);
