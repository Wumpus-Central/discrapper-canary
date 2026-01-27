n.d(t, {
    ic: () => c,
    nc: () => o,
    w: () => u,
});
var r = n(311907);
n(928108);
var i = n(576705),
    l = n(903093),
    a = n(610136),
    s = n(652215);

function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.A;
    return (
        t.can(s.xBc.BAN_MEMBERS, e) ||
        t.can(s.xBc.KICK_MEMBERS, e) ||
        t.can(s.xBc.MODERATE_MEMBERS, e) ||
        t.can(s.xBc.MANAGE_GUILD, e)
    );
}

function c(e) {
    let t = (0, r.bG)([i.A], () => o(e, i.A), [e]),
        n = (0, r.bG)([a.A], () => (null != e ? a.A.getGuildIncident(e.id) : null), [e]);
    return !(null != n && (0, l.k$)(n)) && t;
}

function u(e) {
    return (0, r.bG)(
        [i.A],
        () =>
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.A;
                return t.can(s.xBc.MANAGE_GUILD, e);
            })(e, i.A),
        [e],
    );
}
