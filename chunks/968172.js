t.d(a, { Vv: () => R, W$: () => C, Xq: () => E, Yi: () => b, Zr: () => S, co: () => x, r8: () => k });
var r = t(650682),
    n = t(825913),
    i = t(257537),
    o = t(193523),
    u = t(853590),
    l = t(404700),
    s = t(803082),
    d = t(126031),
    c = t(839316),
    m = t(348788),
    h = t(967158),
    D = t(498430),
    y = t(428174),
    p = t(352404),
    g = t(857175),
    f = t(290424),
    v = t(64700);
let b = (0, v.createContext)(null),
    A = (0, v.createContext)(null),
    $ = (0, v.createContext)(null),
    w = (0, v.createContext)(null),
    R = (0, v.forwardRef)(function (e, a) {
        [e, a] = (0, n.JT)(e, a, b);
        let { locale: t } = (0, u.Y)(),
            c = (0, g.T)({ ...e, locale: t, createCalendar: e.createCalendar || y.d }),
            {
                calendarProps: m,
                prevButtonProps: h,
                nextButtonProps: D,
                errorMessageProps: p,
                title: A,
            } = (0, l._)(e, c),
            w = (0, n.Sl)({
                ...e,
                values: { state: c, isDisabled: e.isDisabled || !1, isInvalid: c.isValueInvalid },
                defaultClassName: "react-aria-Calendar",
            }),
            R = (0, f.$)(e, { global: !0 });
        return v.createElement(
            "div",
            {
                ...(0, s.v)(R, w, m),
                ref: a,
                slot: e.slot || void 0,
                "data-disabled": e.isDisabled || void 0,
                "data-invalid": c.isValueInvalid || void 0,
            },
            v.createElement(
                n.Kq,
                {
                    values: [
                        [r.k, { slots: { previous: h, next: D } }],
                        [i.A3, { "aria-hidden": !0, level: 2, children: A }],
                        [$, c],
                        [b, e],
                        [o.h, { slots: { errorMessage: p } }],
                    ],
                },
                v.createElement(d.s, null, v.createElement("h2", null, m["aria-label"])),
                w.children,
                v.createElement(
                    d.s,
                    null,
                    v.createElement("button", {
                        "aria-label": D["aria-label"],
                        disabled: D.isDisabled,
                        onClick: () => c.focusNextPage(),
                        tabIndex: -1,
                    }),
                ),
            ),
        );
    }),
    P = (0, v.createContext)(null),
    k = (0, v.forwardRef)(function (e, a) {
        var t, r;
        let i = (0, v.useContext)($),
            o = (0, v.useContext)(w),
            u = (0, n.CC)(b),
            l = (0, n.CC)(A),
            d = null != i ? i : o,
            m = d.visibleRange.start;
        e.offset && (m = m.add(e.offset));
        let h = null != (t = null == u ? void 0 : u.firstDayOfWeek) ? t : null == l ? void 0 : l.firstDayOfWeek,
            {
                gridProps: D,
                headerProps: y,
                weekDays: g,
                weeksInMonth: R,
            } = (0, c.g)({ startDate: m, endDate: (0, p.p9)(m), weekdayStyle: e.weekdayStyle, firstDayOfWeek: h }, d),
            k = (0, f.$)(e, { global: !0 });
        return v.createElement(
            P.Provider,
            { value: { headerProps: y, weekDays: g, startDate: m, weeksInMonth: R } },
            v.createElement(
                "table",
                {
                    ...(0, s.v)(k, D),
                    ref: a,
                    style: e.style,
                    cellPadding: 0,
                    className: null != (r = e.className) ? r : "react-aria-CalendarGrid",
                },
                "function" != typeof e.children
                    ? e.children
                    : v.createElement(
                          v.Fragment,
                          null,
                          v.createElement(x, null, (e) => v.createElement(C, null, e)),
                          v.createElement(E, null, e.children),
                      ),
            ),
        );
    }),
    x = (0, v.forwardRef)(function (e, a) {
        let { children: t, style: r, className: n } = e,
            { headerProps: i, weekDays: o } = (0, v.useContext)(P),
            u = (0, f.$)(e, { global: !0 });
        return v.createElement(
            "thead",
            { ...(0, s.v)(u, i), ref: a, style: r, className: n || "react-aria-CalendarGridHeader" },
            v.createElement(
                "tr",
                null,
                o.map((e, a) => v.cloneElement(t(e), { key: a })),
            ),
        );
    }),
    C = (0, v.forwardRef)(function (e, a) {
        let { children: t, style: r, className: n } = e,
            i = (0, f.$)(e, { global: !0 });
        return v.createElement("th", { ...i, ref: a, style: r, className: n || "react-aria-CalendarHeaderCell" }, t);
    }),
    E = (0, v.forwardRef)(function (e, a) {
        let { children: t, style: r, className: n } = e,
            i = (0, v.useContext)($),
            o = (0, v.useContext)(w),
            u = null != i ? i : o,
            { startDate: l, weeksInMonth: s } = (0, v.useContext)(P),
            d = (0, f.$)(e, { global: !0 });
        return v.createElement(
            "tbody",
            { ...d, ref: a, style: r, className: n || "react-aria-CalendarGridBody" },
            [...Array(s).keys()].map((e) =>
                v.createElement(
                    "tr",
                    { key: e },
                    u
                        .getDatesInWeek(e, l)
                        .map((e, a) => (e ? v.cloneElement(t(e), { key: a }) : v.createElement("td", { key: a }))),
                ),
            ),
        );
    }),
    S = (0, v.forwardRef)(function ({ date: e, ...a }, t) {
        var r;
        let i = (0, v.useContext)($),
            o = (0, v.useContext)(w),
            u = null != i ? i : o,
            { startDate: l } = null != (r = (0, v.useContext)(P)) ? r : { startDate: u.visibleRange.start },
            d = !(0, p.tF)(l, e),
            c = (0, p.cK)(e, u.timeZone),
            y = (0, v.useRef)(null),
            { cellProps: g, buttonProps: b, ...A } = (0, m.E)({ date: e, isOutsideMonth: d }, u, y),
            { hoverProps: R, isHovered: k } = (0, h.M)({ ...a, isDisabled: A.isDisabled }),
            { focusProps: x, isFocusVisible: C } = (0, D.o)();
        C && (C = A.isFocused);
        let E = !1,
            S = !1;
        "highlightedRange" in u &&
            u.highlightedRange &&
            ((E = (0, p.ro)(e, u.highlightedRange.start)), (S = (0, p.ro)(e, u.highlightedRange.end)));
        let F = (0, n.Sl)({
                ...a,
                defaultChildren: A.formattedDate,
                defaultClassName: "react-aria-CalendarCell",
                values: {
                    date: e,
                    isHovered: k,
                    isOutsideMonth: d,
                    isFocusVisible: C,
                    isSelectionStart: E,
                    isSelectionEnd: S,
                    isToday: c,
                    ...A,
                },
            }),
            B = {
                "data-focused": A.isFocused || void 0,
                "data-hovered": k || void 0,
                "data-pressed": A.isPressed || void 0,
                "data-unavailable": A.isUnavailable || void 0,
                "data-disabled": A.isDisabled || void 0,
                "data-focus-visible": C || void 0,
                "data-outside-visible-range": A.isOutsideVisibleRange || void 0,
                "data-outside-month": d || void 0,
                "data-selected": A.isSelected || void 0,
                "data-selection-start": E || void 0,
                "data-selection-end": S || void 0,
                "data-invalid": A.isInvalid || void 0,
                "data-today": c || void 0,
            },
            V = (0, f.$)(a, { global: !0 });
        return v.createElement(
            "td",
            { ...g, ref: t },
            v.createElement("div", { ...(0, s.v)(V, b, x, R, B, F), ref: y }),
        );
    });
