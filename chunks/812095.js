n.d(t, { U: () => b });
var r = n(582128),
    l = n(435558),
    a = n.n(l),
    u = n(29814),
    o = n(46054),
    i = n(551965);
let c = ["heading", "list", "blockQuote"],
    s = a().once(() =>
        a().omit(
            (0, i.A)([
                u.Ay.EMBED_TITLE_RULES,
                o.A.createReactRules({ enableBuildOverrides: !1, enableEmojiClick: !0 }),
            ]),
            c,
        ),
    ),
    d = a().once(() => o.A.reactParserFor(s())),
    f = a().once(() =>
        (0, i.A)([
            s(),
            {
                br: {
                    ...u.Ay.RULES.br,
                    requiredFirstCharacters: ["\n"],
                    match: (e) => /^\n/.exec(e),
                    react: (e, t, n) => r.createElement("br", { key: n.key }),
                },
            },
        ]),
    ),
    E = a().once(() => o.A.reactParserFor(f()));
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (t.enableNewlines ? E() : d())(e, !0, { allowLinks: !0 });
}
