a.d(l, { _: () => m });
var t = a(627968),
    o = a(64700),
    n = a(503698),
    i = a.n(n),
    s = a(968172),
    r = a(408278),
    d = a(376887),
    u = a(934551),
    c = a(460890),
    b = a(834730),
    p = a(202336);
function m(e) {
    let {
            value: l,
            onChange: a,
            minValue: n,
            maxValue: m,
            isDisabled: x = !1,
            isReadOnly: h = !1,
            visibleMonths: v = 1,
            className: y,
            "aria-label": f,
        } = e,
        { i18n: g, locale: V } = (0, c.G9)(),
        C = l?.start ?? null,
        [j, S] = o.useState(C);
    return (
        o.useEffect(() => {
            S(C);
        }, [C]),
        (0, t.jsx)(s._e, {
            value: l,
            focusedValue: j,
            onFocusChange: S,
            onChange: a,
            minValue: n,
            maxValue: m,
            isDisabled: x,
            isReadOnly: h,
            visibleDuration: { months: v },
            "aria-label": f,
            "data-mana-component": "range-calendar",
            className: i()(p.BJ, v > 1 && p.Q7, y),
            children: (e) =>
                (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsxs)("header", {
                            className: p.I4,
                            children: [
                                (0, t.jsx)(r.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: u.ChevronLargeLeftIcon,
                                    "aria-label": g.CALENDAR_PREVIOUS_MONTH_LABEL,
                                    onClick: () => e.state.focusPreviousPage(),
                                    slot: "previous",
                                }),
                                (0, t.jsx)("div", {
                                    className: p.Wb,
                                    "aria-live": "polite",
                                    children: Array.from({ length: v }, (l, a) => {
                                        let o = e.state.visibleRange.start
                                            .add({ months: a })
                                            .toDate(e.state.timeZone)
                                            .toLocaleDateString(V, { month: "long", year: "numeric" });
                                        return (0, t.jsx)(
                                            b.E,
                                            { variant: "text-md/medium", color: "text-strong", children: o },
                                            a,
                                        );
                                    }),
                                }),
                                (0, t.jsx)(r.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: u.ChevronLargeRightIcon,
                                    onClick: () => e.state.focusNextPage(),
                                    "aria-label": g.CALENDAR_NEXT_MONTH_LABEL,
                                    slot: "next",
                                }),
                            ],
                        }),
                        (0, t.jsx)("div", {
                            className: p.US,
                            children: Array.from({ length: v }, (e, l) =>
                                (0, t.jsx)(d.N, { offset: { months: l }, isRangeSelection: !0 }, l),
                            ),
                        }),
                    ],
                }),
        })
    );
}
