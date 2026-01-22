n.d(t, {
    A: () => d,
});
var r = n(627968),
    i = n(64700),
    l = n(621248),
    a = n(975571),
    s = n(64983),
    o = n(652215),
    c = n(985018),
    u = n(462947);
let d = (e) => {
    let { guild: t } = e,
        n = i.useCallback(() => {
            (0, l.x)(t.id);
        }, [t.id]);
    return (0, r.jsx)(s.A, {
        guild: t,
        onDismissed: n,
        message: c.intl.format(c.t["+QqO3U"], {
            maxMemberCount: t.maxMembers,
            maxMembersUrl: a.A.getArticleURL(o.MVz.MAX_MEMBERS),
        }),
        type: o.n5X.MAX_MEMBER_COUNT,
        image: u,
        imageMarginX: 61,
    });
};
