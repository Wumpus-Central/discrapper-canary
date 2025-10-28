t.d(a, {
    Ah: () => b,
    MU: () => Z,
    TK: () => w,
    VX: () => k,
    f: () => E,
    mc: () => R,
    pg: () => $,
});
var u = t(188366),
    n = t(922387),
    r = t(386843),
    i = t(594350),
    o = t(594886),
    l = t(352135),
    s = t(43341),
    d = t(513351),
    c = t(846924),
    m = t(710943),
    D = t(437525),
    h = t(580470),
    f = t(86151),
    y = t(533426),
    p = t(506907),
    g = t(735437),
    v = t(647438);
let b = (0, v.createContext)(null),
    C = (0, v.createContext)(null),
    x = (0, v.createContext)(null),
    B = (0, v.createContext)(null),
    E = (0, v.forwardRef)(function (e, a) {
        [e, a] = (0, n.pE)(e, a, b);
        let { locale: t } = (0, o.j)(),
            c = (0, p.F)({
                ...e,
                locale: t,
                createCalendar: e.createCalendar || f.Y,
            }),
            {
                calendarProps: m,
                prevButtonProps: D,
                nextButtonProps: h,
                errorMessageProps: y,
                title: C,
            } = (0, l.G)(e, c),
            B = (0, n.aX)({
                ...e,
                values: {
                    state: c,
                    isDisabled: e.isDisabled || !1,
                    isInvalid: c.isValueInvalid,
                },
                defaultClassName: "react-aria-Calendar",
            }),
            E = (0, g.z)(e, { global: !0 });
        return v.createElement(
            "div",
            {
                ...(0, s.d)(E, B, m),
                ref: a,
                slot: e.slot || void 0,
                "data-disabled": e.isDisabled || void 0,
                "data-invalid": c.isValueInvalid || void 0,
            },
            v.createElement(
                n.zt,
                {
                    values: [
                        [
                            u.b,
                            {
                                slots: {
                                    previous: D,
                                    next: h,
                                },
                            },
                        ],
                        [
                            r.ni,
                            {
                                "aria-hidden": !0,
                                level: 2,
                                children: C,
                            },
                        ],
                        [x, c],
                        [b, e],
                        [i.j, { slots: { errorMessage: y } }],
                    ],
                },
                v.createElement(d.T, null, v.createElement("h2", null, m["aria-label"])),
                B.children,
                v.createElement(
                    d.T,
                    null,
                    v.createElement("button", {
                        "aria-label": h["aria-label"],
                        disabled: h.isDisabled,
                        onClick: () => c.focusNextPage(),
                        tabIndex: -1,
                    }),
                ),
            ),
        );
    }),
    F = (0, v.createContext)(null),
    w = (0, v.forwardRef)(function (e, a) {
        var t, u;
        let r = (0, v.useContext)(x),
            i = (0, v.useContext)(B),
            o = (0, n.jn)(b),
            l = (0, n.jn)(C),
            d = null != r ? r : i,
            m = d.visibleRange.start;
        e.offset && (m = m.add(e.offset));
        let D = null != (t = null == o ? void 0 : o.firstDayOfWeek) ? t : null == l ? void 0 : l.firstDayOfWeek,
            {
                gridProps: h,
                headerProps: f,
                weekDays: p,
                weeksInMonth: E,
            } = (0, c.Q)(
                {
                    startDate: m,
                    endDate: (0, y.Vf)(m),
                    weekdayStyle: e.weekdayStyle,
                    firstDayOfWeek: D,
                },
                d,
            ),
            w = (0, g.z)(e, { global: !0 });
        return v.createElement(
            F.Provider,
            {
                value: {
                    headerProps: f,
                    weekDays: p,
                    startDate: m,
                    weeksInMonth: E,
                },
            },
            v.createElement(
                "table",
                {
                    ...(0, s.d)(w, h),
                    ref: a,
                    style: e.style,
                    cellPadding: 0,
                    className: null != (u = e.className) ? u : "react-aria-CalendarGrid",
                },
                "function" != typeof e.children
                    ? e.children
                    : v.createElement(
                          v.Fragment,
                          null,
                          v.createElement($, null, (e) => v.createElement(R, null, e)),
                          v.createElement(Z, null, e.children),
                      ),
            ),
        );
    }),
    $ = (0, v.forwardRef)(function (e, a) {
        let { children: t, style: u, className: n } = e,
            { headerProps: r, weekDays: i } = (0, v.useContext)(F),
            o = (0, g.z)(e, { global: !0 });
        return v.createElement(
            "thead",
            {
                ...(0, s.d)(o, r),
                ref: a,
                style: u,
                className: n || "react-aria-CalendarGridHeader",
            },
            v.createElement(
                "tr",
                null,
                i.map((e, a) => v.cloneElement(t(e), { key: a })),
            ),
        );
    }),
    R = (0, v.forwardRef)(function (e, a) {
        let { children: t, style: u, className: n } = e,
            r = (0, g.z)(e, { global: !0 });
        return v.createElement(
            "th",
            {
                ...r,
                ref: a,
                style: u,
                className: n || "react-aria-CalendarHeaderCell",
            },
            t,
        );
    }),
    Z = (0, v.forwardRef)(function (e, a) {
        let { children: t, style: u, className: n } = e,
            r = (0, v.useContext)(x),
            i = (0, v.useContext)(B),
            o = null != r ? r : i,
            { startDate: l, weeksInMonth: s } = (0, v.useContext)(F),
            d = (0, g.z)(e, { global: !0 });
        return v.createElement(
            "tbody",
            {
                ...d,
                ref: a,
                style: u,
                className: n || "react-aria-CalendarGridBody",
            },
            [...Array(s).keys()].map((e) =>
                v.createElement(
                    "tr",
                    { key: e },
                    o
                        .getDatesInWeek(e, l)
                        .map((e, a) => (e ? v.cloneElement(t(e), { key: a }) : v.createElement("td", { key: a }))),
                ),
            ),
        );
    }),
    k = (0, v.forwardRef)(function ({ date: e, ...a }, t) {
        var u;
        let r = (0, v.useContext)(x),
            i = (0, v.useContext)(B),
            o = null != r ? r : i,
            { startDate: l } = null != (u = (0, v.useContext)(F)) ? u : { startDate: o.visibleRange.start },
            d = !(0, y.xj)(l, e),
            c = (0, y.zk)(e, o.timeZone),
            f = (0, v.useRef)(null),
            {
                cellProps: p,
                buttonProps: b,
                ...C
            } = (0, m.J)(
                {
                    date: e,
                    isOutsideMonth: d,
                },
                o,
                f,
            ),
            { hoverProps: E, isHovered: w } = (0, D.X)({
                ...a,
                isDisabled: C.isDisabled,
            }),
            { focusProps: $, isFocusVisible: R } = (0, h.F)();
        R && (R = C.isFocused);
        let Z = !1,
            k = !1;
        "highlightedRange" in o &&
            o.highlightedRange &&
            ((Z = (0, y.KC)(e, o.highlightedRange.start)), (k = (0, y.KC)(e, o.highlightedRange.end)));
        let A = (0, n.aX)({
                ...a,
                defaultChildren: C.formattedDate,
                defaultClassName: "react-aria-CalendarCell",
                values: {
                    date: e,
                    isHovered: w,
                    isOutsideMonth: d,
                    isFocusVisible: R,
                    isSelectionStart: Z,
                    isSelectionEnd: k,
                    isToday: c,
                    ...C,
                },
            }),
            P = {
                "data-focused": C.isFocused || void 0,
                "data-hovered": w || void 0,
                "data-pressed": C.isPressed || void 0,
                "data-unavailable": C.isUnavailable || void 0,
                "data-disabled": C.isDisabled || void 0,
                "data-focus-visible": R || void 0,
                "data-outside-visible-range": C.isOutsideVisibleRange || void 0,
                "data-outside-month": d || void 0,
                "data-selected": C.isSelected || void 0,
                "data-selection-start": Z || void 0,
                "data-selection-end": k || void 0,
                "data-invalid": C.isInvalid || void 0,
                "data-today": c || void 0,
            },
            S = (0, g.z)(a, { global: !0 });
        return v.createElement(
            "td",
            {
                ...p,
                ref: t,
            },
            v.createElement("div", {
                ...(0, s.d)(S, b, $, E, P, A),
                ref: f,
            }),
        );
    });
