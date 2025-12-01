n.d(t, {
    BK: () => g,
    CX: () => O,
    lD: () => y,
    mm: () => b,
    nX: () => E,
    vV: () => h,
}),
    n(997841),
    n(388685);
var r = n(95015),
    i = n(442837),
    a = n(271383),
    o = n(430824),
    s = n(496675),
    l = n(594174),
    c = n(709054),
    u = n(372897),
    d = n(981631);
let f = 86400000;
function p(e, t, n) {
    let { maxDaysOld: r, minDaysOld: i = 0 } = t,
        s = o.Z.getGuild(e),
        l = null == s ? void 0 : s.joinedAt;
    if (null != n) {
        let t = a.ZP.getMember(e, n);
        l = (null == t ? void 0 : t.joinedAt) == null ? null : new Date(t.joinedAt);
    }
    if (null == l) return !1;
    let c = Date.now() - l.getTime(),
        u = null == r || c <= f * r,
        d = c >= f * i;
    return u && d;
}
function _(e, t, n) {
    return (0, i.e7)([], () => p(e, t, n), [t, e, n]);
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
        n = c.default.extractTimestamp(e.id);
    return Date.now() - n < 86400000 * t;
}
let h = (e, t) => {
    let n = (0, i.e7)([a.ZP], () => {
            var n, i;
            return (0, r.yE)(
                null != (i = null == (n = a.ZP.getMember(e, t)) ? void 0 : n.flags) ? i : 0,
                u.q.DID_REJOIN,
            );
        }),
        s = (0, i.e7)([o.Z], () => {
            let t = o.Z.getGuild(e);
            return null != t && m(t);
        }),
        c = (0, i.e7)([l.default], () => {
            var e;
            return null == (e = l.default.getUser(t)) ? void 0 : e.bot;
        });
    return _(e, { maxDaysOld: 7 }, t) && !s && !c && !n;
};
function g(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.Z];
    return null != t && E(e, t, [n]) && !e.isProvisional;
}
function E(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.Z];
    return null != t && n.canManageUser(d.Plq.KICK_MEMBERS, e, t) && !e.isNonUserBot();
}
function b(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.Z];
    return null != t && y(e, t, [n]) && !e.isProvisional;
}
function y(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.Z];
    return null != t && n.canManageUser(d.Plq.BAN_MEMBERS, e, t) && !e.isNonUserBot() && !e.bot;
}
function O(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.Z];
    return null != e && null != t && n.canManageUser(d.Plq.MANAGE_MESSAGES, e, t) && !e.isNonUserBot();
}
