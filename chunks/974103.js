n.d(t, {
    ic: () => c,
    nc: () => l,
    w: () => d,
});
var r = n(311907);
n(928108);
var i = n(576705),
    a = n(903093),
    s = n(610136),
    o = n(652215);
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.A;
    return (
        t.can(o.xBc.BAN_MEMBERS, e) ||
        t.can(o.xBc.KICK_MEMBERS, e) ||
        t.can(o.xBc.MODERATE_MEMBERS, e) ||
        t.can(o.xBc.MANAGE_GUILD, e)
    );
}
function c(e) {
    let t = (0, r.bG)([i.A], () => l(e, i.A), [e]),
        n = (0, r.bG)([s.A], () => (null != e ? s.A.getGuildIncident(e.id) : null), [e]);
    return !(null != n && (0, a.k$)(n)) && t;
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.A;
    return t.can(o.xBc.MANAGE_GUILD, e);
}
function d(e) {
    return (0, r.bG)([i.A], () => u(e, i.A), [e]);
}
