(n.d(t, {
    Gt: () => h,
    ZP: () => m
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(95398),
    l = n(936141),
    c = n(197653),
    u = n(719877);
let d = { isInContainer: !0 },
    f = { isInContainer: !1 },
    _ = i.createContext(f);
function p(e) {
    let { children: t } = e;
    return (0, r.jsx)(_.Provider, {
        value: d,
        children: t
    });
}
function h() {
    let { isInContainer: e } = i.useContext(_);
    return e;
}
function m(e) {
    let { components: t, accentColor: n, spoiler: a, renderComponents: d } = e,
        [f, _] = i.useState(a),
        h = (e) =>
            (0, r.jsx)(c.am.AutoMeasuredNestedContainer, {
                children: (i) =>
                    (0, r.jsx)('div', {
                        ref: i,
                        className: o()(u.container, {
                            [u.isHidden]: e,
                            [u.withAccentColor]: null != n
                        }),
                        style: { '--__accent-color': n },
                        children: (0, r.jsx)(p, { children: d(t) })
                    })
            });
    return null == t || 0 === t.length
        ? null
        : a
          ? (0, r.jsx)(s.ZP, {
                type: s.ZP.Types.ATTACHMENT,
                reason: l.wk.SPOILER,
                obscured: f,
                onToggleObscurity: () => _((e) => !e),
                children: (e) => h(e)
            })
          : h(!1);
}
