(n(855986), n(696451), n(317525), n(576705), n(372058));
var l = n(652215);
n.d(
    t,
    {},
    {
        Dr: function (e, t, n, i) {
            var r;
            if (null == e.linkedGameOrganization || !t.can(l.xBc.CREATE_INSTANT_INVITE, e)) return !1;
            let o = n.getSelfMember(e.id);
            return (
                null != o &&
                ((r = e.id), o.roles.some((e) => i.getRole(r, e)?.tags.game_organization_can_invite === null))
            );
        },
    },
);
