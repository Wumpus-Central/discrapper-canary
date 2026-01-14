n.d(t, { Z: () => f }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(936141),
    l = n(411405),
    c = n(197653),
    u = n(979372),
    d = n(339410);
function f(e) {
    let { components: t, accentColor: n, spoiler: a, renderComponents: f } = e,
        [p, _] = i.useState(a),
        [m, h] = i.useState(a);
    a !== p && (_(a), h(a));
    let g = (e) =>
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
          ? (0, r.jsx)(l.ZP, {
                type: l.ZP.Types.ATTACHMENT,
                reason: s.wk.SPOILER,
                obscured: m,
                onToggleObscurity: () => h((e) => !e),
                children: (e) => g(e),
            })
          : g(!1);
}
