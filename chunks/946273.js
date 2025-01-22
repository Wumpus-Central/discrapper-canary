r.d(n, {
    BK: function () {
        return g;
    },
    mm: function () {
        return E;
    },
    vV: function () {
        return m;
    }
});
var i = r(789020);
var a = r(442837),
    o = r(271383),
    s = r(430824),
    l = r(496675),
    u = r(594174),
    c = r(630388),
    d = r(372897),
    f = r(981631);
let p = 86400000;
function h(e, n, r) {
    let { maxDaysOld: i, minDaysOld: a = 0 } = n,
        l = s.Z.getGuild(e),
        u = null == l ? void 0 : l.joinedAt;
    if (null != r) {
        let n = o.ZP.getMember(e, r);
        u = (null == n ? void 0 : n.joinedAt) == null ? null : new Date(n.joinedAt);
    }
    if (null == u) return !1;
    let c = Date.now() - u.getTime(),
        d = null == i || c <= p * i,
        f = c >= p * a;
    return d && f;
}
function _(e, n, r) {
    return (0, a.e7)([], () => h(e, n, r), [n, e, r]);
}
let m = (e, n) => {
    let r = (0, a.e7)([o.ZP], () => {
            var r, i;
            return (0, c.yE)(null !== (i = null === (r = o.ZP.getMember(e, n)) || void 0 === r ? void 0 : r.flags) && void 0 !== i ? i : 0, d.q.DID_REJOIN);
        }),
        i = (0, a.e7)([s.Z], () => {
            var n;
            return null === (n = s.Z.getGuild(e)) || void 0 === n ? void 0 : n.isNew();
        }),
        l = (0, a.e7)([u.default], () => {
            var e;
            return null === (e = u.default.getUser(n)) || void 0 === e ? void 0 : e.bot;
        });
    return _(e, { maxDaysOld: 7 }, n) && !i && !l && !r;
};
function g(e, n) {
    return null != n && l.Z.canManageUser(f.Plq.KICK_MEMBERS, e, n) && !e.isNonUserBot();
}
function E(e, n) {
    return null != n && l.Z.canManageUser(f.Plq.BAN_MEMBERS, e, n) && !e.isNonUserBot() && !e.bot;
}
