n.d(t, { G: () => b }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(15127),
    c = n(897037),
    u = n(388032),
    d = n(191228);
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
function p(e) {
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
function _(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
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
            inputRef: _,
            prefixElement: g,
            focusProps: b,
            name: y = "",
            type: O = "text",
            placeholder: v = "",
            maxLength: S = 999,
            value: I,
            defaultValue: T,
            minLength: C,
            error: A,
            defaultDirty: N = !1,
        } = e,
        P = h(e, [
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
    let [R, w] = i.useState(N),
        D = E(I, T),
        x = (e) => {
            var t, n;
            null == (t = P.onChange) || t.call(P, e.currentTarget.value, y),
                w(!0),
                null == (n = D.setHasValue) || n.call(D, "" !== e.currentTarget.value);
        },
        L = (e) => {
            var t, n;
            null == (t = P.onFocus) || t.call(P, e, y), null == (n = D.setIsFocused) || n.call(D, !0);
        },
        j = (e) => {
            var t, n;
            null == (t = P.onBlur) || t.call(P, e, y), null == (n = D.setIsFocused) || n.call(D, !1);
        },
        M = i.useMemo(() => {
            var e, t;
            return null === A || "" === A
                ? null
                : null != A
                  ? A
                  : R
                    ? null != C && (null != (e = null == I ? void 0 : I.length) ? e : 0) < C
                        ? u.intl.formatToPlainString(u.t["62rk1K"], { minLength: C })
                        : null != S && (null != (t = null == I ? void 0 : I.length) ? t : 0) > S
                          ? u.intl.formatToPlainString(u.t.ICT5S6, { maxLength: S })
                          : null
                    : null;
        }, [A, R, C, S, null == I ? void 0 : I.length]),
        k = (null != A && "" !== A) || null != M;
    return (0, r.jsxs)("div", {
        className: o()(d.inputWrapper, n),
        children: [
            null != g && g,
            (0, r.jsx)(
                s.tEY,
                m(p({}, b), {
                    children: (0, r.jsx)(
                        "input",
                        m(
                            p(
                                {
                                    name: y,
                                    className: o()(d.input, a, {
                                        [d.error]: k,
                                        [d.disabled]: l,
                                        [d.editable]: f,
                                    }),
                                    disabled: l,
                                    readOnly: !1 === f || void 0,
                                    type: O,
                                    placeholder: v,
                                    maxLength: S,
                                    minLength: C,
                                    value: I,
                                    defaultValue: T,
                                },
                                P,
                            ),
                            {
                                "aria-labelledby": null != (t = P["aria-labelledby"]) ? t : D.titleId,
                                onChange: x,
                                onBlur: j,
                                onFocus: L,
                                ref: _,
                            },
                        ),
                    ),
                }),
            ),
            (0, r.jsx)(c.V, { error: M }),
        ],
    });
}
