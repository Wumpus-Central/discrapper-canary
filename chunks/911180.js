n.d(t, {
    A: () => h,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(835245),
    o = n(317097),
    c = n(827734),
    d = n(397927),
    u = n(919796),
    _ = n(385612),
    p = n(652215),
    m = n(985018),
    g = n(567458);

function A(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function h(e) {
    let {
            onChange: t,
            onClose: n,
            color: l,
            suggestedColors: h,
            disabled: b,
            label: E,
            colorPickerMiddle: x,
            colorPickerFooter: O,
            showEyeDropper: C,
        } = e,
        I = i.useRef(null),
        T = (0, d.rdh)(c.A.colors.BACKGROUND_BASE_LOW).hex(),
        S = c.A.colors.BACKGROUND_MOD_MUTED.css,
        j = (0, _.sN)(l),
        v = (0, o.Hl)(l),
        N = v === T ? S : v,
        y = j ? c.A.unsafe_rawColors.WHITE.css : c.A.unsafe_rawColors.PRIMARY_530.css,
        P = (0, u.A)(x),
        R = (0, u.A)(O),
        [D, w] = i.useState((0, a.A)());
    return (
        i.useEffect(() => {
            (P !== x || R !== O) && w((0, a.A)());
        }, [O, x, R, P]),
        (0, r.jsx)(d.YNO, {
            targetElementRef: I,
            positionKey: D,
            renderPopout: (e) =>
                (0, r.jsx)(
                    d.VNw,
                    f(A({}, e), {
                        value: l,
                        onChange: t,
                        suggestedColors: h,
                        middle: x,
                        footer: O,
                        showEyeDropper: C,
                    }),
                ),
            onRequestClose: n,
            children: (e) => {
                let { onClick: t } = e,
                    n = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i,
                            l = {};
                        if ("u" > typeof Reflect && Reflect.ownKeys) {
                            for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                                (r = n[i]),
                                    !(t.indexOf(r) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, r) &&
                                        (l[r] = e[r]);
                            return l;
                        }
                        if (
                            ((l = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = {},
                                    l = Object.getOwnPropertyNames(e);
                                for (r = 0; r < l.length; r++)
                                    (n = l[r]),
                                        !(t.indexOf(n) >= 0) &&
                                            Object.prototype.propertyIsEnumerable.call(e, n) &&
                                            (i[n] = e[n]);
                                return i;
                            })(e, t)),
                            Object.getOwnPropertySymbols)
                        )
                            for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                                (r = n[i]),
                                    !(t.indexOf(r) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, r) &&
                                        (l[r] = e[r]);
                        return l;
                    })(e, ["onClick"]);
                return (0, r.jsxs)("div", {
                    ref: I,
                    className: s()(g.oP, {
                        [g.r9]: b,
                    }),
                    children: [
                        (0, r.jsx)(
                            d.DUT,
                            f(A({}, n), {
                                tabIndex: b ? -1 : 0,
                                onClick: b ? p.tEg : t,
                                style: {
                                    backgroundColor: v,
                                    borderColor: N,
                                },
                                className: g.nf,
                                "aria-label": m.intl.string(m.t.Qp04hK),
                                focusProps: {
                                    ringTarget: I,
                                },
                                children: (0, r.jsx)(d.R2l, {
                                    size: "custom",
                                    className: g.BW,
                                    width: 14,
                                    height: 14,
                                    color: y,
                                }),
                            }),
                        ),
                        E,
                    ],
                });
            },
        })
    );
}
