t.d(l, { f: () => y }), t(388685);
var a = t(951288),
    n = t(647438),
    o = t(120356),
    i = t.n(o),
    r = t(862371),
    s = t(489892),
    u = t(602493),
    d = t(657707),
    c = t(402453),
    b = t(777207),
    p = t(238584);
function y(e) {
    let {
            value: l,
            onChange: t,
            minValue: o,
            maxValue: y,
            disabled: m = !1,
            readOnly: f = !1,
            className: v,
            "aria-label": h,
        } = e,
        { i18n: x } = (0, c.ZF)(),
        [g, O] = n.useState(l);
    return (
        n.useEffect(() => {
            O(l);
        }, [l]),
        (0, a.jsx)(r.f, {
            value: l,
            focusedValue: g,
            onFocusChange: O,
            onChange: t,
            minValue: o,
            maxValue: y,
            isDisabled: m,
            isReadOnly: f,
            "aria-label": h,
            "data-mana-component": "calendar",
            className: i()(p.calendar, v),
            children: (e) =>
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)("header", {
                            className: p.calendarHeader,
                            children: [
                                (0, a.jsx)(u.h, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: d.V7D,
                                    "aria-label": x.CALENDAR_PREVIOUS_MONTH_LABEL,
                                    onClick: () => e.state.focusPreviousPage(),
                                    slot: "previous",
                                }),
                                (0, a.jsx)(b.x, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    children: (0, a.jsx)(s.X, {}),
                                }),
                                (0, a.jsx)(u.h, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: d.Fbu,
                                    onClick: () => e.state.focusNextPage(),
                                    "aria-label": x.CALENDAR_NEXT_MONTH_LABEL,
                                    slot: "next",
                                }),
                            ],
                        }),
                        (0, a.jsxs)(r.TK, {
                            className: p.calendarGrid,
                            weekdayStyle: "short",
                            children: [
                                (0, a.jsx)(r.pg, {
                                    children: (e) =>
                                        (0, a.jsx)(r.mc, {
                                            className: p.headerCell,
                                            children: (0, a.jsx)(b.x, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: e,
                                            }),
                                        }),
                                }),
                                (0, a.jsx)(r.MU, {
                                    children: (e) =>
                                        (0, a.jsx)(r.VX, {
                                            date: e,
                                            className: p.cell,
                                            children: (e) => {
                                                let { formattedDate: l } = e;
                                                return (0, a.jsx)(b.x, {
                                                    variant: "text-md/normal",
                                                    color: "currentColor",
                                                    children: l,
                                                });
                                            },
                                        }),
                                }),
                            ],
                        }),
                    ],
                }),
        })
    );
}
