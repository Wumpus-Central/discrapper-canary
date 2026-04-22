n.d(t, { H: () => d });
var r = n(64700),
    s = n(192308),
    a = n(975571),
    l = n(651892),
    i = n(901406),
    u = n(545986),
    o = n(654487),
    c = n(652215);
function d(e) {
    let { quest: t, onClose: n, sourceQuestContent: d, impressionId: E } = e;
    return r.useCallback(
        async (e, r) => {
            if (t.id === o.Fw) return void window.open(a.A.getArticleURL(c.MVz.VIRTUAL_CURRENCY_LEARN_MORE));
            if (null != n) {
                let e = (0, l.Jx)(t.config);
                (await (0, u.f7)(e)) && (n(), (0, s.closeAllModals)());
            }
            (0, i.pu)(t, { content: e, ctaContent: r, impressionId: E, sourceQuestContent: d });
        },
        [t, n, d, E],
    );
}
