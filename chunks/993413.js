t.d(n, {
    Z: function () {
        return m;
    }
}),
    t(757143);
var i = t(200651);
t(192379);
var l = t(120356),
    r = t.n(l),
    s = t(481060),
    a = t(403182),
    c = t(587446),
    o = t(504983),
    u = t(43371);
function d(e) {
    let { errors: n } = e;
    return (0, i.jsx)(i.Fragment, {
        children: n.map((e, n) =>
            (0, i.jsx)(
                s.Text,
                {
                    variant: 'text-xs/normal',
                    color: 'text-danger',
                    className: u.errorMessage,
                    children: e.replace(/[0-9.,]+ ?kb/g, (e) => {
                        let n = 1024 * parseInt(e, 10);
                        return isNaN(n) ? e : (0, a.Ng)(n);
                    })
                },
                n
            )
        )
    });
}
function m(e) {
    let { title: n, titleIcon: t, titleId: l, description: a, children: m, className: p, errors: x, disabled: h = !1, hideDivider: f = !1, showBorder: v = !1, borderType: g, hasBackground: S = !1, forcedDivider: E = !1, showPremiumIcon: j = !1 } = e;
    return (0, i.jsx)('div', {
        className: r()(u.customizationSection, p, {
            [u.disabled]: h,
            [u.hideDivider]: f,
            [u.showBorder]: v,
            [u.withDivider]: E
        }),
        children: (0, i.jsxs)(o.Z, {
            className: u.customizationSectionBorder,
            backgroundClassName: u.customizationSectionBackground,
            isShown: v,
            type: g,
            hasBackground: S,
            children: [
                (0, i.jsxs)(s.FormTitle, {
                    className: u.title,
                    id: l,
                    children: [n, j && (0, i.jsx)(c.Z, {}), t]
                }),
                null != a
                    ? (0, i.jsx)(s.FormText, {
                          type: s.FormText.Types.DESCRIPTION,
                          className: u.sectionDescription,
                          children: a
                      })
                    : null,
                m,
                null != x && (0, i.jsx)(d, { errors: x })
            ]
        })
    });
}
