t.d(n, {
    BK: () => _,
    mm: () => E,
    vV: () => s
}),
    t(789020);
var l = t(442837),
    i = t(271383),
    r = t(430824),
    u = t(496675),
    a = t(594174),
    o = t(630388),
    c = t(372897),
    d = t(981631);
let s = (e, n) => {
    var t;
    let u = (0, l.e7)([i.ZP], () => {
            var t, l;
            return (0, o.yE)(null != (l = null == (t = i.ZP.getMember(e, n)) ? void 0 : t.flags) ? l : 0, c.q.DID_REJOIN);
        }),
        d = (0, l.e7)([r.Z], () => {
            var n;
            return null == (n = r.Z.getGuild(e)) ? void 0 : n.isNew();
        }),
        s = (0, l.e7)([a.default], () => {
            var e;
            return null == (e = a.default.getUser(n)) ? void 0 : e.bot;
        });
    return (
        (t = { maxDaysOld: 7 }),
        (0, l.e7)(
            [],
            () =>
                (function (e, n, t) {
                    let { maxDaysOld: l, minDaysOld: u = 0 } = n,
                        a = r.Z.getGuild(e),
                        o = null == a ? void 0 : a.joinedAt;
                    if (null != t) {
                        let n = i.ZP.getMember(e, t);
                        o = (null == n ? void 0 : n.joinedAt) == null ? null : new Date(n.joinedAt);
                    }
                    if (null == o) return !1;
                    let c = Date.now() - o.getTime();
                    return (null == l || c <= 86400000 * l) && c >= 86400000 * u;
                })(e, t, n),
            [t, e, n]
        ) &&
            !d &&
            !s &&
            !u
    );
};
function _(e, n) {
    return null != n && u.Z.canManageUser(d.Plq.KICK_MEMBERS, e, n) && !e.isNonUserBot();
}
function E(e, n) {
    return null != n && u.Z.canManageUser(d.Plq.BAN_MEMBERS, e, n) && !e.isNonUserBot() && !e.bot;
}
