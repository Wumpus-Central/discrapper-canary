var t = i(855986),
    r = i(696451),
    a = i(317525),
    l = i(576705),
    u = i(372058),
    c = i(652215);
function o(e, n, i, t) {
    var r;
    if (null == e.linkedGameOrganization || !n.can(c.xBc.CREATE_INSTANT_INVITE, e)) return !1;
    let a = i.getSelfMember(e.id);
    return null != a && ((r = e.id), a.roles.some((e) => t.getRole(r, e)?.tags.game_organization_can_invite === null));
}
i.d(
    n,
    {},
    {
        Ay: function (e, n) {
            let i = (0, u.E9)(n);
            return (0, t.bG)([r.Ay, a.A, l.A], () => i && o(e, l.A, r.Ay, a.A), [i, e]);
        },
        Dr: o,
    },
);
