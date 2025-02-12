n.d(t, {
    BK: () => p,
    mm: () => m,
    vV: () => d
}),
    n(789020);
var a = n(442837),
    o = n(271383),
    i = n(430824),
    r = n(496675),
    s = n(594174),
    l = n(630388),
    c = n(372897),
    u = n(981631);
let d = (e, t) => {
    var n;
    let r = (0, a.e7)([o.ZP], () => {
            var n, a;
            return (0, l.yE)(null !== (a = null === (n = o.ZP.getMember(e, t)) || void 0 === n ? void 0 : n.flags) && void 0 !== a ? a : 0, c.q.DID_REJOIN);
        }),
        u = (0, a.e7)([i.Z], () => {
            var t;
            return null === (t = i.Z.getGuild(e)) || void 0 === t ? void 0 : t.isNew();
        }),
        d = (0, a.e7)([s.default], () => {
            var e;
            return null === (e = s.default.getUser(t)) || void 0 === e ? void 0 : e.bot;
        });
    return (
        (n = { maxDaysOld: 7 }),
        (0, a.e7)(
            [],
            () =>
                (function (e, t, n) {
                    let { maxDaysOld: a, minDaysOld: r = 0 } = t,
                        s = i.Z.getGuild(e),
                        l = null == s ? void 0 : s.joinedAt;
                    if (null != n) {
                        let t = o.ZP.getMember(e, n);
                        l = (null == t ? void 0 : t.joinedAt) == null ? null : new Date(t.joinedAt);
                    }
                    if (null == l) return !1;
                    let c = Date.now() - l.getTime();
                    return (null == a || c <= 86400000 * a) && c >= 86400000 * r;
                })(e, n, t),
            [n, e, t]
        ) &&
            !u &&
            !d &&
            !r
    );
};
function p(e, t) {
    return null != t && r.Z.canManageUser(u.Plq.KICK_MEMBERS, e, t) && !e.isNonUserBot();
}
function m(e, t) {
    return null != t && r.Z.canManageUser(u.Plq.BAN_MEMBERS, e, t) && !e.isNonUserBot() && !e.bot;
}
