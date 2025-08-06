n.d(t, {
    BK: () => g,
    CX: () => O,
    lD: () => y,
    mm: () => b,
    nX: () => E,
    vV: () => m,
}),
    n(997841),
    n(388685);
var r = n(442837),
    i = n(271383),
    o = n(430824),
    a = n(496675),
    s = n(594174),
    l = n(630388),
    c = n(709054),
    u = n(372897),
    d = n(981631);
let f = 86400000;
function _(e, t, n) {
    let { maxDaysOld: r, minDaysOld: a = 0 } = t,
        s = o.Z.getGuild(e),
        l = null == s ? void 0 : s.joinedAt;
    if (null != n) {
        let t = i.ZP.getMember(e, n);
        l = (null == t ? void 0 : t.joinedAt) == null ? null : new Date(t.joinedAt);
    }
    if (null == l) return !1;
    let c = Date.now() - l.getTime(),
        u = null == r || c <= f * r,
        d = c >= f * a;
    return u && d;
}
function p(e, t, n) {
    return (0, r.e7)([], () => _(e, t, n), [t, e, n]);
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
        n = c.default.extractTimestamp(e.id);
    return Date.now() - n < 86400000 * t;
}
let m = (e, t) => {
    let n = (0, r.e7)([i.ZP], () => {
            var n, r;
            return (0, l.yE)(
                null != (r = null == (n = i.ZP.getMember(e, t)) ? void 0 : n.flags) ? r : 0,
                u.q.DID_REJOIN,
            );
        }),
        a = (0, r.e7)([o.Z], () => {
            let t = o.Z.getGuild(e);
            return null != t && h(t);
        }),
        c = (0, r.e7)([s.default], () => {
            var e;
            return null == (e = s.default.getUser(t)) ? void 0 : e.bot;
        });
    return p(e, { maxDaysOld: 7 }, t) && !a && !c && !n;
};
function g(e, t) {
    let [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.Z, i.ZP];
    return null != t && E(e, t, [n]) && null != r.getMember(t.id, e.id);
}
function E(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.Z];
    return null != t && n.canManageUser(d.Plq.KICK_MEMBERS, e, t) && !e.isNonUserBot();
}
function b(e, t) {
    let [n, r] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.Z, i.ZP];
    return null != t && y(e, t, [n]) && null != r.getMember(t.id, e.id);
}
function y(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.Z];
    return null != t && n.canManageUser(d.Plq.BAN_MEMBERS, e, t) && !e.isNonUserBot() && !e.bot;
}
function O(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.Z];
    return null != e && null != t && n.canManageUser(d.Plq.MANAGE_MESSAGES, e, t) && !e.isNonUserBot();
}
