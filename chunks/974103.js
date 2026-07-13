n.d(t, { ic: () => d, nc: () => o, w: () => c });
var i = n(17928);
n(318729);
var l = n(576705),
    s = n(903093),
    a = n(610136),
    r = n(652215);
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A;
    return (
        t.can(r.xBc.BAN_MEMBERS, e) ||
        t.can(r.xBc.KICK_MEMBERS, e) ||
        t.can(r.xBc.MODERATE_MEMBERS, e) ||
        t.can(r.xBc.MANAGE_GUILD, e)
    );
}
function d(e) {
    let t = (0, i.bG)([l.A], () => o(e, l.A), [e]),
        n = (0, i.bG)([a.A], () => (null != e ? a.A.getGuildIncident(e.id) : null), [e]);
    return !(null != n && (0, s.k$)(n)) && t;
}
function c(e) {
    return (0, i.bG)(
        [l.A],
        () =>
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A;
                return t.can(r.xBc.MANAGE_GUILD, e);
            })(e, l.A),
        [e],
    );
}
