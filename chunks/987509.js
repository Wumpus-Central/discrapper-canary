n.d(t, {
    ZP: () => I,
    dL: () => m,
    hC: () => h,
    hl: () => g,
    qx: () => E,
}),
    n(388685),
    n(539854);
var r = n(392711),
    i = n(493683),
    a = n(212819),
    o = n(938078),
    s = n(823385),
    l = n(592125),
    c = n(496675),
    u = n(594174),
    d = n(823379),
    f = n(41837),
    p = n(981631);
n(388032);
let _ = 15;
function m(e) {
    let t = l.Z.getChannel(e);
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
function h(e) {
    return "".concat(e.type, "-").concat(e.id);
}
function g(e) {
    if ("channel" === e.type) return e.id;
    let t = l.Z.getDMFromUserId(e.id);
    if (null != t) return t;
}
async function E(e) {
    let t = g(e);
    if (null != t) return t;
    if ("user" === e.type)
        try {
            return await i.Z.getOrEnsurePrivateChannel(e.id);
        } catch (e) {
            return;
        }
}
function b(e) {
    if ("user" !== e.type) return (0, o.Z)(e.id);
    {
        let t = u.default.getUser(e.id);
        return null != t
            ? {
                  type: a.h8.USER,
                  record: t,
                  score: 0,
              }
            : null;
    }
}
function y(e) {
    return e.type === AutocompleterResultTypes.USER || PermissionStore.can(Permissions.VIEW_CHANNEL, e.record);
}
function O(e, t) {
    return e.type === a.h8.USER
        ? t || null != l.Z.getDMChannelFromUserId(e.record.id)
        : e.type === a.h8.GROUP_DM ||
              (e.record.type !== p.d4z.GUILD_FORUM &&
                  e.record.type !== p.d4z.GUILD_MEDIA &&
                  c.Z.can(p.Plq.VIEW_CHANNEL, e.record) &&
                  c.Z.can(p.Plq.SEND_MESSAGES, e.record));
}
function v(e, t) {
    let n,
        r = new Set();
    if (null != t) for (let e of t) r.add(e);
    let i = [];
    for (let t of e)
        if (null == t) continue;
        else if (t.type === a.h8.HEADER) n = t;
        else {
            let { id: e } = t.record;
            r.has(e) || (r.add(e), null != n && (i.push(n), (n = void 0)), i.push(t));
        }
    return i;
}
function S(e, t) {
    return e.filter((e) => (0, d.lm)(e) && (e.type === a.h8.HEADER || ((0, f.o)(e) && O(e, t))));
}
function I(e) {
    let {
        results: t,
        hasQuery: n,
        queryMode: i,
        frequentChannels: a,
        targetDestination: l,
        selectedDestinations: c,
        pinnedDestinations: u,
        originDestination: d,
        includeMissingDMs: f,
    } = e;
    if (n) return v(S(t, f));
    let p = null != u && u.length > 0 ? u.map((e) => b(e)) : [],
        m = s.Z.getChannelHistory(),
        h = m.length > 0 ? m.map((e) => (0, o.Z)(e)) : [],
        g = a.length > 0 ? a.map((e) => (0, o.Z)(e.id)) : [],
        E = S([...p, null != l ? b(l) : null, ...h, ...g], f),
        y = (null == c ? void 0 : c.find((e) => (0, r.isEqual)(e, d))) != null,
        O = null == d || y ? [] : [d.id];
    return null != i ? v(E.filter((e) => e.type === i)) : v(E, O).slice(0, _);
}
