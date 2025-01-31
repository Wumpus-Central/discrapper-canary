n.d(t, { Z: () => _ }), n(757143);
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(403182),
    l = n(587446),
    u = n(504983),
    c = n(43371);
function d(e) {
    return e.replace(/[0-9.,]+ ?kb/g, (e) => {
        let t = 1024 * parseInt(e, 10);
        return isNaN(t) ? e : (0, o.Ng)(t);
    });
}
function f(e) {
    let { errors: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.map((e, t) =>
            (0, i.jsx)(
                s.Text,
                {
                    variant: 'text-xs/normal',
                    color: 'text-danger',
                    className: c.errorMessage,
                    children: d(e)
                },
                t
            )
        )
    });
}
function _(e) {
    let { title: t, titleIcon: n, titleId: r, description: o, children: d, className: _, errors: p, disabled: h = !1, hideDivider: m = !1, showBorder: g = !1, borderType: E, hasBackground: v = !1, forcedDivider: y = !1, showPremiumIcon: I = !1 } = e;
    return (0, i.jsx)('div', {
        className: a()(c.customizationSection, _, {
            [c.disabled]: h,
            [c.hideDivider]: m,
            [c.showBorder]: g,
            [c.withDivider]: y
        }),
        children: (0, i.jsxs)(u.Z, {
            className: c.customizationSectionBorder,
            backgroundClassName: c.customizationSectionBackground,
            isShown: g,
            type: E,
            hasBackground: v,
            children: [
                (0, i.jsxs)(s.vwX, {
                    className: c.title,
                    id: r,
                    children: [t, I && (0, i.jsx)(l.Z, {}), n]
                }),
                null != o
                    ? (0, i.jsx)(s.R94, {
                          type: s.R94.Types.DESCRIPTION,
                          className: c.sectionDescription,
                          children: o
                      })
                    : null,
                d,
                null != p && (0, i.jsx)(f, { errors: p })
            ]
        })
    });
}
