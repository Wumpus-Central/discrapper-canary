t.d(n, {
    BK: () => _,
    mm: () => f,
    vV: () => c
}),
    t(789020);
var i = t(442837),
    l = t(271383),
    a = t(430824),
    r = t(496675),
    o = t(594174),
    u = t(630388),
    d = t(372897),
    s = t(981631);
let c = (e, n) => {
    var t;
    let r = (0, i.e7)([l.ZP], () => {
            var t, i;
            return (0, u.yE)(null !== (i = null === (t = l.ZP.getMember(e, n)) || void 0 === t ? void 0 : t.flags) && void 0 !== i ? i : 0, d.q.DID_REJOIN);
        }),
        s = (0, i.e7)([a.Z], () => {
            var n;
            return null === (n = a.Z.getGuild(e)) || void 0 === n ? void 0 : n.isNew();
        }),
        c = (0, i.e7)([o.default], () => {
            var e;
            return null === (e = o.default.getUser(n)) || void 0 === e ? void 0 : e.bot;
        });
    return (
        (t = { maxDaysOld: 7 }),
        (0, i.e7)(
            [],
            () =>
                (function (e, n, t) {
                    let { maxDaysOld: i, minDaysOld: r = 0 } = n,
                        o = a.Z.getGuild(e),
                        u = null == o ? void 0 : o.joinedAt;
                    if (null != t) {
                        let n = l.ZP.getMember(e, t);
                        u = (null == n ? void 0 : n.joinedAt) == null ? null : new Date(n.joinedAt);
                    }
                    if (null == u) return !1;
                    let d = Date.now() - u.getTime();
                    return (null == i || d <= 86400000 * i) && d >= 86400000 * r;
                })(e, t, n),
            [t, e, n]
        ) &&
            !s &&
            !c &&
            !r
    );
};
function _(e, n) {
    return null != n && r.Z.canManageUser(s.Plq.KICK_MEMBERS, e, n) && !e.isNonUserBot();
}
function f(e, n) {
    return null != n && r.Z.canManageUser(s.Plq.BAN_MEMBERS, e, n) && !e.isNonUserBot() && !e.bot;
}
