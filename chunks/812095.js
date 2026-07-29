t.d(r, { U: () => k });
var a = t(582128),
    n = t(435558),
    c = t.n(n),
    i = t(29814),
    l = t(46054),
    s = t(551965);
let o = ["heading", "list", "blockQuote"],
    u = c().once(() =>
        c().omit(
            (0, s.A)([
                i.Ay.EMBED_TITLE_RULES,
                l.A.createReactRules({ enableBuildOverrides: !1, enableEmojiClick: !0 }),
            ]),
            o,
        ),
    ),
    d = c().once(() => l.A.reactParserFor(u())),
    b = c().once(() =>
        (0, s.A)([
            u(),
            {
                br: {
                    ...i.Ay.RULES.br,
                    requiredFirstCharacters: ["\n"],
                    match: (e) => /^\n/.exec(e),
                    react: (e, r, t) => a.createElement("br", { key: t.key }),
                },
            },
        ]),
    ),
    h = c().once(() => l.A.reactParserFor(b()));
function k(e) {
    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (r.enableNewlines ? h() : d())(e, !0, { allowLinks: !0 });
}
