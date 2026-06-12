n.d(t, { H: () => d });
var r = n(64700),
    l = n(192308),
    s = n(975571),
    a = n(651892),
    i = n(901406),
    u = n(617986),
    o = n(190107),
    c = n(652215);
function d(e) {
    let { quest: t, onClose: n, sourceQuestContent: d, impressionId: E } = e;
    return r.useCallback(
        async (e, r) => {
            if (t.id === o.Fw) return void window.open(s.A.getArticleURL(c.MVz.VIRTUAL_CURRENCY_LEARN_MORE));
            if (null != n) {
                let e = (0, a.Jx)(t.config);
                (await (0, u.f7)(e)) && (n(), (0, l.closeAllModals)());
            }
            (0, i.pu)(t, { content: e, ctaContent: r, impressionId: E, sourceQuestContent: d });
        },
        [t, n, d, E],
    );
}
