"use strict";
n.d(t, { T: () => c });
var r = n(955048),
    i = n(515702),
    a = n(376472),
    s = n(352404),
    o = n(142922),
    l = n(492313),
    u = n(64700);
function c(e) {
    var t, n, c;
    let _ = (0, u.useMemo)(() => new (0, i.p)(e.locale), [e.locale]),
        f = (0, u.useMemo)(() => _.resolvedOptions(), [_]),
        {
            locale: p,
            createCalendar: h,
            visibleDuration: m = { months: 1 },
            minValue: g,
            maxValue: E,
            selectionAlignment: A,
            isDateUnavailable: I,
            pageBehavior: T = "visible",
            firstDayOfWeek: y,
        } = e,
        S = (0, u.useMemo)(() => h(f.calendar), [h, f.calendar]),
        [v, C] = (0, l.P)(e.value, null != (t = e.defaultValue) ? t : null, e.onChange),
        b = (0, u.useMemo)(() => (v ? (0, a.yP)((0, a.gw)(v), S) : null), [v, S]),
        N = (0, u.useMemo)(() => (v && "timeZone" in v ? v.timeZone : f.timeZone), [v, f.timeZone]),
        R = (0, u.useMemo)(
            () => (e.focusedValue ? (0, r.X8)((0, a.yP)((0, a.gw)(e.focusedValue), S), g, E) : void 0),
            [e.focusedValue, S, g, E],
        ),
        O = (0, u.useMemo)(
            () =>
                (0, r.X8)(
                    e.defaultFocusedValue
                        ? (0, a.yP)((0, a.gw)(e.defaultFocusedValue), S)
                        : b || (0, a.yP)((0, s.Ec)(N), S),
                    g,
                    E,
                ),
            [e.defaultFocusedValue, b, N, S, g, E],
        ),
        [D, L] = (0, l.P)(R, O, e.onFocusChange),
        [w, x] = (0, u.useState)(() => {
            switch (A) {
                case "start":
                    return (0, r.CT)(D, m, p, g, E);
                case "end":
                    return (0, r.ZT)(D, m, p, g, E);
                default:
                    return (0, r.Hu)(D, m, p, g, E);
            }
        }),
        [P, M] = (0, u.useState)(e.autoFocus || !1),
        k = (0, u.useMemo)(() => {
            let e = { ...m };
            return e.days ? e.days-- : (e.days = -1), w.add(e);
        }, [w, m]),
        [U, G] = (0, u.useState)(S);
    if (!(0, s.Jg)(S, U)) {
        let e = (0, a.yP)(D, S);
        x((0, r.Hu)(e, m, p, g, E)), L(e), G(S);
    }
    function V(e) {
        L((e = (0, r.X8)(e, g, E)));
    }
    function F(t) {
        if (!e.isDisabled && !e.isReadOnly) {
            let e = t;
            if (null === e) return void C(null);
            (e = (0, r.X8)(e, g, E)),
                (e = (0, r.Nf)(e, w, I)) &&
                    ((e = (0, a.yP)(e, (null == v ? void 0 : v.calendar) || new (0, o.FG)())),
                    v && "hour" in v ? C(v.set(e)) : C(e));
        }
    }
    (0, r.If)(D, g, E)
        ? L((0, r.X8)(D, g, E))
        : 0 > D.compare(w)
          ? x((0, r.ZT)(D, m, p, g, E))
          : D.compare(k) > 0 && x((0, r.CT)(D, m, p, g, E));
    let B = (0, u.useMemo)(() => !!b && (!!(I && I(b)) || (0, r.If)(b, g, E)), [b, I, g, E]),
        j = e.isInvalid || "invalid" === e.validationState || B,
        H = j ? "invalid" : null,
        Y = (0, u.useMemo)(() => ("visible" === T ? m : d(m)), [T, m]);
    return {
        isDisabled: null != (n = e.isDisabled) && n,
        isReadOnly: null != (c = e.isReadOnly) && c,
        value: b,
        setValue: F,
        visibleRange: { start: w, end: k },
        minValue: g,
        maxValue: E,
        focusedDate: D,
        timeZone: N,
        validationState: H,
        isValueInvalid: j,
        setFocusedDate(e) {
            V(e), M(!0);
        },
        focusNextDay() {
            V(D.add({ days: 1 }));
        },
        focusPreviousDay() {
            V(D.subtract({ days: 1 }));
        },
        focusNextRow() {
            m.days ? this.focusNextPage() : (m.weeks || m.months || m.years) && V(D.add({ weeks: 1 }));
        },
        focusPreviousRow() {
            m.days ? this.focusPreviousPage() : (m.weeks || m.months || m.years) && V(D.subtract({ weeks: 1 }));
        },
        focusNextPage() {
            let e = w.add(Y);
            L((0, r.X8)(D.add(Y), g, E)), x((0, r.CT)((0, r.Iw)(D, e, Y, p, g, E), Y, p));
        },
        focusPreviousPage() {
            let e = w.subtract(Y);
            L((0, r.X8)(D.subtract(Y), g, E)), x((0, r.CT)((0, r.Iw)(D, e, Y, p, g, E), Y, p));
        },
        focusSectionStart() {
            m.days ? V(w) : m.weeks ? V((0, s.kq)(D, p)) : (m.months || m.years) && V((0, s.wH)(D));
        },
        focusSectionEnd() {
            m.days ? V(k) : m.weeks ? V((0, s.$I)(D, p)) : (m.months || m.years) && V((0, s.p9)(D));
        },
        focusNextSection(e) {
            e || m.days
                ? m.days
                    ? this.focusNextPage()
                    : m.weeks
                      ? V(D.add({ months: 1 }))
                      : (m.months || m.years) && V(D.add({ years: 1 }))
                : V(D.add(d(m)));
        },
        focusPreviousSection(e) {
            e || m.days
                ? m.days
                    ? this.focusPreviousPage()
                    : m.weeks
                      ? V(D.subtract({ months: 1 }))
                      : (m.months || m.years) && V(D.subtract({ years: 1 }))
                : V(D.subtract(d(m)));
        },
        selectFocusedDate() {
            (I && I(D)) || F(D);
        },
        selectDate(e) {
            F(e);
        },
        isFocused: P,
        setFocused: M,
        isInvalid: (e) => (0, r.If)(e, g, E),
        isSelected(e) {
            return null != b && (0, s.ro)(e, b) && !this.isCellDisabled(e) && !this.isCellUnavailable(e);
        },
        isCellFocused: (e) => P && D && (0, s.ro)(e, D),
        isCellDisabled(t) {
            return e.isDisabled || 0 > t.compare(w) || t.compare(k) > 0 || this.isInvalid(t);
        },
        isCellUnavailable: (t) => !!e.isDateUnavailable && e.isDateUnavailable(t),
        isPreviousVisibleRangeInvalid() {
            let e = w.subtract({ days: 1 });
            return (0, s.ro)(e, w) || this.isInvalid(e);
        },
        isNextVisibleRangeInvalid() {
            let e = k.add({ days: 1 });
            return (0, s.ro)(e, k) || this.isInvalid(e);
        },
        getDatesInWeek(e, t = w) {
            let n = t.add({ weeks: e }),
                r = [];
            n = (0, s.kq)(n, p, y);
            let i = (0, s.SJ)(n, p, y);
            for (let e = 0; e < i; e++) r.push(null);
            for (; r.length < 7; ) {
                r.push(n);
                let e = n.add({ days: 1 });
                if ((0, s.ro)(n, e)) break;
                n = e;
            }
            for (; r.length < 7; ) r.push(null);
            return r;
        },
    };
}
function d(e) {
    let t = { ...e };
    for (let n in e) t[n] = 1;
    return t;
}
