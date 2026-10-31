n.d(t, { Qf: () => h, Vm: () => g });
var r = n(477900),
    i = n(582128),
    a = n(503698),
    l = n.n(a),
    s = n(338209),
    u = n.n(s),
    c = n(834730),
    o = n(580630),
    d = n(725836),
    m = n(777485),
    f = n(758476),
    p = n(105292),
    v = n(801067);
function g(e) {
    let t = (0, d.I6)(),
        { lineItems: n } = e,
        i = (function (e) {
            let t = e.filter((e) => !(x(e) && 0 === e.amount)),
                { tax: n = 0, other: r = 0 } = u()(t, (e) => (x(e) ? "tax" : "other"));
            if (1 === r) {
                if (0 === n) return [];
                if (1 === n) return [t.find(x)];
            }
            return t;
        })(n);
    return 1 === i.length && null != t
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)("div", { className: v.yF }),
                  (0, r.jsx)(d.gw, {
                      children: (0, r.jsx)("div", {
                          className: v.sR,
                          children: (0, r.jsx)(b, { ...e, displayItems: i }),
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)("div", { className: l()(v.yF, v.s3) }), (0, r.jsx)(b, { ...e, displayItems: i })],
          });
}
function x(e) {
    return "tax" === e.id;
}
function b(e) {
    let {
            label: t,
            lineItems: n,
            displayItems: a,
            currency: l,
            collapsedContentLabelOverride: s,
            defaultExpanded: u = !1,
        } = e,
        d = n.length > 0,
        { hasAdjustments: f, totalAdjustmentsOrSavings: p } = i.useMemo(
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
        );
    if (0 === a.length) return null;
    if (1 === a.length) {
        let { amount: e, ...t } = a[0],
            n = (0, o.$g)(e, l);
        return (0, r.jsx)(m.i, { value: n, valueColor: e < 0 ? "text-feedback-positive" : "text-muted", ...t });
    }
    return (0, r.jsx)(m.h, {
        label: t,
        defaultExpanded: u,
        isDisabled: !d,
        collapsedContent:
            null != s
                ? (0, r.jsx)(c.E, { variant: "text-md/medium", color: "text-feedback-positive", children: s })
                : (0, r.jsx)(I, {
                      amount: p < 0 ? Math.abs(p) : null,
                      currency: l,
                      labelType: f ? "adjustments" : "savings",
                  }),
        children: a.map((e) => {
            let { id: t, label: n, amount: i, ...a } = e,
                s = (0, o.$g)(i, l);
            return (0, r.jsx)(
                m.i,
                { label: n, value: s, valueColor: i < 0 ? "text-feedback-positive" : "text-muted", ...a },
                t,
            );
        }),
    });
}
function I(e) {
    let { amount: t, currency: n, labelType: i } = e;
    if (0 === t || null == t) return null;
    let a = (0, o.$g)(t, n);
    return (0, r.jsx)(c.E, {
        variant: "text-md/medium",
        color: "text-feedback-positive",
        children: p.intl.format("adjustments" === i ? f.default["i3Q/6S"] : f.default.pDVleg, { amount: a }),
    });
}
function h(e) {
    let { label: t, value: n, className: a } = e,
        s = i.useId();
    return (0, r.jsxs)(c.E, {
        variant: "text-lg/semibold",
        color: "text-strong",
        className: l()(v.p8, a),
        role: "group",
        "aria-labelledby": s,
        children: [
            (0, r.jsx)("span", { id: s, children: t ?? p.intl.string(f.default.Zxav97) }),
            (0, r.jsx)("span", { children: n }),
        ],
    });
}
