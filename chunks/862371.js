n.d(t, {
    Ah: () => y,
    MU: () => w,
    TK: () => A,
    VX: () => x,
    f: () => T,
    mc: () => P,
    pg: () => N,
});
var r = n(188366),
    i = n(922387),
    a = n(386843),
    o = n(594350),
    s = n(594886),
    l = n(352135),
    c = n(43341),
    u = n(513351),
    d = n(846924),
    f = n(710943),
    _ = n(437525),
    p = n(580470),
    h = n(86151),
    m = n(533426),
    g = n(506907),
    E = n(735437),
    b = n(647438);
let y = (0, b.createContext)(null),
    O = (0, b.createContext)(null),
    v = (0, b.createContext)(null),
    I = (0, b.createContext)(null),
    T = (0, b.forwardRef)(function (e, t) {
        [e, t] = (0, i.pE)(e, t, y);
        let { locale: n } = (0, s.j)(),
            d = (0, g.F)({
                ...e,
                locale: n,
                createCalendar: e.createCalendar || h.Y,
            }),
            {
                calendarProps: f,
                prevButtonProps: _,
                nextButtonProps: p,
                errorMessageProps: m,
                title: O,
            } = (0, l.G)(e, d),
            I = (0, i.aX)({
                ...e,
                values: {
                    state: d,
                    isDisabled: e.isDisabled || !1,
                    isInvalid: d.isValueInvalid,
                },
                defaultClassName: "react-aria-Calendar",
            }),
            T = (0, E.z)(e, { global: !0 });
        return b.createElement(
            "div",
            {
                ...(0, c.d)(T, I, f),
                ref: t,
                slot: e.slot || void 0,
                "data-disabled": e.isDisabled || void 0,
                "data-invalid": d.isValueInvalid || void 0,
            },
            b.createElement(
                i.zt,
                {
                    values: [
                        [
                            r.b,
                            {
                                slots: {
                                    previous: _,
                                    next: p,
                                },
                            },
                        ],
                        [
                            a.ni,
                            {
                                "aria-hidden": !0,
                                level: 2,
                                children: O,
                            },
                        ],
                        [v, d],
                        [y, e],
                        [o.j, { slots: { errorMessage: m } }],
                    ],
                },
                b.createElement(u.T, null, b.createElement("h2", null, f["aria-label"])),
                I.children,
                b.createElement(
                    u.T,
                    null,
                    b.createElement("button", {
                        "aria-label": p["aria-label"],
                        disabled: p.isDisabled,
                        onClick: () => d.focusNextPage(),
                        tabIndex: -1,
                    }),
                ),
            ),
        );
    }),
    S = (0, b.createContext)(null),
    A = (0, b.forwardRef)(function (e, t) {
        var n, r;
        let a = (0, b.useContext)(v),
            o = (0, b.useContext)(I),
            s = (0, i.jn)(y),
            l = (0, i.jn)(O),
            u = null != a ? a : o,
            f = u.visibleRange.start;
        e.offset && (f = f.add(e.offset));
        let _ = null != (n = null == s ? void 0 : s.firstDayOfWeek) ? n : null == l ? void 0 : l.firstDayOfWeek,
            {
                gridProps: p,
                headerProps: h,
                weekDays: g,
                weeksInMonth: T,
            } = (0, d.Q)(
                {
                    startDate: f,
                    endDate: (0, m.Vf)(f),
                    weekdayStyle: e.weekdayStyle,
                    firstDayOfWeek: _,
                },
                u,
            ),
            A = (0, E.z)(e, { global: !0 });
        return b.createElement(
            S.Provider,
            {
                value: {
                    headerProps: h,
                    weekDays: g,
                    startDate: f,
                    weeksInMonth: T,
                },
            },
            b.createElement(
                "table",
                {
                    ...(0, c.d)(A, p),
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
                          b.createElement(N, null, (e) => b.createElement(P, null, e)),
                          b.createElement(w, null, e.children),
                      ),
            ),
        );
    });
function C(e, t) {
    let { children: n, style: r, className: i } = e,
        { headerProps: a, weekDays: o } = (0, b.useContext)(S),
        s = (0, E.z)(e, { global: !0 });
    return b.createElement(
        "thead",
        {
            ...(0, c.d)(s, a),
            ref: t,
            style: r,
            className: i || "react-aria-CalendarGridHeader",
        },
        b.createElement(
            "tr",
            null,
            o.map((e, t) => b.cloneElement(n(e), { key: t })),
        ),
    );
}
let N = (0, b.forwardRef)(C);
function R(e, t) {
    let { children: n, style: r, className: i } = e,
        a = (0, E.z)(e, { global: !0 });
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
let P = (0, b.forwardRef)(R);
function D(e, t) {
    let { children: n, style: r, className: i } = e,
        a = (0, b.useContext)(v),
        o = (0, b.useContext)(I),
        s = null != a ? a : o,
        { startDate: l, weeksInMonth: c } = (0, b.useContext)(S),
        u = (0, E.z)(e, { global: !0 });
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
                { key: e },
                s
                    .getDatesInWeek(e, l)
                    .map((e, t) => (e ? b.cloneElement(n(e), { key: t }) : b.createElement("td", { key: t }))),
            ),
        ),
    );
}
let w = (0, b.forwardRef)(D),
    x = (0, b.forwardRef)(function ({ date: e, ...t }, n) {
        var r;
        let a = (0, b.useContext)(v),
            o = (0, b.useContext)(I),
            s = null != a ? a : o,
            { startDate: l } = null != (r = (0, b.useContext)(S)) ? r : { startDate: s.visibleRange.start },
            u = !(0, m.xj)(l, e),
            d = (0, m.zk)(e, s.timeZone),
            h = (0, b.useRef)(null),
            {
                cellProps: g,
                buttonProps: y,
                ...O
            } = (0, f.J)(
                {
                    date: e,
                    isOutsideMonth: u,
                },
                s,
                h,
            ),
            { hoverProps: T, isHovered: A } = (0, _.X)({
                ...t,
                isDisabled: O.isDisabled,
            }),
            { focusProps: C, isFocusVisible: N } = (0, p.F)();
        N && (N = O.isFocused);
        let R = !1,
            P = !1;
        "highlightedRange" in s &&
            s.highlightedRange &&
            ((R = (0, m.KC)(e, s.highlightedRange.start)), (P = (0, m.KC)(e, s.highlightedRange.end)));
        let D = (0, i.aX)({
                ...t,
                defaultChildren: O.formattedDate,
                defaultClassName: "react-aria-CalendarCell",
                values: {
                    date: e,
                    isHovered: A,
                    isOutsideMonth: u,
                    isFocusVisible: N,
                    isSelectionStart: R,
                    isSelectionEnd: P,
                    isToday: d,
                    ...O,
                },
            }),
            w = {
                "data-focused": O.isFocused || void 0,
                "data-hovered": A || void 0,
                "data-pressed": O.isPressed || void 0,
                "data-unavailable": O.isUnavailable || void 0,
                "data-disabled": O.isDisabled || void 0,
                "data-focus-visible": N || void 0,
                "data-outside-visible-range": O.isOutsideVisibleRange || void 0,
                "data-outside-month": u || void 0,
                "data-selected": O.isSelected || void 0,
                "data-selection-start": R || void 0,
                "data-selection-end": P || void 0,
                "data-invalid": O.isInvalid || void 0,
                "data-today": d || void 0,
            },
            x = (0, E.z)(t, { global: !0 });
        return b.createElement(
            "td",
            {
                ...g,
                ref: n,
            },
            b.createElement("div", {
                ...(0, c.d)(x, y, C, T, w, D),
                ref: h,
            }),
        );
    });
