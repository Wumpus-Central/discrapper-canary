r.d(t, {
    Gt: () => b,
    ZP: () => O
}),
    r(47120);
var n = r(200651),
    l = r(192379),
    i = r(120356),
    o = r.n(i),
    a = r(95398),
    c = r(169525),
    s = r(197653),
    u = r(719877);
let p = { isInContainer: !0 },
    d = l.createContext({ isInContainer: !1 });
function f(e) {
    let { children: t } = e;
    return (0, n.jsx)(d.Provider, {
        value: p,
        children: t
    });
}
function b() {
    let { isInContainer: e } = l.useContext(d);
    return e;
}
function O(e) {
    let { components: t, accentColor: r, spoiler: i, renderComponents: p } = e,
        [d, b] = l.useState(i),
        O = (e) =>
            (0, n.jsx)(s.am.AutoMeasuredNestedContainer, {
                children: (l) =>
                    (0, n.jsx)('div', {
                        ref: l,
                        className: o()(u.container, {
                            [u.isHidden]: e,
                            [u.withAccentColor]: null != r
                        }),
                        style: { '--__accent-color': r },
                        children: (0, n.jsx)(f, { children: p(t) })
                    })
            });
    return null == t || 0 === t.length
        ? null
        : i
          ? (0, n.jsx)(a.ZP, {
                type: a.ZP.Types.ATTACHMENT,
                reason: c.wk.SPOILER,
                obscured: d,
                onToggleObscurity: () => b((e) => !e),
                children: (e) => O(e)
            })
          : O(!1);
}
