a.d(l, { _: () => h });
var t = a(627968),
    o = a(64700),
    n = a(503698),
    i = a.n(n),
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
            minValue: n,
            maxValue: h,
            isDisabled: x = !1,
            isReadOnly: v = !1,
            visibleMonths: f = 1,
            className: g,
            "aria-label": y,
        } = e,
        { i18n: C, locale: j } = (0, b.G9)(),
        V = l?.start ?? null,
        [k, S] = o.useState(V);
    return (
        o.useEffect(() => {
            S(V);
        }, [V]),
        (0, t.jsx)(r._e, {
            value: l,
            focusedValue: k,
            onFocusChange: S,
            onChange: a,
            minValue: n,
            maxValue: h,
            isDisabled: x,
            isReadOnly: v,
            visibleDuration: { months: f },
            "aria-label": y,
            "data-mana-component": "range-calendar",
            className: i()(m.BJ, f > 1 && m.Q7, g),
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
                                    "aria-label": C.CALENDAR_PREVIOUS_MONTH_LABEL,
                                    onClick: () => e.state.focusPreviousPage(),
                                    slot: "previous",
                                }),
                                (0, t.jsx)("div", {
                                    className: m.Wb,
                                    "aria-live": "polite",
                                    children: Array.from({ length: f }, (l, a) => {
                                        let o = e.state.visibleRange.start
                                            .add({ months: a })
                                            .toDate(e.state.timeZone)
                                            .toLocaleDateString(j, { month: "long", year: "numeric" });
                                        return (0, t.jsx)(
                                            p.E,
                                            { variant: "text-md/medium", color: "text-strong", children: o },
                                            a,
                                        );
                                    }),
                                }),
                                (0, t.jsx)(s.K, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: c.u,
                                    onClick: () => e.state.focusNextPage(),
                                    "aria-label": C.CALENDAR_NEXT_MONTH_LABEL,
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
