n.d(t, { ic: () => d, nc: () => o, w: () => c });
var i = n(311907);
n(928108);
var l = n(576705),
    a = n(903093),
    r = n(610136),
    s = n(652215);
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A;
    return (
        t.can(s.xBc.BAN_MEMBERS, e) ||
        t.can(s.xBc.KICK_MEMBERS, e) ||
        t.can(s.xBc.MODERATE_MEMBERS, e) ||
        t.can(s.xBc.MANAGE_GUILD, e)
    );
}
function d(e) {
    let t = (0, i.bG)([l.A], () => o(e, l.A), [e]),
        n = (0, i.bG)([r.A], () => (null != e ? r.A.getGuildIncident(e.id) : null), [e]);
    return !(null != n && (0, a.k$)(n)) && t;
}
function c(e) {
    return (0, i.bG)(
        [l.A],
        () =>
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A;
                return t.can(s.xBc.MANAGE_GUILD, e);
            })(e, l.A),
        [e],
    );
}
