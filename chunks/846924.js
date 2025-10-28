t.d(a, { Q: () => d });
var u = t(49603),
    n = t(533426),
    r = t(647438),
    i = t(864019),
    o = t(43341),
    l = t(594886),
    s = t(298806);
function d(e, a) {
    let { startDate: t = a.visibleRange.start, endDate: d = a.visibleRange.end, firstDayOfWeek: c } = e,
        { direction: m } = (0, l.j)(),
        D = (0, u.FK)(t, d, a.timeZone, !0),
        { ariaLabel: h, ariaLabelledBy: f } = u.Lh.get(a),
        y = (0, i.b)({
            "aria-label": [h, D].filter(Boolean).join(", "),
            "aria-labelledby": f,
        }),
        p = (0, s.a)({
            weekday: e.weekdayStyle || "narrow",
            timeZone: a.timeZone,
        }),
        { locale: g } = (0, l.j)(),
        v = (0, r.useMemo)(() => {
            let e = (0, n.zJ)((0, n.Lg)(a.timeZone), g, c);
            return [...Array(7).keys()].map((t) => {
                let u = e.add({ days: t }).toDate(a.timeZone);
                return p.format(u);
            });
        }, [g, a.timeZone, p, c]),
        b = (0, n.Rn)(t, g, c);
    return {
        gridProps: (0, o.d)(y, {
            role: "grid",
            "aria-readonly": a.isReadOnly || void 0,
            "aria-disabled": a.isDisabled || void 0,
            "aria-multiselectable": "highlightedRange" in a || void 0,
            onKeyDown: (e) => {
                switch (e.key) {
                    case "Enter":
                    case " ":
                        e.preventDefault(), a.selectFocusedDate();
                        break;
                    case "PageUp":
                        e.preventDefault(), e.stopPropagation(), a.focusPreviousSection(e.shiftKey);
                        break;
                    case "PageDown":
                        e.preventDefault(), e.stopPropagation(), a.focusNextSection(e.shiftKey);
                        break;
                    case "End":
                        e.preventDefault(), e.stopPropagation(), a.focusSectionEnd();
                        break;
                    case "Home":
                        e.preventDefault(), e.stopPropagation(), a.focusSectionStart();
                        break;
                    case "ArrowLeft":
                        e.preventDefault(), e.stopPropagation(), "rtl" === m ? a.focusNextDay() : a.focusPreviousDay();
                        break;
                    case "ArrowUp":
                        e.preventDefault(), e.stopPropagation(), a.focusPreviousRow();
                        break;
                    case "ArrowRight":
                        e.preventDefault(), e.stopPropagation(), "rtl" === m ? a.focusPreviousDay() : a.focusNextDay();
                        break;
                    case "ArrowDown":
                        e.preventDefault(), e.stopPropagation(), a.focusNextRow();
                        break;
                    case "Escape":
                        "setAnchorDate" in a && (e.preventDefault(), a.setAnchorDate(null));
                }
            },
            onFocus: () => a.setFocused(!0),
            onBlur: () => a.setFocused(!1),
        }),
        headerProps: { "aria-hidden": !0 },
        weekDays: v,
        weeksInMonth: b,
    };
}
