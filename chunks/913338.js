n.d(t, { w: () => u });
var r = n(54381),
    l = n(473749),
    a = n(120356),
    i = n.n(a),
    o = n(793030),
    s = n(993365),
    d = n(482828);
function c(e) {
    let { option: t, selected: n, onClick: a, disabled: c = !1 } = e,
        u = l.useCallback((e) => a(t), [a, t]);
    return (0, r.jsx)(o.P3F, {
        className: i()(d.item, {
            [d.itemSelected]: n,
            [d.disabled]: c,
        }),
        "aria-disabled": c,
        onClick: c ? void 0 : u,
        onMouseEnter: t.onMouseEnter,
        onMouseLeave: t.onMouseLeave,
        children: (0, r.jsxs)(s.x, {
            className: d.controlText,
            variant: "text-sm/medium",
            color: "none",
            children: [
                null != t.icon
                    ? (0, r.jsx)("span", {
                          className: d.icon,
                          children: t.icon,
                      })
                    : null,
                t.name,
            ],
        }),
    });
}
function u(e) {
    let { options: t, value: n, onChange: a, className: o, disabled: s = !1 } = e,
        u = l.useMemo(() => t.findIndex((e) => e.value === n), [t, n]),
        p = l.useCallback(
            (e) => {
                var t;
                let l = n === e.value;
                return (0, r.jsx)(
                    c,
                    {
                        selected: l,
                        option: e,
                        onClick: a,
                        disabled: s,
                    },
                    null != (t = e.key) ? t : String(e.value),
                );
            },
            [n, a, s],
        );
    return (0, r.jsx)("div", {
        className: i()(d.container, o, {
            [d.disabledContainer]: s,
            [d.trickSelected]: 0 === u,
            [d.treatSelected]: 1 === u,
        }),
        children: t.map(p),
    });
}
