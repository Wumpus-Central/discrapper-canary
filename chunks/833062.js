n.d(t, { Z: () => a });
var r = n(200651),
    i = n(925329),
    o = n(238454);
function a(e) {
    let { application: t, useComma: n = !1 } = e;
    return (0, r.jsxs)('div', {
        className: o.applicationNameWrapper,
        children: [
            (0, r.jsx)(i.Z, {
                className: o.applicationIcon,
                game: t,
                size: i.Z.Sizes.XSMALL
            }),
            (0, r.jsx)('strong', { children: ''.concat(t.name).concat(n ? ', ' : '') })
        ]
    });
}
