t.d(n, {
    Gt: function () {
        return f;
    },
    ZP: function () {
        return p;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    o = t(95398),
    s = t(169525),
    c = t(246169);
let u = { isInContainer: !0 },
    d = i.createContext({ isInContainer: !1 });
function m(e) {
    let { children: n } = e;
    return (0, l.jsx)(d.Provider, {
        value: u,
        children: n
    });
}
function f() {
    let { isInContainer: e } = i.useContext(d);
    return e;
}
function p(e) {
    let { components: n, accentColor: t, spoiler: r, renderComponents: u } = e,
        [d, f] = i.useState(r),
        p = (e) =>
            (0, l.jsx)('div', {
                className: a()(c.container, {
                    [c.isHidden]: e,
                    [c.withAccentColor]: null != t
                }),
                style: { '--__accent-color': t },
                children: (0, l.jsx)(m, { children: u(n) })
            });
    return null == n || 0 === n.length
        ? null
        : r
          ? (0, l.jsx)(o.Z, {
                type: o.Z.Types.ATTACHMENT,
                reason: s.wk.SPOILER,
                obscured: d,
                onToggleObscurity: () => f((e) => !e),
                children: (e) => p(e)
            })
          : p(!1);
}
