n.d(t, {
    Vv: () => S,
    W$: () => w,
    Xq: () => D,
    Yi: () => y,
    Zr: () => x,
    co: () => N,
    r8: () => T,
});
var r = n(650682),
    i = n(825913),
    a = n(257537),
    s = n(193523),
    o = n(853590),
    l = n(404700),
    c = n(803082),
    u = n(126031),
    d = n(839316),
    f = n(348788),
    p = n(967158),
    _ = n(498430),
    h = n(428174),
    m = n(352404),
    g = n(857175),
    E = n(290424),
    b = n(64700);
let y = (0, b.createContext)(null),
    O = (0, b.createContext)(null),
    A = (0, b.createContext)(null),
    v = (0, b.createContext)(null),
    S = (0, b.forwardRef)(function (e, t) {
        [e, t] = (0, i.JT)(e, t, y);
        let { locale: n } = (0, o.Y)(),
            d = (0, g.T)({
                ...e,
                locale: n,
                createCalendar: e.createCalendar || h.d,
            }),
            {
                calendarProps: f,
                prevButtonProps: p,
                nextButtonProps: _,
                errorMessageProps: m,
                title: O,
            } = (0, l._)(e, d),
            v = (0, i.Sl)({
                ...e,
                values: {
                    state: d,
                    isDisabled: e.isDisabled || !1,
                    isInvalid: d.isValueInvalid,
                },
                defaultClassName: "react-aria-Calendar",
            }),
            S = (0, E.$)(e, {
                global: !0,
            });
        return b.createElement(
            "div",
            {
                ...(0, c.v)(S, v, f),
                ref: t,
                slot: e.slot || void 0,
                "data-disabled": e.isDisabled || void 0,
                "data-invalid": d.isValueInvalid || void 0,
            },
            b.createElement(
                i.Kq,
                {
                    values: [
                        [
                            r.k,
                            {
                                slots: {
                                    previous: p,
                                    next: _,
                                },
                            },
                        ],
                        [
                            a.A3,
                            {
                                "aria-hidden": !0,
                                level: 2,
                                children: O,
                            },
                        ],
                        [A, d],
                        [y, e],
                        [
                            s.h,
                            {
                                slots: {
                                    errorMessage: m,
                                },
                            },
                        ],
                    ],
                },
                b.createElement(u.s, null, b.createElement("h2", null, f["aria-label"])),
                v.children,
                b.createElement(
                    u.s,
                    null,
                    b.createElement("button", {
                        "aria-label": _["aria-label"],
                        disabled: _.isDisabled,
                        onClick: () => d.focusNextPage(),
                        tabIndex: -1,
                    }),
                ),
            ),
        );
    }),
    I = (0, b.createContext)(null),
    T = (0, b.forwardRef)(function (e, t) {
        var n, r;
        let a = (0, b.useContext)(A),
            s = (0, b.useContext)(v),
            o = (0, i.CC)(y),
            l = (0, i.CC)(O),
            u = null != a ? a : s,
            f = u.visibleRange.start;
        e.offset && (f = f.add(e.offset));
        let p = null != (n = null == o ? void 0 : o.firstDayOfWeek) ? n : null == l ? void 0 : l.firstDayOfWeek,
            {
                gridProps: _,
                headerProps: h,
                weekDays: g,
                weeksInMonth: S,
            } = (0, d.g)(
                {
                    startDate: f,
                    endDate: (0, m.p9)(f),
                    weekdayStyle: e.weekdayStyle,
                    firstDayOfWeek: p,
                },
                u,
            ),
            T = (0, E.$)(e, {
                global: !0,
            });
        return b.createElement(
            I.Provider,
            {
                value: {
                    headerProps: h,
                    weekDays: g,
                    startDate: f,
                    weeksInMonth: S,
                },
            },
            b.createElement(
                "table",
                {
                    ...(0, c.v)(T, _),
                    ref: t,
                    style: e.style,
                    cellPadding: 0,
                    className: null != (r = e.className) ? r : "react-aria-CalendarGrid",
                },
                "function" != typeof e.children
                    ? e.children
                    : b.createElement(
                          b.Fragment,
                          null,
                          b.createElement(N, null, (e) => b.createElement(w, null, e)),
                          b.createElement(D, null, e.children),
                      ),
            ),
        );
    });

function C(e, t) {
    let { children: n, style: r, className: i } = e,
        { headerProps: a, weekDays: s } = (0, b.useContext)(I),
        o = (0, E.$)(e, {
            global: !0,
        });
    return b.createElement(
        "thead",
        {
            ...(0, c.v)(o, a),
            ref: t,
            style: r,
            className: i || "react-aria-CalendarGridHeader",
        },
        b.createElement(
            "tr",
            null,
            s.map((e, t) =>
                b.cloneElement(n(e), {
                    key: t,
                }),
            ),
        ),
    );
}
let N = (0, b.forwardRef)(C);

function R(e, t) {
    let { children: n, style: r, className: i } = e,
        a = (0, E.$)(e, {
            global: !0,
        });
    return b.createElement(
        "th",
        {
            ...a,
            ref: t,
            style: r,
            className: i || "react-aria-CalendarHeaderCell",
        },
        n,
    );
}
let w = (0, b.forwardRef)(R);

function P(e, t) {
    let { children: n, style: r, className: i } = e,
        a = (0, b.useContext)(A),
        s = (0, b.useContext)(v),
        o = null != a ? a : s,
        { startDate: l, weeksInMonth: c } = (0, b.useContext)(I),
        u = (0, E.$)(e, {
            global: !0,
        });
    return b.createElement(
        "tbody",
        {
            ...u,
            ref: t,
            style: r,
            className: i || "react-aria-CalendarGridBody",
        },
        [...Array(c).keys()].map((e) =>
            b.createElement(
                "tr",
                {
                    key: e,
                },
                o.getDatesInWeek(e, l).map((e, t) =>
                    e
                        ? b.cloneElement(n(e), {
                              key: t,
                          })
                        : b.createElement("td", {
                              key: t,
                          }),
                ),
            ),
        ),
    );
}
let D = (0, b.forwardRef)(P),
    x = (0, b.forwardRef)(function ({ date: e, ...t }, n) {
        var r;
        let a = (0, b.useContext)(A),
            s = (0, b.useContext)(v),
            o = null != a ? a : s,
            { startDate: l } =
                null != (r = (0, b.useContext)(I))
                    ? r
                    : {
                          startDate: o.visibleRange.start,
                      },
            u = !(0, m.tF)(l, e),
            d = (0, m.cK)(e, o.timeZone),
            h = (0, b.useRef)(null),
            {
                cellProps: g,
                buttonProps: y,
                ...O
            } = (0, f.E)(
                {
                    date: e,
                    isOutsideMonth: u,
                },
                o,
                h,
            ),
            { hoverProps: S, isHovered: T } = (0, p.M)({
                ...t,
                isDisabled: O.isDisabled,
            }),
            { focusProps: C, isFocusVisible: N } = (0, _.o)();
        N && (N = O.isFocused);
        let R = !1,
            w = !1;
        "highlightedRange" in o &&
            o.highlightedRange &&
            ((R = (0, m.ro)(e, o.highlightedRange.start)), (w = (0, m.ro)(e, o.highlightedRange.end)));
        let P = (0, i.Sl)({
                ...t,
                defaultChildren: O.formattedDate,
                defaultClassName: "react-aria-CalendarCell",
                values: {
                    date: e,
                    isHovered: T,
                    isOutsideMonth: u,
                    isFocusVisible: N,
                    isSelectionStart: R,
                    isSelectionEnd: w,
                    isToday: d,
                    ...O,
                },
            }),
            D = {
                "data-focused": O.isFocused || void 0,
                "data-hovered": T || void 0,
                "data-pressed": O.isPressed || void 0,
                "data-unavailable": O.isUnavailable || void 0,
                "data-disabled": O.isDisabled || void 0,
                "data-focus-visible": N || void 0,
                "data-outside-visible-range": O.isOutsideVisibleRange || void 0,
                "data-outside-month": u || void 0,
                "data-selected": O.isSelected || void 0,
                "data-selection-start": R || void 0,
                "data-selection-end": w || void 0,
                "data-invalid": O.isInvalid || void 0,
                "data-today": d || void 0,
            },
            x = (0, E.$)(t, {
                global: !0,
            });
        return b.createElement(
            "td",
            {
                ...g,
                ref: n,
            },
            b.createElement("div", {
                ...(0, c.v)(x, y, C, S, D, P),
                ref: h,
            }),
        );
    });
