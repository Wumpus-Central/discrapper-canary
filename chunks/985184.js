n.d(t, { Z: () => f }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(95398),
    l = n(936141),
    c = n(197653),
    u = n(979372),
    d = n(821618);
function f(e) {
    let { components: t, accentColor: n, spoiler: a, renderComponents: f } = e,
        [_, p] = i.useState(a),
        h = (e) =>
            (0, r.jsx)(c.am.AutoMeasuredNestedContainer, {
                children: (i) =>
                    (0, r.jsx)("div", {
                        ref: i,
                        className: o()(d.container, {
                            [d.isHidden]: e,
                            [d.withAccentColor]: null != n,
                        }),
                        style: { "--__accent-color": n },
                        children: (0, r.jsx)(u.U, {
                            size: "reduced",
                            children: f(t),
                        }),
                    }),
            });
    return null == t || 0 === t.length
        ? null
        : a
          ? (0, r.jsx)(s.ZP, {
                type: s.ZP.Types.ATTACHMENT,
                reason: l.wk.SPOILER,
                obscured: _,
                onToggleObscurity: () => p((e) => !e),
                children: (e) => h(e),
            })
          : h(!1);
}
