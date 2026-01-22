n.d(t, {
    A: () => A,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(835245),
    l = n(317097),
    c = n(827734),
    u = n(397927),
    d = n(919796),
    f = n(385612),
    p = n(652215),
    _ = n(985018),
    h = n(567458);

function m(e, t, n) {
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

function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}

function E(e, t) {
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

function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = O(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function A(e) {
    let {
            onChange: t,
            onClose: n,
            color: a,
            suggestedColors: m,
            disabled: E,
            label: O,
            colorPickerMiddle: A,
            colorPickerFooter: v,
            showEyeDropper: S,
        } = e,
        I = i.useRef(null),
        T = (0, u.rdh)(c.A.colors.BACKGROUND_BASE_LOW).hex(),
        C = c.A.colors.BACKGROUND_MOD_MUTED.css,
        N = (0, f.sN)(a),
        R = (0, l.Hl)(a),
        w = R === T ? C : R,
        P = N ? c.A.unsafe_rawColors.WHITE.css : c.A.unsafe_rawColors.PRIMARY_530.css,
        D = (0, d.A)(A),
        x = (0, d.A)(v),
        [L, j] = i.useState((0, o.A)());
    return (
        i.useEffect(() => {
            (D !== A || x !== v) && j((0, o.A)());
        }, [v, A, x, D]),
        (0, r.jsx)(u.YNO, {
            targetElementRef: I,
            positionKey: L,
            renderPopout: (e) =>
                (0, r.jsx)(
                    u.VNw,
                    b(g({}, e), {
                        value: a,
                        onChange: t,
                        suggestedColors: m,
                        middle: A,
                        footer: v,
                        showEyeDropper: S,
                    }),
                ),
            onRequestClose: n,
            children: (e) => {
                let { onClick: t } = e,
                    n = y(e, ["onClick"]);
                return (0, r.jsxs)("div", {
                    ref: I,
                    className: s()(h.oP, {
                        [h.r9]: E,
                    }),
                    children: [
                        (0, r.jsx)(
                            u.DUT,
                            b(g({}, n), {
                                tabIndex: E ? -1 : 0,
                                onClick: E ? p.tEg : t,
                                style: {
                                    backgroundColor: R,
                                    borderColor: w,
                                },
                                className: h.nf,
                                "aria-label": _.intl.string(_.t.Qp04hK),
                                focusProps: {
                                    ringTarget: I,
                                },
                                children: (0, r.jsx)(u.R2l, {
                                    size: "custom",
                                    className: h.BW,
                                    width: 14,
                                    height: 14,
                                    color: P,
                                }),
                            }),
                        ),
                        O,
                    ],
                });
            },
        })
    );
}
