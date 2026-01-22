n.d(t, {
    P: () => l,
});
var r = n(64700),
    i = n(975571),
    a = n(633057),
    s = n(652215),
    o = n(985018);

function l(e) {
    let { userId: t, renderApplicationName: n } = e,
        l = (0, a.A)(t);
    return r.useMemo(
        () =>
            null != l
                ? o.intl.format(o.t.rSUACb, {
                      helpdeskArticle: i.A.getArticleURL(s.MVz.SLAYER_PROVISIONAL_ACCOUNTS),
                      applicationName: () => n(l),
                  })
                : o.intl.format(o.t["q+N8L6"], {
                      helpdeskArticle: i.A.getArticleURL(s.MVz.SLAYER_PROVISIONAL_ACCOUNTS),
                  }),
        [l, n],
    );
}
