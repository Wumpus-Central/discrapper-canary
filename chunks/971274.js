n.d(t, { F: () => u });
var r = n(911668),
    i = n(45728),
    a = n(640475),
    o = n(533426),
    s = n(274738),
    l = n(386239),
    c = n(473749);
function u(e) {
    var t, n, u;
    let f = (0, c.useMemo)(() => new (0, i.C)(e.locale), [e.locale]),
        _ = (0, c.useMemo)(() => f.resolvedOptions(), [f]),
        {
            locale: p,
            createCalendar: h,
            visibleDuration: m = { months: 1 },
            minValue: g,
            maxValue: E,
            selectionAlignment: b,
            isDateUnavailable: y,
            pageBehavior: O = "visible",
            firstDayOfWeek: v,
        } = e,
        I = (0, c.useMemo)(() => h(_.calendar), [h, _.calendar]),
        [T, S] = (0, l.z)(e.value, null != (t = e.defaultValue) ? t : null, e.onChange),
        A = (0, c.useMemo)(() => (T ? (0, a.Mw)((0, a.WG)(T), I) : null), [T, I]),
        C = (0, c.useMemo)(() => (T && "timeZone" in T ? T.timeZone : _.timeZone), [T, _.timeZone]),
        N = (0, c.useMemo)(
            () => (e.focusedValue ? (0, r.Me)((0, a.Mw)((0, a.WG)(e.focusedValue), I), g, E) : void 0),
            [e.focusedValue, I, g, E],
        ),
        R = (0, c.useMemo)(
            () =>
                (0, r.Me)(
                    e.defaultFocusedValue
                        ? (0, a.Mw)((0, a.WG)(e.defaultFocusedValue), I)
                        : A || (0, a.Mw)((0, o.Lg)(C), I),
                    g,
                    E,
                ),
            [e.defaultFocusedValue, A, C, I, g, E],
        ),
        [P, D] = (0, l.z)(N, R, e.onFocusChange),
        [w, x] = (0, c.useState)(() => {
            switch (b) {
                case "start":
                    return (0, r.Yn)(P, m, p, g, E);
                case "end":
                    return (0, r.N2)(P, m, p, g, E);
                default:
                    return (0, r.A8)(P, m, p, g, E);
            }
        }),
        [L, M] = (0, c.useState)(e.autoFocus || !1),
        k = (0, c.useMemo)(() => {
            let e = { ...m };
            return e.days ? e.days-- : (e.days = -1), w.add(e);
        }, [w, m]),
        [j, U] = (0, c.useState)(I);
    if (!(0, o.jv)(I, j)) {
        let e = (0, a.Mw)(P, I);
        x((0, r.A8)(e, m, p, g, E)), D(e), U(I);
    }
    function G(e) {
        D((e = (0, r.Me)(e, g, E)));
    }
    function B(t) {
        if (!e.isDisabled && !e.isReadOnly) {
            let e = t;
            if (null === e) return void S(null);
            (e = (0, r.Me)(e, g, E)),
                (e = (0, r.UC)(e, w, y)) &&
                    ((e = (0, a.Mw)(e, (null == T ? void 0 : T.calendar) || new (0, s.IQ)())),
                    T && "hour" in T ? S(T.set(e)) : S(e));
        }
    }
    (0, r.wp)(P, g, E)
        ? D((0, r.Me)(P, g, E))
        : 0 > P.compare(w)
          ? x((0, r.N2)(P, m, p, g, E))
          : P.compare(k) > 0 && x((0, r.Yn)(P, m, p, g, E));
    let Z = (0, c.useMemo)(() => !!A && (!!(y && y(A)) || (0, r.wp)(A, g, E)), [A, y, g, E]),
        F = e.isInvalid || "invalid" === e.validationState || Z,
        V = F ? "invalid" : null,
        H = (0, c.useMemo)(() => ("visible" === O ? m : d(m)), [O, m]);
    return {
        isDisabled: null != (n = e.isDisabled) && n,
        isReadOnly: null != (u = e.isReadOnly) && u,
        value: A,
        setValue: B,
        visibleRange: {
            start: w,
            end: k,
        },
        minValue: g,
        maxValue: E,
        focusedDate: P,
        timeZone: C,
        validationState: V,
        isValueInvalid: F,
        setFocusedDate(e) {
            G(e), M(!0);
        },
        focusNextDay() {
            G(P.add({ days: 1 }));
        },
        focusPreviousDay() {
            G(P.subtract({ days: 1 }));
        },
        focusNextRow() {
            m.days ? this.focusNextPage() : (m.weeks || m.months || m.years) && G(P.add({ weeks: 1 }));
        },
        focusPreviousRow() {
            m.days ? this.focusPreviousPage() : (m.weeks || m.months || m.years) && G(P.subtract({ weeks: 1 }));
        },
        focusNextPage() {
            let e = w.add(H);
            D((0, r.Me)(P.add(H), g, E)), x((0, r.Yn)((0, r.PJ)(P, e, H, p, g, E), H, p));
        },
        focusPreviousPage() {
            let e = w.subtract(H);
            D((0, r.Me)(P.subtract(H), g, E)), x((0, r.Yn)((0, r.PJ)(P, e, H, p, g, E), H, p));
        },
        focusSectionStart() {
            m.days ? G(w) : m.weeks ? G((0, o.zJ)(P, p)) : (m.months || m.years) && G((0, o.Nm)(P));
        },
        focusSectionEnd() {
            m.days ? G(k) : m.weeks ? G((0, o.vV)(P, p)) : (m.months || m.years) && G((0, o.Vf)(P));
        },
        focusNextSection(e) {
            if (!e && !m.days) return void G(P.add(d(m)));
            m.days
                ? this.focusNextPage()
                : m.weeks
                  ? G(P.add({ months: 1 }))
                  : (m.months || m.years) && G(P.add({ years: 1 }));
        },
        focusPreviousSection(e) {
            if (!e && !m.days) return void G(P.subtract(d(m)));
            m.days
                ? this.focusPreviousPage()
                : m.weeks
                  ? G(P.subtract({ months: 1 }))
                  : (m.months || m.years) && G(P.subtract({ years: 1 }));
        },
        selectFocusedDate() {
            (y && y(P)) || B(P);
        },
        selectDate(e) {
            B(e);
        },
        isFocused: L,
        setFocused: M,
        isInvalid: (e) => (0, r.wp)(e, g, E),
        isSelected(e) {
            return null != A && (0, o.KC)(e, A) && !this.isCellDisabled(e) && !this.isCellUnavailable(e);
        },
        isCellFocused: (e) => L && P && (0, o.KC)(e, P),
        isCellDisabled(t) {
            return e.isDisabled || 0 > t.compare(w) || t.compare(k) > 0 || this.isInvalid(t);
        },
        isCellUnavailable: (t) => !!e.isDateUnavailable && e.isDateUnavailable(t),
        isPreviousVisibleRangeInvalid() {
            let e = w.subtract({ days: 1 });
            return (0, o.KC)(e, w) || this.isInvalid(e);
        },
        isNextVisibleRangeInvalid() {
            let e = k.add({ days: 1 });
            return (0, o.KC)(e, k) || this.isInvalid(e);
        },
        getDatesInWeek(e, t = w) {
            let n = t.add({ weeks: e }),
                r = [];
            n = (0, o.zJ)(n, p, v);
            let i = (0, o.ji)(n, p, v);
            for (let e = 0; e < i; e++) r.push(null);
            for (; r.length < 7; ) {
                r.push(n);
                let e = n.add({ days: 1 });
                if ((0, o.KC)(n, e)) break;
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
