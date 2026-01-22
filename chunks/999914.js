n.d(t, {
    F: () => h,
});
var r = n(22299),
    i = n(861170),
    a = n(515702),
    s = n(352404),
    o = n(376472),
    l = n(142922),
    c = n(339241),
    u = n(492313),
    d = n(64700);
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

function h(e) {
    var t, n, i;
    let {
            locale: h,
            createCalendar: g,
            hideTimeZone: y,
            isDisabled: O = !1,
            isReadOnly: A = !1,
            isRequired: v = !1,
            minValue: S,
            maxValue: I,
            isDateUnavailable: T,
        } = e,
        C = e.value || e.defaultValue || e.placeholderValue || null,
        [N, R] = (0, r.bf)(C, e.granularity),
        w = R || "UTC";
    if (C && !(N in C)) throw Error("Invalid granularity " + N + " for value " + C.toString());
    let P = (0, d.useMemo)(() => new (0, a.p)(h), [h]),
        D = (0, d.useMemo)(() => g(P.resolvedOptions().calendar), [g, P]),
        [x, L] = (0, u.P)(e.value, null != (t = e.defaultValue) ? t : null, e.onChange),
        [j] = (0, d.useState)(x),
        M = (0, d.useMemo)(() => {
            var e;
            return null != (e = (0, r.nf)(x, D)) ? e : null;
        }, [x, D]),
        [k, U] = (0, d.useState)(() => (0, r.o_)(e.placeholderValue, N, D, R)),
        G = M || k,
        V = "gregory" === D.identifier && "BC" === G.era,
        F = (0, d.useMemo)(() => {
            var t;
            return {
                granularity: N,
                maxGranularity: null != (t = e.maxGranularity) ? t : "year",
                timeZone: R,
                hideTimeZone: y,
                hourCycle: e.hourCycle,
                showEra: V,
                shouldForceLeadingZeros: e.shouldForceLeadingZeros,
            };
        }, [e.maxGranularity, N, e.hourCycle, e.shouldForceLeadingZeros, R, y, V]),
        B = (0, d.useMemo)(() => (0, r.id)({}, F), [F]),
        H = (0, d.useMemo)(() => new (0, a.p)(h, B), [h, B]),
        Y = (0, d.useMemo)(() => H.resolvedOptions(), [H]),
        W = (0, d.useMemo)(
            () =>
                H.formatToParts(new Date())
                    .filter((e) => f[e.type])
                    .reduce((e, t) => ((e[_[t.type] || t.type] = !0), e), {}),
            [H],
        ),
        [K, z] = (0, d.useState)(() =>
            e.value || e.defaultValue
                ? {
                      ...W,
                  }
                : {},
        ),
        q = (0, d.useRef)(null),
        X = (0, d.useRef)(D);
    (0, d.useEffect)(() => {
        (0, s.Jg)(D, X.current) ||
            ((X.current = D),
            U((t) => (Object.keys(K).length > 0 ? (0, o.yP)(t, D) : (0, r.o_)(e.placeholderValue, N, D, R))));
    }, [D, N, K, R, e.placeholderValue]),
        x &&
            Object.keys(K).length < Object.keys(W).length &&
            z(
                (K = {
                    ...W,
                }),
            ),
        null == x &&
            Object.keys(K).length === Object.keys(W).length &&
            (z((K = {})), U((0, r.o_)(e.placeholderValue, N, D, R)));
    let Z = M && Object.keys(K).length >= Object.keys(W).length ? M : k,
        Q = (t) => {
            if (e.isDisabled || e.isReadOnly) return;
            let n = Object.keys(K),
                i = Object.keys(W);
            null == t
                ? (L(null), U((0, r.o_)(e.placeholderValue, N, D, R)), z({}))
                : (0 === n.length && null == q.current) ||
                    n.length >= i.length ||
                    (n.length === i.length - 1 && W.dayPeriod && !K.dayPeriod && "dayPeriod" !== q.current)
                  ? (0 === n.length &&
                        z(
                            (K = {
                                ...W,
                            }),
                        ),
                    L((t = (0, o.yP)(t, (null == C ? void 0 : C.calendar) || new (0, l.FG)()))))
                  : U(t),
                (q.current = null);
        },
        $ = (0, d.useMemo)(() => Z.toDate(w), [Z, w]),
        J = (0, d.useMemo)(() => m($, K, H, Y, Z, D, h, N), [$, K, H, Y, Z, D, h, N]);
    W.era && K.year && !K.era
        ? ((K.era = !0),
          z({
              ...K,
          }))
        : !W.era &&
          K.era &&
          (delete K.era,
          z({
              ...K,
          }));
    let ee = (e) => {
            (K[e] = !0),
                "year" === e && W.era && (K.era = !0),
                z({
                    ...K,
                });
        },
        et = (e, t) => {
            if (K[e]) Q(E(Z, e, t, Y));
            else {
                ee(e);
                let t = Object.keys(K),
                    n = Object.keys(W);
                (t.length >= n.length || (t.length === n.length - 1 && W.dayPeriod && !K.dayPeriod)) && Q(Z);
            }
        },
        en = (0, d.useMemo)(() => (0, r.nz)(x, S, I, T, F), [x, S, I, T, F]),
        er = (0, c.KZ)({
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
        dateValue: $,
        calendar: D,
        setValue: Q,
        segments: J,
        dateFormatter: H,
        validationState: ea,
        isInvalid: ei,
        granularity: N,
        maxGranularity: null != (i = e.maxGranularity) ? i : "year",
        isDisabled: O,
        isReadOnly: A,
        isRequired: v,
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
            ee(e), Q(b(Z, e, t, Y));
        },
        confirmPlaceholder() {
            if (e.isDisabled || e.isReadOnly) return;
            let t = Object.keys(K),
                n = Object.keys(W);
            t.length === n.length - 1 &&
                W.dayPeriod &&
                !K.dayPeriod &&
                (z(
                    (K = {
                        ...W,
                    }),
                ),
                Q(Z.copy()));
        },
        clearSegment(t) {
            delete K[t],
                (q.current = t),
                z({
                    ...K,
                });
            let n = (0, r.o_)(e.placeholderValue, N, D, R),
                i = Z;
            if ("dayPeriod" === t && "hour" in Z && "hour" in n) {
                let e = Z.hour >= 12,
                    t = n.hour >= 12;
                e && !t
                    ? (i = Z.set({
                          hour: Z.hour - 12,
                      }))
                    : !e &&
                      t &&
                      (i = Z.set({
                          hour: Z.hour + 12,
                      }));
            } else
                "hour" === t && "hour" in Z && Z.hour >= 12 && K.dayPeriod
                    ? (i = Z.set({
                          hour: n.hour + 12,
                      }))
                    : t in Z &&
                      (i = Z.set({
                          [t]: n[t],
                      }));
            L(null), Q(i);
        },
        formatValue(e) {
            if (!M) return "";
            let t = (0, r.id)(e, F);
            return new (0, a.p)(h, t).format($);
        },
        getDateFormatter(e, t) {
            let n = {
                    ...F,
                    ...t,
                },
                i = (0, r.id)({}, n);
            return new (0, a.p)(e, i);
        },
    };
}

function m(e, t, n, r, a, s, o, l) {
    let c = ["hour", "minute", "second"],
        u = n.formatToParts(e),
        d = [];
    for (let e of u) {
        let n = _[e.type] || e.type,
            u = f[n];
        "era" === n && 1 === s.getEras().length && (u = !1);
        let p = f[n] && !t[n],
            h = f[n] ? (0, i.G)(n, e.value, o) : null,
            m = {
                type: n,
                text: p ? h : e.value,
                ...g(a, n, r),
                isPlaceholder: p,
                placeholder: h,
                isEditable: u,
            };
        "hour" === n
            ? (d.push({
                  type: "literal",
                  text: "⁦",
                  ...g(a, "literal", r),
                  isPlaceholder: !1,
                  placeholder: "",
                  isEditable: !1,
              }),
              d.push(m),
              n === l &&
                  d.push({
                      type: "literal",
                      text: "⁩",
                      ...g(a, "literal", r),
                      isPlaceholder: !1,
                      placeholder: "",
                      isEditable: !1,
                  }))
            : c.includes(n) && n === l
              ? (d.push(m),
                d.push({
                    type: "literal",
                    text: "⁩",
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
                minValue: (0, s.xz)(e),
                maxValue: e.calendar.getMonthsInYear(e),
            };
        case "day":
            return {
                value: e.day,
                minValue: (0, s.oT)(e),
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
            return e.cycle(t, n, {
                round: "year" === t,
            });
    }
    if ("hour" in e)
        switch (t) {
            case "dayPeriod": {
                let t = e.hour,
                    n = t >= 12;
                return e.set({
                    hour: n ? t - 12 : t + 12,
                });
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
            return e.set({
                [t]: n,
            });
    }
    if ("hour" in e && "number" == typeof n)
        switch (t) {
            case "dayPeriod": {
                let t = e.hour,
                    r = t >= 12;
                if (n >= 12 === r) return e;
                return e.set({
                    hour: r ? t - 12 : t + 12,
                });
            }
            case "hour":
                if (r.hour12) {
                    let t = e.hour >= 12;
                    t || 12 !== n || (n = 0), t && n < 12 && (n += 12);
                }
            case "minute":
            case "second":
                return e.set({
                    [t]: n,
                });
        }
    throw Error("Unknown segment: " + t);
}
