n.d(t, { H: () => E });
var r = n(582128),
    u = n(192308),
    l = n(975571),
    s = n(971649),
    i = n(651892),
    a = n(620954),
    o = n(617986),
    c = n(190107),
    d = n(652215);
function E(e) {
    let { quest: t, onClose: n, sourceQuestContent: E } = e,
        _ = (0, s.wW)();
    return r.useCallback(
        async (e, r) => {
            if (t.id === c.Fw) return void window.open(l.A.getArticleURL(d.MVz.VIRTUAL_CURRENCY_LEARN_MORE));
            if (null != n) {
                let e = (0, i.Jx)(t.config);
                (await (0, o.f7)(e)) && (n(), (0, u.closeAllModals)());
            }
            (0, a.pu)(t, { content: e, ctaContent: r, impressionId: _(), sourceQuestContent: E });
        },
        [t, n, E, _],
    );
}
