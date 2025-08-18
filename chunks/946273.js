n.d(t, {
    BK: () => f,
    CX: () => O,
    lD: () => b,
    mm: () => g,
    nX: () => E,
    vV: () => _,
}),
    n(997841),
    n(388685);
var r = n(442837),
    l = n(271383),
    i = n(430824),
    u = n(496675),
    o = n(594174),
    a = n(630388),
    c = n(709054),
    d = n(372897),
    s = n(981631);
let _ = (e, t) => {
    var n;
    let u = (0, r.e7)([l.ZP], () => {
            var n, r;
            return (0, a.yE)(
                null != (r = null == (n = l.ZP.getMember(e, t)) ? void 0 : n.flags) ? r : 0,
                d.q.DID_REJOIN,
            );
        }),
        s = (0, r.e7)([i.Z], () => {
            let t = i.Z.getGuild(e);
            return (
                null != t &&
                (function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
                        n = c.default.extractTimestamp(e.id);
                    return Date.now() - n < 86400000 * t;
                })(t)
            );
        }),
        _ = (0, r.e7)([o.default], () => {
            var e;
            return null == (e = o.default.getUser(t)) ? void 0 : e.bot;
        });
    return (
        (n = { maxDaysOld: 7 }),
        (0, r.e7)(
            [],
            () =>
                (function (e, t, n) {
                    let { maxDaysOld: r, minDaysOld: u = 0 } = t,
                        o = i.Z.getGuild(e),
                        a = null == o ? void 0 : o.joinedAt;
                    if (null != n) {
                        let t = l.ZP.getMember(e, n);
                        a = (null == t ? void 0 : t.joinedAt) == null ? null : new Date(t.joinedAt);
                    }
                    if (null == a) return !1;
                    let c = Date.now() - a.getTime();
                    return (null == r || c <= 86400000 * r) && c >= 86400000 * u;
                })(e, n, t),
            [n, e, t],
        ) &&
            !s &&
            !_ &&
            !u
    );
};
function f(e, t) {
    let [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [u.Z, l.ZP];
    return null != t && E(e, t, [n]) && null != r.getMember(t.id, e.id);
}
function E(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [u.Z];
    return null != t && n.canManageUser(s.Plq.KICK_MEMBERS, e, t) && !e.isNonUserBot();
}
function g(e, t) {
    let [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [u.Z, l.ZP];
    return null != t && b(e, t, [n]) && null != r.getMember(t.id, e.id);
}
function b(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [u.Z];
    return null != t && n.canManageUser(s.Plq.BAN_MEMBERS, e, t) && !e.isNonUserBot() && !e.bot;
}
function O(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [u.Z];
    return null != e && null != t && n.canManageUser(s.Plq.MANAGE_MESSAGES, e, t) && !e.isNonUserBot();
}
