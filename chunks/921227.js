n.d(t, { G: () => b }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(15127),
    c = n(897037),
    u = n(388032),
    d = n(219990);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
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
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function E(e, t) {
    let n = i.useContext(l.q3);
    return (
        i.useEffect(() => {
            var r, i;
            null == (r = n.setHasValue) || r.call(n, (null != t && "" !== t) || (null != e && "" !== e)),
                null == (i = n.setIsFocused) || i.call(n, !1);
        }, []),
        i.useEffect(() => {
            if (null != e && "" !== e) {
                var t;
                null == (t = n.setHasValue) || t.call(n, !0);
            }
        }, [n, e]),
        n
    );
}
function b(e) {
    var t,
        {
            className: n,
            inputClassName: a,
            disabled: l = !1,
            editable: f,
            inputRef: p,
            prefixElement: g,
            focusProps: b,
            name: y = "",
            type: O = "text",
            placeholder: v = "",
            maxLength: I = 999,
            value: T,
            defaultValue: S,
            minLength: A,
            error: C,
            defaultDirty: N = !1,
        } = e,
        R = m(e, [
            "className",
            "inputClassName",
            "disabled",
            "editable",
            "inputRef",
            "prefixElement",
            "focusProps",
            "name",
            "type",
            "placeholder",
            "maxLength",
            "value",
            "defaultValue",
            "minLength",
            "error",
            "defaultDirty",
        ]);
    let [P, D] = i.useState(N),
        w = E(T, S),
        L = (e) => {
            var t, n;
            null == (t = R.onChange) || t.call(R, e.currentTarget.value, y),
                D(!0),
                null == (n = w.setHasValue) || n.call(w, "" !== e.currentTarget.value);
        },
        x = (e) => {
            var t, n;
            null == (t = R.onFocus) || t.call(R, e, y), null == (n = w.setIsFocused) || n.call(w, !0);
        },
        M = (e) => {
            var t, n;
            null == (t = R.onBlur) || t.call(R, e, y), null == (n = w.setIsFocused) || n.call(w, !1);
        },
        k = i.useMemo(() => {
            var e, t;
            return null === C || "" === C
                ? null
                : null != C
                  ? C
                  : P
                    ? null != A && (null != (e = null == T ? void 0 : T.length) ? e : 0) < A
                        ? u.intl.formatToPlainString(u.t["62rk1K"], { minLength: A })
                        : null != I && (null != (t = null == T ? void 0 : T.length) ? t : 0) > I
                          ? u.intl.formatToPlainString(u.t.ICT5S6, { maxLength: I })
                          : null
                    : null;
        }, [C, P, A, I, null == T ? void 0 : T.length]),
        j = (null != C && "" !== C) || null != k;
    return (0, r.jsxs)("div", {
        className: o()(d.inputWrapper, n),
        children: [
            null != g && g,
            (0, r.jsx)(
                s.tEY,
                h(_({}, b), {
                    children: (0, r.jsx)(
                        "input",
                        h(
                            _(
                                {
                                    name: y,
                                    className: o()(d.input, a, {
                                        [d.error]: j,
                                        [d.disabled]: l,
                                        [d.editable]: f,
                                    }),
                                    disabled: l,
                                    readOnly: !1 === f || void 0,
                                    type: O,
                                    placeholder: v,
                                    maxLength: I,
                                    minLength: A,
                                    value: T,
                                    defaultValue: S,
                                },
                                R,
                            ),
                            {
                                "aria-labelledby": null != (t = R["aria-labelledby"]) ? t : w.titleId,
                                onChange: L,
                                onBlur: M,
                                onFocus: x,
                                ref: p,
                            },
                        ),
                    ),
                }),
            ),
            (0, r.jsx)(c.V, { error: k }),
        ],
    });
}
