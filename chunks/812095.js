t.d(r, { M: () => A, U: () => p });
var n = t(477900),
    c = t(582128),
    a = t(435558),
    i = t.n(a),
    o = t(999915),
    l = t(46054),
    s = t(551965);
let d = ["heading", "list", "blockQuote"],
    u = i().once(() =>
        i().omit(
            (0, s.A)([
                o.Ay.EMBED_TITLE_RULES,
                l.A.createReactRules({ enableBuildOverrides: !1, enableEmojiClick: !0 }),
            ]),
            d,
        ),
    ),
    h = i().once(() => l.A.reactParserFor(u())),
    b = i().once(() =>
        (0, s.A)([
            u(),
            {
                br: {
                    ...o.Ay.RULES.br,
                    requiredFirstCharacters: ["\n"],
                    match: (e) => /^\n/.exec(e),
                    react: (e, r, t) => c.createElement("br", { key: t.key }),
                },
            },
        ]),
    ),
    k = i().once(() => l.A.reactParserFor(b()));
function p(e) {
    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (r.enableNewlines ? k() : h())(e, !0, { allowLinks: !0 });
}
function A(e) {
    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return [(0, n.jsx)(c.Fragment, { children: p(e, r) }, "promotion")];
}
