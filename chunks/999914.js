t.d(a, { F: () => y });
var r = t(22299),
    n = t(861170),
    i = t(515702),
    o = t(352404),
    u = t(376472),
    l = t(142922),
    s = t(339241),
    d = t(492313),
    c = t(64700);
let m = { year: !0, month: !0, day: !0, hour: !0, minute: !0, second: !0, dayPeriod: !0, era: !0 },
    h = { year: 5, month: 2, day: 7, hour: 2, minute: 15, second: 15 },
    D = { dayperiod: "dayPeriod", relatedYear: "year", yearName: "literal", unknown: "literal" };
function y(e) {
    var a, t, y;
    let {
            locale: g,
            createCalendar: f,
            hideTimeZone: v,
            isDisabled: b = !1,
            isReadOnly: A = !1,
            isRequired: $ = !1,
            minValue: w,
            maxValue: R,
            isDateUnavailable: P,
        } = e,
        k = e.value || e.defaultValue || e.placeholderValue || null,
        [x, C] = (0, r.bf)(k, e.granularity),
        E = C || "UTC";
    if (k && !(x in k)) throw Error("Invalid granularity " + x + " for value " + k.toString());
    let S = (0, c.useMemo)(() => new (0, i.p)(g), [g]),
        F = (0, c.useMemo)(() => f(S.resolvedOptions().calendar), [f, S]),
        [B, V] = (0, d.P)(e.value, null != (a = e.defaultValue) ? a : null, e.onChange),
        [M] = (0, c.useState)(B),
        I = (0, c.useMemo)(() => {
            var e;
            return null != (e = (0, r.nf)(B, F)) ? e : null;
        }, [B, F]),
        [T, O] = (0, c.useState)(() => (0, r.o_)(e.placeholderValue, x, F, C)),
        N = "gregory" === F.identifier && "BC" === (I || T).era,
        z = (0, c.useMemo)(() => {
            var a;
            return {
                granularity: x,
                maxGranularity: null != (a = e.maxGranularity) ? a : "year",
                timeZone: C,
                hideTimeZone: v,
                hourCycle: e.hourCycle,
                showEra: N,
                shouldForceLeadingZeros: e.shouldForceLeadingZeros,
            };
        }, [e.maxGranularity, x, e.hourCycle, e.shouldForceLeadingZeros, C, v, N]),
        j = (0, c.useMemo)(() => (0, r.id)({}, z), [z]),
        Z = (0, c.useMemo)(() => new (0, i.p)(g, j), [g, j]),
        U = (0, c.useMemo)(() => Z.resolvedOptions(), [Z]),
        K = (0, c.useMemo)(
            () =>
                Z.formatToParts(new Date())
                    .filter((e) => m[e.type])
                    .reduce((e, a) => ((e[D[a.type] || a.type] = !0), e), {}),
            [Z],
        ),
        [L, J] = (0, c.useState)(() => (e.value || e.defaultValue ? { ...K } : {})),
        Y = (0, c.useRef)(null),
        W = (0, c.useRef)(F);
    (0, c.useEffect)(() => {
        (0, o.Jg)(F, W.current) ||
            ((W.current = F),
            O((a) => (Object.keys(L).length > 0 ? (0, u.yP)(a, F) : (0, r.o_)(e.placeholderValue, x, F, C))));
    }, [F, x, L, C, e.placeholderValue]),
        B && Object.keys(L).length < Object.keys(K).length && J((L = { ...K })),
        null == B &&
            Object.keys(L).length === Object.keys(K).length &&
            (J((L = {})), O((0, r.o_)(e.placeholderValue, x, F, C)));
    let G = I && Object.keys(L).length >= Object.keys(K).length ? I : T,
        H = (a) => {
            if (e.isDisabled || e.isReadOnly) return;
            let t = Object.keys(L),
                n = Object.keys(K);
            null == a
                ? (V(null), O((0, r.o_)(e.placeholderValue, x, F, C)), J({}))
                : (0 === t.length && null == Y.current) ||
                    t.length >= n.length ||
                    (t.length === n.length - 1 && K.dayPeriod && !L.dayPeriod && "dayPeriod" !== Y.current)
                  ? (0 === t.length && J((L = { ...K })),
                    V((a = (0, u.yP)(a, (null == k ? void 0 : k.calendar) || new (0, l.FG)()))))
                  : O(a),
                (Y.current = null);
        },
        _ = (0, c.useMemo)(() => G.toDate(E), [G, E]),
        q = (0, c.useMemo)(
            () =>
                (function (e, a, t, r, i, o, u, l) {
                    let s = ["hour", "minute", "second"],
                        d = t.formatToParts(e),
                        c = [];
                    for (let e of d) {
                        let t = D[e.type] || e.type,
                            d = m[t];
                        "era" === t && 1 === o.getEras().length && (d = !1);
                        let h = m[t] && !a[t],
                            y = m[t] ? (0, n.G)(t, e.value, u) : null,
                            g = {
                                type: t,
                                text: h ? y : e.value,
                                ...p(i, t, r),
                                isPlaceholder: h,
                                placeholder: y,
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
                              t === l &&
                                  c.push({
                                      type: "literal",
                                      text: "⁩",
                                      ...p(i, "literal", r),
                                      isPlaceholder: !1,
                                      placeholder: "",
                                      isEditable: !1,
                                  }))
                            : s.includes(t) && t === l
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
                })(_, L, Z, U, G, F, g, x),
            [_, L, Z, U, G, F, g, x],
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
                    })(G, e, a, U),
                );
            else {
                Q(e);
                let a = Object.keys(L),
                    t = Object.keys(K);
                (a.length >= t.length || (a.length === t.length - 1 && K.dayPeriod && !L.dayPeriod)) && H(G);
            }
        },
        ee = (0, c.useMemo)(() => (0, r.nz)(B, w, R, P, z), [B, w, R, P, z]),
        ea = (0, s.KZ)({ ...e, value: B, builtinValidation: ee }),
        et = ea.displayValidation.isInvalid,
        er = e.validationState || (et ? "invalid" : null);
    return {
        ...ea,
        value: I,
        defaultValue: null != (t = e.defaultValue) ? t : M,
        dateValue: _,
        calendar: F,
        setValue: H,
        segments: q,
        dateFormatter: Z,
        validationState: er,
        isInvalid: et,
        granularity: x,
        maxGranularity: null != (y = e.maxGranularity) ? y : "year",
        isDisabled: b,
        isReadOnly: A,
        isRequired: $,
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
                    })(G, e, a, U),
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
            let t = (0, r.o_)(e.placeholderValue, x, F, C),
                n = G;
            if ("dayPeriod" === a && "hour" in G && "hour" in t) {
                let e = G.hour >= 12,
                    a = t.hour >= 12;
                e && !a ? (n = G.set({ hour: G.hour - 12 })) : !e && a && (n = G.set({ hour: G.hour + 12 }));
            } else
                "hour" === a && "hour" in G && G.hour >= 12 && L.dayPeriod
                    ? (n = G.set({ hour: t.hour + 12 }))
                    : a in G && (n = G.set({ [a]: t[a] }));
            V(null), H(n);
        },
        formatValue(e) {
            if (!I) return "";
            let a = (0, r.id)(e, z);
            return new (0, i.p)(g, a).format(_);
        },
        getDateFormatter(e, a) {
            let t = { ...z, ...a },
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
            return { value: e.month, minValue: (0, o.xz)(e), maxValue: e.calendar.getMonthsInYear(e) };
        case "day":
            return { value: e.day, minValue: (0, o.oT)(e), maxValue: e.calendar.getDaysInMonth(e) };
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
