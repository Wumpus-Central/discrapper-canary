(n.d(t, { G: () => b }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(84735),
    l = n(15127),
    c = n(897037),
    u = n(388032),
    d = n(165005);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            }));
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function E(e, t) {
    let n = i.useContext(l.q3);
    return (
        i.useEffect(() => {
            var r, i;
            (null == (r = n.setHasValue) || r.call(n, (null != t && '' !== t) || (null != e && '' !== e)), null == (i = n.setIsFocused) || i.call(n, !1));
        }, []),
        i.useEffect(() => {
            if (null != e && '' !== e) {
                var t;
                null == (t = n.setHasValue) || t.call(n, !0);
            }
        }, [n, e]),
        n
    );
}
function b(e) {
    var t,
        { className: n, inputClassName: a, disabled: l = !1, editable: f, inputRef: p, prefixElement: g, focusProps: b, name: y = '', type: O = 'text', placeholder: v = '', maxLength: I = 999, value: T, defaultValue: S, minLength: A, error: N, defaultDirty: C = !1 } = e,
        w = m(e, ['className', 'inputClassName', 'disabled', 'editable', 'inputRef', 'prefixElement', 'focusProps', 'name', 'type', 'placeholder', 'maxLength', 'value', 'defaultValue', 'minLength', 'error', 'defaultDirty']);
    let [R, P] = i.useState(C),
        D = E(T, S),
        L = (e) => {
            var t, n;
            (null == (t = w.onChange) || t.call(w, e.currentTarget.value, y), P(!0), null == (n = D.setHasValue) || n.call(D, '' !== e.currentTarget.value));
        },
        x = (e) => {
            var t, n;
            (null == (t = w.onFocus) || t.call(w, e, y), null == (n = D.setIsFocused) || n.call(D, !0));
        },
        k = (e) => {
            var t, n;
            (null == (t = w.onBlur) || t.call(w, e, y), null == (n = D.setIsFocused) || n.call(D, !1));
        },
        j = i.useMemo(() => {
            var e, t;
            return null === N || '' === N ? null : null != N ? N : R ? (null != A && (null != (e = null == T ? void 0 : T.length) ? e : 0) < A ? u.intl.formatToPlainString(u.t['62rk1N'], { minLength: A }) : null != I && (null != (t = null == T ? void 0 : T.length) ? t : 0) > I ? u.intl.formatToPlainString(u.t.ICT5S0, { maxLength: I }) : null) : null;
        }, [N, R, A, I, null == T ? void 0 : T.length]),
        M = (null != N && '' !== N) || null != j;
    return (0, r.jsxs)('div', {
        className: o()(d.inputWrapper, n),
        children: [
            null != g && g,
            (0, r.jsx)(
                s.t,
                h(_({}, b), {
                    children: (0, r.jsx)(
                        'input',
                        h(
                            _(
                                {
                                    name: y,
                                    className: o()(d.input, a, {
                                        [d.error]: M,
                                        [d.disabled]: l,
                                        [d.editable]: f
                                    }),
                                    disabled: l,
                                    readOnly: !1 === f || void 0,
                                    type: O,
                                    placeholder: v,
                                    maxLength: I,
                                    minLength: A,
                                    value: T,
                                    defaultValue: S
                                },
                                w
                            ),
                            {
                                'aria-labelledby': null != (t = w['aria-labelledby']) ? t : D.titleId,
                                onChange: L,
                                onBlur: k,
                                onFocus: x,
                                ref: p
                            }
                        )
                    )
                })
            ),
            (0, r.jsx)(c.V, { error: j })
        ]
    });
}
