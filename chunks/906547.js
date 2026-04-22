n.d(t, { P: () => u });
var r = n(64700),
    l = n(975571),
    i = n(633057),
    a = n(652215),
    o = n(985018);
function u(e) {
    let { userId: t, renderApplicationName: n } = e,
        u = (0, i.A)(t);
    return r.useMemo(
        () =>
            null != u
                ? o.intl.format(o.t.rSUACb, {
                      helpdeskArticle: l.A.getArticleURL(a.MVz.SLAYER_PROVISIONAL_ACCOUNTS),
                      applicationName: () => n(u),
                  })
                : o.intl.format(o.t["q+N8L6"], {
                      helpdeskArticle: l.A.getArticleURL(a.MVz.SLAYER_PROVISIONAL_ACCOUNTS),
                  }),
        [u, n],
    );
}
