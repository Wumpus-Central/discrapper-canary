n.d(t, { H: () => d });
var r = n(64700),
    i = n(397927),
    s = n(975571),
    a = n(651892),
    l = n(901406),
    o = n(545986),
    u = n(654487),
    c = n(652215);
function d(e) {
    let { quest: t, onClose: n, sourceQuestContent: d, impressionId: m } = e;
    return r.useCallback(
        async (e, r) => {
            if (t.id === u.Fw) return void window.open(s.A.getArticleURL(c.MVz.VIRTUAL_CURRENCY_LEARN_MORE));
            if (null != n) {
                let e = (0, a.Jx)(t.config);
                (await (0, o.f7)(e)) && (n(), (0, i.s7G)());
            }
            (0, l.pu)(t, { content: e, ctaContent: r, impressionId: m, sourceQuestContent: d });
        },
        [t, n, d, m],
    );
}
