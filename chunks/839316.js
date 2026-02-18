t.d(a, { g: () => d });
var r = t(457312),
    n = t(352404),
    i = t(64700),
    o = t(48284),
    u = t(803082),
    l = t(853590),
    s = t(849352);
function d(e, a) {
    let { startDate: t = a.visibleRange.start, endDate: d = a.visibleRange.end, firstDayOfWeek: c } = e,
        { direction: m } = (0, l.Y)(),
        h = (0, r.ZR)(t, d, a.timeZone, !0),
        { ariaLabel: D, ariaLabelledBy: y } = r.OX.get(a),
        p = (0, o.b)({ "aria-label": [D, h].filter(Boolean).join(", "), "aria-labelledby": y }),
        g = (0, s.i)({ weekday: e.weekdayStyle || "narrow", timeZone: a.timeZone }),
        { locale: f } = (0, l.Y)(),
        v = (0, i.useMemo)(() => {
            let e = (0, n.kq)((0, n.Ec)(a.timeZone), f, c);
            return [...Array(7).keys()].map((t) => {
                let r = e.add({ days: t }).toDate(a.timeZone);
                return g.format(r);
            });
        }, [f, a.timeZone, g, c]),
        b = (0, n.RZ)(t, f, c);
    return {
        gridProps: (0, u.v)(p, {
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
