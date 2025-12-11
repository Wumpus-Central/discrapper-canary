n.d(t, { Z: () => c });
var l = n(473749),
    i = n(442837),
    s = n(345162),
    r = n(485386),
    a = n(496675),
    o = n(594174),
    u = n(700785),
    d = n(981631);
function c(e) {
    let {
        sortedRoles: t,
        currentUser: n,
        canManageRoles: c,
    } = (0, i.cj)(
        [r.Z, o.default, a.Z],
        () => ({
            sortedRoles: null != e ? r.Z.getSortedRoles(e.id) : [],
            currentUser: o.default.getCurrentUser(),
            canManageRoles: null != e && a.Z.can(d.Plq.MANAGE_ROLES, e),
        }),
        [e],
    );
    return l.useMemo(() => {
        if (null == e || null == n || !c) return [];
        let l = u.e9(e, n.id);
        return t.filter((t) => {
            var i;
            return (
                !(0, s.fI)(t) &&
                !t.managed &&
                (null == (i = t.tags) ? void 0 : i.guild_connections) === void 0 &&
                !!u.r6(e, n.id, l, t)
            );
        });
    }, [e, n, c, t]);
}
