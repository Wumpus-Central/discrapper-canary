n.d(t, { ic: () => o, nc: () => E, w: () => _ });
var i = n(17928);
n(318729);
var l = n(576705),
    r = n(903093),
    s = n(610136),
    a = n(652215);
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A;
    return (
        t.can(a.xBc.BAN_MEMBERS, e) ||
        t.can(a.xBc.KICK_MEMBERS, e) ||
        t.can(a.xBc.MODERATE_MEMBERS, e) ||
        t.can(a.xBc.MANAGE_GUILD, e)
    );
}
function o(e) {
    let t = (0, i.bG)([l.A], () => E(e, l.A), [e]),
        n = (0, i.bG)([s.A], () => (null != e ? s.A.getGuildIncident(e.id) : null), [e]);
    return !(null != n && (0, r.k$)(n)) && t;
}
function _(e) {
    return (0, i.bG)(
        [l.A],
        () =>
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A;
                return t.can(a.xBc.MANAGE_GUILD, e);
            })(e, l.A),
        [e],
    );
}
