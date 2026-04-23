n.d(t, { A: () => c });
var i = n(627968),
    r = n(64700),
    a = n(621248),
    l = n(975571),
    s = n(926466),
    o = n(652215),
    d = n(985018),
    u = n(462947);
let c = (e) => {
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
        image: u,
        imageMarginX: 61,
    });
};
