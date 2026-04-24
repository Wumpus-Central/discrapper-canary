n.d(t, { Qf: () => x, Vm: () => b });
var a = n(627968),
    r = n(64700),
    l = n(503698),
    i = n.n(l),
    s = n(450873),
    o = n.n(s),
    c = n(834730),
    d = n(580630),
    u = n(777485),
    p = n(327105),
    _ = n(985018),
    m = n(961100);
function b(e) {
    return (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)("div", { className: m.y }), (0, a.jsx)(g, { ...e })] });
}
function f(e) {
    return "tax" === e.id;
}
function g(e) {
    let { label: t, lineItems: n, currency: l, collapsedContentLabelOverride: i, defaultExpanded: s = !1 } = e,
        p = n.length > 0,
        { hasAdjustments: _, totalAdjustmentsOrSavings: m } = r.useMemo(
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
        b = (function (e) {
            let t = e.filter((e) => !(f(e) && 0 === e.amount)),
                { tax: n = 0, other: a = 0 } = o()(t, (e) => (f(e) ? "tax" : "other"));
            if (1 === a) {
                if (0 === n) return [];
                if (1 === n) return [t.find(f)];
            }
            return t;
        })(n);
    if (0 === b.length) return null;
    if (1 === b.length) {
        let { amount: e, ...t } = b[0],
            n = (0, d.$g)(e, l);
        return (0, a.jsx)(u.i, { value: n, valueColor: e < 0 ? "text-feedback-positive" : "text-muted", ...t });
    }
    return (0, a.jsx)(u.h, {
        label: t,
        defaultExpanded: s,
        isDisabled: !p,
        collapsedContent:
            null != i
                ? (0, a.jsx)(c.E, { variant: "text-md/medium", color: "text-feedback-positive", children: i })
                : (0, a.jsx)(h, {
                      amount: m < 0 ? Math.abs(m) : null,
                      currency: l,
                      labelType: _ ? "adjustments" : "savings",
                  }),
        children: b.map((e) => {
            let { id: t, label: n, amount: r, ...i } = e,
                s = (0, d.$g)(r, l);
            return (0, a.jsx)(
                u.i,
                { label: n, value: s, valueColor: r < 0 ? "text-feedback-positive" : "text-muted", ...i },
                t,
            );
        }),
    });
}
function h(e) {
    let { amount: t, currency: n, labelType: r } = e;
    if (0 === t || null == t) return null;
    let l = (0, d.$g)(t, n);
    return (0, a.jsx)(c.E, {
        variant: "text-md/medium",
        color: "text-feedback-positive",
        children: _.intl.format("adjustments" === r ? p.default["i3Q/6S"] : p.default.pDVleg, { amount: l }),
    });
}
function x(e) {
    let { label: t, value: n, className: r } = e;
    return (0, a.jsxs)(c.E, {
        variant: "text-lg/semibold",
        color: "text-strong",
        className: i()(m.p, r),
        children: [
            (0, a.jsx)("span", { children: t ?? _.intl.string(p.default.Zxav97) }),
            (0, a.jsx)("span", { children: n }),
        ],
    });
}
