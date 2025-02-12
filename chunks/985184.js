l.d(n, {
    Gt: () => p,
    ZP: () => x
}),
    l(47120);
var t = l(200651),
    i = l(192379),
    r = l(120356),
    a = l.n(r),
    s = l(95398),
    o = l(169525),
    u = l(197653),
    c = l(682831);
let d = { isInContainer: !0 },
    m = i.createContext({ isInContainer: !1 });
function h(e) {
    let { children: n } = e;
    return (0, t.jsx)(m.Provider, {
        value: d,
        children: n
    });
}
function p() {
    let { isInContainer: e } = i.useContext(m);
    return e;
}
function x(e) {
    let { components: n, accentColor: l, spoiler: r, renderComponents: d } = e,
        [m, p] = i.useState(r),
        x = (e) =>
            (0, t.jsx)(u.am.AutoMeasuredNestedContainer, {
                children: (i) =>
                    (0, t.jsx)('div', {
                        ref: i,
                        className: a()(c.container, {
                            [c.isHidden]: e,
                            [c.withAccentColor]: null != l
                        }),
                        style: { '--__accent-color': l },
                        children: (0, t.jsx)(h, { children: d(n) })
                    })
            });
    return null == n || 0 === n.length
        ? null
        : r
          ? (0, t.jsx)(s.Z, {
                type: s.Z.Types.ATTACHMENT,
                reason: o.wk.SPOILER,
                obscured: m,
                onToggleObscurity: () => p((e) => !e),
                children: (e) => x(e)
            })
          : x(!1);
}
