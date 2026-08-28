r.d(n, { U: () => h });
var t = r(582128),
    a = r(435558),
    o = r.n(a),
    i = r(29814),
    l = r(46054),
    c = r(551965);
let u = ["heading", "list", "blockQuote"],
    s = o().once(() =>
        o().omit(
            (0, c.A)([
                i.Ay.EMBED_TITLE_RULES,
                l.A.createReactRules({ enableBuildOverrides: !1, enableEmojiClick: !0 }),
            ]),
            u,
        ),
    ),
    d = o().once(() => l.A.reactParserFor(s())),
    p = o().once(() =>
        (0, c.A)([
            s(),
            {
                br: {
                    ...i.Ay.RULES.br,
                    requiredFirstCharacters: ["\n"],
                    match: (e) => /^\n/.exec(e),
                    react: (e, n, r) => t.createElement("br", { key: r.key }),
                },
            },
        ]),
    ),
    b = o().once(() => l.A.reactParserFor(p()));
function h(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (n.enableNewlines ? b() : d())(e, !0, { allowLinks: !0 });
}
