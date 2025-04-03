n.d(t, { Z: () => m }), n(47120), n(230036);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(442837),
    s = n(481060),
    c = n(706454),
    d = n(388032),
    u = n(335025);
let p = (0, d.u5)();
function m(e) {
    let { application: t, className: n } = e,
        i = (0, o.e7)([c.default], () => c.default.locale),
        { supportedLanguages: m, usersLanguageIsFirst: h } = a.useMemo(() => {
            var e;
            if ((null == (e = t.directory_entry) ? void 0 : e.supported_locales) != null) {
                let e = new Set(t.directory_entry.supported_locales),
                    n = e.has(i),
                    r = p.filter((t) => e.has(t.value));
                return (
                    n && r.sort((e, t) => (e.value === i ? -1 : +(t.value === i))),
                    {
                        supportedLanguages: r.map((e) => d.NW.string(e.localizedName)),
                        usersLanguageIsFirst: n
                    }
                );
            }
            return {
                supportedLanguages: [],
                usersLanguageIsFirst: !1
            };
        }, [t.directory_entry, i]);
    return (0, r.jsxs)('div', {
        className: n,
        children: [
            (0, r.jsx)(s.X6q, {
                variant: 'heading-sm/semibold',
                color: 'header-primary',
                children: d.NW.string(d.t.Fbjlu7)
            }),
            (0, r.jsx)('ul', {
                className: u.outerContainer,
                children: m.map((e, t) =>
                    (0, r.jsx)(
                        'li',
                        {
                            className: l()(u.innerContainer, u.languageItem),
                            children: (0, r.jsx)(s.Text, {
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
