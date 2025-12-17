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
        p = (0, c.useMemo)(() => f.resolvedOptions(), [f]),
        {
            locale: _,
            createCalendar: m,
            visibleDuration: h = { months: 1 },
            minValue: g,
            maxValue: E,
            selectionAlignment: b,
            isDateUnavailable: y,
            pageBehavior: O = "visible",
            firstDayOfWeek: v,
        } = e,
        S = (0, c.useMemo)(() => m(p.calendar), [m, p.calendar]),
        [I, T] = (0, l.z)(e.value, null != (t = e.defaultValue) ? t : null, e.onChange),
        C = (0, c.useMemo)(() => (I ? (0, a.Mw)((0, a.WG)(I), S) : null), [I, S]),
        A = (0, c.useMemo)(() => (I && "timeZone" in I ? I.timeZone : p.timeZone), [I, p.timeZone]),
        N = (0, c.useMemo)(
            () => (e.focusedValue ? (0, r.Me)((0, a.Mw)((0, a.WG)(e.focusedValue), S), g, E) : void 0),
            [e.focusedValue, S, g, E],
        ),
        P = (0, c.useMemo)(
            () =>
                (0, r.Me)(
                    e.defaultFocusedValue
                        ? (0, a.Mw)((0, a.WG)(e.defaultFocusedValue), S)
                        : C || (0, a.Mw)((0, o.Lg)(A), S),
                    g,
                    E,
                ),
            [e.defaultFocusedValue, C, A, S, g, E],
        ),
        [R, w] = (0, l.z)(N, P, e.onFocusChange),
        [D, x] = (0, c.useState)(() => {
            switch (b) {
                case "start":
                    return (0, r.Yn)(R, h, _, g, E);
                case "end":
                    return (0, r.N2)(R, h, _, g, E);
                default:
                    return (0, r.A8)(R, h, _, g, E);
            }
        }),
        [L, j] = (0, c.useState)(e.autoFocus || !1),
        M = (0, c.useMemo)(() => {
            let e = { ...h };
            return e.days ? e.days-- : (e.days = -1), D.add(e);
        }, [D, h]),
        [k, U] = (0, c.useState)(S);
    if (!(0, o.jv)(S, k)) {
        let e = (0, a.Mw)(R, S);
        x((0, r.A8)(e, h, _, g, E)), w(e), U(S);
    }
    function G(e) {
        w((e = (0, r.Me)(e, g, E)));
    }
    function Z(t) {
        if (!e.isDisabled && !e.isReadOnly) {
            let e = t;
            if (null === e) return void T(null);
            (e = (0, r.Me)(e, g, E)),
                (e = (0, r.UC)(e, D, y)) &&
                    ((e = (0, a.Mw)(e, (null == I ? void 0 : I.calendar) || new (0, s.IQ)())),
                    I && "hour" in I ? T(I.set(e)) : T(e));
        }
    }
    (0, r.wp)(R, g, E)
        ? w((0, r.Me)(R, g, E))
        : 0 > R.compare(D)
          ? x((0, r.N2)(R, h, _, g, E))
          : R.compare(M) > 0 && x((0, r.Yn)(R, h, _, g, E));
    let F = (0, c.useMemo)(() => !!C && (!!(y && y(C)) || (0, r.wp)(C, g, E)), [C, y, g, E]),
        B = e.isInvalid || "invalid" === e.validationState || F,
        V = B ? "invalid" : null,
        H = (0, c.useMemo)(() => ("visible" === O ? h : d(h)), [O, h]);
    return {
        isDisabled: null != (n = e.isDisabled) && n,
        isReadOnly: null != (u = e.isReadOnly) && u,
        value: C,
        setValue: Z,
        visibleRange: {
            start: D,
            end: M,
        },
        minValue: g,
        maxValue: E,
        focusedDate: R,
        timeZone: A,
        validationState: V,
        isValueInvalid: B,
        setFocusedDate(e) {
            G(e), j(!0);
        },
        focusNextDay() {
            G(R.add({ days: 1 }));
        },
        focusPreviousDay() {
            G(R.subtract({ days: 1 }));
        },
        focusNextRow() {
            h.days ? this.focusNextPage() : (h.weeks || h.months || h.years) && G(R.add({ weeks: 1 }));
        },
        focusPreviousRow() {
            h.days ? this.focusPreviousPage() : (h.weeks || h.months || h.years) && G(R.subtract({ weeks: 1 }));
        },
        focusNextPage() {
            let e = D.add(H);
            w((0, r.Me)(R.add(H), g, E)), x((0, r.Yn)((0, r.PJ)(R, e, H, _, g, E), H, _));
        },
        focusPreviousPage() {
            let e = D.subtract(H);
            w((0, r.Me)(R.subtract(H), g, E)), x((0, r.Yn)((0, r.PJ)(R, e, H, _, g, E), H, _));
        },
        focusSectionStart() {
            h.days ? G(D) : h.weeks ? G((0, o.zJ)(R, _)) : (h.months || h.years) && G((0, o.Nm)(R));
        },
        focusSectionEnd() {
            h.days ? G(M) : h.weeks ? G((0, o.vV)(R, _)) : (h.months || h.years) && G((0, o.Vf)(R));
        },
        focusNextSection(e) {
            if (!e && !h.days) return void G(R.add(d(h)));
            h.days
                ? this.focusNextPage()
                : h.weeks
                  ? G(R.add({ months: 1 }))
                  : (h.months || h.years) && G(R.add({ years: 1 }));
        },
        focusPreviousSection(e) {
            if (!e && !h.days) return void G(R.subtract(d(h)));
            h.days
                ? this.focusPreviousPage()
                : h.weeks
                  ? G(R.subtract({ months: 1 }))
                  : (h.months || h.years) && G(R.subtract({ years: 1 }));
        },
        selectFocusedDate() {
            (y && y(R)) || Z(R);
        },
        selectDate(e) {
            Z(e);
        },
        isFocused: L,
        setFocused: j,
        isInvalid: (e) => (0, r.wp)(e, g, E),
        isSelected(e) {
            return null != C && (0, o.KC)(e, C) && !this.isCellDisabled(e) && !this.isCellUnavailable(e);
        },
        isCellFocused: (e) => L && R && (0, o.KC)(e, R),
        isCellDisabled(t) {
            return e.isDisabled || 0 > t.compare(D) || t.compare(M) > 0 || this.isInvalid(t);
        },
        isCellUnavailable: (t) => !!e.isDateUnavailable && e.isDateUnavailable(t),
        isPreviousVisibleRangeInvalid() {
            let e = D.subtract({ days: 1 });
            return (0, o.KC)(e, D) || this.isInvalid(e);
        },
        isNextVisibleRangeInvalid() {
            let e = M.add({ days: 1 });
            return (0, o.KC)(e, M) || this.isInvalid(e);
        },
        getDatesInWeek(e, t = D) {
            let n = t.add({ weeks: e }),
                r = [];
            n = (0, o.zJ)(n, _, v);
            let i = (0, o.ji)(n, _, v);
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
