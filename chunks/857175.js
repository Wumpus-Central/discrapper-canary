t.d(a, { T: () => d });
var r = t(955048),
    n = t(515702),
    i = t(376472),
    l = t(352404),
    o = t(142922),
    u = t(492313),
    s = t(64700);
function d(e) {
    var a, t, d;
    let m = (0, s.useMemo)(() => new (0, n.p)(e.locale), [e.locale]),
        h = (0, s.useMemo)(() => m.resolvedOptions(), [m]),
        {
            locale: y,
            createCalendar: D,
            visibleDuration: p = { months: 1 },
            minValue: g,
            maxValue: v,
            selectionAlignment: f,
            isDateUnavailable: b,
            pageBehavior: A = "visible",
            firstDayOfWeek: R,
        } = e,
        $ = (0, s.useMemo)(() => D(h.calendar), [D, h.calendar]),
        [w, P] = (0, u.P)(e.value, null != (a = e.defaultValue) ? a : null, e.onChange),
        C = (0, s.useMemo)(() => (w ? (0, i.yP)((0, i.gw)(w), $) : null), [w, $]),
        k = (0, s.useMemo)(() => (w && "timeZone" in w ? w.timeZone : h.timeZone), [w, h.timeZone]),
        x = (0, s.useMemo)(
            () => (e.focusedValue ? (0, r.X8)((0, i.yP)((0, i.gw)(e.focusedValue), $), g, v) : void 0),
            [e.focusedValue, $, g, v],
        ),
        E = (0, s.useMemo)(
            () =>
                (0, r.X8)(
                    e.defaultFocusedValue
                        ? (0, i.yP)((0, i.gw)(e.defaultFocusedValue), $)
                        : C || (0, i.yP)((0, l.Ec)(k), $),
                    g,
                    v,
                ),
            [e.defaultFocusedValue, C, k, $, g, v],
        ),
        [S, V] = (0, u.P)(x, E, e.onFocusChange),
        [F, B] = (0, s.useState)(() => {
            switch (f) {
                case "start":
                    return (0, r.CT)(S, p, y, g, v);
                case "end":
                    return (0, r.ZT)(S, p, y, g, v);
                default:
                    return (0, r.Hu)(S, p, y, g, v);
            }
        }),
        [M, I] = (0, s.useState)(e.autoFocus || !1),
        T = (0, s.useMemo)(() => {
            let e = { ...p };
            return e.days ? e.days-- : (e.days = -1), F.add(e);
        }, [F, p]),
        [O, N] = (0, s.useState)($);
    if (!(0, l.Jg)($, O)) {
        let e = (0, i.yP)(S, $);
        B((0, r.Hu)(e, p, y, g, v)), V(e), N($);
    }
    function Z(e) {
        V((e = (0, r.X8)(e, g, v)));
    }
    function z(a) {
        if (!e.isDisabled && !e.isReadOnly) {
            let e = a;
            if (null === e) return void P(null);
            (e = (0, r.X8)(e, g, v)),
                (e = (0, r.Nf)(e, F, b)) &&
                    ((e = (0, i.yP)(e, (null == w ? void 0 : w.calendar) || new (0, o.FG)())),
                    w && "hour" in w ? P(w.set(e)) : P(e));
        }
    }
    (0, r.If)(S, g, v)
        ? V((0, r.X8)(S, g, v))
        : 0 > S.compare(F)
          ? B((0, r.ZT)(S, p, y, g, v))
          : S.compare(T) > 0 && B((0, r.CT)(S, p, y, g, v));
    let U = (0, s.useMemo)(() => !!C && (!!(b && b(C)) || (0, r.If)(C, g, v)), [C, b, g, v]),
        j = e.isInvalid || "invalid" === e.validationState || U,
        K = (0, s.useMemo)(() => ("visible" === A ? p : c(p)), [A, p]);
    return {
        isDisabled: null != (t = e.isDisabled) && t,
        isReadOnly: null != (d = e.isReadOnly) && d,
        value: C,
        setValue: z,
        visibleRange: { start: F, end: T },
        minValue: g,
        maxValue: v,
        focusedDate: S,
        timeZone: k,
        validationState: j ? "invalid" : null,
        isValueInvalid: j,
        setFocusedDate(e) {
            Z(e), I(!0);
        },
        focusNextDay() {
            Z(S.add({ days: 1 }));
        },
        focusPreviousDay() {
            Z(S.subtract({ days: 1 }));
        },
        focusNextRow() {
            p.days ? this.focusNextPage() : (p.weeks || p.months || p.years) && Z(S.add({ weeks: 1 }));
        },
        focusPreviousRow() {
            p.days ? this.focusPreviousPage() : (p.weeks || p.months || p.years) && Z(S.subtract({ weeks: 1 }));
        },
        focusNextPage() {
            let e = F.add(K);
            V((0, r.X8)(S.add(K), g, v)), B((0, r.CT)((0, r.Iw)(S, e, K, y, g, v), K, y));
        },
        focusPreviousPage() {
            let e = F.subtract(K);
            V((0, r.X8)(S.subtract(K), g, v)), B((0, r.CT)((0, r.Iw)(S, e, K, y, g, v), K, y));
        },
        focusSectionStart() {
            p.days ? Z(F) : p.weeks ? Z((0, l.kq)(S, y)) : (p.months || p.years) && Z((0, l.wH)(S));
        },
        focusSectionEnd() {
            p.days ? Z(T) : p.weeks ? Z((0, l.$I)(S, y)) : (p.months || p.years) && Z((0, l.p9)(S));
        },
        focusNextSection(e) {
            e || p.days
                ? p.days
                    ? this.focusNextPage()
                    : p.weeks
                      ? Z(S.add({ months: 1 }))
                      : (p.months || p.years) && Z(S.add({ years: 1 }))
                : Z(S.add(c(p)));
        },
        focusPreviousSection(e) {
            e || p.days
                ? p.days
                    ? this.focusPreviousPage()
                    : p.weeks
                      ? Z(S.subtract({ months: 1 }))
                      : (p.months || p.years) && Z(S.subtract({ years: 1 }))
                : Z(S.subtract(c(p)));
        },
        selectFocusedDate() {
            (b && b(S)) || z(S);
        },
        selectDate(e) {
            z(e);
        },
        isFocused: M,
        setFocused: I,
        isInvalid: (e) => (0, r.If)(e, g, v),
        isSelected(e) {
            return null != C && (0, l.ro)(e, C) && !this.isCellDisabled(e) && !this.isCellUnavailable(e);
        },
        isCellFocused: (e) => M && S && (0, l.ro)(e, S),
        isCellDisabled(a) {
            return e.isDisabled || 0 > a.compare(F) || a.compare(T) > 0 || this.isInvalid(a);
        },
        isCellUnavailable: (a) => !!e.isDateUnavailable && e.isDateUnavailable(a),
        isPreviousVisibleRangeInvalid() {
            let e = F.subtract({ days: 1 });
            return (0, l.ro)(e, F) || this.isInvalid(e);
        },
        isNextVisibleRangeInvalid() {
            let e = T.add({ days: 1 });
            return (0, l.ro)(e, T) || this.isInvalid(e);
        },
        getDatesInWeek(e, a = F) {
            let t = a.add({ weeks: e }),
                r = [];
            t = (0, l.kq)(t, y, R);
            let n = (0, l.SJ)(t, y, R);
            for (let e = 0; e < n; e++) r.push(null);
            for (; r.length < 7; ) {
                r.push(t);
                let e = t.add({ days: 1 });
                if ((0, l.ro)(t, e)) break;
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
