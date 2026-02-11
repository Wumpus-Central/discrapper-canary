"use strict";
n.d(t, { F: () => p });
var r = n(22299),
    i = n(861170),
    a = n(515702),
    s = n(352404),
    o = n(376472),
    l = n(142922),
    u = n(339241),
    c = n(492313),
    d = n(64700);
let _ = { year: !0, month: !0, day: !0, hour: !0, minute: !0, second: !0, dayPeriod: !0, era: !0 },
    f = { year: 5, month: 2, day: 7, hour: 2, minute: 15, second: 15 },
    h = { dayperiod: "dayPeriod", relatedYear: "year", yearName: "literal", unknown: "literal" };
function p(e) {
    var t, n, i;
    let {
            locale: p,
            createCalendar: E,
            hideTimeZone: T,
            isDisabled: y = !1,
            isReadOnly: S = !1,
            isRequired: v = !1,
            minValue: C,
            maxValue: b,
            isDateUnavailable: N,
        } = e,
        R = e.value || e.defaultValue || e.placeholderValue || null,
        [O, D] = (0, r.bf)(R, e.granularity),
        L = D || "UTC";
    if (R && !(O in R)) throw Error("Invalid granularity " + O + " for value " + R.toString());
    let w = (0, d.useMemo)(() => new (0, a.p)(p), [p]),
        x = (0, d.useMemo)(() => E(w.resolvedOptions().calendar), [E, w]),
        [P, M] = (0, c.P)(e.value, null != (t = e.defaultValue) ? t : null, e.onChange),
        [k] = (0, d.useState)(P),
        U = (0, d.useMemo)(() => {
            var e;
            return null != (e = (0, r.nf)(P, x)) ? e : null;
        }, [P, x]),
        [G, F] = (0, d.useState)(() => (0, r.o_)(e.placeholderValue, O, x, D)),
        V = U || G,
        B = "gregory" === x.identifier && "BC" === V.era,
        j = (0, d.useMemo)(() => {
            var t;
            return {
                granularity: O,
                maxGranularity: null != (t = e.maxGranularity) ? t : "year",
                timeZone: D,
                hideTimeZone: T,
                hourCycle: e.hourCycle,
                showEra: B,
                shouldForceLeadingZeros: e.shouldForceLeadingZeros,
            };
        }, [e.maxGranularity, O, e.hourCycle, e.shouldForceLeadingZeros, D, T, B]),
        H = (0, d.useMemo)(() => (0, r.id)({}, j), [j]),
        Y = (0, d.useMemo)(() => new (0, a.p)(p, H), [p, H]),
        W = (0, d.useMemo)(() => Y.resolvedOptions(), [Y]),
        K = (0, d.useMemo)(
            () =>
                Y.formatToParts(new Date())
                    .filter((e) => _[e.type])
                    .reduce((e, t) => ((e[h[t.type] || t.type] = !0), e), {}),
            [Y],
        ),
        [$, z] = (0, d.useState)(() => (e.value || e.defaultValue ? { ...K } : {})),
        q = (0, d.useRef)(null),
        X = (0, d.useRef)(x);
    (0, d.useEffect)(() => {
        (0, s.Jg)(x, X.current) ||
            ((X.current = x),
            F((t) => (Object.keys($).length > 0 ? (0, o.yP)(t, x) : (0, r.o_)(e.placeholderValue, O, x, D))));
    }, [x, O, $, D, e.placeholderValue]),
        P && Object.keys($).length < Object.keys(K).length && z(($ = { ...K })),
        null == P &&
            Object.keys($).length === Object.keys(K).length &&
            (z(($ = {})), F((0, r.o_)(e.placeholderValue, O, x, D)));
    let Z = U && Object.keys($).length >= Object.keys(K).length ? U : G,
        Q = (t) => {
            if (e.isDisabled || e.isReadOnly) return;
            let n = Object.keys($),
                i = Object.keys(K);
            null == t
                ? (M(null), F((0, r.o_)(e.placeholderValue, O, x, D)), z({}))
                : (0 === n.length && null == q.current) ||
                    n.length >= i.length ||
                    (n.length === i.length - 1 && K.dayPeriod && !$.dayPeriod && "dayPeriod" !== q.current)
                  ? (0 === n.length && z(($ = { ...K })),
                    M((t = (0, o.yP)(t, (null == R ? void 0 : R.calendar) || new (0, l.FG)()))))
                  : F(t),
                (q.current = null);
        },
        J = (0, d.useMemo)(() => Z.toDate(L), [Z, L]),
        ee = (0, d.useMemo)(() => g(J, $, Y, W, Z, x, p, O), [J, $, Y, W, Z, x, p, O]);
    K.era && $.year && !$.era ? (($.era = !0), z({ ...$ })) : !K.era && $.era && (delete $.era, z({ ...$ }));
    let et = (e) => {
            ($[e] = !0), "year" === e && K.era && ($.era = !0), z({ ...$ });
        },
        en = (e, t) => {
            if ($[e]) Q(A(Z, e, t, W));
            else {
                et(e);
                let t = Object.keys($),
                    n = Object.keys(K);
                (t.length >= n.length || (t.length === n.length - 1 && K.dayPeriod && !$.dayPeriod)) && Q(Z);
            }
        },
        er = (0, d.useMemo)(() => (0, r.nz)(P, C, b, N, j), [P, C, b, N, j]),
        ei = (0, u.KZ)({ ...e, value: P, builtinValidation: er }),
        ea = ei.displayValidation.isInvalid,
        es = e.validationState || (ea ? "invalid" : null);
    return {
        ...ei,
        value: U,
        defaultValue: null != (n = e.defaultValue) ? n : k,
        dateValue: J,
        calendar: x,
        setValue: Q,
        segments: ee,
        dateFormatter: Y,
        validationState: es,
        isInvalid: ea,
        granularity: O,
        maxGranularity: null != (i = e.maxGranularity) ? i : "year",
        isDisabled: y,
        isReadOnly: S,
        isRequired: v,
        increment(e) {
            en(e, 1);
        },
        decrement(e) {
            en(e, -1);
        },
        incrementPage(e) {
            en(e, f[e] || 1);
        },
        decrementPage(e) {
            en(e, -(f[e] || 1));
        },
        setSegment(e, t) {
            et(e), Q(I(Z, e, t, W));
        },
        confirmPlaceholder() {
            if (e.isDisabled || e.isReadOnly) return;
            let t = Object.keys($),
                n = Object.keys(K);
            t.length === n.length - 1 && K.dayPeriod && !$.dayPeriod && (z(($ = { ...K })), Q(Z.copy()));
        },
        clearSegment(t) {
            delete $[t], (q.current = t), z({ ...$ });
            let n = (0, r.o_)(e.placeholderValue, O, x, D),
                i = Z;
            if ("dayPeriod" === t && "hour" in Z && "hour" in n) {
                let e = Z.hour >= 12,
                    t = n.hour >= 12;
                e && !t ? (i = Z.set({ hour: Z.hour - 12 })) : !e && t && (i = Z.set({ hour: Z.hour + 12 }));
            } else
                "hour" === t && "hour" in Z && Z.hour >= 12 && $.dayPeriod
                    ? (i = Z.set({ hour: n.hour + 12 }))
                    : t in Z && (i = Z.set({ [t]: n[t] }));
            M(null), Q(i);
        },
        formatValue(e) {
            if (!U) return "";
            let t = (0, r.id)(e, j);
            return new (0, a.p)(p, t).format(J);
        },
        getDateFormatter(e, t) {
            let n = { ...j, ...t },
                i = (0, r.id)({}, n);
            return new (0, a.p)(e, i);
        },
    };
}
function g(e, t, n, r, a, s, o, l) {
    let u = ["hour", "minute", "second"],
        c = n.formatToParts(e),
        d = [];
    for (let e of c) {
        let n = h[e.type] || e.type,
            c = _[n];
        "era" === n && 1 === s.getEras().length && (c = !1);
        let f = _[n] && !t[n],
            p = _[n] ? (0, i.G)(n, e.value, o) : null,
            g = { type: n, text: f ? p : e.value, ...E(a, n, r), isPlaceholder: f, placeholder: p, isEditable: c };
        "hour" === n
            ? (d.push({
                  type: "literal",
                  text: "⁦",
                  ...E(a, "literal", r),
                  isPlaceholder: !1,
                  placeholder: "",
                  isEditable: !1,
              }),
              d.push(g),
              n === l &&
                  d.push({
                      type: "literal",
                      text: "⁩",
                      ...E(a, "literal", r),
                      isPlaceholder: !1,
                      placeholder: "",
                      isEditable: !1,
                  }))
            : u.includes(n) && n === l
              ? (d.push(g),
                d.push({
                    type: "literal",
                    text: "⁩",
                    ...E(a, "literal", r),
                    isPlaceholder: !1,
                    placeholder: "",
                    isEditable: !1,
                }))
              : d.push(g);
    }
    return d;
}
function E(e, t, n) {
    switch (t) {
        case "era": {
            let t = e.calendar.getEras();
            return { value: t.indexOf(e.era), minValue: 0, maxValue: t.length - 1 };
        }
        case "year":
            return { value: e.year, minValue: 1, maxValue: e.calendar.getYearsInEra(e) };
        case "month":
            return { value: e.month, minValue: (0, s.xz)(e), maxValue: e.calendar.getMonthsInYear(e) };
        case "day":
            return { value: e.day, minValue: (0, s.oT)(e), maxValue: e.calendar.getDaysInMonth(e) };
    }
    if ("hour" in e)
        switch (t) {
            case "dayPeriod":
                return { value: 12 * (e.hour >= 12), minValue: 0, maxValue: 12 };
            case "hour":
                if (n.hour12) {
                    let t = e.hour >= 12;
                    return { value: e.hour, minValue: 12 * !!t, maxValue: t ? 23 : 11 };
                }
                return { value: e.hour, minValue: 0, maxValue: 23 };
            case "minute":
                return { value: e.minute, minValue: 0, maxValue: 59 };
            case "second":
                return { value: e.second, minValue: 0, maxValue: 59 };
        }
    return {};
}
function A(e, t, n, r) {
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
                return e.cycle(t, n, { round: "hour" !== t, hourCycle: r.hour12 ? 12 : 24 });
        }
    throw Error("Unknown segment: " + t);
}
function I(e, t, n, r) {
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
