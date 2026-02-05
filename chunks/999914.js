"use strict";
n.d(t, { F: () => h });
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
    p = { dayperiod: "dayPeriod", relatedYear: "year", yearName: "literal", unknown: "literal" };
function h(e) {
    var t, n, i;
    let {
            locale: h,
            createCalendar: g,
            hideTimeZone: I,
            isDisabled: T = !1,
            isReadOnly: y = !1,
            isRequired: S = !1,
            minValue: v,
            maxValue: C,
            isDateUnavailable: b,
        } = e,
        N = e.value || e.defaultValue || e.placeholderValue || null,
        [R, O] = (0, r.bf)(N, e.granularity),
        D = O || "UTC";
    if (N && !(R in N)) throw Error("Invalid granularity " + R + " for value " + N.toString());
    let L = (0, d.useMemo)(() => new (0, a.p)(h), [h]),
        w = (0, d.useMemo)(() => g(L.resolvedOptions().calendar), [g, L]),
        [x, P] = (0, c.P)(e.value, null != (t = e.defaultValue) ? t : null, e.onChange),
        [M] = (0, d.useState)(x),
        k = (0, d.useMemo)(() => {
            var e;
            return null != (e = (0, r.nf)(x, w)) ? e : null;
        }, [x, w]),
        [U, G] = (0, d.useState)(() => (0, r.o_)(e.placeholderValue, R, w, O)),
        V = k || U,
        F = "gregory" === w.identifier && "BC" === V.era,
        B = (0, d.useMemo)(() => {
            var t;
            return {
                granularity: R,
                maxGranularity: null != (t = e.maxGranularity) ? t : "year",
                timeZone: O,
                hideTimeZone: I,
                hourCycle: e.hourCycle,
                showEra: F,
                shouldForceLeadingZeros: e.shouldForceLeadingZeros,
            };
        }, [e.maxGranularity, R, e.hourCycle, e.shouldForceLeadingZeros, O, I, F]),
        j = (0, d.useMemo)(() => (0, r.id)({}, B), [B]),
        H = (0, d.useMemo)(() => new (0, a.p)(h, j), [h, j]),
        Y = (0, d.useMemo)(() => H.resolvedOptions(), [H]),
        W = (0, d.useMemo)(
            () =>
                H.formatToParts(new Date())
                    .filter((e) => _[e.type])
                    .reduce((e, t) => ((e[p[t.type] || t.type] = !0), e), {}),
            [H],
        ),
        [K, z] = (0, d.useState)(() => (e.value || e.defaultValue ? { ...W } : {})),
        $ = (0, d.useRef)(null),
        q = (0, d.useRef)(w);
    (0, d.useEffect)(() => {
        (0, s.Jg)(w, q.current) ||
            ((q.current = w),
            G((t) => (Object.keys(K).length > 0 ? (0, o.yP)(t, w) : (0, r.o_)(e.placeholderValue, R, w, O))));
    }, [w, R, K, O, e.placeholderValue]),
        x && Object.keys(K).length < Object.keys(W).length && z((K = { ...W })),
        null == x &&
            Object.keys(K).length === Object.keys(W).length &&
            (z((K = {})), G((0, r.o_)(e.placeholderValue, R, w, O)));
    let Z = k && Object.keys(K).length >= Object.keys(W).length ? k : U,
        Q = (t) => {
            if (e.isDisabled || e.isReadOnly) return;
            let n = Object.keys(K),
                i = Object.keys(W);
            null == t
                ? (P(null), G((0, r.o_)(e.placeholderValue, R, w, O)), z({}))
                : (0 === n.length && null == $.current) ||
                    n.length >= i.length ||
                    (n.length === i.length - 1 && W.dayPeriod && !K.dayPeriod && "dayPeriod" !== $.current)
                  ? (0 === n.length && z((K = { ...W })),
                    P((t = (0, o.yP)(t, (null == N ? void 0 : N.calendar) || new (0, l.FG)()))))
                  : G(t),
                ($.current = null);
        },
        X = (0, d.useMemo)(() => Z.toDate(D), [Z, D]),
        J = (0, d.useMemo)(() => m(X, K, H, Y, Z, w, h, R), [X, K, H, Y, Z, w, h, R]);
    W.era && K.year && !K.era ? ((K.era = !0), z({ ...K })) : !W.era && K.era && (delete K.era, z({ ...K }));
    let ee = (e) => {
            (K[e] = !0), "year" === e && W.era && (K.era = !0), z({ ...K });
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
        en = (0, d.useMemo)(() => (0, r.nz)(x, v, C, b, B), [x, v, C, b, B]),
        er = (0, u.KZ)({ ...e, value: x, builtinValidation: en }),
        ei = er.displayValidation.isInvalid,
        ea = e.validationState || (ei ? "invalid" : null);
    return {
        ...er,
        value: k,
        defaultValue: null != (n = e.defaultValue) ? n : M,
        dateValue: X,
        calendar: w,
        setValue: Q,
        segments: J,
        dateFormatter: H,
        validationState: ea,
        isInvalid: ei,
        granularity: R,
        maxGranularity: null != (i = e.maxGranularity) ? i : "year",
        isDisabled: T,
        isReadOnly: y,
        isRequired: S,
        increment(e) {
            et(e, 1);
        },
        decrement(e) {
            et(e, -1);
        },
        incrementPage(e) {
            et(e, f[e] || 1);
        },
        decrementPage(e) {
            et(e, -(f[e] || 1));
        },
        setSegment(e, t) {
            ee(e), Q(A(Z, e, t, Y));
        },
        confirmPlaceholder() {
            if (e.isDisabled || e.isReadOnly) return;
            let t = Object.keys(K),
                n = Object.keys(W);
            t.length === n.length - 1 && W.dayPeriod && !K.dayPeriod && (z((K = { ...W })), Q(Z.copy()));
        },
        clearSegment(t) {
            delete K[t], ($.current = t), z({ ...K });
            let n = (0, r.o_)(e.placeholderValue, R, w, O),
                i = Z;
            if ("dayPeriod" === t && "hour" in Z && "hour" in n) {
                let e = Z.hour >= 12,
                    t = n.hour >= 12;
                e && !t ? (i = Z.set({ hour: Z.hour - 12 })) : !e && t && (i = Z.set({ hour: Z.hour + 12 }));
            } else
                "hour" === t && "hour" in Z && Z.hour >= 12 && K.dayPeriod
                    ? (i = Z.set({ hour: n.hour + 12 }))
                    : t in Z && (i = Z.set({ [t]: n[t] }));
            P(null), Q(i);
        },
        formatValue(e) {
            if (!k) return "";
            let t = (0, r.id)(e, B);
            return new (0, a.p)(h, t).format(X);
        },
        getDateFormatter(e, t) {
            let n = { ...B, ...t },
                i = (0, r.id)({}, n);
            return new (0, a.p)(e, i);
        },
    };
}
function m(e, t, n, r, a, s, o, l) {
    let u = ["hour", "minute", "second"],
        c = n.formatToParts(e),
        d = [];
    for (let e of c) {
        let n = p[e.type] || e.type,
            c = _[n];
        "era" === n && 1 === s.getEras().length && (c = !1);
        let f = _[n] && !t[n],
            h = _[n] ? (0, i.G)(n, e.value, o) : null,
            m = { type: n, text: f ? h : e.value, ...g(a, n, r), isPlaceholder: f, placeholder: h, isEditable: c };
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
            : u.includes(n) && n === l
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
                return e.cycle(t, n, { round: "hour" !== t, hourCycle: r.hour12 ? 12 : 24 });
        }
    throw Error("Unknown segment: " + t);
}
function A(e, t, n, r) {
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
