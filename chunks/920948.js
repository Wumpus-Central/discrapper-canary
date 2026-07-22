n.d(t, { U: () => h });
var l = n(64700),
    i = n(435558),
    r = n.n(i),
    a = n(29814),
    s = n(46054),
    o = n(551965);
let u = ["heading", "list", "blockQuote"],
    c = r().once(() =>
        r().omit(
            (0, o.A)([
                a.Ay.EMBED_TITLE_RULES,
                s.A.createReactRules({ enableBuildOverrides: !1, enableEmojiClick: !0 }),
            ]),
            u,
        ),
    ),
    d = r().once(() => s.A.reactParserFor(c())),
    p = r().once(() =>
        (0, o.A)([
            c(),
            {
                br: {
                    ...a.Ay.RULES.br,
                    requiredFirstCharacters: ["\n"],
                    match: (e) => /^\n/.exec(e),
                    react: (e, t, n) => l.createElement("br", { key: n.key }),
                },
            },
        ]),
    ),
    m = r().once(() => s.A.reactParserFor(p()));
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (t.enableNewlines ? m() : d())(e, !0);
}
