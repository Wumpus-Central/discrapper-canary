"use strict";
n.d(t, { ic: () => o, nc: () => c, w: () => u });
var i = n(311907);
n(928108);
var r = n(576705),
    s = n(903093),
    l = n(610136),
    a = n(652215);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A;
    return (
        t.can(a.xBc.BAN_MEMBERS, e) ||
        t.can(a.xBc.KICK_MEMBERS, e) ||
        t.can(a.xBc.MODERATE_MEMBERS, e) ||
        t.can(a.xBc.MANAGE_GUILD, e)
    );
}
function o(e) {
    let t = (0, i.bG)([r.A], () => c(e, r.A), [e]),
        n = (0, i.bG)([l.A], () => (null != e ? l.A.getGuildIncident(e.id) : null), [e]);
    return !(null != n && (0, s.k$)(n)) && t;
}
function u(e) {
    return (0, i.bG)(
        [r.A],
        () =>
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A;
                return t.can(a.xBc.MANAGE_GUILD, e);
            })(e, r.A),
        [e],
    );
}
