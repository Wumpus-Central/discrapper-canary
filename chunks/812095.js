t.d(e, { U: () => E });
var n = t(582128),
    o = t(435558),
    s = t.n(o),
    a = t(999915),
    i = t(46054),
    l = t(551965);
let c = ["heading", "list", "blockQuote"],
    u = s().once(() =>
        s().omit(
            (0, l.A)([
                a.Ay.EMBED_TITLE_RULES,
                i.A.createReactRules({ enableBuildOverrides: !1, enableEmojiClick: !0 }),
            ]),
            c,
        ),
    ),
    h = s().once(() => i.A.reactParserFor(u())),
    d = s().once(() =>
        (0, l.A)([
            u(),
            {
                br: {
                    ...a.Ay.RULES.br,
                    requiredFirstCharacters: ["\n"],
                    match: (r) => /^\n/.exec(r),
                    react: (r, e, t) => n.createElement("br", { key: t.key }),
                },
            },
        ]),
    ),
    p = s().once(() => i.A.reactParserFor(d()));
function E(r) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (e.enableNewlines ? p() : h())(r, !0, { allowLinks: !0 });
}
