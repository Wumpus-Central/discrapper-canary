n.d(t, { H: () => E });
var r = n(64700),
    l = n(192308),
    i = n(975571),
    s = n(971649),
    u = n(651892),
    a = n(901406),
    o = n(617986),
    c = n(190107),
    d = n(652215);
function E(e) {
    let { quest: t, onClose: n, sourceQuestContent: E } = e,
        f = (0, s.wW)();
    return r.useCallback(
        async (e, r) => {
            if (t.id === c.Fw) return void window.open(i.A.getArticleURL(d.MVz.VIRTUAL_CURRENCY_LEARN_MORE));
            if (null != n) {
                let e = (0, u.Jx)(t.config);
                (await (0, o.f7)(e)) && (n(), (0, l.closeAllModals)());
            }
            (0, a.pu)(t, { content: e, ctaContent: r, impressionId: f(), sourceQuestContent: E });
        },
        [t, n, E, f],
    );
}
