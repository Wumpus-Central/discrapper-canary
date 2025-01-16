t.d(n, {
    Z: function () {
        return p;
    }
}),
    t(47120);
var a = t(200651),
    i = t(192379),
    r = t(120356),
    l = t.n(r),
    o = t(442837),
    s = t(481060),
    c = t(706454),
    d = t(388032),
    u = t(181169);
let m = (0, d.getAvailableLocales)();
function p(e) {
    let { application: n, className: t } = e,
        r = (0, o.e7)([c.default], () => c.default.locale),
        { supportedLanguages: p, usersLanguageIsFirst: _ } = i.useMemo(() => {
            var e;
            if ((null === (e = n.directory_entry) || void 0 === e ? void 0 : e.supported_locales) != null) {
                let e = new Set(n.directory_entry.supported_locales),
                    t = e.has(r),
                    a = m.filter((n) => e.has(n.value));
                return (
                    t && a.sort((e, n) => (e.value === r ? -1 : n.value === r ? 1 : 0)),
                    {
                        supportedLanguages: a.map((e) => d.intl.string(e.localizedName)),
                        usersLanguageIsFirst: t
                    }
                );
            }
            return {
                supportedLanguages: [],
                usersLanguageIsFirst: !1
            };
        }, [n.directory_entry, r]);
    return (0, a.jsxs)('div', {
        className: t,
        children: [
            (0, a.jsx)(s.Heading, {
                variant: 'heading-sm/semibold',
                color: 'header-primary',
                children: d.intl.string(d.t.Fbjlu7)
            }),
            (0, a.jsx)('ul', {
                className: u.outerContainer,
                children: p.map((e, n) =>
                    (0, a.jsx)(
                        'li',
                        {
                            className: l()(u.innerContainer, u.languageItem),
                            children: (0, a.jsx)(s.Text, {
                                variant: 0 === n && _ ? 'text-sm/bold' : 'text-sm/normal',
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
