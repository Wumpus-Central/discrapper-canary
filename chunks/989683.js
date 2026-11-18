var t = e(855986),
    i = e(696451),
    r = e(317525),
    u = e(576705),
    a = e(372058),
    o = e(652215);
function d(n, l, e, t) {
    var i;
    if (null == n.linkedGameOrganization || !l.can(o.xBc.CREATE_INSTANT_INVITE, n)) return !1;
    let r = e.getSelfMember(n.id);
    return null != r && ((i = n.id), r.roles.some((n) => t.getRole(i, n)?.tags.game_organization_can_invite === null));
}
e.d(
    l,
    {},
    {
        Ay: function (n, l) {
            let e = (0, a.E9)(l);
            return (0, t.bG)([i.Ay, r.A, u.A], () => e && d(n, u.A, i.Ay, r.A), [e, n]);
        },
        Dr: d,
    },
);
