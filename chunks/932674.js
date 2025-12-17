n.d(t, { R: () => m });
var r = n(493550),
    i = n(132981),
    a = n(45728),
    o = n(533426),
    s = n(640475),
    l = n(274738),
    c = n(134915),
    u = n(386239),
    d = n(473749);
let f = {
        year: !0,
        month: !0,
        day: !0,
        hour: !0,
        minute: !0,
        second: !0,
        dayPeriod: !0,
        era: !0,
    },
    p = {
        year: 5,
        month: 2,
        day: 7,
        hour: 2,
        minute: 15,
        second: 15,
    },
    _ = {
        dayperiod: "dayPeriod",
        relatedYear: "year",
        yearName: "literal",
        unknown: "literal",
    };
function m(e) {
    var t, n, i;
    let {
            locale: m,
            createCalendar: g,
            hideTimeZone: y,
            isDisabled: O = !1,
            isReadOnly: v = !1,
            isRequired: S = !1,
            minValue: I,
            maxValue: T,
            isDateUnavailable: C,
        } = e,
        A = e.value || e.defaultValue || e.placeholderValue || null,
        [N, P] = (0, r.iZ)(A, e.granularity),
        R = P || "UTC";
    if (A && !(N in A)) throw Error("Invalid granularity " + N + " for value " + A.toString());
    let w = (0, d.useMemo)(() => new (0, a.C)(m), [m]),
        D = (0, d.useMemo)(() => g(w.resolvedOptions().calendar), [g, w]),
        [x, L] = (0, u.z)(e.value, null != (t = e.defaultValue) ? t : null, e.onChange),
        [j] = (0, d.useState)(x),
        M = (0, d.useMemo)(() => {
            var e;
            return null != (e = (0, r.Ai)(x, D)) ? e : null;
        }, [x, D]),
        [k, U] = (0, d.useState)(() => (0, r.OJ)(e.placeholderValue, N, D, P)),
        G = M || k,
        Z = "gregory" === D.identifier && "BC" === G.era,
        F = (0, d.useMemo)(() => {
            var t;
            return {
                granularity: N,
                maxGranularity: null != (t = e.maxGranularity) ? t : "year",
                timeZone: P,
                hideTimeZone: y,
                hourCycle: e.hourCycle,
                showEra: Z,
                shouldForceLeadingZeros: e.shouldForceLeadingZeros,
            };
        }, [e.maxGranularity, N, e.hourCycle, e.shouldForceLeadingZeros, P, y, Z]),
        B = (0, d.useMemo)(() => (0, r.oE)({}, F), [F]),
        V = (0, d.useMemo)(() => new (0, a.C)(m, B), [m, B]),
        H = (0, d.useMemo)(() => V.resolvedOptions(), [V]),
        Y = (0, d.useMemo)(
            () =>
                V.formatToParts(new Date())
                    .filter((e) => f[e.type])
                    .reduce((e, t) => ((e[_[t.type] || t.type] = !0), e), {}),
            [V],
        ),
        [W, K] = (0, d.useState)(() => (e.value || e.defaultValue ? { ...Y } : {})),
        z = (0, d.useRef)(null),
        q = (0, d.useRef)(D);
    (0, d.useEffect)(() => {
        (0, o.jv)(D, q.current) ||
            ((q.current = D),
            U((t) => (Object.keys(W).length > 0 ? (0, s.Mw)(t, D) : (0, r.OJ)(e.placeholderValue, N, D, P))));
    }, [D, N, W, P, e.placeholderValue]),
        x && Object.keys(W).length < Object.keys(Y).length && K((W = { ...Y })),
        null == x &&
            Object.keys(W).length === Object.keys(Y).length &&
            (K((W = {})), U((0, r.OJ)(e.placeholderValue, N, D, P)));
    let Q = M && Object.keys(W).length >= Object.keys(Y).length ? M : k,
        X = (t) => {
            if (e.isDisabled || e.isReadOnly) return;
            let n = Object.keys(W),
                i = Object.keys(Y);
            null == t
                ? (L(null), U((0, r.OJ)(e.placeholderValue, N, D, P)), K({}))
                : (0 === n.length && null == z.current) ||
                    n.length >= i.length ||
                    (n.length === i.length - 1 && Y.dayPeriod && !W.dayPeriod && "dayPeriod" !== z.current)
                  ? (0 === n.length && K((W = { ...Y })),
                    L((t = (0, s.Mw)(t, (null == A ? void 0 : A.calendar) || new (0, l.IQ)()))))
                  : U(t),
                (z.current = null);
        },
        J = (0, d.useMemo)(() => Q.toDate(R), [Q, R]),
        $ = (0, d.useMemo)(() => h(J, W, V, H, Q, D, m, N), [J, W, V, H, Q, D, m, N]);
    Y.era && W.year && !W.era ? ((W.era = !0), K({ ...W })) : !Y.era && W.era && (delete W.era, K({ ...W }));
    let ee = (e) => {
            (W[e] = !0), "year" === e && Y.era && (W.era = !0), K({ ...W });
        },
        et = (e, t) => {
            if (W[e]) X(E(Q, e, t, H));
            else {
                ee(e);
                let t = Object.keys(W),
                    n = Object.keys(Y);
                (t.length >= n.length || (t.length === n.length - 1 && Y.dayPeriod && !W.dayPeriod)) && X(Q);
            }
        },
        en = (0, d.useMemo)(() => (0, r.p2)(x, I, T, C, F), [x, I, T, C, F]),
        er = (0, c.Q3)({
            ...e,
            value: x,
            builtinValidation: en,
        }),
        ei = er.displayValidation.isInvalid,
        ea = e.validationState || (ei ? "invalid" : null);
    return {
        ...er,
        value: M,
        defaultValue: null != (n = e.defaultValue) ? n : j,
        dateValue: J,
        calendar: D,
        setValue: X,
        segments: $,
        dateFormatter: V,
        validationState: ea,
        isInvalid: ei,
        granularity: N,
        maxGranularity: null != (i = e.maxGranularity) ? i : "year",
        isDisabled: O,
        isReadOnly: v,
        isRequired: S,
        increment(e) {
            et(e, 1);
        },
        decrement(e) {
            et(e, -1);
        },
        incrementPage(e) {
            et(e, p[e] || 1);
        },
        decrementPage(e) {
            et(e, -(p[e] || 1));
        },
        setSegment(e, t) {
            ee(e), X(b(Q, e, t, H));
        },
        confirmPlaceholder() {
            if (e.isDisabled || e.isReadOnly) return;
            let t = Object.keys(W),
                n = Object.keys(Y);
            t.length === n.length - 1 && Y.dayPeriod && !W.dayPeriod && (K((W = { ...Y })), X(Q.copy()));
        },
        clearSegment(t) {
            delete W[t], (z.current = t), K({ ...W });
            let n = (0, r.OJ)(e.placeholderValue, N, D, P),
                i = Q;
            if ("dayPeriod" === t && "hour" in Q && "hour" in n) {
                let e = Q.hour >= 12,
                    t = n.hour >= 12;
                e && !t ? (i = Q.set({ hour: Q.hour - 12 })) : !e && t && (i = Q.set({ hour: Q.hour + 12 }));
            } else
                "hour" === t && "hour" in Q && Q.hour >= 12 && W.dayPeriod
                    ? (i = Q.set({ hour: n.hour + 12 }))
                    : t in Q && (i = Q.set({ [t]: n[t] }));
            L(null), X(i);
        },
        formatValue(e) {
            if (!M) return "";
            let t = (0, r.oE)(e, F);
            return new (0, a.C)(m, t).format(J);
        },
        getDateFormatter(e, t) {
            let n = {
                    ...F,
                    ...t,
                },
                i = (0, r.oE)({}, n);
            return new (0, a.C)(e, i);
        },
    };
}
function h(e, t, n, r, a, o, s, l) {
    let c = ["hour", "minute", "second"],
        u = n.formatToParts(e),
        d = [];
    for (let e of u) {
        let n = _[e.type] || e.type,
            u = f[n];
        "era" === n && 1 === o.getEras().length && (u = !1);
        let p = f[n] && !t[n],
            m = f[n] ? (0, i.p)(n, e.value, s) : null,
            h = {
                type: n,
                text: p ? m : e.value,
                ...g(a, n, r),
                isPlaceholder: p,
                placeholder: m,
                isEditable: u,
            };
        "hour" === n
            ? (d.push({
                  type: "literal",
                  text: "\u2066",
                  ...g(a, "literal", r),
                  isPlaceholder: !1,
                  placeholder: "",
                  isEditable: !1,
              }),
              d.push(h),
              n === l &&
                  d.push({
                      type: "literal",
                      text: "\u2069",
                      ...g(a, "literal", r),
                      isPlaceholder: !1,
                      placeholder: "",
                      isEditable: !1,
                  }))
            : c.includes(n) && n === l
              ? (d.push(h),
                d.push({
                    type: "literal",
                    text: "\u2069",
                    ...g(a, "literal", r),
                    isPlaceholder: !1,
                    placeholder: "",
                    isEditable: !1,
                }))
              : d.push(h);
    }
    return d;
}
function g(e, t, n) {
    switch (t) {
        case "era": {
            let t = e.calendar.getEras();
            return {
                value: t.indexOf(e.era),
                minValue: 0,
                maxValue: t.length - 1,
            };
        }
        case "year":
            return {
                value: e.year,
                minValue: 1,
                maxValue: e.calendar.getYearsInEra(e),
            };
        case "month":
            return {
                value: e.month,
                minValue: (0, o.jx)(e),
                maxValue: e.calendar.getMonthsInYear(e),
            };
        case "day":
            return {
                value: e.day,
                minValue: (0, o.PA)(e),
                maxValue: e.calendar.getDaysInMonth(e),
            };
    }
    if ("hour" in e)
        switch (t) {
            case "dayPeriod":
                return {
                    value: 12 * (e.hour >= 12),
                    minValue: 0,
                    maxValue: 12,
                };
            case "hour":
                if (n.hour12) {
                    let t = e.hour >= 12;
                    return {
                        value: e.hour,
                        minValue: 12 * !!t,
                        maxValue: t ? 23 : 11,
                    };
                }
                return {
                    value: e.hour,
                    minValue: 0,
                    maxValue: 23,
                };
            case "minute":
                return {
                    value: e.minute,
                    minValue: 0,
                    maxValue: 59,
                };
            case "second":
                return {
                    value: e.second,
                    minValue: 0,
                    maxValue: 59,
                };
        }
    return {};
}
function E(e, t, n, r) {
    switch (t) {
        case "era":
        case "year":
        case "month":
        case "day":
            return e.cycle(t, n, { round: "year" === t });
    }
    if ("hour" in e)
        switch (t) {
            case "dayPeriod": {
                let t = e.hour,
                    n = t >= 12;
                return e.set({ hour: n ? t - 12 : t + 12 });
            }
            case "hour":
            case "minute":
            case "second":
                return e.cycle(t, n, {
                    round: "hour" !== t,
                    hourCycle: r.hour12 ? 12 : 24,
                });
        }
    throw Error("Unknown segment: " + t);
}
function b(e, t, n, r) {
    switch (t) {
        case "day":
        case "month":
        case "year":
        case "era":
            return e.set({ [t]: n });
    }
    if ("hour" in e && "number" == typeof n)
        switch (t) {
            case "dayPeriod": {
                let t = e.hour,
                    r = t >= 12;
                if (n >= 12 === r) return e;
                return e.set({ hour: r ? t - 12 : t + 12 });
            }
            case "hour":
                if (r.hour12) {
                    let t = e.hour >= 12;
                    t || 12 !== n || (n = 0), t && n < 12 && (n += 12);
                }
            case "minute":
            case "second":
                return e.set({ [t]: n });
        }
    throw Error("Unknown segment: " + t);
}
