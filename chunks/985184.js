t.d(n, {
    Z: function () {
        return u;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    o = t(95398),
    s = t(169525),
    c = t(541964);
function u(e) {
    let { components: n, accentColor: t, spoiler: r, renderComponents: u } = e,
        [d, m] = i.useState(r),
        f = (e) =>
            (0, l.jsx)('div', {
                className: a()(c.container, { [c.withAccentColor]: null != t }),
                style: {
                    '--__accent-color': t,
                    opacity: e ? 0 : void 0
                },
                children: u(n)
            });
    return null == n || 0 === n.length
        ? null
        : r
          ? (0, l.jsx)(o.Z, {
                type: o.Z.Types.ATTACHMENT,
                reason: s.wk.SPOILER,
                obscured: d,
                onToggleObscurity: () => m((e) => !e),
                children: (e) => f(e)
            })
          : f(!1);
}
