n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    l = n(949389),
    a = n(63063),
    o = n(324262),
    s = n(981631),
    c = n(388032),
    u = n(511189);
let d = (e) => {
    let { guild: t } = e,
        n = i.useCallback(() => {
            (0, l.xm)(t.id);
        }, [t.id]);
    return (0, r.jsx)(o.Z, {
        guild: t,
        onDismissed: n,
        message: c.NW.format(c.t['+QqO3d'], {
            maxMemberCount: t.maxMembers,
            maxMembersUrl: a.Z.getArticleURL(s.BhN.MAX_MEMBERS)
        }),
        type: s.vID.MAX_MEMBER_COUNT,
        image: u,
        imageMarginX: 61
    });
};
