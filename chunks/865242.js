r.d(n, {
    j: function () {
        return s;
    }
});
var i = r(239700),
    a = r(881085),
    o = r(192379);
function s(e) {
    let { minValue: n, maxValue: r, step: s, formatOptions: u, value: c, defaultValue: d, onChange: f, locale: p, isDisabled: h, isReadOnly: _ } = e,
        [m, g] = (0, i.zk)(c, isNaN(d) ? NaN : d, f),
        [E, v] = (0, o.useState)(() => (isNaN(m) ? '' : new (0, a.e)(p, u).format(m))),
        y = (0, o.useMemo)(() => new a.d(p, u), [p, u]),
        b = (0, o.useMemo)(() => y.getNumberingSystem(E), [y, E]),
        I = (0, o.useMemo)(
            () =>
                new a.e(p, {
                    ...u,
                    numberingSystem: b
                }),
            [p, u, b]
        ),
        T = (0, o.useMemo)(() => I.resolvedOptions(), [I]),
        S = (0, o.useCallback)((e) => (isNaN(e) || null === e ? '' : I.format(e)), [I]),
        A = isNaN(s) ? 1 : s;
    'percent' === T.style && isNaN(s) && (A = 0.01);
    let [C, N] = (0, o.useState)(m),
        [R, O] = (0, o.useState)(p),
        [D, x] = (0, o.useState)(u);
    (!Object.is(m, C) || p !== R || u !== D) && (v(S(m)), N(m), O(p), x(u));
    let L = (0, o.useMemo)(() => y.parse(E), [y, E]),
        w = () => {
            let e;
            if (!E.length) {
                g(NaN), v(void 0 === c ? '' : S(m));
                return;
            }
            if (isNaN(L)) {
                v(S(m));
                return;
            }
            (e = isNaN(s) ? (0, i.uZ)(L, n, r) : (0, i.N4)(L, n, r, s)), g((e = y.parse(S(e)))), v(S(void 0 === c ? e : m));
        },
        P = (e, a) => {
            let o = L;
            if (isNaN(o)) {
                let e = isNaN(a) ? 0 : a;
                return (0, i.N4)(e, n, r, A);
            }
            {
                let a = (0, i.N4)(o, n, r, A);
                return ('+' === e && a > o) || ('-' === e && a < o) ? a : (0, i.N4)(l(e, o, A), n, r, A);
            }
        };
    return {
        validate: (e) => y.isValidPartialNumber(e, n, r),
        increment: () => {
            let e = P('+', n);
            e === m && v(S(e)), g(e);
        },
        incrementToMax: () => {
            null != r && g((0, i.N4)(r, n, r, A));
        },
        decrement: () => {
            let e = P('-', r);
            e === m && v(S(e)), g(e);
        },
        decrementToMin: () => {
            null != n && g(n);
        },
        canIncrement: (0, o.useMemo)(() => !h && !_ && (isNaN(L) || isNaN(r) || (0, i.N4)(L, n, r, A) > L || l('+', L, A) <= r), [h, _, n, r, A, L]),
        canDecrement: (0, o.useMemo)(() => !h && !_ && (isNaN(L) || isNaN(n) || (0, i.N4)(L, n, r, A) < L || l('-', L, A) >= n), [h, _, n, r, A, L]),
        minValue: n,
        maxValue: r,
        numberValue: L,
        setNumberValue: g,
        setInputValue: v,
        inputValue: E,
        commit: w
    };
}
function l(e, n, r) {
    let i = '+' === e ? n + r : n - r;
    if (n % 1 != 0 || r % 1 != 0) {
        let a = n.toString().split('.'),
            o = r.toString().split('.'),
            s = (a[1] && a[1].length) || 0,
            l = Math.pow(10, Math.max(s, (o[1] && o[1].length) || 0));
        (n = Math.round(n * l)), (r = Math.round(r * l)), (i = ('+' === e ? n + r : n - r) / l);
    }
    return i;
}
