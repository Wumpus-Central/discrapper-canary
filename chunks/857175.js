n.d(t, {
    T: () => u,
});
var r = n(955048),
    i = n(515702),
    a = n(376472),
    s = n(352404),
    o = n(142922),
    l = n(492313),
    c = n(64700);

function u(e) {
    var t, n, u;
    let f = (0, c.useMemo)(() => new (0, i.p)(e.locale), [e.locale]),
        p = (0, c.useMemo)(() => f.resolvedOptions(), [f]),
        {
            locale: _,
            createCalendar: h,
            visibleDuration: m = {
                months: 1,
            },
            minValue: g,
            maxValue: E,
            selectionAlignment: b,
            isDateUnavailable: y,
            pageBehavior: O = "visible",
            firstDayOfWeek: A,
        } = e,
        v = (0, c.useMemo)(() => h(p.calendar), [h, p.calendar]),
        [S, I] = (0, l.P)(e.value, null != (t = e.defaultValue) ? t : null, e.onChange),
        T = (0, c.useMemo)(() => (S ? (0, a.yP)((0, a.gw)(S), v) : null), [S, v]),
        C = (0, c.useMemo)(() => (S && "timeZone" in S ? S.timeZone : p.timeZone), [S, p.timeZone]),
        N = (0, c.useMemo)(
            () => (e.focusedValue ? (0, r.X8)((0, a.yP)((0, a.gw)(e.focusedValue), v), g, E) : void 0),
            [e.focusedValue, v, g, E],
        ),
        R = (0, c.useMemo)(
            () =>
                (0, r.X8)(
                    e.defaultFocusedValue
                        ? (0, a.yP)((0, a.gw)(e.defaultFocusedValue), v)
                        : T || (0, a.yP)((0, s.Ec)(C), v),
                    g,
                    E,
                ),
            [e.defaultFocusedValue, T, C, v, g, E],
        ),
        [w, P] = (0, l.P)(N, R, e.onFocusChange),
        [D, x] = (0, c.useState)(() => {
            switch (b) {
                case "start":
                    return (0, r.CT)(w, m, _, g, E);
                case "end":
                    return (0, r.ZT)(w, m, _, g, E);
                default:
                    return (0, r.Hu)(w, m, _, g, E);
            }
        }),
        [L, j] = (0, c.useState)(e.autoFocus || !1),
        M = (0, c.useMemo)(() => {
            let e = {
                ...m,
            };
            return e.days ? e.days-- : (e.days = -1), D.add(e);
        }, [D, m]),
        [k, U] = (0, c.useState)(v);
    if (!(0, s.Jg)(v, k)) {
        let e = (0, a.yP)(w, v);
        x((0, r.Hu)(e, m, _, g, E)), P(e), U(v);
    }

    function G(e) {
        P((e = (0, r.X8)(e, g, E)));
    }

    function V(t) {
        if (!e.isDisabled && !e.isReadOnly) {
            let e = t;
            if (null === e) return void I(null);
            (e = (0, r.X8)(e, g, E)),
                (e = (0, r.Nf)(e, D, y)) &&
                    ((e = (0, a.yP)(e, (null == S ? void 0 : S.calendar) || new (0, o.FG)())),
                    S && "hour" in S ? I(S.set(e)) : I(e));
        }
    }
    (0, r.If)(w, g, E)
        ? P((0, r.X8)(w, g, E))
        : 0 > w.compare(D)
          ? x((0, r.ZT)(w, m, _, g, E))
          : w.compare(M) > 0 && x((0, r.CT)(w, m, _, g, E));
    let F = (0, c.useMemo)(() => !!T && (!!(y && y(T)) || (0, r.If)(T, g, E)), [T, y, g, E]),
        B = e.isInvalid || "invalid" === e.validationState || F,
        H = B ? "invalid" : null,
        Y = (0, c.useMemo)(() => ("visible" === O ? m : d(m)), [O, m]);
    return {
        isDisabled: null != (n = e.isDisabled) && n,
        isReadOnly: null != (u = e.isReadOnly) && u,
        value: T,
        setValue: V,
        visibleRange: {
            start: D,
            end: M,
        },
        minValue: g,
        maxValue: E,
        focusedDate: w,
        timeZone: C,
        validationState: H,
        isValueInvalid: B,
        setFocusedDate(e) {
            G(e), j(!0);
        },
        focusNextDay() {
            G(
                w.add({
                    days: 1,
                }),
            );
        },
        focusPreviousDay() {
            G(
                w.subtract({
                    days: 1,
                }),
            );
        },
        focusNextRow() {
            m.days
                ? this.focusNextPage()
                : (m.weeks || m.months || m.years) &&
                  G(
                      w.add({
                          weeks: 1,
                      }),
                  );
        },
        focusPreviousRow() {
            m.days
                ? this.focusPreviousPage()
                : (m.weeks || m.months || m.years) &&
                  G(
                      w.subtract({
                          weeks: 1,
                      }),
                  );
        },
        focusNextPage() {
            let e = D.add(Y);
            P((0, r.X8)(w.add(Y), g, E)), x((0, r.CT)((0, r.Iw)(w, e, Y, _, g, E), Y, _));
        },
        focusPreviousPage() {
            let e = D.subtract(Y);
            P((0, r.X8)(w.subtract(Y), g, E)), x((0, r.CT)((0, r.Iw)(w, e, Y, _, g, E), Y, _));
        },
        focusSectionStart() {
            m.days ? G(D) : m.weeks ? G((0, s.kq)(w, _)) : (m.months || m.years) && G((0, s.wH)(w));
        },
        focusSectionEnd() {
            m.days ? G(M) : m.weeks ? G((0, s.$I)(w, _)) : (m.months || m.years) && G((0, s.p9)(w));
        },
        focusNextSection(e) {
            e || m.days
                ? m.days
                    ? this.focusNextPage()
                    : m.weeks
                      ? G(
                            w.add({
                                months: 1,
                            }),
                        )
                      : (m.months || m.years) &&
                        G(
                            w.add({
                                years: 1,
                            }),
                        )
                : G(w.add(d(m)));
        },
        focusPreviousSection(e) {
            e || m.days
                ? m.days
                    ? this.focusPreviousPage()
                    : m.weeks
                      ? G(
                            w.subtract({
                                months: 1,
                            }),
                        )
                      : (m.months || m.years) &&
                        G(
                            w.subtract({
                                years: 1,
                            }),
                        )
                : G(w.subtract(d(m)));
        },
        selectFocusedDate() {
            (y && y(w)) || V(w);
        },
        selectDate(e) {
            V(e);
        },
        isFocused: L,
        setFocused: j,
        isInvalid: (e) => (0, r.If)(e, g, E),
        isSelected(e) {
            return null != T && (0, s.ro)(e, T) && !this.isCellDisabled(e) && !this.isCellUnavailable(e);
        },
        isCellFocused: (e) => L && w && (0, s.ro)(e, w),
        isCellDisabled(t) {
            return e.isDisabled || 0 > t.compare(D) || t.compare(M) > 0 || this.isInvalid(t);
        },
        isCellUnavailable: (t) => !!e.isDateUnavailable && e.isDateUnavailable(t),
        isPreviousVisibleRangeInvalid() {
            let e = D.subtract({
                days: 1,
            });
            return (0, s.ro)(e, D) || this.isInvalid(e);
        },
        isNextVisibleRangeInvalid() {
            let e = M.add({
                days: 1,
            });
            return (0, s.ro)(e, M) || this.isInvalid(e);
        },
        getDatesInWeek(e, t = D) {
            let n = t.add({
                    weeks: e,
                }),
                r = [];
            n = (0, s.kq)(n, _, A);
            let i = (0, s.SJ)(n, _, A);
            for (let e = 0; e < i; e++) r.push(null);
            for (; r.length < 7; ) {
                r.push(n);
                let e = n.add({
                    days: 1,
                });
                if ((0, s.ro)(n, e)) break;
                n = e;
            }
            for (; r.length < 7; ) r.push(null);
            return r;
        },
    };
}

function d(e) {
    let t = {
        ...e,
    };
    for (let n in e) t[n] = 1;
    return t;
}
