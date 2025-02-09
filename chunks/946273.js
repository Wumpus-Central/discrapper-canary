t.d(n, {
    BK: () => _,
    mm: () => f,
    vV: () => c
}),
    t(789020);
var l = t(442837),
    i = t(271383),
    r = t(430824),
    a = t(496675),
    u = t(594174),
    o = t(630388),
    d = t(372897),
    s = t(981631);
let c = (e, n) => {
    var t;
    let a = (0, l.e7)([i.ZP], () => {
            var t, l;
            return (0, o.yE)(null !== (l = null === (t = i.ZP.getMember(e, n)) || void 0 === t ? void 0 : t.flags) && void 0 !== l ? l : 0, d.q.DID_REJOIN);
        }),
        s = (0, l.e7)([r.Z], () => {
            var n;
            return null === (n = r.Z.getGuild(e)) || void 0 === n ? void 0 : n.isNew();
        }),
        c = (0, l.e7)([u.default], () => {
            var e;
            return null === (e = u.default.getUser(n)) || void 0 === e ? void 0 : e.bot;
        });
    return (
        (t = { maxDaysOld: 7 }),
        (0, l.e7)(
            [],
            () =>
                (function (e, n, t) {
                    let { maxDaysOld: l, minDaysOld: a = 0 } = n,
                        u = r.Z.getGuild(e),
                        o = null == u ? void 0 : u.joinedAt;
                    if (null != t) {
                        let n = i.ZP.getMember(e, t);
                        o = (null == n ? void 0 : n.joinedAt) == null ? null : new Date(n.joinedAt);
                    }
                    if (null == o) return !1;
                    let d = Date.now() - o.getTime();
                    return (null == l || d <= 86400000 * l) && d >= 86400000 * a;
                })(e, t, n),
            [t, e, n]
        ) &&
            !s &&
            !c &&
            !a
    );
};
function _(e, n) {
    return null != n && a.Z.canManageUser(s.Plq.KICK_MEMBERS, e, n) && !e.isNonUserBot();
}
function f(e, n) {
    return null != n && a.Z.canManageUser(s.Plq.BAN_MEMBERS, e, n) && !e.isNonUserBot() && !e.bot;
}
