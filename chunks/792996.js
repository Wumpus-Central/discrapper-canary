(n.r(t),
    n.d(t, {
        getAvailableLocales: () => p.Be,
        getLanguages: () => p.kG,
        getSystemLocale: () => N,
        initialLocale: () => O,
        international: () => S,
        intl: () => R,
        systemLocale: () => C,
        t: () => I,
        useSyncMessages: () => L,
    }));
var i = n(477900),
    r = n(582128),
    a = n(989324),
    s = n(478676),
    l = n.n(s),
    o = n(145031);
let { createLoader: d } = n(989324),
    c = d(
        {
            bg: () => n.e(370085).then(n.t.bind(n, 232068, 19)),
            cs: () => n.e(197686).then(n.t.bind(n, 695765, 19)),
            da: () => n.e(670065).then(n.t.bind(n, 864776, 19)),
            de: () => n.e(126965).then(n.t.bind(n, 570516, 19)),
            el: () => n.e(673127).then(n.t.bind(n, 249178, 19)),
            "en-GB": () => n.e(274041).then(n.t.bind(n, 770784, 19)),
            "es-419": () => n.e(974929).then(n.t.bind(n, 478440, 19)),
            "es-ES": () => n.e(442933).then(n.t.bind(n, 231508, 19)),
            fi: () => n.e(437175).then(n.t.bind(n, 655530, 19)),
            fr: () => n.e(569772).then(n.t.bind(n, 319975, 19)),
            hi: () => n.e(698749).then(n.t.bind(n, 939980, 19)),
            hr: () => n.e(202182).then(n.t.bind(n, 763749, 19)),
            hu: () => n.e(911121).then(n.t.bind(n, 979176, 19)),
            id: () => n.e(189003).then(n.t.bind(n, 209286, 19)),
            it: () => n.e(358363).then(n.t.bind(n, 691542, 19)),
            ja: () => n.e(680579).then(n.t.bind(n, 551374, 19)),
            ko: () => n.e(484962).then(n.t.bind(n, 281081, 19)),
            lt: () => n.e(728148).then(n.t.bind(n, 314047, 19)),
            nl: () => n.e(913346).then(n.t.bind(n, 593945, 19)),
            no: () => n.e(334337).then(n.t.bind(n, 318744, 19)),
            pl: () => n.e(82856).then(n.t.bind(n, 650779, 19)),
            "pt-BR": () => n.e(473461).then(n.t.bind(n, 659412, 19)),
            ro: () => n.e(839117).then(n.t.bind(n, 611100, 19)),
            ru: () => n.e(127439).then(n.t.bind(n, 622290, 19)),
            "sv-SE": () => n.e(509888).then(n.t.bind(n, 859011, 19)),
            th: () => n.e(222960).then(n.t.bind(n, 218611, 19)),
            tr: () => n.e(198962).then(n.t.bind(n, 976777, 19)),
            uk: () => n.e(578496).then(n.t.bind(n, 273155, 19)),
            vi: () => n.e(229063).then(n.t.bind(n, 798394, 19)),
            "zh-CN": () => n.e(54912).then(n.t.bind(n, 45699, 19)),
            "zh-TW": () => n.e(174016).then(n.t.bind(n, 131331, 19)),
            "en-US": () => n.e(652627).then(n.bind(n, 583390)),
        },
        "en-US",
    ),
    { makeMessagesProxy: u } = n(989324),
    _ = u(c),
    { createLoader: E } = n(989324),
    A = E({ "en-US": () => n.e(506856).then(n.bind(n, 455259)) }, "en-US"),
    { makeMessagesProxy: f } = n(989324),
    h = f(A),
    I = (0, a.chainMessagesObjects)(o.A, (0, a.chainMessagesObjects)(_, h));
var p = n(226536);
let { createLoader: m } = n(989324),
    g = m({ "en-US": () => n.e(378467).then(n.bind(n, 977646)) }, "en-US"),
    { makeMessagesProxy: T } = n(989324),
    S = T(g);
function N(e) {
    return [
        Array.isArray(navigator.languages) ? navigator.languages[0] : null,
        navigator.language,
        navigator.browserLanguage,
        navigator.userLanguage,
        e,
    ].find((e) => null != e && "" !== e);
}
let C = N("en-US"),
    O = (0, p.kt)(C, "en-US"),
    R = new a.IntlManager({ initialLocale: O, defaultLocale: "en-US" }).withFormatters({
        format: (0, a.makeReactFormatter)({
            $i: (e, t) => (0, i.jsx)("em", { children: e }, t),
            $b: (e, t) => (0, i.jsx)("strong", { children: e }, t),
            $del: (e, t) => (0, i.jsx)("del", { children: e }, t),
            $p: (e, t) => (0, i.jsx)("p", { children: e }, t),
            $code: (e, t) => (0, i.jsx)("code", { children: e }, t),
            $link: (e, t, i) => {
                let [a] = i,
                    { Anchor: s } = n(28863),
                    o = {};
                switch (typeof a) {
                    case "string":
                        o.href = l().sanitizeUrl(a);
                        break;
                    case "function":
                    default:
                        o.onClick = a;
                        break;
                    case "object":
                        if (null == a) break;
                        ((o.onClick = a.onClick ?? a), (o.onContextMenu = a.onContextMenu));
                }
                return (0, r.createElement)(s, { ...o, key: t }, e);
            },
        }),
        formatToPlainString: a.stringFormatter,
        formatToMarkdownString: a.markdownFormatter,
        formatToParts: a.astFormatter,
    });
function L(e) {
    return (0, p.tp)(e, R);
}
