n.d(t, { Z: () => _ }), n(704826), n(35282), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(403182),
    c = n(587446),
    u = n(504983),
    d = n(607878);
function f(e) {
    return e.replace(/[0-9.,]+ ?kb/g, (e) => {
        let t = 1024 * parseInt(e, 10);
        return isNaN(t) ? e : (0, l.Ng)(t);
    });
}
function p(e) {
    let { errors: t } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.map((e, t) =>
            (0, r.jsx)(
                s.Text,
                {
                    variant: "text-xs/normal",
                    color: "text-feedback-critical",
                    className: d.errorMessage,
                    children: f(e),
                },
                t,
            ),
        ),
    });
}
let _ = i.forwardRef(function (e, t) {
    let {
        title: n,
        titleIcon: i,
        titleId: a,
        description: l,
        children: f,
        className: _,
        errors: m,
        disabled: h = !1,
        hideDivider: g = !1,
        showBorder: E = !1,
        borderType: b,
        hasBackground: y = !1,
        forcedDivider: O = !1,
        showPremiumIcon: v = !1,
    } = e;
    return (0, r.jsx)("div", {
        className: o()(d.customizationSection, _, {
            [d.disabled]: h,
            [d.hideDivider]: g,
            [d.showBorder]: E,
            [d.withDivider]: O,
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
                    id: a,
                    children: [n, v && (0, r.jsx)(c.Z, {}), i],
                }),
                null != l
                    ? (0, r.jsx)(s.R94, {
                          type: s.R94.Types.DESCRIPTION,
                          className: d.sectionDescription,
                          children: l,
                      })
                    : null,
                f,
                null != m && (0, r.jsx)(p, { errors: m }),
            ],
        }),
    });
});
