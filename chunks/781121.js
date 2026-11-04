var s = n(582128),
    r = n(192308),
    i = n(975571),
    l = n(971649),
    u = n(651892),
    o = n(574112),
    a = n(321538),
    d = n(221596),
    c = n(652215);
n.d(
    t,
    {},
    {
        H: function (e) {
            let { quest: t, onClose: n, sourceQuestContent: _ } = e,
                E = (0, l.wW)();
            return s.useCallback(
                async (e, s) => {
                    if (t.id === d.Fw) return void window.open(i.A.getArticleURL(c.MVz.VIRTUAL_CURRENCY_LEARN_MORE));
                    if (null != n) {
                        let e = (0, u.Jx)(t.config);
                        (await (0, a.f7)(e)) && (n(), (0, r.s7)());
                    }
                    (0, o.pu)(t, { content: e, ctaContent: s, impressionId: E(), sourceQuestContent: _ });
                },
                [t, n, _, E],
            );
        },
    },
);
