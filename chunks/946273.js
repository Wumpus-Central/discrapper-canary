n.d(t, {
    BK: () => p,
    mm: () => g,
    vV: () => d
}),
    n(997841);
var r = n(442837),
    o = n(271383),
    a = n(430824),
    i = n(496675),
    s = n(594174),
    c = n(630388),
    l = n(372897),
    u = n(981631);
let d = (e, t) => {
    var n;
    let i = (0, r.e7)([o.ZP], () => {
            var n, r;
            return (0, c.yE)(null != (r = null == (n = o.ZP.getMember(e, t)) ? void 0 : n.flags) ? r : 0, l.q.DID_REJOIN);
        }),
        u = (0, r.e7)([a.Z], () => {
            var t;
            return null == (t = a.Z.getGuild(e)) ? void 0 : t.isNew();
        }),
        d = (0, r.e7)([s.default], () => {
            var e;
            return null == (e = s.default.getUser(t)) ? void 0 : e.bot;
        });
    return (
        (n = { maxDaysOld: 7 }),
        (0, r.e7)(
            [],
            () =>
                (function (e, t, n) {
                    let { maxDaysOld: r, minDaysOld: i = 0 } = t,
                        s = a.Z.getGuild(e),
                        c = null == s ? void 0 : s.joinedAt;
                    if (null != n) {
                        let t = o.ZP.getMember(e, n);
                        c = (null == t ? void 0 : t.joinedAt) == null ? null : new Date(t.joinedAt);
                    }
                    if (null == c) return !1;
                    let l = Date.now() - c.getTime();
                    return (null == r || l <= 86400000 * r) && l >= 86400000 * i;
                })(e, n, t),
            [n, e, t]
        ) &&
            !u &&
            !d &&
            !i
    );
};
function p(e, t) {
    return null != t && i.Z.canManageUser(u.Plq.KICK_MEMBERS, e, t) && !e.isNonUserBot();
}
function g(e, t) {
    return null != t && i.Z.canManageUser(u.Plq.BAN_MEMBERS, e, t) && !e.isNonUserBot() && !e.bot;
}
