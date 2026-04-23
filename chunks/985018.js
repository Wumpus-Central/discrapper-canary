n.r(t),
    n.d(t, {
        getAvailableLocales: () => o.Be,
        getLanguages: () => o.kG,
        getSystemLocale: () => d,
        initialLocale: () => u,
        international: () => E.A,
        intl: () => I,
        systemLocale: () => c,
        t: () => l.X,
        useSyncMessages: () => A,
    });
var i = n(627968),
    r = n(64700),
    a = n(919523),
    s = n(791332),
    _ = n.n(s),
    l = n(508493),
    o = n(226536),
    E = n(48456);
function d(e) {
    return [
        Array.isArray(navigator.languages) ? navigator.languages[0] : null,
        navigator.language,
        navigator.browserLanguage,
        navigator.userLanguage,
        e,
    ].find((e) => null != e && "" !== e);
}
let c = d("en-US"),
    u = (0, o.kt)(c, "en-US"),
    I = new a.IntlManager({ initialLocale: u, defaultLocale: "en-US" }).withFormatters({
        format: (0, a.makeReactFormatter)({
            $i: (e, t) => (0, i.jsx)("em", { children: e }, t),
            $b: (e, t) => (0, i.jsx)("strong", { children: e }, t),
            $del: (e, t) => (0, i.jsx)("del", { children: e }, t),
            $p: (e, t) => (0, i.jsx)("p", { children: e }, t),
            $code: (e, t) => (0, i.jsx)("code", { children: e }, t),
            $link: (e, t, i) => {
                let [a] = i,
                    { Anchor: s } = n(349288),
                    l = {};
                switch (typeof a) {
                    case "string":
                        l.href = _().sanitizeUrl(a);
                        break;
                    case "function":
                    default:
                        l.onClick = a;
                        break;
                    case "object":
                        if (null == a) break;
                        (l.onClick = a.onClick ?? a), (l.onContextMenu = a.onContextMenu);
                }
                return (0, r.createElement)(s, { ...l, key: t }, e);
            },
        }),
        formatToPlainString: a.stringFormatter,
        formatToMarkdownString: a.markdownFormatter,
        formatToParts: a.astFormatter,
    }),
    A = (e) => (0, o.tp)(e, I);
