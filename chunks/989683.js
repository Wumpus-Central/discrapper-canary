var e = t(855986),
    i = t(696451),
    r = t(317525),
    a = t(576705),
    u = t(372058),
    o = t(652215);
function s(n, l, t, e) {
    var i;
    if (null == n.linkedGameOrganization || !l.can(o.xBc.CREATE_INSTANT_INVITE, n)) return !1;
    let r = t.getSelfMember(n.id);
    return null != r && ((i = n.id), r.roles.some((n) => e.getRole(i, n)?.tags.game_organization_can_invite === null));
}
t.d(
    l,
    {},
    {
        Ay: function (n, l) {
            let t = (0, u.E9)(l);
            return (0, e.bG)([i.Ay, r.A, a.A], () => t && s(n, a.A, i.Ay, r.A), [t, n]);
        },
        Dr: s,
    },
);
