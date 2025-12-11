n.d(t, { Z: () => m }), n(388685), n(642613);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(442837),
    o = n(481060),
    c = n(706454),
    d = n(388032),
    u = n(101774);
let p = (0, d.getAvailableLocales)();
function m(e) {
    let { application: t, className: n } = e,
        i = (0, s.e7)([c.default], () => c.default.locale),
        { supportedLanguages: m, usersLanguageIsFirst: h } = r.useMemo(() => {
            var e;
            if ((null == (e = t.directory_entry) ? void 0 : e.supported_locales) != null) {
                let e = new Set(t.directory_entry.supported_locales),
                    n = e.has(i),
                    a = p.filter((t) => e.has(t.value));
                return (
                    n && a.sort((e, t) => (e.value === i ? -1 : +(t.value === i))),
                    {
                        supportedLanguages: a.map((e) => d.intl.string(e.localizedName)),
                        usersLanguageIsFirst: n,
                    }
                );
            }
            return {
                supportedLanguages: [],
                usersLanguageIsFirst: !1,
            };
        }, [t.directory_entry, i]);
    return (0, a.jsxs)("div", {
        className: n,
        children: [
            (0, a.jsx)(o.Heading, {
                variant: "heading-sm/semibold",
                color: "text-strong",
                children: d.intl.string(d.t.Fbjlu3),
            }),
            (0, a.jsx)("ul", {
                className: u.outerContainer,
                children: m.map((e, t) =>
                    (0, a.jsx)(
                        "li",
                        {
                            className: l()(u.innerContainer, u.languageItem),
                            children: (0, a.jsx)(o.Text, {
                                variant: 0 === t && h ? "text-sm/bold" : "text-sm/normal",
                                children: e,
                            }),
                        },
                        e,
                    ),
                ),
            }),
            " ",
        ],
    });
}
