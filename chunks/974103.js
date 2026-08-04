e.d(t, { ic: () => a, nc: () => o, w: () => r });
var i = e(17928);
e(318729);
var l = e(576705),
    c = e(903093),
    d = e(610136),
    u = e(652215);
function o(n) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A;
    return (
        t.can(u.xBc.BAN_MEMBERS, n) ||
        t.can(u.xBc.KICK_MEMBERS, n) ||
        t.can(u.xBc.MODERATE_MEMBERS, n) ||
        t.can(u.xBc.MANAGE_GUILD, n)
    );
}
function a(n) {
    let t = (0, i.bG)([l.A], () => o(n, l.A), [n]),
        e = (0, i.bG)([d.A], () => (null != n ? d.A.getGuildIncident(n.id) : null), [n]);
    return !(null != e && (0, c.k$)(e)) && t;
}
function r(n) {
    return (0, i.bG)(
        [l.A],
        () =>
            (function (n) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A;
                return t.can(u.xBc.MANAGE_GUILD, n);
            })(n, l.A),
        [n],
    );
}
