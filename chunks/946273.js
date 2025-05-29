n.d(t, {
    BK: () => p,
    CX: () => b,
    lD: () => f,
    mm: () => g,
    nX: () => m,
    vV: () => d
}),
    n(997841),
    n(388685);
var r = n(442837),
    o = n(271383),
    l = n(430824),
    i = n(496675),
    s = n(594174),
    a = n(630388),
    c = n(372897),
    u = n(981631);
let d = (e, t) => {
    var n;
    let i = (0, r.e7)([o.ZP], () => {
            var n, r;
            return (0, a.yE)(null != (r = null == (n = o.ZP.getMember(e, t)) ? void 0 : n.flags) ? r : 0, c.q.DID_REJOIN);
        }),
        u = (0, r.e7)([l.Z], () => {
            var t;
            return null == (t = l.Z.getGuild(e)) ? void 0 : t.isNew();
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
                        s = l.Z.getGuild(e),
                        a = null == s ? void 0 : s.joinedAt;
                    if (null != n) {
                        let t = o.ZP.getMember(e, n);
                        a = (null == t ? void 0 : t.joinedAt) == null ? null : new Date(t.joinedAt);
                    }
                    if (null == a) return !1;
                    let c = Date.now() - a.getTime();
                    return (null == r || c <= 86400000 * r) && c >= 86400000 * i;
                })(e, n, t),
            [n, e, t]
        ) &&
            !u &&
            !d &&
            !i
    );
};
function p(e, t) {
    let [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.Z, o.ZP];
    return null != t && m(e, t, [n]) && null != r.getMember(t.id, e.id);
}
function m(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.Z];
    return null != t && n.canManageUser(u.Plq.KICK_MEMBERS, e, t) && !e.isNonUserBot();
}
function g(e, t) {
    let [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.Z, o.ZP];
    return null != t && f(e, t, [n]) && null != r.getMember(t.id, e.id);
}
function f(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.Z];
    return null != t && n.canManageUser(u.Plq.BAN_MEMBERS, e, t) && !e.isNonUserBot() && !e.bot;
}
function b(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.Z];
    return null != e && null != t && n.canManageUser(u.Plq.MANAGE_MESSAGES, e, t) && !e.isNonUserBot();
}
