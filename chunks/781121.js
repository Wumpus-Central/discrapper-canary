n.d(t, { H: () => _ });
var s = n(582128),
    r = n(192308),
    i = n(975571),
    l = n(971649),
    u = n(651892),
    o = n(620954),
    a = n(617986),
    d = n(190107),
    c = n(652215);
function _(e) {
    let { quest: t, onClose: n, sourceQuestContent: _ } = e,
        E = (0, l.wW)();
    return s.useCallback(
        async (e, s) => {
            if (t.id === d.Fw) return void window.open(i.A.getArticleURL(c.MVz.VIRTUAL_CURRENCY_LEARN_MORE));
            if (null != n) {
                let e = (0, u.Jx)(t.config);
                (await (0, a.f7)(e)) && (n(), (0, r.closeAllModals)());
            }
            (0, o.pu)(t, { content: e, ctaContent: s, impressionId: E(), sourceQuestContent: _ });
        },
        [t, n, _, E],
    );
}
