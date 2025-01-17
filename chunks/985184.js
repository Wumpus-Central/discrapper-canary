t.d(n, {
    Gt: function () {
        return p;
    },
    ZP: function () {
        return h;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    o = t(95398),
    s = t(169525),
    c = t(197653),
    u = t(541964);
let d = { isInContainer: !0 },
    m = i.createContext({ isInContainer: !1 });
function f(e) {
    let { children: n } = e;
    return (0, l.jsx)(m.Provider, {
        value: d,
        children: n
    });
}
function p() {
    let { isInContainer: e } = i.useContext(m);
    return e;
}
function h(e) {
    let { components: n, accentColor: t, spoiler: r, renderComponents: d } = e,
        [m, p] = i.useState(r),
        h = (e) =>
            (0, l.jsx)(c.am.AutoMeasuredNestedContainer, {
                children: (i) =>
                    (0, l.jsx)('div', {
                        ref: i,
                        className: a()(u.container, {
                            [u.isHidden]: e,
                            [u.withAccentColor]: null != t
                        }),
                        style: { '--__accent-color': t },
                        children: (0, l.jsx)(f, { children: d(n) })
                    })
            });
    return null == n || 0 === n.length
        ? null
        : r
          ? (0, l.jsx)(o.Z, {
                type: o.Z.Types.ATTACHMENT,
                reason: s.wk.SPOILER,
                obscured: m,
                onToggleObscurity: () => p((e) => !e),
                children: (e) => h(e)
            })
          : h(!1);
}
