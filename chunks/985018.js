"use strict";
n.r(t),
    n.d(t, {
        getAvailableLocales: () => u.Be,
        getLanguages: () => u.kG,
        getSystemLocale: () => d,
        initialLocale: () => f,
        international: () => c.A,
        intl: () => p,
        systemLocale: () => _,
        t: () => l.X,
        useSyncMessages: () => h,
    });
var r = n(627968),
    i = n(64700),
    a = n(932433),
    s = n(791332),
    o = n.n(s),
    l = n(356422),
    u = n(226536),
    c = n(526617);
function d(e) {
    return [
        Array.isArray(navigator.languages) ? navigator.languages[0] : null,
        navigator.language,
        navigator.browserLanguage,
        navigator.userLanguage,
        e,
    ].find((e) => null != e && "" !== e);
}
let _ = d("en-US"),
    f = (0, u.kt)(_, "en-US"),
    p = new a.IntlManager({ initialLocale: f, defaultLocale: "en-US" }).withFormatters({
        format: (0, a.makeReactFormatter)({
            $i: (e, t) => (0, r.jsx)("em", { children: e }, t),
            $b: (e, t) => (0, r.jsx)("strong", { children: e }, t),
            $del: (e, t) => (0, r.jsx)("del", { children: e }, t),
            $p: (e, t) => (0, r.jsx)("p", { children: e }, t),
            $code: (e, t) => (0, r.jsx)("code", { children: e }, t),
            $link: (e, t, r) => {
                let [a] = r,
                    { Anchor: s } = n(349288),
                    l = {};
                switch (typeof a) {
                    case "string":
                        l.href = o().sanitizeUrl(a);
                        break;
                    case "function":
                    default:
                        l.onClick = a;
                        break;
                    case "object":
                        if (null == a) break;
                        (l.onClick = a.onClick ?? a), (l.onContextMenu = a.onContextMenu);
                }
                return (0, i.createElement)(s, { ...l, key: t }, e);
            },
        }),
        formatToPlainString: a.stringFormatter,
        formatToMarkdownString: a.markdownFormatter,
        formatToParts: a.astFormatter,
    }),
    h = (e) => (0, u.tp)(e, p);
