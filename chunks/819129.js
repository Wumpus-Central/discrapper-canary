n.d(t, {
    PS: () => o,
    Q3: () => c,
    W0: () => h,
    tL: () => l,
});
var r = n(647438);
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
    a = {
        ...i,
        customError: !0,
        valid: !1,
    },
    o = {
        isInvalid: !1,
        validationDetails: i,
        validationErrors: [],
    },
    s = (0, r.createContext)({}),
    l = "__formValidationState" + Date.now();
function c(e) {
    if (e[l]) {
        let {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: i,
            commitValidation: a,
        } = e[l];
        return {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: i,
            commitValidation: a,
        };
    }
    return u(e);
}
function u(e) {
    let {
        isInvalid: t,
        validationState: n,
        name: i,
        value: l,
        builtinValidation: c,
        validate: u,
        validationBehavior: h = "aria",
    } = e;
    n && (t || (t = "invalid" === n));
    let m =
            void 0 !== t
                ? {
                      isInvalid: t,
                      validationErrors: [],
                      validationDetails: a,
                  }
                : null,
        g = (0, r.useMemo)(() => (u && null != l ? _(f(u, l)) : null), [u, l]);
    (null == c ? void 0 : c.validationDetails.valid) && (c = void 0);
    let E = (0, r.useContext)(s),
        b = (0, r.useMemo)(() => (i ? (Array.isArray(i) ? i.flatMap((e) => d(E[e])) : d(E[i])) : []), [E, i]),
        [y, O] = (0, r.useState)(E),
        [v, I] = (0, r.useState)(!1);
    E !== y && (O(E), I(!1));
    let T = (0, r.useMemo)(() => _(v ? [] : b), [v, b]),
        S = (0, r.useRef)(o),
        [A, C] = (0, r.useState)(o),
        N = (0, r.useRef)(o),
        R = () => {
            if (!P) return;
            D(!1);
            let e = g || c || S.current;
            p(e, N.current) || ((N.current = e), C(e));
        },
        [P, D] = (0, r.useState)(!1);
    return (
        (0, r.useEffect)(R),
        {
            realtimeValidation: m || T || g || c || o,
            displayValidation: "native" === h ? m || T || A : m || T || g || c || A,
            updateValidation(e) {
                "aria" !== h || p(A, e) ? (S.current = e) : C(e);
            },
            resetValidation() {
                let e = o;
                p(e, N.current) || ((N.current = e), C(e)), "native" === h && D(!1), I(!0);
            },
            commitValidation() {
                "native" === h && D(!0), I(!0);
            },
        }
    );
}
function d(e) {
    return e ? (Array.isArray(e) ? e : [e]) : [];
}
function f(e, t) {
    if ("function" == typeof e) {
        let n = e(t);
        if (n && "boolean" != typeof n) return d(n);
    }
    return [];
}
function _(e) {
    return e.length
        ? {
              isInvalid: !0,
              validationErrors: e,
              validationDetails: a,
          }
        : null;
}
function p(e, t) {
    return (
        e === t ||
        (!!e &&
            !!t &&
            e.isInvalid === t.isInvalid &&
            e.validationErrors.length === t.validationErrors.length &&
            e.validationErrors.every((e, n) => e === t.validationErrors[n]) &&
            Object.entries(e.validationDetails).every(([e, n]) => t.validationDetails[e] === n))
    );
}
function h(...e) {
    let t = new Set(),
        n = !1,
        r = { ...i };
    for (let i of e) {
        var a, o;
        for (let e of i.validationErrors) t.add(e);
        for (let e in (n || (n = i.isInvalid), r)) (a = r)[(o = e)] || (a[o] = i.validationDetails[e]);
    }
    return (
        (r.valid = !n),
        {
            isInvalid: n,
            validationErrors: [...t],
            validationDetails: r,
        }
    );
}
