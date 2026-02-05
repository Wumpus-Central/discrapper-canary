"use strict";
n.d(t, { Vv: () => v, W$: () => D, Xq: () => w, Yi: () => I, Zr: () => x, co: () => R, r8: () => b });
var r = n(650682),
    i = n(825913),
    a = n(257537),
    s = n(193523),
    o = n(853590),
    l = n(404700),
    u = n(803082),
    c = n(126031),
    d = n(839316),
    _ = n(348788),
    f = n(967158),
    p = n(498430),
    h = n(428174),
    m = n(352404),
    g = n(857175),
    E = n(290424),
    A = n(64700);
let I = (0, A.createContext)(null),
    T = (0, A.createContext)(null),
    y = (0, A.createContext)(null),
    S = (0, A.createContext)(null),
    v = (0, A.forwardRef)(function (e, t) {
        [e, t] = (0, i.JT)(e, t, I);
        let { locale: n } = (0, o.Y)(),
            d = (0, g.T)({ ...e, locale: n, createCalendar: e.createCalendar || h.d }),
            {
                calendarProps: _,
                prevButtonProps: f,
                nextButtonProps: p,
                errorMessageProps: m,
                title: T,
            } = (0, l._)(e, d),
            S = (0, i.Sl)({
                ...e,
                values: { state: d, isDisabled: e.isDisabled || !1, isInvalid: d.isValueInvalid },
                defaultClassName: "react-aria-Calendar",
            }),
            v = (0, E.$)(e, { global: !0 });
        return A.createElement(
            "div",
            {
                ...(0, u.v)(v, S, _),
                ref: t,
                slot: e.slot || void 0,
                "data-disabled": e.isDisabled || void 0,
                "data-invalid": d.isValueInvalid || void 0,
            },
            A.createElement(
                i.Kq,
                {
                    values: [
                        [r.k, { slots: { previous: f, next: p } }],
                        [a.A3, { "aria-hidden": !0, level: 2, children: T }],
                        [y, d],
                        [I, e],
                        [s.h, { slots: { errorMessage: m } }],
                    ],
                },
                A.createElement(c.s, null, A.createElement("h2", null, _["aria-label"])),
                S.children,
                A.createElement(
                    c.s,
                    null,
                    A.createElement("button", {
                        "aria-label": p["aria-label"],
                        disabled: p.isDisabled,
                        onClick: () => d.focusNextPage(),
                        tabIndex: -1,
                    }),
                ),
            ),
        );
    }),
    C = (0, A.createContext)(null),
    b = (0, A.forwardRef)(function (e, t) {
        var n, r;
        let a = (0, A.useContext)(y),
            s = (0, A.useContext)(S),
            o = (0, i.CC)(I),
            l = (0, i.CC)(T),
            c = null != a ? a : s,
            _ = c.visibleRange.start;
        e.offset && (_ = _.add(e.offset));
        let f = null != (n = null == o ? void 0 : o.firstDayOfWeek) ? n : null == l ? void 0 : l.firstDayOfWeek,
            {
                gridProps: p,
                headerProps: h,
                weekDays: g,
                weeksInMonth: v,
            } = (0, d.g)({ startDate: _, endDate: (0, m.p9)(_), weekdayStyle: e.weekdayStyle, firstDayOfWeek: f }, c),
            b = (0, E.$)(e, { global: !0 });
        return A.createElement(
            C.Provider,
            { value: { headerProps: h, weekDays: g, startDate: _, weeksInMonth: v } },
            A.createElement(
                "table",
                {
                    ...(0, u.v)(b, p),
                    ref: t,
                    style: e.style,
                    cellPadding: 0,
                    className: null != (r = e.className) ? r : "react-aria-CalendarGrid",
                },
                "function" != typeof e.children
                    ? e.children
                    : A.createElement(
                          A.Fragment,
                          null,
                          A.createElement(R, null, (e) => A.createElement(D, null, e)),
                          A.createElement(w, null, e.children),
                      ),
            ),
        );
    });
function N(e, t) {
    let { children: n, style: r, className: i } = e,
        { headerProps: a, weekDays: s } = (0, A.useContext)(C),
        o = (0, E.$)(e, { global: !0 });
    return A.createElement(
        "thead",
        { ...(0, u.v)(o, a), ref: t, style: r, className: i || "react-aria-CalendarGridHeader" },
        A.createElement(
            "tr",
            null,
            s.map((e, t) => A.cloneElement(n(e), { key: t })),
        ),
    );
}
let R = (0, A.forwardRef)(N);
function O(e, t) {
    let { children: n, style: r, className: i } = e,
        a = (0, E.$)(e, { global: !0 });
    return A.createElement("th", { ...a, ref: t, style: r, className: i || "react-aria-CalendarHeaderCell" }, n);
}
let D = (0, A.forwardRef)(O);
function L(e, t) {
    let { children: n, style: r, className: i } = e,
        a = (0, A.useContext)(y),
        s = (0, A.useContext)(S),
        o = null != a ? a : s,
        { startDate: l, weeksInMonth: u } = (0, A.useContext)(C),
        c = (0, E.$)(e, { global: !0 });
    return A.createElement(
        "tbody",
        { ...c, ref: t, style: r, className: i || "react-aria-CalendarGridBody" },
        [...Array(u).keys()].map((e) =>
            A.createElement(
                "tr",
                { key: e },
                o
                    .getDatesInWeek(e, l)
                    .map((e, t) => (e ? A.cloneElement(n(e), { key: t }) : A.createElement("td", { key: t }))),
            ),
        ),
    );
}
let w = (0, A.forwardRef)(L),
    x = (0, A.forwardRef)(function ({ date: e, ...t }, n) {
        var r;
        let a = (0, A.useContext)(y),
            s = (0, A.useContext)(S),
            o = null != a ? a : s,
            { startDate: l } = null != (r = (0, A.useContext)(C)) ? r : { startDate: o.visibleRange.start },
            c = !(0, m.tF)(l, e),
            d = (0, m.cK)(e, o.timeZone),
            h = (0, A.useRef)(null),
            { cellProps: g, buttonProps: I, ...T } = (0, _.E)({ date: e, isOutsideMonth: c }, o, h),
            { hoverProps: v, isHovered: b } = (0, f.M)({ ...t, isDisabled: T.isDisabled }),
            { focusProps: N, isFocusVisible: R } = (0, p.o)();
        R && (R = T.isFocused);
        let O = !1,
            D = !1;
        "highlightedRange" in o &&
            o.highlightedRange &&
            ((O = (0, m.ro)(e, o.highlightedRange.start)), (D = (0, m.ro)(e, o.highlightedRange.end)));
        let L = (0, i.Sl)({
                ...t,
                defaultChildren: T.formattedDate,
                defaultClassName: "react-aria-CalendarCell",
                values: {
                    date: e,
                    isHovered: b,
                    isOutsideMonth: c,
                    isFocusVisible: R,
                    isSelectionStart: O,
                    isSelectionEnd: D,
                    isToday: d,
                    ...T,
                },
            }),
            w = {
                "data-focused": T.isFocused || void 0,
                "data-hovered": b || void 0,
                "data-pressed": T.isPressed || void 0,
                "data-unavailable": T.isUnavailable || void 0,
                "data-disabled": T.isDisabled || void 0,
                "data-focus-visible": R || void 0,
                "data-outside-visible-range": T.isOutsideVisibleRange || void 0,
                "data-outside-month": c || void 0,
                "data-selected": T.isSelected || void 0,
                "data-selection-start": O || void 0,
                "data-selection-end": D || void 0,
                "data-invalid": T.isInvalid || void 0,
                "data-today": d || void 0,
            },
            x = (0, E.$)(t, { global: !0 });
        return A.createElement(
            "td",
            { ...g, ref: n },
            A.createElement("div", { ...(0, u.v)(x, I, N, v, w, L), ref: h }),
        );
    });
