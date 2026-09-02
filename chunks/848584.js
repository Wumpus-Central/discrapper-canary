n.d(t, { Qf: () => h, Vm: () => x });
var s = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    l = n(338209),
    u = n.n(l),
    c = n(834730),
    o = n(580630),
    d = n(777485),
    m = n(583741),
    p = n(375708),
    f = n(801067);
function x(e) {
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)("div", { className: f.y }), (0, s.jsx)(g, { ...e })] });
}
function v(e) {
    return "tax" === e.id;
}
function g(e) {
    let { label: t, lineItems: n, currency: i, collapsedContentLabelOverride: a, defaultExpanded: l = !1 } = e,
        m = n.length > 0,
        { hasAdjustments: p, totalAdjustmentsOrSavings: f } = r.useMemo(
            () => ({
                hasAdjustments: n.some(
                    (e) => "adjustment" === e.lineItemType || ("string" == typeof e.id && e.id.includes("adjustment")),
                ),
                totalAdjustmentsOrSavings: n.reduce(
                    (e, t) =>
                        "adjustment" === t.lineItemType ||
                        "discount" === t.lineItemType ||
                        ("string" == typeof t.id && (t.id.includes("discount") || t.id.includes("adjustment")))
                            ? e + t.amount
                            : e,
                    0,
                ),
            }),
            [n],
        ),
        x = (function (e) {
            let t = e.filter((e) => !(v(e) && 0 === e.amount)),
                { tax: n = 0, other: s = 0 } = u()(t, (e) => (v(e) ? "tax" : "other"));
            if (1 === s) {
                if (0 === n) return [];
                if (1 === n) return [t.find(v)];
            }
            return t;
        })(n);
    if (0 === x.length) return null;
    if (1 === x.length) {
        let { amount: e, ...t } = x[0],
            n = (0, o.$g)(e, i);
        return (0, s.jsx)(d.i, { value: n, valueColor: e < 0 ? "text-feedback-positive" : "text-muted", ...t });
    }
    return (0, s.jsx)(d.h, {
        label: t,
        defaultExpanded: l,
        isDisabled: !m,
        collapsedContent:
            null != a
                ? (0, s.jsx)(c.E, { variant: "text-md/medium", color: "text-feedback-positive", children: a })
                : (0, s.jsx)(C, {
                      amount: f < 0 ? Math.abs(f) : null,
                      currency: i,
                      labelType: p ? "adjustments" : "savings",
                  }),
        children: x.map((e) => {
            let { id: t, label: n, amount: r, ...a } = e,
                l = (0, o.$g)(r, i);
            return (0, s.jsx)(
                d.i,
                { label: n, value: l, valueColor: r < 0 ? "text-feedback-positive" : "text-muted", ...a },
                t,
            );
        }),
    });
}
function C(e) {
    let { amount: t, currency: n, labelType: r } = e;
    if (0 === t || null == t) return null;
    let i = (0, o.$g)(t, n);
    return (0, s.jsx)(c.E, {
        variant: "text-md/medium",
        color: "text-feedback-positive",
        children: p.intl.format("adjustments" === r ? m.default["i3Q/6S"] : m.default.pDVleg, { amount: i }),
    });
}
function h(e) {
    let { label: t, value: n, className: r } = e;
    return (0, s.jsxs)(c.E, {
        variant: "text-lg/semibold",
        color: "text-strong",
        className: a()(f.p, r),
        children: [
            (0, s.jsx)("span", { children: t ?? p.intl.string(m.default.Zxav97) }),
            (0, s.jsx)("span", { children: n }),
        ],
    });
}
