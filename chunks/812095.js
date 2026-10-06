r.d(t, { U: () => j });
var n = r(582128),
    a = r(435558),
    s = r.n(a),
    c = r(999915),
    l = r(46054),
    i = r(551965);
let u = ["heading", "list", "blockQuote"],
    o = s().once(() =>
        s().omit(
            (0, i.A)([
                c.Ay.EMBED_TITLE_RULES,
                l.A.createReactRules({ enableBuildOverrides: !1, enableEmojiClick: !0 }),
            ]),
            u,
        ),
    ),
    d = s().once(() => l.A.reactParserFor(o())),
    h = s().once(() =>
        (0, i.A)([
            o(),
            {
                br: {
                    ...c.Ay.RULES.br,
                    requiredFirstCharacters: ["\n"],
                    match: (e) => /^\n/.exec(e),
                    react: (e, t, r) => n.createElement("br", { key: r.key }),
                },
            },
        ]),
    ),
    m = s().once(() => l.A.reactParserFor(h()));
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (t.enableNewlines ? m() : d())(e, !0, { allowLinks: !0 });
}
