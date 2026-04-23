"use strict";
n.r(t),
    n.d(t, {
        getAvailableLocales: () => u.Be,
        getLanguages: () => u.kG,
        getSystemLocale: () => c,
        initialLocale: () => f,
        international: () => d.A,
        intl: () => E,
        systemLocale: () => _,
        t: () => l.X,
        useSyncMessages: () => h,
    });
var r = n(627968),
    i = n(64700),
    s = n(919523),
    a = n(791332),
    o = n.n(a),
    l = n(356422),
    u = n(226536),
    d = n(48456);
function c(e) {
    return [
        Array.isArray(navigator.languages) ? navigator.languages[0] : null,
        navigator.language,
        navigator.browserLanguage,
        navigator.userLanguage,
        e,
    ].find((e) => null != e && "" !== e);
}
let _ = c("en-US"),
    f = (0, u.kt)(_, "en-US"),
    E = new s.IntlManager({ initialLocale: f, defaultLocale: "en-US" }).withFormatters({
        format: (0, s.makeReactFormatter)({
            $i: (e, t) => (0, r.jsx)("em", { children: e }, t),
            $b: (e, t) => (0, r.jsx)("strong", { children: e }, t),
            $del: (e, t) => (0, r.jsx)("del", { children: e }, t),
            $p: (e, t) => (0, r.jsx)("p", { children: e }, t),
            $code: (e, t) => (0, r.jsx)("code", { children: e }, t),
            $link: (e, t, r) => {
                let [s] = r,
                    { Anchor: a } = n(349288),
                    l = {};
                switch (typeof s) {
                    case "string":
                        l.href = o().sanitizeUrl(s);
                        break;
                    case "function":
                    default:
                        l.onClick = s;
                        break;
                    case "object":
                        if (null == s) break;
                        (l.onClick = s.onClick ?? s), (l.onContextMenu = s.onContextMenu);
                }
                return (0, i.createElement)(a, { ...l, key: t }, e);
            },
        }),
        formatToPlainString: s.stringFormatter,
        formatToMarkdownString: s.markdownFormatter,
        formatToParts: s.astFormatter,
    }),
    h = (e) => (0, u.tp)(e, E);
