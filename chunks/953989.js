n.d(t, { Z: () => h }), n(47120);
var i = n(200651),
    a = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(706454),
    d = n(388032),
    u = n(396601);
let m = (0, d.getAvailableLocales)();
function h(e) {
    let { application: t, className: n } = e,
        r = (0, s.e7)([c.default], () => c.default.locale),
        { supportedLanguages: h, usersLanguageIsFirst: p } = a.useMemo(() => {
            var e;
            if ((null === (e = t.directory_entry) || void 0 === e ? void 0 : e.supported_locales) != null) {
                let e = new Set(t.directory_entry.supported_locales),
                    n = e.has(r),
                    i = m.filter((t) => e.has(t.value));
                return (
                    n && i.sort((e, t) => (e.value === r ? -1 : t.value === r ? 1 : 0)),
                    {
                        supportedLanguages: i.map((e) => d.intl.string(e.localizedName)),
                        usersLanguageIsFirst: n
                    }
                );
            }
            return {
                supportedLanguages: [],
                usersLanguageIsFirst: !1
            };
        }, [t.directory_entry, r]);
    return (0, i.jsxs)('div', {
        className: n,
        children: [
            (0, i.jsx)(o.X6q, {
                variant: 'heading-sm/semibold',
                color: 'header-primary',
                children: d.intl.string(d.t.Fbjlu7)
            }),
            (0, i.jsx)('ul', {
                className: u.outerContainer,
                children: h.map((e, t) =>
                    (0, i.jsx)(
                        'li',
                        {
                            className: l()(u.innerContainer, u.languageItem),
                            children: (0, i.jsx)(o.Text, {
                                variant: 0 === t && p ? 'text-sm/bold' : 'text-sm/normal',
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
