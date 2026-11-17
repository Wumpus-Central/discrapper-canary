var l = e(855986),
    r = e(696451),
    u = e(317525),
    i = e(576705),
    a = e(372058),
    s = e(652215);
function d(n, t, e, l) {
    var r;
    if (null == n.linkedGameOrganization || !t.can(s.xBc.CREATE_INSTANT_INVITE, n)) return !1;
    let u = e.getSelfMember(n.id);
    return null != u && ((r = n.id), u.roles.some((n) => l.getRole(r, n)?.tags.game_organization_can_invite === null));
}
e.d(
    t,
    {},
    {
        Ay: function (n, t) {
            let e = (0, a.E9)(t);
            return (0, l.bG)([r.Ay, u.A, i.A], () => e && d(n, i.A, r.Ay, u.A), [e, n]);
        },
        Dr: d,
    },
);
