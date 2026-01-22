n.r(t),
    n.d(t, {
        getAvailableLocales: () => c.Be,
        getLanguages: () => c.kG,
        getSystemLocale: () => h,
        initialLocale: () => g,
        international: () => u.A,
        intl: () => E,
        systemLocale: () => m,
        t: () => l.X,
        useSyncMessages: () => b,
    }),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(932433),
    s = n(280230),
    o = n.n(s),
    l = n(356422),
    c = n(226536),
    u = n(526617);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e) {
    return [
        Array.isArray(navigator.languages) ? navigator.languages[0] : null,
        navigator.language,
        navigator.browserLanguage,
        navigator.userLanguage,
        e,
    ].find((e) => null != e && "" !== e);
}
let m = h("en-US"),
    g = (0, c.kt)(m, "en-US"),
    E = new a.IntlManager({
        initialLocale: g,
        defaultLocale: "en-US",
    }).withFormatters({
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
                        var c;
                        if (null == a) break;
                        (l.onClick = null != (c = a.onClick) ? c : a), (l.onContextMenu = a.onContextMenu);
                }
                return (0, i.createElement)(s, _(f({}, l), { key: t }), e);
            },
        }),
        formatToPlainString: a.stringFormatter,
        formatToMarkdownString: a.markdownFormatter,
        formatToParts: a.astFormatter,
    }),
    b = (e) => (0, c.tp)(e, E);
