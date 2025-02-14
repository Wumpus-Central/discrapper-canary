n.d(t, { Z: () => u });
var i = n(200651),
    l = n(192379),
    r = n(949389),
    a = n(63063),
    s = n(324262),
    o = n(981631),
    d = n(388032),
    c = n(511189);
let u = (e) => {
    let { guild: t } = e,
        n = l.useCallback(() => {
            (0, r.xm)(t.id);
        }, [t.id]);
    return (0, i.jsx)(s.Z, {
        guild: t,
        onDismissed: n,
        message: d.intl.format(d.t['+QqO3d'], {
            maxMemberCount: t.maxMembers,
            maxMembersUrl: a.Z.getArticleURL(o.BhN.MAX_MEMBERS)
        }),
        type: o.vID.MAX_MEMBER_COUNT,
        image: c,
        imageMarginX: 61
    });
};
