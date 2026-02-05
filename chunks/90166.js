n.d(t, { A: () => u });
var i = n(627968),
    r = n(64700),
    a = n(621248),
    l = n(975571),
    s = n(64983),
    o = n(652215),
    d = n(985018),
    c = n(462947);
let u = (e) => {
    let { guild: t } = e,
        n = r.useCallback(() => {
            (0, a.x)(t.id);
        }, [t.id]);
    return (0, i.jsx)(s.A, {
        guild: t,
        onDismissed: n,
        message: d.intl.format(d.t["+QqO3U"], {
            maxMemberCount: t.maxMembers,
            maxMembersUrl: l.A.getArticleURL(o.MVz.MAX_MEMBERS),
        }),
        type: o.n5X.MAX_MEMBER_COUNT,
        image: c,
        imageMarginX: 61,
    });
};
