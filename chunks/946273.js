(n.d(t, {
    BK: () => m,
    CX: () => h,
    lD: () => b,
    mm: () => f,
    nX: () => g,
    vV: () => p
}),
    n(997841),
    n(388685));
var r = n(442837),
    o = n(271383),
    l = n(430824),
    i = n(496675),
    a = n(594174),
    s = n(630388),
    c = n(709054),
    u = n(372897),
    d = n(981631);
let p = (e, t) => {
    var n;
    let i = (0, r.e7)([o.ZP], () => {
            var n, r;
            return (0, s.yE)(null != (r = null == (n = o.ZP.getMember(e, t)) ? void 0 : n.flags) ? r : 0, u.q.DID_REJOIN);
        }),
        d = (0, r.e7)([l.Z], () => {
            let t = l.Z.getGuild(e);
            return (
                null != t &&
                (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
                        n = c.default.extractTimestamp(e.id);
                    return Date.now() - n < 86400000 * t;
                })(t)
            );
        }),
        p = (0, r.e7)([a.default], () => {
            var e;
            return null == (e = a.default.getUser(t)) ? void 0 : e.bot;
        });
    return (
        (n = { maxDaysOld: 7 }),
        (0, r.e7)(
            [],
            () =>
                (function (e, t, n) {
                    let { maxDaysOld: r, minDaysOld: i = 0 } = t,
                        a = l.Z.getGuild(e),
                        s = null == a ? void 0 : a.joinedAt;
                    if (null != n) {
                        let t = o.ZP.getMember(e, n);
                        s = (null == t ? void 0 : t.joinedAt) == null ? null : new Date(t.joinedAt);
                    }
                    if (null == s) return !1;
                    let c = Date.now() - s.getTime();
                    return (null == r || c <= 86400000 * r) && c >= 86400000 * i;
                })(e, n, t),
            [n, e, t]
        ) &&
            !d &&
            !p &&
            !i
    );
};
function m(e, t) {
    let [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.Z, o.ZP];
    return null != t && g(e, t, [n]) && null != r.getMember(t.id, e.id);
}
function g(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.Z];
    return null != t && n.canManageUser(d.Plq.KICK_MEMBERS, e, t) && !e.isNonUserBot();
}
function f(e, t) {
    let [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.Z, o.ZP];
    return null != t && b(e, t, [n]) && null != r.getMember(t.id, e.id);
}
function b(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.Z];
    return null != t && n.canManageUser(d.Plq.BAN_MEMBERS, e, t) && !e.isNonUserBot() && !e.bot;
}
function h(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.Z];
    return null != e && null != t && n.canManageUser(d.Plq.MANAGE_MESSAGES, e, t) && !e.isNonUserBot();
}
