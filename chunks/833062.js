n.d(t, { Z: () => s });
var i = n(200651),
    r = n(925329),
    a = n(392877);
function s(e) {
    let { application: t, useComma: n = !1 } = e;
    return (0, i.jsxs)('div', {
        className: a.applicationNameWrapper,
        children: [
            (0, i.jsx)(r.Z, {
                className: a.applicationIcon,
                game: t,
                size: r.Z.Sizes.XSMALL
            }),
            (0, i.jsx)('strong', { children: ''.concat(t.name).concat(n ? ', ' : '') })
        ]
    });
}
