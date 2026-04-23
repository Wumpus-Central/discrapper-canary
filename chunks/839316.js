t.d(a, { g: () => d });
var r = t(457312),
    n = t(352404),
    i = t(64700),
    l = t(48284),
    o = t(803082),
    u = t(853590),
    s = t(849352);
function d(e, a) {
    let { startDate: t = a.visibleRange.start, endDate: d = a.visibleRange.end, firstDayOfWeek: c } = e,
        { direction: m } = (0, u.Y)(),
        h = (0, r.ZR)(t, d, a.timeZone, !0),
        { ariaLabel: y, ariaLabelledBy: D } = r.OX.get(a),
        p = (0, l.b)({ "aria-label": [y, h].filter(Boolean).join(", "), "aria-labelledby": D }),
        g = (0, s.i)({ weekday: e.weekdayStyle || "narrow", timeZone: a.timeZone }),
        { locale: v } = (0, u.Y)(),
        f = (0, i.useMemo)(() => {
            let e = (0, n.kq)((0, n.Ec)(a.timeZone), v, c);
            return [...Array(7).keys()].map((t) => {
                let r = e.add({ days: t }).toDate(a.timeZone);
                return g.format(r);
            });
        }, [v, a.timeZone, g, c]),
        b = (0, n.RZ)(t, v, c);
    return {
        gridProps: (0, o.v)(p, {
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
        weekDays: f,
        weeksInMonth: b,
    };
}
