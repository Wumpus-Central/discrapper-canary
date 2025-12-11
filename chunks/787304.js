n.d(t, { f: () => _ }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(971903),
    l = n(247062),
    c = n(602493),
    u = n(657707),
    d = n(402453),
    f = n(777207),
    p = n(316521);
function _(e) {
    let {
            value: t,
            onChange: n,
            minValue: a,
            maxValue: _,
            disabled: m = !1,
            readOnly: h = !1,
            className: g,
            "aria-label": E,
        } = e,
        { i18n: b } = (0, d.ZF)(),
        [y, O] = i.useState(t);
    return (
        i.useEffect(() => {
            O(t);
        }, [t]),
        (0, r.jsx)(s.f, {
            value: t,
            focusedValue: y,
            onFocusChange: O,
            onChange: n,
            minValue: a,
            maxValue: _,
            isDisabled: m,
            isReadOnly: h,
            "aria-label": E,
            "data-mana-component": "calendar",
            className: o()(p.calendar, g),
            children: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("header", {
                            className: p.calendarHeader,
                            children: [
                                (0, r.jsx)(c.h, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: u.V7D,
                                    "aria-label": b.CALENDAR_PREVIOUS_MONTH_LABEL,
                                    onClick: () => e.state.focusPreviousPage(),
                                    slot: "previous",
                                }),
                                (0, r.jsx)(f.x, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: (0, r.jsx)(l.X, {}),
                                }),
                                (0, r.jsx)(c.h, {
                                    variant: "icon-only",
                                    size: "sm",
                                    icon: u.Fbu,
                                    onClick: () => e.state.focusNextPage(),
                                    "aria-label": b.CALENDAR_NEXT_MONTH_LABEL,
                                    slot: "next",
                                }),
                            ],
                        }),
                        (0, r.jsxs)(s.TK, {
                            className: p.calendarGrid,
                            weekdayStyle: "short",
                            children: [
                                (0, r.jsx)(s.pg, {
                                    children: (e) =>
                                        (0, r.jsx)(s.mc, {
                                            className: p.headerCell,
                                            children: (0, r.jsx)(f.x, {
                                                variant: "text-sm/normal",
                                                color: "text-muted",
                                                children: e,
                                            }),
                                        }),
                                }),
                                (0, r.jsx)(s.MU, {
                                    children: (e) =>
                                        (0, r.jsx)(s.VX, {
                                            date: e,
                                            className: p.cell,
                                            children: (e) => {
                                                let { formattedDate: t } = e;
                                                return (0, r.jsx)(f.x, {
                                                    variant: "text-md/normal",
                                                    color: "currentColor",
                                                    children: t,
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
