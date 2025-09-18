n.d(t, { w: () => c });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(793030),
    o = n(993365),
    C = n(530989);
function d(e) {
    let { option: t, selected: n, onClick: l, disabled: d = !1 } = e,
        c = i.useCallback((e) => l(t), [l, t]);
    return (0, r.jsx)(s.P3F, {
        className: a()(C.item, {
            [C.itemSelected]: n,
            [C.disabled]: d,
        }),
        "aria-disabled": d,
        onClick: d ? void 0 : c,
        onMouseEnter: t.onMouseEnter,
        onMouseLeave: t.onMouseLeave,
        children: (0, r.jsxs)(o.x, {
            className: C.controlText,
            variant: "text-sm/medium",
            color: "none",
            children: [
                null != t.icon
                    ? (0, r.jsx)("span", {
                          className: C.icon,
                          children: t.icon,
                      })
                    : null,
                t.name,
            ],
        }),
    });
}
function c(e) {
    let { options: t, value: n, onChange: l, className: s, disabled: o = !1 } = e,
        c = i.useMemo(() => t.findIndex((e) => e.value === n), [t, n]),
        u = i.useCallback(
            (e) => {
                var t;
                let i = n === e.value;
                return (0, r.jsx)(
                    d,
                    {
                        selected: i,
                        option: e,
                        onClick: l,
                        disabled: o,
                    },
                    null != (t = e.key) ? t : String(e.value),
                );
            },
            [n, l, o],
        );
    return (0, r.jsx)("div", {
        className: a()(C.container, s, {
            [C.disabledContainer]: o,
            [C.trickSelected]: 0 === c,
            [C.treatSelected]: 1 === c,
        }),
        children: t.map(u),
    });
}
