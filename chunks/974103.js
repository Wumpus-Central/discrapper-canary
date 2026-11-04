var u = t(855986),
    i = t(576705),
    e = t(903093),
    A = t(610136),
    l = t(652215);
function r(n) {
    let c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.A;
    return (
        c.can(l.xBc.BAN_MEMBERS, n) ||
        c.can(l.xBc.KICK_MEMBERS, n) ||
        c.can(l.xBc.MODERATE_MEMBERS, n) ||
        c.can(l.xBc.MANAGE_GUILD, n)
    );
}
t.d(
    c,
    {},
    {
        ic: function (n) {
            let c = (0, u.bG)([i.A], () => r(n, i.A), [n]),
                t = (0, u.bG)([A.A], () => (null != n ? A.A.getGuildIncident(n.id) : null), [n]);
            return !(null != t && (0, e.k$)(t)) && c;
        },
        nc: r,
        w: function (n) {
            return (0, u.bG)(
                [i.A],
                () =>
                    (function (n) {
                        let c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.A;
                        return c.can(l.xBc.MANAGE_GUILD, n);
                    })(n, i.A),
                [n],
            );
        },
    },
);
