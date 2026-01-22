n.d(t, {
    $n: () => A,
    WS: () => O,
    XD: () => E,
    lO: () => b,
    pR: () => g,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(758879),
    l = n(158954),
    c = n(985018),
    u = n(134112);

function d(e, t, n) {
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

function f(e) {
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
                d(e, t, n[t]);
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

function _(e, t) {
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

function h(e, t) {
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
    if (((a = m(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let g = {
        FILLED: u.WL,
        OUTLINED: u.uu,
        LINK: u.M_,
        BLANK: u.Ev,
    },
    E = {
        BRAND: u.x8,
        BRAND_INVERTED: u.Qn,
        RED: u.D,
        GREEN: u.RH,
        PRIMARY: u.cG,
        LINK: u.I5,
        WHITE: u.bD,
        TRANSPARENT: u.Ey,
        CUSTOM: "",
    },
    b = {
        NONE: "",
        TINY: u.Ei,
        SMALL: u.g4,
        MEDIUM: u.$g,
        LARGE: u.Pu,
        MIN: u.CM,
        MAX: u.Gn,
        ICON: u.Rk,
    };

function y(e, t) {
    var n, r, i, a;
    let s = null == e ? void 0 : e.offset;
    return t === g.LINK || t === g.BLANK
        ? s
        : null == s
          ? -2
          : "number" == typeof s
            ? s + 2
            : {
                  top: (null != (n = s.top) ? n : 0) - 2,
                  right: (null != (r = s.right) ? r : 0) - 2,
                  bottom: (null != (i = s.bottom) ? i : 0) - 2,
                  left: (null != (a = s.left) ? a : 0) - 2,
              };
}

function O() {
    let {
        look: e = g.FILLED,
        color: t = E.BRAND,
        size: n = b.MEDIUM,
        fullWidth: r = !1,
        grow: i = !0,
        submitting: a = !1,
        disabled: o = !1,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return s()(u.x6, e, t, n, {
        [u.Ij]: r,
        [u.wS]: i,
        [u.B2]: a && !o,
    });
}

function A(e) {
    let {
            look: t = g.FILLED,
            color: n = E.BRAND,
            size: a = b.MEDIUM,
            fullWidth: o = !1,
            grow: d = !0,
            disabled: p = !1,
            submitting: m = !1,
            type: A = "button",
            style: v,
            wrapperClassName: S,
            className: I,
            innerClassName: T,
            onClick: C,
            onDoubleClick: N,
            onMouseDown: R,
            onMouseUp: w,
            onMouseEnter: P,
            onMouseLeave: D,
            onKeyDown: x,
            children: L,
            rel: j,
            buttonRef: M,
            focusProps: k,
            "aria-label": U,
            submittingStartedLabel: G,
            submittingFinishedLabel: V,
        } = e,
        F = h(e, [
            "look",
            "color",
            "size",
            "fullWidth",
            "grow",
            "disabled",
            "submitting",
            "type",
            "style",
            "wrapperClassName",
            "className",
            "innerClassName",
            "onClick",
            "onDoubleClick",
            "onMouseDown",
            "onMouseUp",
            "onMouseEnter",
            "onMouseLeave",
            "onKeyDown",
            "children",
            "rel",
            "buttonRef",
            "focusProps",
            "aria-label",
            "submittingStartedLabel",
            "submittingFinishedLabel",
        ]),
        B = p || m,
        H = B && (null != P || null != D),
        Y = H ? null : S,
        W = y(k, t),
        K = i.useRef(!1);
    i.useEffect(() => {
        !0 === m && ((K.current = !0), l.ORC.announce(null != G ? G : c.intl.string(c.t.pfChQr))),
            !1 === m && !0 === K.current && l.ORC.announce(null != V ? V : c.intl.string(c.t.SVParY));
    }, [m, G, V]);
    let z = (0, r.jsx)(
        l.vN3,
        _(f({}, k), {
            offset: W,
            children: (0, r.jsxs)(
                "button",
                _(f({}, B ? null : F), {
                    "aria-label": U,
                    "aria-busy": !!m || void 0,
                    ref: M,
                    onClick: B ? (e) => e.preventDefault() : C,
                    onDoubleClick: B ? (e) => e.preventDefault() : N,
                    onMouseUp: p ? void 0 : w,
                    onMouseDown: p ? void 0 : R,
                    onMouseEnter: P,
                    onMouseLeave: D,
                    onKeyDown: p ? void 0 : x,
                    type: A,
                    disabled: p,
                    style: v,
                    rel: j,
                    className: s()(
                        I,
                        O({
                            look: t,
                            color: n,
                            size: a,
                            fullWidth: o,
                            grow: d,
                            submitting: m,
                            disabled: p,
                        }),
                        Y,
                    ),
                    children: [
                        m && !p
                            ? (0, r.jsx)(l.y$y, {
                                  type: l.y$y.Type.PULSING_ELLIPSIS,
                                  className: u.u1,
                                  itemClassName: u.$N,
                              })
                            : null,
                        (0, r.jsx)("div", {
                            className: s()(u.PG, T),
                            children: L,
                        }),
                    ],
                }),
            ),
        }),
    );
    return H
        ? (0, r.jsxs)("span", {
              className: s()(u.Yr, S, a, {
                  [u.wS]: d,
                  [u.Ij]: o,
              }),
              children: [
                  z,
                  (0, r.jsx)("span", {
                      onMouseEnter: P,
                      onMouseLeave: D,
                      className: u.p5,
                  }),
              ],
          })
        : z;
}
(A.Looks = g),
    (A.Colors = E),
    (A.Sizes = b),
    (A.Link = function (e) {
        let {
                look: t = g.FILLED,
                color: n = E.BRAND,
                size: i = b.MEDIUM,
                fullWidth: a = !1,
                grow: l = !0,
                style: c,
                className: d,
                innerClassName: p,
                to: m,
                onClick: y,
                onMouseDown: O,
                onMouseUp: A,
                children: v,
                rel: S,
            } = e,
            I = h(e, [
                "look",
                "color",
                "size",
                "fullWidth",
                "grow",
                "style",
                "className",
                "innerClassName",
                "to",
                "onClick",
                "onMouseDown",
                "onMouseUp",
                "children",
                "rel",
            ]);
        return (0, r.jsx)(
            o.N_,
            _(f({}, I), {
                to: m,
                onClick: y,
                onMouseUp: A,
                onMouseDown: O,
                style: c,
                rel: S,
                className: s()(d, u.x6, t, n, i, {
                    [u.Ij]: a,
                    [u.wS]: l,
                }),
                children: (0, r.jsx)("span", {
                    className: s()(u.PG, p),
                    children: v,
                }),
            }),
        );
    });
