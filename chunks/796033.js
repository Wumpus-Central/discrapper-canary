a.d(l, { _: () => h });
var t = a(627968),
    n = a(64700),
    o = a(503698),
    i = a.n(o),
    r = a(968172),
    s = a(408278),
    d = a(376887),
    u = a(668953),
    c = a(881636),
    b = a(460890),
    p = a(834730),
    m = a(195529);
function h(e) {
    let {
            value: l,
            onChange: a,
            minValue: o,
            maxValue: h,
            isDisabled: x = !1,
            isReadOnly: g = !1,
            visibleMonths: f = 1,
            className: v,
            "aria-label": y,
        } = e,
        { i18n: _, locale: C } = (0, b.G9)(),
        j = l?.start ?? null,
        [V, k] = n.useState(j);
    return (
        n.useEffect(() => {
            k(j);
        }, [j]),
        (0, t.jsx)(r._e, {
            value: l,
            focusedValue: V,
            onFocusChange: k,
            onChange: a,
            minValue: o,
            maxValue: h,
            isDisabled: x,
            isReadOnly: g,
            visibleDuration: { months: f },
            "aria-label": y,
            "data-mana-component": "range-calendar",
            className: i()(m.BJ, f > 1 && m.Q7, v),
            children: (e) =>
                (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsxs)("header", {
                            className: m.I4,
                            children: [
                                (0, t.jsx)(s.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: u.f,
                                    "aria-label": _.CALENDAR_PREVIOUS_MONTH_LABEL,
                                    onClick: () => e.state.focusPreviousPage(),
                                    slot: "previous",
                                }),
                                (0, t.jsx)("div", {
                                    className: m.Wb,
                                    "aria-live": "polite",
                                    children: Array.from({ length: f }, (l, a) => {
                                        let n = e.state.visibleRange.start
                                            .add({ months: a })
                                            .toDate(e.state.timeZone)
                                            .toLocaleDateString(C, { month: "long", year: "numeric" });
                                        return (0, t.jsx)(
                                            p.E,
                                            { variant: "text-md/medium", color: "text-strong", children: n },
                                            a,
                                        );
                                    }),
                                }),
                                (0, t.jsx)(s.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: c.u,
                                    onClick: () => e.state.focusNextPage(),
                                    "aria-label": _.CALENDAR_NEXT_MONTH_LABEL,
                                    slot: "next",
                                }),
                            ],
                        }),
                        (0, t.jsx)("div", {
                            className: m.US,
                            children: Array.from({ length: f }, (e, l) =>
                                (0, t.jsx)(d.N, { offset: { months: l }, isRangeSelection: !0 }, l),
                            ),
                        }),
                    ],
                }),
        })
    );
}
