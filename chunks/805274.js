n.d(t, { Q: () => u });
var r = n(948932),
    i = n(533426),
    a = n(473749),
    o = n(951726),
    s = n(158821),
    l = n(227399),
    c = n(750996);
function u(e, t) {
    let { startDate: n = t.visibleRange.start, endDate: u = t.visibleRange.end, firstDayOfWeek: d } = e,
        { direction: f } = (0, l.j)(),
        p = (e) => {
            switch (e.key) {
                case "Enter":
                case " ":
                    e.preventDefault(), t.selectFocusedDate();
                    break;
                case "PageUp":
                    e.preventDefault(), e.stopPropagation(), t.focusPreviousSection(e.shiftKey);
                    break;
                case "PageDown":
                    e.preventDefault(), e.stopPropagation(), t.focusNextSection(e.shiftKey);
                    break;
                case "End":
                    e.preventDefault(), e.stopPropagation(), t.focusSectionEnd();
                    break;
                case "Home":
                    e.preventDefault(), e.stopPropagation(), t.focusSectionStart();
                    break;
                case "ArrowLeft":
                    e.preventDefault(), e.stopPropagation(), "rtl" === f ? t.focusNextDay() : t.focusPreviousDay();
                    break;
                case "ArrowUp":
                    e.preventDefault(), e.stopPropagation(), t.focusPreviousRow();
                    break;
                case "ArrowRight":
                    e.preventDefault(), e.stopPropagation(), "rtl" === f ? t.focusPreviousDay() : t.focusNextDay();
                    break;
                case "ArrowDown":
                    e.preventDefault(), e.stopPropagation(), t.focusNextRow();
                    break;
                case "Escape":
                    "setAnchorDate" in t && (e.preventDefault(), t.setAnchorDate(null));
            }
        },
        _ = (0, r.FK)(n, u, t.timeZone, !0),
        { ariaLabel: m, ariaLabelledBy: h } = r.Lh.get(t),
        g = (0, o.b)({
            "aria-label": [m, _].filter(Boolean).join(", "),
            "aria-labelledby": h,
        }),
        E = (0, c.a)({
            weekday: e.weekdayStyle || "narrow",
            timeZone: t.timeZone,
        }),
        { locale: b } = (0, l.j)(),
        y = (0, a.useMemo)(() => {
            let e = (0, i.zJ)((0, i.Lg)(t.timeZone), b, d);
            return [...Array(7).keys()].map((n) => {
                let r = e.add({ days: n }).toDate(t.timeZone);
                return E.format(r);
            });
        }, [b, t.timeZone, E, d]),
        O = (0, i.Rn)(n, b, d);
    return {
        gridProps: (0, s.d)(g, {
            role: "grid",
            "aria-readonly": t.isReadOnly || void 0,
            "aria-disabled": t.isDisabled || void 0,
            "aria-multiselectable": "highlightedRange" in t || void 0,
            onKeyDown: p,
            onFocus: () => t.setFocused(!0),
            onBlur: () => t.setFocused(!1),
        }),
        headerProps: { "aria-hidden": !0 },
        weekDays: y,
        weeksInMonth: O,
    };
}
