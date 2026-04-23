t.d(a, { F: () => D });
var r = t(22299),
    n = t(861170),
    i = t(515702),
    l = t(352404),
    o = t(376472),
    u = t(142922),
    s = t(339241),
    d = t(492313),
    c = t(64700);
let m = { year: !0, month: !0, day: !0, hour: !0, minute: !0, second: !0, dayPeriod: !0, era: !0 },
    h = { year: 5, month: 2, day: 7, hour: 2, minute: 15, second: 15 },
    y = { dayperiod: "dayPeriod", relatedYear: "year", yearName: "literal", unknown: "literal" };
function D(e) {
    var a, t, D;
    let {
            locale: g,
            createCalendar: v,
            hideTimeZone: f,
            isDisabled: b = !1,
            isReadOnly: A = !1,
            isRequired: R = !1,
            minValue: $,
            maxValue: w,
            isDateUnavailable: P,
        } = e,
        C = e.value || e.defaultValue || e.placeholderValue || null,
        [k, x] = (0, r.bf)(C, e.granularity),
        E = x || "UTC";
    if (C && !(k in C)) throw Error("Invalid granularity " + k + " for value " + C.toString());
    let S = (0, c.useMemo)(() => new (0, i.p)(g), [g]),
        V = (0, c.useMemo)(() => v(S.resolvedOptions().calendar), [v, S]),
        [F, B] = (0, d.P)(e.value, null != (a = e.defaultValue) ? a : null, e.onChange),
        [M] = (0, c.useState)(F),
        I = (0, c.useMemo)(() => {
            var e;
            return null != (e = (0, r.nf)(F, V)) ? e : null;
        }, [F, V]),
        [T, O] = (0, c.useState)(() => (0, r.o_)(e.placeholderValue, k, V, x)),
        N = "gregory" === V.identifier && "BC" === (I || T).era,
        Z = (0, c.useMemo)(() => {
            var a;
            return {
                granularity: k,
                maxGranularity: null != (a = e.maxGranularity) ? a : "year",
                timeZone: x,
                hideTimeZone: f,
                hourCycle: e.hourCycle,
                showEra: N,
                shouldForceLeadingZeros: e.shouldForceLeadingZeros,
            };
        }, [e.maxGranularity, k, e.hourCycle, e.shouldForceLeadingZeros, x, f, N]),
        z = (0, c.useMemo)(() => (0, r.id)({}, Z), [Z]),
        U = (0, c.useMemo)(() => new (0, i.p)(g, z), [g, z]),
        j = (0, c.useMemo)(() => U.resolvedOptions(), [U]),
        K = (0, c.useMemo)(
            () =>
                U.formatToParts(new Date())
                    .filter((e) => m[e.type])
                    .reduce((e, a) => ((e[y[a.type] || a.type] = !0), e), {}),
            [U],
        ),
        [L, J] = (0, c.useState)(() => (e.value || e.defaultValue ? { ...K } : {})),
        Y = (0, c.useRef)(null),
        W = (0, c.useRef)(V);
    (0, c.useEffect)(() => {
        (0, l.Jg)(V, W.current) ||
            ((W.current = V),
            O((a) => (Object.keys(L).length > 0 ? (0, o.yP)(a, V) : (0, r.o_)(e.placeholderValue, k, V, x))));
    }, [V, k, L, x, e.placeholderValue]),
        F && Object.keys(L).length < Object.keys(K).length && J((L = { ...K })),
        null == F &&
            Object.keys(L).length === Object.keys(K).length &&
            (J((L = {})), O((0, r.o_)(e.placeholderValue, k, V, x)));
    let G = I && Object.keys(L).length >= Object.keys(K).length ? I : T,
        H = (a) => {
            if (e.isDisabled || e.isReadOnly) return;
            let t = Object.keys(L),
                n = Object.keys(K);
            null == a
                ? (B(null), O((0, r.o_)(e.placeholderValue, k, V, x)), J({}))
                : (0 === t.length && null == Y.current) ||
                    t.length >= n.length ||
                    (t.length === n.length - 1 && K.dayPeriod && !L.dayPeriod && "dayPeriod" !== Y.current)
                  ? (0 === t.length && J((L = { ...K })),
                    B((a = (0, o.yP)(a, (null == C ? void 0 : C.calendar) || new (0, u.FG)()))))
                  : O(a),
                (Y.current = null);
        },
        _ = (0, c.useMemo)(() => G.toDate(E), [G, E]),
        q = (0, c.useMemo)(
            () =>
                (function (e, a, t, r, i, l, o, u) {
                    let s = ["hour", "minute", "second"],
                        d = t.formatToParts(e),
                        c = [];
                    for (let e of d) {
                        let t = y[e.type] || e.type,
                            d = m[t];
                        "era" === t && 1 === l.getEras().length && (d = !1);
                        let h = m[t] && !a[t],
                            D = m[t] ? (0, n.G)(t, e.value, o) : null,
                            g = {
                                type: t,
                                text: h ? D : e.value,
                                ...p(i, t, r),
                                isPlaceholder: h,
                                placeholder: D,
                                isEditable: d,
                            };
                        "hour" === t
                            ? (c.push({
                                  type: "literal",
                                  text: "⁦",
                                  ...p(i, "literal", r),
                                  isPlaceholder: !1,
                                  placeholder: "",
                                  isEditable: !1,
                              }),
                              c.push(g),
                              t === u &&
                                  c.push({
                                      type: "literal",
                                      text: "⁩",
                                      ...p(i, "literal", r),
                                      isPlaceholder: !1,
                                      placeholder: "",
                                      isEditable: !1,
                                  }))
                            : s.includes(t) && t === u
                              ? (c.push(g),
                                c.push({
                                    type: "literal",
                                    text: "⁩",
                                    ...p(i, "literal", r),
                                    isPlaceholder: !1,
                                    placeholder: "",
                                    isEditable: !1,
                                }))
                              : c.push(g);
                    }
                    return c;
                })(_, L, U, j, G, V, g, k),
            [_, L, U, j, G, V, g, k],
        );
    K.era && L.year && !L.era ? ((L.era = !0), J({ ...L })) : !K.era && L.era && (delete L.era, J({ ...L }));
    let Q = (e) => {
            (L[e] = !0), "year" === e && K.era && (L.era = !0), J({ ...L });
        },
        X = (e, a) => {
            if (L[e])
                H(
                    (function (e, a, t, r) {
                        switch (a) {
                            case "era":
                            case "year":
                            case "month":
                            case "day":
                                return e.cycle(a, t, { round: "year" === a });
                        }
                        if ("hour" in e)
                            switch (a) {
                                case "dayPeriod": {
                                    let a = e.hour;
                                    return e.set({ hour: a >= 12 ? a - 12 : a + 12 });
                                }
                                case "hour":
                                case "minute":
                                case "second":
                                    return e.cycle(a, t, { round: "hour" !== a, hourCycle: r.hour12 ? 12 : 24 });
                            }
                        throw Error("Unknown segment: " + a);
                    })(G, e, a, j),
                );
            else {
                Q(e);
                let a = Object.keys(L),
                    t = Object.keys(K);
                (a.length >= t.length || (a.length === t.length - 1 && K.dayPeriod && !L.dayPeriod)) && H(G);
            }
        },
        ee = (0, c.useMemo)(() => (0, r.nz)(F, $, w, P, Z), [F, $, w, P, Z]),
        ea = (0, s.KZ)({ ...e, value: F, builtinValidation: ee }),
        et = ea.displayValidation.isInvalid,
        er = e.validationState || (et ? "invalid" : null);
    return {
        ...ea,
        value: I,
        defaultValue: null != (t = e.defaultValue) ? t : M,
        dateValue: _,
        calendar: V,
        setValue: H,
        segments: q,
        dateFormatter: U,
        validationState: er,
        isInvalid: et,
        granularity: k,
        maxGranularity: null != (D = e.maxGranularity) ? D : "year",
        isDisabled: b,
        isReadOnly: A,
        isRequired: R,
        increment(e) {
            X(e, 1);
        },
        decrement(e) {
            X(e, -1);
        },
        incrementPage(e) {
            X(e, h[e] || 1);
        },
        decrementPage(e) {
            X(e, -(h[e] || 1));
        },
        setSegment(e, a) {
            Q(e),
                H(
                    (function (e, a, t, r) {
                        switch (a) {
                            case "day":
                            case "month":
                            case "year":
                            case "era":
                                return e.set({ [a]: t });
                        }
                        if ("hour" in e && "number" == typeof t)
                            switch (a) {
                                case "dayPeriod": {
                                    let a = e.hour,
                                        r = a >= 12;
                                    if (t >= 12 === r) return e;
                                    return e.set({ hour: r ? a - 12 : a + 12 });
                                }
                                case "hour":
                                    if (r.hour12) {
                                        let a = e.hour >= 12;
                                        a || 12 !== t || (t = 0), a && t < 12 && (t += 12);
                                    }
                                case "minute":
                                case "second":
                                    return e.set({ [a]: t });
                            }
                        throw Error("Unknown segment: " + a);
                    })(G, e, a, j),
                );
        },
        confirmPlaceholder() {
            if (e.isDisabled || e.isReadOnly) return;
            let a = Object.keys(L),
                t = Object.keys(K);
            a.length === t.length - 1 && K.dayPeriod && !L.dayPeriod && (J((L = { ...K })), H(G.copy()));
        },
        clearSegment(a) {
            delete L[a], (Y.current = a), J({ ...L });
            let t = (0, r.o_)(e.placeholderValue, k, V, x),
                n = G;
            if ("dayPeriod" === a && "hour" in G && "hour" in t) {
                let e = G.hour >= 12,
                    a = t.hour >= 12;
                e && !a ? (n = G.set({ hour: G.hour - 12 })) : !e && a && (n = G.set({ hour: G.hour + 12 }));
            } else
                "hour" === a && "hour" in G && G.hour >= 12 && L.dayPeriod
                    ? (n = G.set({ hour: t.hour + 12 }))
                    : a in G && (n = G.set({ [a]: t[a] }));
            B(null), H(n);
        },
        formatValue(e) {
            if (!I) return "";
            let a = (0, r.id)(e, Z);
            return new (0, i.p)(g, a).format(_);
        },
        getDateFormatter(e, a) {
            let t = { ...Z, ...a },
                n = (0, r.id)({}, t);
            return new (0, i.p)(e, n);
        },
    };
}
function p(e, a, t) {
    switch (a) {
        case "era": {
            let a = e.calendar.getEras();
            return { value: a.indexOf(e.era), minValue: 0, maxValue: a.length - 1 };
        }
        case "year":
            return { value: e.year, minValue: 1, maxValue: e.calendar.getYearsInEra(e) };
        case "month":
            return { value: e.month, minValue: (0, l.xz)(e), maxValue: e.calendar.getMonthsInYear(e) };
        case "day":
            return { value: e.day, minValue: (0, l.oT)(e), maxValue: e.calendar.getDaysInMonth(e) };
    }
    if ("hour" in e)
        switch (a) {
            case "dayPeriod":
                return { value: 12 * (e.hour >= 12), minValue: 0, maxValue: 12 };
            case "hour":
                if (t.hour12) {
                    let a = e.hour >= 12;
                    return { value: e.hour, minValue: 12 * !!a, maxValue: a ? 23 : 11 };
                }
                return { value: e.hour, minValue: 0, maxValue: 23 };
            case "minute":
                return { value: e.minute, minValue: 0, maxValue: 59 };
            case "second":
                return { value: e.second, minValue: 0, maxValue: 59 };
        }
    return {};
}
