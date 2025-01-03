var i = n(200651),
    r = n(192379),
    l = n(949389),
    a = n(63063),
    s = n(324262),
    o = n(981631),
    c = n(388032),
    d = n(511189);
t.Z = (e) => {
    let { guild: t } = e,
        n = r.useCallback(() => {
            (0, l.xm)(t.id);
        }, [t.id]);
    return (0, i.jsx)(s.Z, {
        guild: t,
        onDismissed: n,
        message: c.intl.format(c.t['+QqO3d'], {
            maxMemberCount: t.maxMembers,
            maxMembersUrl: a.Z.getArticleURL(o.BhN.MAX_MEMBERS)
        }),
        type: o.vID.MAX_MEMBER_COUNT,
        image: d,
        imageMarginX: 61
    });
};
