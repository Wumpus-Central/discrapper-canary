t.d(n, {
    BK: () => _,
    mm: () => E,
    vV: () => s
}),
    t(789020);
var i = t(442837),
    l = t(271383),
    r = t(430824),
    u = t(496675),
    a = t(594174),
    o = t(630388),
    d = t(372897),
    c = t(981631);
let s = (e, n) => {
    var t;
    let u = (0, i.e7)([l.ZP], () => {
            var t, i;
            return (0, o.yE)(null !== (i = null === (t = l.ZP.getMember(e, n)) || void 0 === t ? void 0 : t.flags) && void 0 !== i ? i : 0, d.q.DID_REJOIN);
        }),
        c = (0, i.e7)([r.Z], () => {
            var n;
            return null === (n = r.Z.getGuild(e)) || void 0 === n ? void 0 : n.isNew();
        }),
        s = (0, i.e7)([a.default], () => {
            var e;
            return null === (e = a.default.getUser(n)) || void 0 === e ? void 0 : e.bot;
        });
    return (
        (t = { maxDaysOld: 7 }),
        (0, i.e7)(
            [],
            () =>
                (function (e, n, t) {
                    let { maxDaysOld: i, minDaysOld: u = 0 } = n,
                        a = r.Z.getGuild(e),
                        o = null == a ? void 0 : a.joinedAt;
                    if (null != t) {
                        let n = l.ZP.getMember(e, t);
                        o = (null == n ? void 0 : n.joinedAt) == null ? null : new Date(n.joinedAt);
                    }
                    if (null == o) return !1;
                    let d = Date.now() - o.getTime();
                    return (null == i || d <= 86400000 * i) && d >= 86400000 * u;
                })(e, t, n),
            [t, e, n]
        ) &&
            !c &&
            !s &&
            !u
    );
};
function _(e, n) {
    return null != n && u.Z.canManageUser(c.Plq.KICK_MEMBERS, e, n) && !e.isNonUserBot();
}
function E(e, n) {
    return null != n && u.Z.canManageUser(c.Plq.BAN_MEMBERS, e, n) && !e.isNonUserBot() && !e.bot;
}
