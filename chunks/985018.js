n.r(t),
    n.d(t, {
        getAvailableLocales: () => d.Be,
        getLanguages: () => d.kG,
        getSystemLocale: () => _,
        initialLocale: () => u,
        international: () => c.A,
        intl: () => A,
        systemLocale: () => E,
        t: () => o.X,
        useSyncMessages: () => I,
    });
var i = n(627968),
    a = n(64700),
    r = n(919523),
    s = n(791332),
    l = n.n(s),
    o = n(508493),
    d = n(226536),
    c = n(48456);
function _(e) {
    return [
        Array.isArray(navigator.languages) ? navigator.languages[0] : null,
        navigator.language,
        navigator.browserLanguage,
        navigator.userLanguage,
        e,
    ].find((e) => null != e && "" !== e);
}
let E = _("en-US"),
    u = (0, d.kt)(E, "en-US"),
    A = new r.IntlManager({ initialLocale: u, defaultLocale: "en-US" }).withFormatters({
        format: (0, r.makeReactFormatter)({
            $i: (e, t) => (0, i.jsx)("em", { children: e }, t),
            $b: (e, t) => (0, i.jsx)("strong", { children: e }, t),
            $del: (e, t) => (0, i.jsx)("del", { children: e }, t),
            $p: (e, t) => (0, i.jsx)("p", { children: e }, t),
            $code: (e, t) => (0, i.jsx)("code", { children: e }, t),
            $link: (e, t, i) => {
                let [r] = i,
                    { Anchor: s } = n(349288),
                    o = {};
                switch (typeof r) {
                    case "string":
                        o.href = l().sanitizeUrl(r);
                        break;
                    case "function":
                    default:
                        o.onClick = r;
                        break;
                    case "object":
                        if (null == r) break;
                        (o.onClick = r.onClick ?? r), (o.onContextMenu = r.onContextMenu);
                }
                return (0, a.createElement)(s, { ...o, key: t }, e);
            },
        }),
        formatToPlainString: r.stringFormatter,
        formatToMarkdownString: r.markdownFormatter,
        formatToParts: r.astFormatter,
    }),
    I = (e) => (0, d.tp)(e, A);
