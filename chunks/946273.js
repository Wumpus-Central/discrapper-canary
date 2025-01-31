n.d(t, {
    BK: () => h,
    mm: () => m,
    vV: () => p
}),
    n(789020);
var i = n(442837),
    r = n(271383),
    a = n(430824),
    s = n(496675),
    o = n(594174),
    l = n(630388),
    u = n(372897),
    c = n(981631);
let d = 86400000;
function f(e, t, n) {
    let { maxDaysOld: i, minDaysOld: s = 0 } = t,
        o = a.Z.getGuild(e),
        l = null == o ? void 0 : o.joinedAt;
    if (null != n) {
        let t = r.ZP.getMember(e, n);
        l = (null == t ? void 0 : t.joinedAt) == null ? null : new Date(t.joinedAt);
    }
    if (null == l) return !1;
    let u = Date.now() - l.getTime(),
        c = null == i || u <= d * i,
        f = u >= d * s;
    return c && f;
}
function _(e, t, n) {
    return (0, i.e7)([], () => f(e, t, n), [t, e, n]);
}
let p = (e, t) => {
    let n = (0, i.e7)([r.ZP], () => {
            var n, i;
            return (0, l.yE)(null !== (i = null === (n = r.ZP.getMember(e, t)) || void 0 === n ? void 0 : n.flags) && void 0 !== i ? i : 0, u.q.DID_REJOIN);
        }),
        s = (0, i.e7)([a.Z], () => {
            var t;
            return null === (t = a.Z.getGuild(e)) || void 0 === t ? void 0 : t.isNew();
        }),
        c = (0, i.e7)([o.default], () => {
            var e;
            return null === (e = o.default.getUser(t)) || void 0 === e ? void 0 : e.bot;
        });
    return _(e, { maxDaysOld: 7 }, t) && !s && !c && !n;
};
function h(e, t) {
    return null != t && s.Z.canManageUser(c.Plq.KICK_MEMBERS, e, t) && !e.isNonUserBot();
}
function m(e, t) {
    return null != t && s.Z.canManageUser(c.Plq.BAN_MEMBERS, e, t) && !e.isNonUserBot() && !e.bot;
}
