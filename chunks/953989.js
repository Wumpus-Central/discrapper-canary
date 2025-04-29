n.d(t, { Z: () => m }), n(388685), n(642613);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    l = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(706454),
    d = n(388032),
    u = n(335025);
let p = (0, d.getAvailableLocales)();
function m(e) {
    let { application: t, className: n } = e,
        a = (0, s.e7)([c.default], () => c.default.locale),
        { supportedLanguages: m, usersLanguageIsFirst: h } = i.useMemo(() => {
            var e;
            if ((null == (e = t.directory_entry) ? void 0 : e.supported_locales) != null) {
                let e = new Set(t.directory_entry.supported_locales),
                    n = e.has(a),
                    r = p.filter((t) => e.has(t.value));
                return (
                    n && r.sort((e, t) => (e.value === a ? -1 : +(t.value === a))),
                    {
                        supportedLanguages: r.map((e) => d.intl.string(e.localizedName)),
                        usersLanguageIsFirst: n
                    }
                );
            }
            return {
                supportedLanguages: [],
                usersLanguageIsFirst: !1
            };
        }, [t.directory_entry, a]);
    return (0, r.jsxs)('div', {
        className: n,
        children: [
            (0, r.jsx)(o.X6q, {
                variant: 'heading-sm/semibold',
                color: 'header-primary',
                children: d.intl.string(d.t.Fbjlu7)
            }),
            (0, r.jsx)('ul', {
                className: u.outerContainer,
                children: m.map((e, t) =>
                    (0, r.jsx)(
                        'li',
                        {
                            className: l()(u.innerContainer, u.languageItem),
                            children: (0, r.jsx)(o.Text, {
                                variant: 0 === t && h ? 'text-sm/bold' : 'text-sm/normal',
                                children: e
                            })
                        },
                        e
                    )
                )
            }),
            ' '
        ]
    });
}
