t.d(e, { U: () => b });
var r = t(582128),
    l = t(435558),
    a = t.n(l),
    u = t(29814),
    i = t(46054),
    o = t(551965);
let c = ["heading", "list", "blockQuote"],
    s = a().once(() =>
        a().omit(
            (0, o.A)([
                u.Ay.EMBED_TITLE_RULES,
                i.A.createReactRules({ enableBuildOverrides: !1, enableEmojiClick: !0 }),
            ]),
            c,
        ),
    ),
    d = a().once(() => i.A.reactParserFor(s())),
    E = a().once(() =>
        (0, o.A)([
            s(),
            {
                br: {
                    ...u.Ay.RULES.br,
                    requiredFirstCharacters: ["\n"],
                    match: (n) => /^\n/.exec(n),
                    react: (n, e, t) => r.createElement("br", { key: t.key }),
                },
            },
        ]),
    ),
    f = a().once(() => i.A.reactParserFor(E()));
function b(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (e.enableNewlines ? f() : d())(n, !0, { allowLinks: !0 });
}
