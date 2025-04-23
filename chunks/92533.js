n.d(t, { A: () => m });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(63063),
    s = n(67734),
    a = n(375263),
    o = n(586382),
    c = n(981631),
    u = n(388032),
    d = n(563772);
function m(e) {
    let { guild: t, canManageGuild: n } = e;
    return (0, r.jsxs)(i.hjN, {
        className: d.container,
        children: [
            (0, r.jsxs)('div', {
                className: d.column,
                children: [
                    (0, r.jsxs)(i.vwX, {
                        className: d.title,
                        children: [u.intl.string(u.t['0r0AzM']), (0, r.jsx)(o.zA, { guild: t })]
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        className: d.text,
                        children: u.intl.string(u.t.UfqmIS)
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-secondary',
                        className: d.text,
                        children: u.intl.format(u.t.vBcWUl, { articleURL: l.Z.getArticleURL(c.BhN.GUILD_BANNER_SPLASH) })
                    }),
                    (0, r.jsx)(s.F, {
                        guild: t,
                        canManageGuild: n,
                        buttonClassName: d.button
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: d.column,
                children: (0, r.jsx)(a.O, {
                    guild: t,
                    canManageGuild: n
                })
            })
        ]
    });
}
