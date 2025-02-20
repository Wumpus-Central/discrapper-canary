n.d(t, { Z: () => p }), n(757143), n(301563), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(403182),
    l = n(587446),
    c = n(504983),
    u = n(861026);
function d(e) {
    return e.replace(/[0-9.,]+ ?kb/g, (e) => {
        let t = 1024 * parseInt(e, 10);
        return isNaN(t) ? e : (0, s.Ng)(t);
    });
}
function f(e) {
    let { errors: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.map((e, t) =>
            (0, r.jsx)(
                a.Text,
                {
                    variant: 'text-xs/normal',
                    color: 'text-danger',
                    className: u.errorMessage,
                    children: d(e)
                },
                t
            )
        )
    });
}
function p(e) {
    let { title: t, titleIcon: n, titleId: i, description: s, children: d, className: p, errors: _, disabled: h = !1, hideDivider: m = !1, showBorder: g = !1, borderType: E, hasBackground: v = !1, forcedDivider: b = !1, showPremiumIcon: y = !1 } = e;
    return (0, r.jsx)('div', {
        className: o()(u.customizationSection, p, {
            [u.disabled]: h,
            [u.hideDivider]: m,
            [u.showBorder]: g,
            [u.withDivider]: b
        }),
        children: (0, r.jsxs)(c.Z, {
            className: u.customizationSectionBorder,
            backgroundClassName: u.customizationSectionBackground,
            isShown: g,
            type: E,
            hasBackground: v,
            children: [
                (0, r.jsxs)(a.vwX, {
                    className: u.title,
                    id: i,
                    children: [t, y && (0, r.jsx)(l.Z, {}), n]
                }),
                null != s
                    ? (0, r.jsx)(a.R94, {
                          type: a.R94.Types.DESCRIPTION,
                          className: u.sectionDescription,
                          children: s
                      })
                    : null,
                d,
                null != _ && (0, r.jsx)(f, { errors: _ })
            ]
        })
    });
}
