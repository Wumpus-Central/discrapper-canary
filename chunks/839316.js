n.d(t, {
    g: () => u,
});
var r = n(457312),
    i = n(352404),
    a = n(64700),
    s = n(48284),
    o = n(803082),
    l = n(853590),
    c = n(849352);

function u(e, t) {
    let { startDate: n = t.visibleRange.start, endDate: u = t.visibleRange.end, firstDayOfWeek: d } = e,
        { direction: f } = (0, l.Y)(),
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
        _ = (0, r.ZR)(n, u, t.timeZone, !0),
        { ariaLabel: h, ariaLabelledBy: m } = r.OX.get(t),
        g = (0, s.b)({
            "aria-label": [h, _].filter(Boolean).join(", "),
            "aria-labelledby": m,
        }),
        E = (0, c.i)({
            weekday: e.weekdayStyle || "narrow",
            timeZone: t.timeZone,
        }),
        { locale: b } = (0, l.Y)(),
        y = (0, a.useMemo)(() => {
            let e = (0, i.kq)((0, i.Ec)(t.timeZone), b, d);
            return [...Array(7).keys()].map((n) => {
                let r = e
                    .add({
                        days: n,
                    })
                    .toDate(t.timeZone);
                return E.format(r);
            });
        }, [b, t.timeZone, E, d]),
        O = (0, i.RZ)(n, b, d);
    return {
        gridProps: (0, o.v)(g, {
            role: "grid",
            "aria-readonly": t.isReadOnly || void 0,
            "aria-disabled": t.isDisabled || void 0,
            "aria-multiselectable": "highlightedRange" in t || void 0,
            onKeyDown: p,
            onFocus: () => t.setFocused(!0),
            onBlur: () => t.setFocused(!1),
        }),
        headerProps: {
            "aria-hidden": !0,
        },
        weekDays: y,
        weeksInMonth: O,
    };
}
