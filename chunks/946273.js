t.d(n, {
    BK: () => E,
    mm: () => _,
    vV: () => c
}),
    t(789020);
var i = t(442837),
    l = t(271383),
    r = t(430824),
    a = t(496675),
    u = t(594174),
    d = t(630388),
    o = t(372897),
    s = t(981631);
let c = (e, n) => {
    var t;
    let a = (0, i.e7)([l.ZP], () => {
            var t, i;
            return (0, d.yE)(null !== (i = null === (t = l.ZP.getMember(e, n)) || void 0 === t ? void 0 : t.flags) && void 0 !== i ? i : 0, o.q.DID_REJOIN);
        }),
        s = (0, i.e7)([r.Z], () => {
            var n;
            return null === (n = r.Z.getGuild(e)) || void 0 === n ? void 0 : n.isNew();
        }),
        c = (0, i.e7)([u.default], () => {
            var e;
            return null === (e = u.default.getUser(n)) || void 0 === e ? void 0 : e.bot;
        });
    return (
        (t = { maxDaysOld: 7 }),
        (0, i.e7)(
            [],
            () =>
                (function (e, n, t) {
                    let { maxDaysOld: i, minDaysOld: a = 0 } = n,
                        u = r.Z.getGuild(e),
                        d = null == u ? void 0 : u.joinedAt;
                    if (null != t) {
                        let n = l.ZP.getMember(e, t);
                        d = (null == n ? void 0 : n.joinedAt) == null ? null : new Date(n.joinedAt);
                    }
                    if (null == d) return !1;
                    let o = Date.now() - d.getTime();
                    return (null == i || o <= 86400000 * i) && o >= 86400000 * a;
                })(e, t, n),
            [t, e, n]
        ) &&
            !s &&
            !c &&
            !a
    );
};
function E(e, n) {
    return null != n && a.Z.canManageUser(s.Plq.KICK_MEMBERS, e, n) && !e.isNonUserBot();
}
function _(e, n) {
    return null != n && a.Z.canManageUser(s.Plq.BAN_MEMBERS, e, n) && !e.isNonUserBot() && !e.bot;
}
