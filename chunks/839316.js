"use strict";
n.d(t, { g: () => c });
var r = n(457312),
    i = n(352404),
    a = n(64700),
    s = n(48284),
    o = n(803082),
    l = n(853590),
    u = n(849352);
function c(e, t) {
    let { startDate: n = t.visibleRange.start, endDate: c = t.visibleRange.end, firstDayOfWeek: d } = e,
        { direction: _ } = (0, l.Y)(),
        f = (e) => {
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
                    e.preventDefault(), e.stopPropagation(), "rtl" === _ ? t.focusNextDay() : t.focusPreviousDay();
                    break;
                case "ArrowUp":
                    e.preventDefault(), e.stopPropagation(), t.focusPreviousRow();
                    break;
                case "ArrowRight":
                    e.preventDefault(), e.stopPropagation(), "rtl" === _ ? t.focusPreviousDay() : t.focusNextDay();
                    break;
                case "ArrowDown":
                    e.preventDefault(), e.stopPropagation(), t.focusNextRow();
                    break;
                case "Escape":
                    "setAnchorDate" in t && (e.preventDefault(), t.setAnchorDate(null));
            }
        },
        p = (0, r.ZR)(n, c, t.timeZone, !0),
        { ariaLabel: h, ariaLabelledBy: m } = r.OX.get(t),
        g = (0, s.b)({ "aria-label": [h, p].filter(Boolean).join(", "), "aria-labelledby": m }),
        E = (0, u.i)({ weekday: e.weekdayStyle || "narrow", timeZone: t.timeZone }),
        { locale: A } = (0, l.Y)(),
        I = (0, a.useMemo)(() => {
            let e = (0, i.kq)((0, i.Ec)(t.timeZone), A, d);
            return [...Array(7).keys()].map((n) => {
                let r = e.add({ days: n }).toDate(t.timeZone);
                return E.format(r);
            });
        }, [A, t.timeZone, E, d]),
        T = (0, i.RZ)(n, A, d);
    return {
        gridProps: (0, o.v)(g, {
            role: "grid",
            "aria-readonly": t.isReadOnly || void 0,
            "aria-disabled": t.isDisabled || void 0,
            "aria-multiselectable": "highlightedRange" in t || void 0,
            onKeyDown: f,
            onFocus: () => t.setFocused(!0),
            onBlur: () => t.setFocused(!1),
        }),
        headerProps: { "aria-hidden": !0 },
        weekDays: I,
        weeksInMonth: T,
    };
}
