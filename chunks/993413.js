r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(757143);
var a = r(200651);
r(192379);
var o = r(120356),
    s = r.n(o),
    l = r(481060),
    u = r(403182),
    c = r(587446),
    d = r(504983),
    f = r(43371);
function p(e) {
    return e.replace(/[0-9.,]+ ?kb/g, (e) => {
        let n = 1024 * parseInt(e, 10);
        return isNaN(n) ? e : (0, u.Ng)(n);
    });
}
function h(e) {
    let { errors: n } = e;
    return (0, a.jsx)(a.Fragment, {
        children: n.map((e, n) =>
            (0, a.jsx)(
                l.Text,
                {
                    variant: 'text-xs/normal',
                    color: 'text-danger',
                    className: f.errorMessage,
                    children: p(e)
                },
                n
            )
        )
    });
}
function _(e) {
    let { title: n, titleIcon: r, titleId: i, description: o, children: u, className: p, errors: _, disabled: m = !1, hideDivider: g = !1, showBorder: E = !1, borderType: v, hasBackground: y = !1, forcedDivider: b = !1, showPremiumIcon: I = !1 } = e;
    return (0, a.jsx)('div', {
        className: s()(f.customizationSection, p, {
            [f.disabled]: m,
            [f.hideDivider]: g,
            [f.showBorder]: E,
            [f.withDivider]: b
        }),
        children: (0, a.jsxs)(d.Z, {
            className: f.customizationSectionBorder,
            backgroundClassName: f.customizationSectionBackground,
            isShown: E,
            type: v,
            hasBackground: y,
            children: [
                (0, a.jsxs)(l.FormTitle, {
                    className: f.title,
                    id: i,
                    children: [n, I && (0, a.jsx)(c.Z, {}), r]
                }),
                null != o
                    ? (0, a.jsx)(l.FormText, {
                          type: l.FormText.Types.DESCRIPTION,
                          className: f.sectionDescription,
                          children: o
                      })
                    : null,
                u,
                null != _ && (0, a.jsx)(h, { errors: _ })
            ]
        })
    });
}
