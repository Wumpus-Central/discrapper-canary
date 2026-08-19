n.d(r, { U: () => h });
var t = n(582128),
    a = n(435558),
    o = n.n(a),
    i = n(29814),
    l = n(46054),
    c = n(551965);
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
                    react: (e, r, n) => t.createElement("br", { key: n.key }),
                },
            },
        ]),
    ),
    b = o().once(() => l.A.reactParserFor(p()));
function h(e) {
    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (r.enableNewlines ? b() : d())(e, !0, { allowLinks: !0 });
}
