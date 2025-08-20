n.d(t, {
    ZP: () => y,
    dL: () => m,
    hC: () => g,
    hl: () => p,
    qx: () => b,
}),
    n(388685),
    n(539854);
var l = n(392711),
    r = n(493683),
    a = n(212819),
    s = n(938078),
    i = n(823385),
    o = n(592125),
    u = n(496675),
    c = n(594174),
    d = n(823379),
    h = n(41837),
    f = n(981631);
function m(e) {
    let t = o.Z.getChannel(e);
    return (null == t ? void 0 : t.type) === f.d4z.DM
        ? {
              type: "user",
              id: t.recipients[0],
          }
        : {
              type: "channel",
              id: e,
          };
}
function g(e) {
    return "".concat(e.type, "-").concat(e.id);
}
function p(e) {
    if ("channel" === e.type) return e.id;
    let t = o.Z.getDMFromUserId(e.id);
    if (null != t) return t;
}
async function b(e) {
    let t = p(e);
    if (null != t) return t;
    if ("user" === e.type)
        try {
            return await r.Z.getOrEnsurePrivateChannel(e.id);
        } catch (e) {
            return;
        }
}
function _(e) {
    if ("user" !== e.type) return (0, s.Z)(e.id);
    {
        let t = c.default.getUser(e.id);
        return null != t
            ? {
                  type: a.h8.USER,
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
        else if (t.type === a.h8.HEADER) n = t;
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
            (e.type === a.h8.HEADER ||
                ((0, h.o)(e) &&
                    (e.type === a.h8.USER
                        ? t || null != o.Z.getDMChannelFromUserId(e.record.id)
                        : e.type === a.h8.GROUP_DM ||
                          (e.record.type !== f.d4z.GUILD_FORUM &&
                              e.record.type !== f.d4z.GUILD_MEDIA &&
                              u.Z.can(f.Plq.VIEW_CHANNEL, e.record) &&
                              u.Z.can(f.Plq.SEND_MESSAGES, e.record))))),
    );
}
function y(e) {
    let {
        results: t,
        hasQuery: n,
        queryMode: r,
        frequentChannels: a,
        targetDestination: o,
        selectedDestinations: u,
        pinnedDestinations: c,
        originDestination: d,
        includeMissingDMs: h,
    } = e;
    if (n) return v(x(t, h));
    let f = null != c && c.length > 0 ? c.map((e) => _(e)) : [],
        m = i.Z.getChannelHistory(),
        g = m.length > 0 ? m.map((e) => (0, s.Z)(e)) : [],
        p = a.length > 0 ? a.map((e) => (0, s.Z)(e.id)) : [],
        b = x([...f, null != o ? _(o) : null, ...g, ...p], h),
        y = (null == u ? void 0 : u.find((e) => (0, l.isEqual)(e, d))) != null,
        w = null == d || y ? [] : [d.id];
    return null != r ? v(b.filter((e) => e.type === r)) : v(b, w).slice(0, 15);
}
n(388032);
