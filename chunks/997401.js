var n = r(582128);
let i = {
        badInput: !1,
        customError: !1,
        patternMismatch: !1,
        rangeOverflow: !1,
        rangeUnderflow: !1,
        stepMismatch: !1,
        tooLong: !1,
        tooShort: !1,
        typeMismatch: !1,
        valueMissing: !1,
        valid: !0,
    },
    o = { ...i, customError: !0, valid: !1 },
    a = { isInvalid: !1, validationDetails: i, validationErrors: [] },
    s = (0, n.createContext)({}),
    l = "__reactAriaFormValidationState";
function u(e) {
    return e ? (Array.isArray(e) ? e : [e]) : [];
}
function c(e) {
    return e.length ? { isInvalid: !0, validationErrors: e, validationDetails: o } : null;
}
function f(e, t) {
    return (
        e === t ||
        (!!e &&
            !!t &&
            e.isInvalid === t.isInvalid &&
            e.validationErrors.length === t.validationErrors.length &&
            e.validationErrors.every((e, r) => e === t.validationErrors[r]) &&
            Object.entries(e.validationDetails).every((e) => {
                let [r, n] = e;
                return t.validationDetails[r] === n;
            }))
    );
}
r.d(
    t,
    {},
    {
        KZ: function (e) {
            if (e[l]) {
                let {
                    realtimeValidation: t,
                    displayValidation: r,
                    updateValidation: n,
                    resetValidation: i,
                    commitValidation: o,
                } = e[l];
                return {
                    realtimeValidation: t,
                    displayValidation: r,
                    updateValidation: n,
                    resetValidation: i,
                    commitValidation: o,
                };
            }
            return (function (e) {
                let {
                    isInvalid: t,
                    validationState: r,
                    name: i,
                    value: l,
                    builtinValidation: p,
                    validate: d,
                    validationBehavior: h = "aria",
                } = e;
                r && (t ||= "invalid" === r);
                let m = void 0 !== t ? { isInvalid: t, validationErrors: [], validationDetails: o } : null,
                    v = (0, n.useMemo)(
                        () =>
                            d && null != l
                                ? c(
                                      (function (e, t) {
                                          if ("function" == typeof e) {
                                              let r = e(t);
                                              if (r && "boolean" != typeof r) return u(r);
                                          }
                                          return [];
                                      })(d, l),
                                  )
                                : null,
                        [d, l],
                    );
                p?.validationDetails.valid && (p = void 0);
                let y = (0, n.useContext)(s),
                    g = (0, n.useMemo)(
                        () => (i ? (Array.isArray(i) ? i.flatMap((e) => u(y[e])) : u(y[i])) : []),
                        [y, i],
                    ),
                    [b, w] = (0, n.useState)(y),
                    [_, S] = (0, n.useState)(!1);
                y !== b && (w(y), S(!1));
                let E = (0, n.useMemo)(() => c(_ ? [] : g), [_, g]),
                    x = (0, n.useRef)(a),
                    [k, C] = (0, n.useState)(a),
                    T = (0, n.useRef)(a),
                    [M, P] = (0, n.useState)(!1);
                return (
                    (0, n.useEffect)(() => {
                        if (!M) return;
                        P(!1);
                        let e = v || p || x.current;
                        f(e, T.current) || ((T.current = e), C(e));
                    }),
                    {
                        realtimeValidation: m || E || v || p || a,
                        displayValidation: "native" === h ? m || E || k : m || E || v || p || k,
                        updateValidation(e) {
                            "aria" !== h || f(k, e) ? (x.current = e) : C(e);
                        },
                        resetValidation() {
                            (f(a, T.current) || ((T.current = a), C(a)), "native" === h && P(!1), S(!0));
                        },
                        commitValidation() {
                            ("native" === h && P(!0), S(!0));
                        },
                    }
                );
            })(e);
        },
        Lf: l,
        YD: a,
        cX: function () {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            let n = new Set(),
                o = !1,
                a = { ...i };
            for (let e of t) {
                for (let t of e.validationErrors) n.add(t);
                for (let t in ((o ||= e.isInvalid), a)) a[t] ||= e.validationDetails[t];
            }
            return ((a.valid = !o), { isInvalid: o, validationErrors: [...n], validationDetails: a });
        },
        oE: i,
    },
);
