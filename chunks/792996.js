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
    a = n(95498),
    s = n(478676),
    l = n.n(s),
    o = n(802249);
let { createLoader: d } = n(95498),
    c = d(
        {
            bg: () => n.e(992971).then(n.t.bind(n, 894278, 19)),
            cs: () => n.e(86972).then(n.t.bind(n, 805431, 19)),
            da: () => n.e(659191).then(n.t.bind(n, 104170, 19)),
            de: () => n.e(374979).then(n.t.bind(n, 562318, 19)),
            el: () => n.e(725098).then(n.t.bind(n, 624972, 19)),
            "en-GB": () => n.e(576623).then(n.t.bind(n, 818418, 19)),
            "es-419": () => n.e(963643).then(n.t.bind(n, 440502, 19)),
            "es-ES": () => n.e(435911).then(n.t.bind(n, 469818, 19)),
            fi: () => n.e(892081).then(n.t.bind(n, 313416, 19)),
            fr: () => n.e(898074).then(n.t.bind(n, 880033, 19)),
            hi: () => n.e(26915).then(n.t.bind(n, 286273, 19)),
            hr: () => n.e(413976).then(n.t.bind(n, 794379, 19)),
            hu: () => n.e(994575).then(n.t.bind(n, 437714, 19)),
            id: () => n.e(302209).then(n.t.bind(n, 476440, 19)),
            it: () => n.e(338993).then(n.t.bind(n, 344456, 19)),
            ja: () => n.e(837805).then(n.t.bind(n, 853820, 19)),
            ko: () => n.e(985784).then(n.t.bind(n, 545707, 19)),
            lt: () => n.e(462354).then(n.t.bind(n, 313814, 19)),
            nl: () => n.e(114308).then(n.t.bind(n, 216559, 19)),
            no: () => n.e(477095).then(n.t.bind(n, 450522, 19)),
            pl: () => n.e(185990).then(n.t.bind(n, 41125, 19)),
            "pt-BR": () => n.e(629039).then(n.t.bind(n, 165298, 19)),
            ro: () => n.e(202259).then(n.t.bind(n, 17502, 19)),
            ru: () => n.e(173073).then(n.t.bind(n, 517096, 19)),
            "sv-SE": () => n.e(931902).then(n.t.bind(n, 82317, 19)),
            th: () => n.e(842230).then(n.t.bind(n, 836117, 19)),
            tr: () => n.e(450676).then(n.t.bind(n, 545247, 19)),
            uk: () => n.e(18666).then(n.t.bind(n, 78513, 19)),
            vi: () => n.e(913569).then(n.t.bind(n, 292536, 19)),
            "zh-CN": () => n.e(836958).then(n.t.bind(n, 184237, 19)),
            "zh-TW": () => n.e(473298).then(n.t.bind(n, 473513, 19)),
            "en-US": () => n.e(862281).then(n.bind(n, 277168)),
        },
        "en-US",
    ),
    { makeMessagesProxy: u } = n(95498),
    _ = u(c),
    { createLoader: E } = n(95498),
    A = E({ "en-US": () => n.e(548742).then(n.bind(n, 374309)) }, "en-US"),
    { makeMessagesProxy: f } = n(95498),
    h = f(A),
    I = (0, a.chainMessagesObjects)(o.A, (0, a.chainMessagesObjects)(_, h));
var p = n(226536);
let { createLoader: m } = n(95498),
    g = m({ "en-US": () => n.e(19777).then(n.bind(n, 731352)) }, "en-US"),
    { makeMessagesProxy: T } = n(95498),
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
