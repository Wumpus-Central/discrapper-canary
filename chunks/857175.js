t.d(a, { T: () => d });
var r = t(955048),
    n = t(515702),
    i = t(376472),
    o = t(352404),
    u = t(142922),
    l = t(492313),
    s = t(64700);
function d(e) {
    var a, t, d;
    let m = (0, s.useMemo)(() => new (0, n.p)(e.locale), [e.locale]),
        h = (0, s.useMemo)(() => m.resolvedOptions(), [m]),
        {
            locale: D,
            createCalendar: y,
            visibleDuration: p = { months: 1 },
            minValue: g,
            maxValue: f,
            selectionAlignment: v,
            isDateUnavailable: b,
            pageBehavior: A = "visible",
            firstDayOfWeek: $,
        } = e,
        w = (0, s.useMemo)(() => y(h.calendar), [y, h.calendar]),
        [R, P] = (0, l.P)(e.value, null != (a = e.defaultValue) ? a : null, e.onChange),
        k = (0, s.useMemo)(() => (R ? (0, i.yP)((0, i.gw)(R), w) : null), [R, w]),
        x = (0, s.useMemo)(() => (R && "timeZone" in R ? R.timeZone : h.timeZone), [R, h.timeZone]),
        C = (0, s.useMemo)(
            () => (e.focusedValue ? (0, r.X8)((0, i.yP)((0, i.gw)(e.focusedValue), w), g, f) : void 0),
            [e.focusedValue, w, g, f],
        ),
        E = (0, s.useMemo)(
            () =>
                (0, r.X8)(
                    e.defaultFocusedValue
                        ? (0, i.yP)((0, i.gw)(e.defaultFocusedValue), w)
                        : k || (0, i.yP)((0, o.Ec)(x), w),
                    g,
                    f,
                ),
            [e.defaultFocusedValue, k, x, w, g, f],
        ),
        [S, F] = (0, l.P)(C, E, e.onFocusChange),
        [B, V] = (0, s.useState)(() => {
            switch (v) {
                case "start":
                    return (0, r.CT)(S, p, D, g, f);
                case "end":
                    return (0, r.ZT)(S, p, D, g, f);
                default:
                    return (0, r.Hu)(S, p, D, g, f);
            }
        }),
        [M, I] = (0, s.useState)(e.autoFocus || !1),
        T = (0, s.useMemo)(() => {
            let e = { ...p };
            return e.days ? e.days-- : (e.days = -1), B.add(e);
        }, [B, p]),
        [O, N] = (0, s.useState)(w);
    if (!(0, o.Jg)(w, O)) {
        let e = (0, i.yP)(S, w);
        V((0, r.Hu)(e, p, D, g, f)), F(e), N(w);
    }
    function z(e) {
        F((e = (0, r.X8)(e, g, f)));
    }
    function j(a) {
        if (!e.isDisabled && !e.isReadOnly) {
            let e = a;
            if (null === e) return void P(null);
            (e = (0, r.X8)(e, g, f)),
                (e = (0, r.Nf)(e, B, b)) &&
                    ((e = (0, i.yP)(e, (null == R ? void 0 : R.calendar) || new (0, u.FG)())),
                    R && "hour" in R ? P(R.set(e)) : P(e));
        }
    }
    (0, r.If)(S, g, f)
        ? F((0, r.X8)(S, g, f))
        : 0 > S.compare(B)
          ? V((0, r.ZT)(S, p, D, g, f))
          : S.compare(T) > 0 && V((0, r.CT)(S, p, D, g, f));
    let Z = (0, s.useMemo)(() => !!k && (!!(b && b(k)) || (0, r.If)(k, g, f)), [k, b, g, f]),
        U = e.isInvalid || "invalid" === e.validationState || Z,
        K = (0, s.useMemo)(() => ("visible" === A ? p : c(p)), [A, p]);
    return {
        isDisabled: null != (t = e.isDisabled) && t,
        isReadOnly: null != (d = e.isReadOnly) && d,
        value: k,
        setValue: j,
        visibleRange: { start: B, end: T },
        minValue: g,
        maxValue: f,
        focusedDate: S,
        timeZone: x,
        validationState: U ? "invalid" : null,
        isValueInvalid: U,
        setFocusedDate(e) {
            z(e), I(!0);
        },
        focusNextDay() {
            z(S.add({ days: 1 }));
        },
        focusPreviousDay() {
            z(S.subtract({ days: 1 }));
        },
        focusNextRow() {
            p.days ? this.focusNextPage() : (p.weeks || p.months || p.years) && z(S.add({ weeks: 1 }));
        },
        focusPreviousRow() {
            p.days ? this.focusPreviousPage() : (p.weeks || p.months || p.years) && z(S.subtract({ weeks: 1 }));
        },
        focusNextPage() {
            let e = B.add(K);
            F((0, r.X8)(S.add(K), g, f)), V((0, r.CT)((0, r.Iw)(S, e, K, D, g, f), K, D));
        },
        focusPreviousPage() {
            let e = B.subtract(K);
            F((0, r.X8)(S.subtract(K), g, f)), V((0, r.CT)((0, r.Iw)(S, e, K, D, g, f), K, D));
        },
        focusSectionStart() {
            p.days ? z(B) : p.weeks ? z((0, o.kq)(S, D)) : (p.months || p.years) && z((0, o.wH)(S));
        },
        focusSectionEnd() {
            p.days ? z(T) : p.weeks ? z((0, o.$I)(S, D)) : (p.months || p.years) && z((0, o.p9)(S));
        },
        focusNextSection(e) {
            e || p.days
                ? p.days
                    ? this.focusNextPage()
                    : p.weeks
                      ? z(S.add({ months: 1 }))
                      : (p.months || p.years) && z(S.add({ years: 1 }))
                : z(S.add(c(p)));
        },
        focusPreviousSection(e) {
            e || p.days
                ? p.days
                    ? this.focusPreviousPage()
                    : p.weeks
                      ? z(S.subtract({ months: 1 }))
                      : (p.months || p.years) && z(S.subtract({ years: 1 }))
                : z(S.subtract(c(p)));
        },
        selectFocusedDate() {
            (b && b(S)) || j(S);
        },
        selectDate(e) {
            j(e);
        },
        isFocused: M,
        setFocused: I,
        isInvalid: (e) => (0, r.If)(e, g, f),
        isSelected(e) {
            return null != k && (0, o.ro)(e, k) && !this.isCellDisabled(e) && !this.isCellUnavailable(e);
        },
        isCellFocused: (e) => M && S && (0, o.ro)(e, S),
        isCellDisabled(a) {
            return e.isDisabled || 0 > a.compare(B) || a.compare(T) > 0 || this.isInvalid(a);
        },
        isCellUnavailable: (a) => !!e.isDateUnavailable && e.isDateUnavailable(a),
        isPreviousVisibleRangeInvalid() {
            let e = B.subtract({ days: 1 });
            return (0, o.ro)(e, B) || this.isInvalid(e);
        },
        isNextVisibleRangeInvalid() {
            let e = T.add({ days: 1 });
            return (0, o.ro)(e, T) || this.isInvalid(e);
        },
        getDatesInWeek(e, a = B) {
            let t = a.add({ weeks: e }),
                r = [];
            t = (0, o.kq)(t, D, $);
            let n = (0, o.SJ)(t, D, $);
            for (let e = 0; e < n; e++) r.push(null);
            for (; r.length < 7; ) {
                r.push(t);
                let e = t.add({ days: 1 });
                if ((0, o.ro)(t, e)) break;
                t = e;
            }
            for (; r.length < 7; ) r.push(null);
            return r;
        },
    };
}
function c(e) {
    let a = { ...e };
    for (let t in e) a[t] = 1;
    return a;
}
