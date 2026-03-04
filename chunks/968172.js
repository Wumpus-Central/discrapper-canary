t.d(a, {
    Vv: () => C,
    W$: () => V,
    Xq: () => F,
    Yi: () => R,
    Zr: () => B,
    _e: () => k,
    co: () => S,
    pr: () => $,
    r8: () => E,
});
var r = t(650682),
    n = t(825913),
    i = t(257537),
    l = t(193523),
    o = t(853590),
    u = t(404700),
    s = t(803082),
    d = t(126031),
    c = t(594107),
    m = t(839316),
    h = t(348788),
    y = t(967158),
    D = t(498430),
    p = t(428174),
    g = t(352404),
    v = t(857175),
    f = t(322518),
    b = t(290424),
    A = t(64700);
let R = (0, A.createContext)(null),
    $ = (0, A.createContext)(null),
    w = (0, A.createContext)(null),
    P = (0, A.createContext)(null),
    C = (0, A.forwardRef)(function (e, a) {
        [e, a] = (0, n.JT)(e, a, R);
        let { locale: t } = (0, o.Y)(),
            c = (0, v.T)({ ...e, locale: t, createCalendar: e.createCalendar || p.d }),
            {
                calendarProps: m,
                prevButtonProps: h,
                nextButtonProps: y,
                errorMessageProps: D,
                title: g,
            } = (0, u._)(e, c),
            f = (0, n.Sl)({
                ...e,
                values: { state: c, isDisabled: e.isDisabled || !1, isInvalid: c.isValueInvalid },
                defaultClassName: "react-aria-Calendar",
            }),
            $ = (0, b.$)(e, { global: !0 });
        return A.createElement(
            "div",
            {
                ...(0, s.v)($, f, m),
                ref: a,
                slot: e.slot || void 0,
                "data-disabled": e.isDisabled || void 0,
                "data-invalid": c.isValueInvalid || void 0,
            },
            A.createElement(
                n.Kq,
                {
                    values: [
                        [r.k, { slots: { previous: h, next: y } }],
                        [i.A3, { "aria-hidden": !0, level: 2, children: g }],
                        [w, c],
                        [R, e],
                        [l.h, { slots: { errorMessage: D } }],
                    ],
                },
                A.createElement(d.s, null, A.createElement("h2", null, m["aria-label"])),
                f.children,
                A.createElement(
                    d.s,
                    null,
                    A.createElement("button", {
                        "aria-label": y["aria-label"],
                        disabled: y.isDisabled,
                        onClick: () => c.focusNextPage(),
                        tabIndex: -1,
                    }),
                ),
            ),
        );
    }),
    k = (0, A.forwardRef)(function (e, a) {
        [e, a] = (0, n.JT)(e, a, $);
        let { locale: t } = (0, o.Y)(),
            u = (0, f.E)({ ...e, locale: t, createCalendar: e.createCalendar || p.d }),
            {
                calendarProps: m,
                prevButtonProps: h,
                nextButtonProps: y,
                errorMessageProps: D,
                title: g,
            } = (0, c.p)(e, u, a),
            v = (0, n.Sl)({
                ...e,
                values: { state: u, isDisabled: e.isDisabled || !1, isInvalid: u.isValueInvalid },
                defaultClassName: "react-aria-RangeCalendar",
            }),
            R = (0, b.$)(e, { global: !0 });
        return A.createElement(
            "div",
            {
                ...(0, s.v)(v, R, m),
                ref: a,
                slot: e.slot || void 0,
                "data-disabled": e.isDisabled || void 0,
                "data-invalid": u.isValueInvalid || void 0,
            },
            A.createElement(
                n.Kq,
                {
                    values: [
                        [r.k, { slots: { previous: h, next: y } }],
                        [i.A3, { "aria-hidden": !0, level: 2, children: g }],
                        [P, u],
                        [$, e],
                        [l.h, { slots: { errorMessage: D } }],
                    ],
                },
                A.createElement(d.s, null, A.createElement("h2", null, m["aria-label"])),
                v.children,
                A.createElement(
                    d.s,
                    null,
                    A.createElement("button", {
                        "aria-label": y["aria-label"],
                        disabled: y.isDisabled,
                        onClick: () => u.focusNextPage(),
                        tabIndex: -1,
                    }),
                ),
            ),
        );
    }),
    x = (0, A.createContext)(null),
    E = (0, A.forwardRef)(function (e, a) {
        var t, r;
        let i = (0, A.useContext)(w),
            l = (0, A.useContext)(P),
            o = (0, n.CC)(R),
            u = (0, n.CC)($),
            d = null != i ? i : l,
            c = d.visibleRange.start;
        e.offset && (c = c.add(e.offset));
        let h = null != (t = null == o ? void 0 : o.firstDayOfWeek) ? t : null == u ? void 0 : u.firstDayOfWeek,
            {
                gridProps: y,
                headerProps: D,
                weekDays: p,
                weeksInMonth: v,
            } = (0, m.g)({ startDate: c, endDate: (0, g.p9)(c), weekdayStyle: e.weekdayStyle, firstDayOfWeek: h }, d),
            f = (0, b.$)(e, { global: !0 });
        return A.createElement(
            x.Provider,
            { value: { headerProps: D, weekDays: p, startDate: c, weeksInMonth: v } },
            A.createElement(
                "table",
                {
                    ...(0, s.v)(f, y),
                    ref: a,
                    style: e.style,
                    cellPadding: 0,
                    className: null != (r = e.className) ? r : "react-aria-CalendarGrid",
                },
                "function" != typeof e.children
                    ? e.children
                    : A.createElement(
                          A.Fragment,
                          null,
                          A.createElement(S, null, (e) => A.createElement(V, null, e)),
                          A.createElement(F, null, e.children),
                      ),
            ),
        );
    }),
    S = (0, A.forwardRef)(function (e, a) {
        let { children: t, style: r, className: n } = e,
            { headerProps: i, weekDays: l } = (0, A.useContext)(x),
            o = (0, b.$)(e, { global: !0 });
        return A.createElement(
            "thead",
            { ...(0, s.v)(o, i), ref: a, style: r, className: n || "react-aria-CalendarGridHeader" },
            A.createElement(
                "tr",
                null,
                l.map((e, a) => A.cloneElement(t(e), { key: a })),
            ),
        );
    }),
    V = (0, A.forwardRef)(function (e, a) {
        let { children: t, style: r, className: n } = e,
            i = (0, b.$)(e, { global: !0 });
        return A.createElement("th", { ...i, ref: a, style: r, className: n || "react-aria-CalendarHeaderCell" }, t);
    }),
    F = (0, A.forwardRef)(function (e, a) {
        let { children: t, style: r, className: n } = e,
            i = (0, A.useContext)(w),
            l = (0, A.useContext)(P),
            o = null != i ? i : l,
            { startDate: u, weeksInMonth: s } = (0, A.useContext)(x),
            d = (0, b.$)(e, { global: !0 });
        return A.createElement(
            "tbody",
            { ...d, ref: a, style: r, className: n || "react-aria-CalendarGridBody" },
            [...Array(s).keys()].map((e) =>
                A.createElement(
                    "tr",
                    { key: e },
                    o
                        .getDatesInWeek(e, u)
                        .map((e, a) => (e ? A.cloneElement(t(e), { key: a }) : A.createElement("td", { key: a }))),
                ),
            ),
        );
    }),
    B = (0, A.forwardRef)(function ({ date: e, ...a }, t) {
        var r;
        let i = (0, A.useContext)(w),
            l = (0, A.useContext)(P),
            o = null != i ? i : l,
            { startDate: u } = null != (r = (0, A.useContext)(x)) ? r : { startDate: o.visibleRange.start },
            d = !(0, g.tF)(u, e),
            c = (0, g.cK)(e, o.timeZone),
            m = (0, A.useRef)(null),
            { cellProps: p, buttonProps: v, ...f } = (0, h.E)({ date: e, isOutsideMonth: d }, o, m),
            { hoverProps: R, isHovered: $ } = (0, y.M)({ ...a, isDisabled: f.isDisabled }),
            { focusProps: C, isFocusVisible: k } = (0, D.o)();
        k && (k = f.isFocused);
        let E = !1,
            S = !1;
        "highlightedRange" in o &&
            o.highlightedRange &&
            ((E = (0, g.ro)(e, o.highlightedRange.start)), (S = (0, g.ro)(e, o.highlightedRange.end)));
        let V = (0, n.Sl)({
                ...a,
                defaultChildren: f.formattedDate,
                defaultClassName: "react-aria-CalendarCell",
                values: {
                    date: e,
                    isHovered: $,
                    isOutsideMonth: d,
                    isFocusVisible: k,
                    isSelectionStart: E,
                    isSelectionEnd: S,
                    isToday: c,
                    ...f,
                },
            }),
            F = {
                "data-focused": f.isFocused || void 0,
                "data-hovered": $ || void 0,
                "data-pressed": f.isPressed || void 0,
                "data-unavailable": f.isUnavailable || void 0,
                "data-disabled": f.isDisabled || void 0,
                "data-focus-visible": k || void 0,
                "data-outside-visible-range": f.isOutsideVisibleRange || void 0,
                "data-outside-month": d || void 0,
                "data-selected": f.isSelected || void 0,
                "data-selection-start": E || void 0,
                "data-selection-end": S || void 0,
                "data-invalid": f.isInvalid || void 0,
                "data-today": c || void 0,
            },
            B = (0, b.$)(a, { global: !0 });
        return A.createElement(
            "td",
            { ...p, ref: t },
            A.createElement("div", { ...(0, s.v)(B, v, C, R, F, V), ref: m }),
        );
    });
