e.d(t, { ic: () => c, nc: () => u, w: () => r });
var i = e(17928);
e(318729);
var l = e(576705),
    o = e(903093),
    a = e(610136),
    d = e(652215);
function u(n) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A;
    return (
        t.can(d.xBc.BAN_MEMBERS, n) ||
        t.can(d.xBc.KICK_MEMBERS, n) ||
        t.can(d.xBc.MODERATE_MEMBERS, n) ||
        t.can(d.xBc.MANAGE_GUILD, n)
    );
}
function c(n) {
    let t = (0, i.bG)([l.A], () => u(n, l.A), [n]),
        e = (0, i.bG)([a.A], () => (null != n ? a.A.getGuildIncident(n.id) : null), [n]);
    return !(null != e && (0, o.k$)(e)) && t;
}
function r(n) {
    return (0, i.bG)(
        [l.A],
        () =>
            (function (n) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A;
                return t.can(d.xBc.MANAGE_GUILD, n);
            })(n, l.A),
        [n],
    );
}
