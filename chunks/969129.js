r.d(n, {
    PS: function () {
        return s;
    },
    Q3: function () {
        return c;
    },
    W0: function () {
        return m;
    },
    tL: function () {
        return u;
    }
});
var i = r(192379);
let a = {
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
        valid: !0
    },
    o = {
        ...a,
        customError: !0,
        valid: !1
    },
    s = {
        isInvalid: !1,
        validationDetails: a,
        validationErrors: []
    },
    l = (0, i.createContext)({}),
    u = '__formValidationState' + Date.now();
function c(e) {
    if (e[u]) {
        let { realtimeValidation: n, displayValidation: r, updateValidation: i, resetValidation: a, commitValidation: o } = e[u];
        return {
            realtimeValidation: n,
            displayValidation: r,
            updateValidation: i,
            resetValidation: a,
            commitValidation: o
        };
    }
    return d(e);
}
function d(e) {
    let { isInvalid: n, validationState: r, name: a, value: u, builtinValidation: c, validate: d, validationBehavior: m = 'aria' } = e;
    r && (n || (n = 'invalid' === r));
    let g = n
            ? {
                  isInvalid: !0,
                  validationErrors: [],
                  validationDetails: o
              }
            : null,
        E = (0, i.useMemo)(() => h(p(d, u)), [d, u]);
    (null == c ? void 0 : c.validationDetails.valid) && (c = null);
    let v = (0, i.useContext)(l),
        y = (0, i.useMemo)(() => (a ? (Array.isArray(a) ? a.flatMap((e) => f(v[e])) : f(v[a])) : []), [v, a]),
        [b, I] = (0, i.useState)(v),
        [T, S] = (0, i.useState)(!1);
    v !== b && (I(v), S(!1));
    let A = (0, i.useMemo)(() => h(T ? [] : y), [T, y]),
        C = (0, i.useRef)(s),
        [N, R] = (0, i.useState)(s),
        O = (0, i.useRef)(s),
        D = () => {
            if (!L) return;
            x(!1);
            let e = E || c || C.current;
            !_(e, O.current) && ((O.current = e), R(e));
        },
        [L, x] = (0, i.useState)(!1);
    return (
        (0, i.useEffect)(D),
        {
            realtimeValidation: g || A || E || c || s,
            displayValidation: 'native' === m ? g || A || N : g || A || E || c || N,
            updateValidation(e) {
                'aria' !== m || _(N, e) ? (C.current = e) : R(e);
            },
            resetValidation() {
                let e = s;
                !_(e, O.current) && ((O.current = e), R(e)), 'native' === m && x(!1), S(!0);
            },
            commitValidation() {
                'native' === m && x(!0), S(!0);
            }
        }
    );
}
function f(e) {
    return e ? (Array.isArray(e) ? e : [e]) : [];
}
function p(e, n) {
    if ('function' == typeof e) {
        let r = e(n);
        if (r && 'boolean' != typeof r) return f(r);
    }
    return [];
}
function h(e) {
    return e.length
        ? {
              isInvalid: !0,
              validationErrors: e,
              validationDetails: o
          }
        : null;
}
function _(e, n) {
    return e === n || (e && n && e.isInvalid === n.isInvalid && e.validationErrors.length === n.validationErrors.length && e.validationErrors.every((e, r) => e === n.validationErrors[r]) && Object.entries(e.validationDetails).every(([e, r]) => n.validationDetails[e] === r));
}
function m(...e) {
    let n = new Set(),
        r = !1,
        i = { ...a };
    for (let a of e) {
        var o, s;
        for (let e of a.validationErrors) n.add(e);
        for (let e in (r || (r = a.isInvalid), i)) (o = i)[(s = e)] || (o[s] = a.validationDetails[e]);
    }
    return (
        (i.valid = !r),
        {
            isInvalid: r,
            validationErrors: [...n],
            validationDetails: i
        }
    );
}
