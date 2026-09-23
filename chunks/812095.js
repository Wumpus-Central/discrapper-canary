n.d(t, { U: () => p });
var r = n(582128),
    l = n(435558),
    i = n.n(l),
    o = n(999915),
    a = n(46054),
    s = n(551965);
let u = ["heading", "list", "blockQuote"],
    c = i().once(() =>
        i().omit(
            (0, s.A)([
                o.Ay.EMBED_TITLE_RULES,
                a.A.createReactRules({ enableBuildOverrides: !1, enableEmojiClick: !0 }),
            ]),
            u,
        ),
    ),
    d = i().once(() => a.A.reactParserFor(c())),
    h = i().once(() =>
        (0, s.A)([
            c(),
            {
                br: {
                    ...o.Ay.RULES.br,
                    requiredFirstCharacters: ["\n"],
                    match: (e) => /^\n/.exec(e),
                    react: (e, t, n) => r.createElement("br", { key: n.key }),
                },
            },
        ]),
    ),
    C = i().once(() => a.A.reactParserFor(h()));
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (t.enableNewlines ? C() : d())(e, !0, { allowLinks: !0 });
}
