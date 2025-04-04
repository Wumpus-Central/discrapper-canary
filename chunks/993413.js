n.d(t, { Z: () => p }), n(757143), n(301563), n(266796);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(403182),
    c = n(587446),
    u = n(504983),
    d = n(396032);
function f(e) {
    return e.replace(/[0-9.,]+ ?kb/g, (e) => {
        let t = 1024 * parseInt(e, 10);
        return isNaN(t) ? e : (0, l.Ng)(t);
    });
}
function _(e) {
    let { errors: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.map((e, t) =>
            (0, r.jsx)(
                s.Text,
                {
                    variant: 'text-xs/normal',
                    color: 'text-danger',
                    className: d.errorMessage,
                    children: f(e)
                },
                t
            )
        )
    });
}
let p = i.forwardRef(function (e, t) {
    let { title: n, titleIcon: i, titleId: o, description: l, children: f, className: p, errors: h, disabled: m = !1, hideDivider: g = !1, showBorder: E = !1, borderType: b, hasBackground: y = !1, forcedDivider: v = !1, showPremiumIcon: O = !1 } = e;
    return (0, r.jsx)('div', {
        className: a()(d.customizationSection, p, {
            [d.disabled]: m,
            [d.hideDivider]: g,
            [d.showBorder]: E,
            [d.withDivider]: v
        }),
        ref: t,
        children: (0, r.jsxs)(u.Z, {
            className: d.customizationSectionBorder,
            backgroundClassName: d.customizationSectionBackground,
            isShown: E,
            type: b,
            hasBackground: y,
            children: [
                (0, r.jsxs)(s.vwX, {
                    className: d.title,
                    id: o,
                    children: [n, O && (0, r.jsx)(c.Z, {}), i]
                }),
                null != l
                    ? (0, r.jsx)(s.R94, {
                          type: s.R94.Types.DESCRIPTION,
                          className: d.sectionDescription,
                          children: l
                      })
                    : null,
                f,
                null != h && (0, r.jsx)(_, { errors: h })
            ]
        })
    });
});
