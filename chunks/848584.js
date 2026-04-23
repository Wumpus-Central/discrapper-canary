"use strict";
n.d(t, { Qf: () => A, Vm: () => m });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(450873),
    l = n.n(o),
    d = n(834730),
    _ = n(580630),
    u = n(777485),
    c = n(327105),
    E = n(985018),
    h = n(961100);
function m(e) {
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("div", { className: h.y }), (0, i.jsx)(g, { ...e })] });
}
function f(e) {
    return "tax" === e.id;
}
function g(e) {
    let { label: t, lineItems: n, currency: s, collapsedContentLabelOverride: a, defaultExpanded: o = !1 } = e,
        c = n.length > 0,
        { hasAdjustments: E, totalAdjustmentsOrSavings: h } = r.useMemo(
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
        m = (function (e) {
            let t = e.filter((e) => !(f(e) && 0 === e.amount)),
                { tax: n = 0, other: i = 0 } = l()(t, (e) => (f(e) ? "tax" : "other"));
            if (1 === i) {
                if (0 === n) return [];
                if (1 === n) return [t.find(f)];
            }
            return t;
        })(n);
    if (0 === m.length) return null;
    if (1 === m.length) {
        let { amount: e, ...t } = m[0],
            n = (0, _.$g)(e, s);
        return (0, i.jsx)(u.i, { value: n, valueColor: e < 0 ? "text-feedback-positive" : "text-muted", ...t });
    }
    return (0, i.jsx)(u.h, {
        label: t,
        defaultExpanded: o,
        isDisabled: !c,
        collapsedContent:
            null != a
                ? (0, i.jsx)(d.E, { variant: "text-md/medium", color: "text-feedback-positive", children: a })
                : (0, i.jsx)(p, {
                      amount: h < 0 ? Math.abs(h) : null,
                      currency: s,
                      labelType: E ? "adjustments" : "savings",
                  }),
        children: m.map((e) => {
            let { id: t, label: n, amount: r, ...a } = e,
                o = (0, _.$g)(r, s);
            return (0, i.jsx)(
                u.i,
                { label: n, value: o, valueColor: r < 0 ? "text-feedback-positive" : "text-muted", ...a },
                t,
            );
        }),
    });
}
function p(e) {
    let { amount: t, currency: n, labelType: r } = e;
    if (0 === t || null == t) return null;
    let s = (0, _.$g)(t, n);
    return (0, i.jsx)(d.E, {
        variant: "text-md/medium",
        color: "text-feedback-positive",
        children: E.intl.format("adjustments" === r ? c.default["i3Q/6S"] : c.default.pDVleg, { amount: s }),
    });
}
function A(e) {
    let { label: t, value: n, className: r } = e;
    return (0, i.jsxs)(d.E, {
        variant: "text-lg/semibold",
        color: "text-strong",
        className: a()(h.p, r),
        children: [
            (0, i.jsx)("span", { children: t ?? E.intl.string(c.default.Zxav97) }),
            (0, i.jsx)("span", { children: n }),
        ],
    });
}
