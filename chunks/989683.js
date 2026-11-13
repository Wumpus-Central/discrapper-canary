var e = t(855986),
    i = t(696451),
    a = t(317525),
    r = t(576705),
    u = t(372058),
    o = t(652215);
function d(n, l, t, e) {
    var i;
    if (null == n.linkedGameOrganization || !l.can(o.xBc.CREATE_INSTANT_INVITE, n)) return !1;
    let a = t.getSelfMember(n.id);
    return null != a && ((i = n.id), a.roles.some((n) => e.getRole(i, n)?.tags.game_organization_can_invite === null));
}
t.d(
    l,
    {},
    {
        Ay: function (n, l) {
            let t = (0, u.E9)(l);
            return (0, e.bG)([i.Ay, a.A, r.A], () => t && d(n, r.A, i.Ay, a.A), [t, n]);
        },
        Dr: d,
    },
);
