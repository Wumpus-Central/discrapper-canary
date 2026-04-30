"use strict";
n.d(t, { ic: () => u, nc: () => l, w: () => c });
var i = n(17928);
n(318729);
var r = n(576705),
    s = n(903093),
    a = n(610136),
    o = n(652215);
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A;
    return (
        t.can(o.xBc.BAN_MEMBERS, e) ||
        t.can(o.xBc.KICK_MEMBERS, e) ||
        t.can(o.xBc.MODERATE_MEMBERS, e) ||
        t.can(o.xBc.MANAGE_GUILD, e)
    );
}
function u(e) {
    let t = (0, i.bG)([r.A], () => l(e, r.A), [e]),
        n = (0, i.bG)([a.A], () => (null != e ? a.A.getGuildIncident(e.id) : null), [e]);
    return !(null != n && (0, s.k$)(n)) && t;
}
function c(e) {
    return (0, i.bG)(
        [r.A],
        () =>
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A;
                return t.can(o.xBc.MANAGE_GUILD, e);
            })(e, r.A),
        [e],
    );
}
