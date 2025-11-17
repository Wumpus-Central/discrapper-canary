n.d(t, { R: () => h });
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
    _ = {
        year: 5,
        month: 2,
        day: 7,
        hour: 2,
        minute: 15,
        second: 15,
    },
    p = {
        dayperiod: "dayPeriod",
        relatedYear: "year",
        yearName: "literal",
        unknown: "literal",
    };
function h(e) {
    var t, n, i;
    let {
            locale: h,
            createCalendar: g,
            hideTimeZone: y,
            isDisabled: O = !1,
            isReadOnly: v = !1,
            isRequired: I = !1,
            minValue: T,
            maxValue: S,
            isDateUnavailable: A,
        } = e,
        C = e.value || e.defaultValue || e.placeholderValue || null,
        [N, R] = (0, r.iZ)(C, e.granularity),
        P = R || "UTC";
    if (C && !(N in C)) throw Error("Invalid granularity " + N + " for value " + C.toString());
    let D = (0, d.useMemo)(() => new (0, a.C)(h), [h]),
        w = (0, d.useMemo)(() => g(D.resolvedOptions().calendar), [g, D]),
        [x, L] = (0, u.z)(e.value, null != (t = e.defaultValue) ? t : null, e.onChange),
        [M] = (0, d.useState)(x),
        k = (0, d.useMemo)(() => {
            var e;
            return null != (e = (0, r.Ai)(x, w)) ? e : null;
        }, [x, w]),
        [j, U] = (0, d.useState)(() => (0, r.OJ)(e.placeholderValue, N, w, R)),
        G = k || j,
        B = "gregory" === w.identifier && "BC" === G.era,
        Z = (0, d.useMemo)(() => {
            var t;
            return {
                granularity: N,
                maxGranularity: null != (t = e.maxGranularity) ? t : "year",
                timeZone: R,
                hideTimeZone: y,
                hourCycle: e.hourCycle,
                showEra: B,
                shouldForceLeadingZeros: e.shouldForceLeadingZeros,
            };
        }, [e.maxGranularity, N, e.hourCycle, e.shouldForceLeadingZeros, R, y, B]),
        F = (0, d.useMemo)(() => (0, r.oE)({}, Z), [Z]),
        V = (0, d.useMemo)(() => new (0, a.C)(h, F), [h, F]),
        H = (0, d.useMemo)(() => V.resolvedOptions(), [V]),
        Y = (0, d.useMemo)(
            () =>
                V.formatToParts(new Date())
                    .filter((e) => f[e.type])
                    .reduce((e, t) => ((e[p[t.type] || t.type] = !0), e), {}),
            [V],
        ),
        [W, K] = (0, d.useState)(() => (e.value || e.defaultValue ? { ...Y } : {})),
        z = (0, d.useRef)(null),
        q = (0, d.useRef)(w);
    (0, d.useEffect)(() => {
        (0, o.jv)(w, q.current) ||
            ((q.current = w),
            U((t) => (Object.keys(W).length > 0 ? (0, s.Mw)(t, w) : (0, r.OJ)(e.placeholderValue, N, w, R))));
    }, [w, N, W, R, e.placeholderValue]),
        x && Object.keys(W).length < Object.keys(Y).length && K((W = { ...Y })),
        null == x &&
            Object.keys(W).length === Object.keys(Y).length &&
            (K((W = {})), U((0, r.OJ)(e.placeholderValue, N, w, R)));
    let X = k && Object.keys(W).length >= Object.keys(Y).length ? k : j,
        Q = (t) => {
            if (e.isDisabled || e.isReadOnly) return;
            let n = Object.keys(W),
                i = Object.keys(Y);
            null == t
                ? (L(null), U((0, r.OJ)(e.placeholderValue, N, w, R)), K({}))
                : (0 === n.length && null == z.current) ||
                    n.length >= i.length ||
                    (n.length === i.length - 1 && Y.dayPeriod && !W.dayPeriod && "dayPeriod" !== z.current)
                  ? (0 === n.length && K((W = { ...Y })),
                    L((t = (0, s.Mw)(t, (null == C ? void 0 : C.calendar) || new (0, l.IQ)()))))
                  : U(t),
                (z.current = null);
        },
        J = (0, d.useMemo)(() => X.toDate(P), [X, P]),
        $ = (0, d.useMemo)(() => m(J, W, V, H, X, w, h, N), [J, W, V, H, X, w, h, N]);
    Y.era && W.year && !W.era ? ((W.era = !0), K({ ...W })) : !Y.era && W.era && (delete W.era, K({ ...W }));
    let ee = (e) => {
            (W[e] = !0), "year" === e && Y.era && (W.era = !0), K({ ...W });
        },
        et = (e, t) => {
            if (W[e]) Q(E(X, e, t, H));
            else {
                ee(e);
                let t = Object.keys(W),
                    n = Object.keys(Y);
                (t.length >= n.length || (t.length === n.length - 1 && Y.dayPeriod && !W.dayPeriod)) && Q(X);
            }
        },
        en = (0, d.useMemo)(() => (0, r.p2)(x, T, S, A, Z), [x, T, S, A, Z]),
        er = (0, c.Q3)({
            ...e,
            value: x,
            builtinValidation: en,
        }),
        ei = er.displayValidation.isInvalid,
        ea = e.validationState || (ei ? "invalid" : null);
    return {
        ...er,
        value: k,
        defaultValue: null != (n = e.defaultValue) ? n : M,
        dateValue: J,
        calendar: w,
        setValue: Q,
        segments: $,
        dateFormatter: V,
        validationState: ea,
        isInvalid: ei,
        granularity: N,
        maxGranularity: null != (i = e.maxGranularity) ? i : "year",
        isDisabled: O,
        isReadOnly: v,
        isRequired: I,
        increment(e) {
            et(e, 1);
        },
        decrement(e) {
            et(e, -1);
        },
        incrementPage(e) {
            et(e, _[e] || 1);
        },
        decrementPage(e) {
            et(e, -(_[e] || 1));
        },
        setSegment(e, t) {
            ee(e), Q(b(X, e, t, H));
        },
        confirmPlaceholder() {
            if (e.isDisabled || e.isReadOnly) return;
            let t = Object.keys(W),
                n = Object.keys(Y);
            t.length === n.length - 1 && Y.dayPeriod && !W.dayPeriod && (K((W = { ...Y })), Q(X.copy()));
        },
        clearSegment(t) {
            delete W[t], (z.current = t), K({ ...W });
            let n = (0, r.OJ)(e.placeholderValue, N, w, R),
                i = X;
            if ("dayPeriod" === t && "hour" in X && "hour" in n) {
                let e = X.hour >= 12,
                    t = n.hour >= 12;
                e && !t ? (i = X.set({ hour: X.hour - 12 })) : !e && t && (i = X.set({ hour: X.hour + 12 }));
            } else
                "hour" === t && "hour" in X && X.hour >= 12 && W.dayPeriod
                    ? (i = X.set({ hour: n.hour + 12 }))
                    : t in X && (i = X.set({ [t]: n[t] }));
            L(null), Q(i);
        },
        formatValue(e) {
            if (!k) return "";
            let t = (0, r.oE)(e, Z);
            return new (0, a.C)(h, t).format(J);
        },
        getDateFormatter(e, t) {
            let n = {
                    ...Z,
                    ...t,
                },
                i = (0, r.oE)({}, n);
            return new (0, a.C)(e, i);
        },
    };
}
function m(e, t, n, r, a, o, s, l) {
    let c = ["hour", "minute", "second"],
        u = n.formatToParts(e),
        d = [];
    for (let e of u) {
        let n = p[e.type] || e.type,
            u = f[n];
        "era" === n && 1 === o.getEras().length && (u = !1);
        let _ = f[n] && !t[n],
            h = f[n] ? (0, i.p)(n, e.value, s) : null,
            m = {
                type: n,
                text: _ ? h : e.value,
                ...g(a, n, r),
                isPlaceholder: _,
                placeholder: h,
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
              d.push(m),
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
              ? (d.push(m),
                d.push({
                    type: "literal",
                    text: "\u2069",
                    ...g(a, "literal", r),
                    isPlaceholder: !1,
                    placeholder: "",
                    isEditable: !1,
                }))
              : d.push(m);
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
