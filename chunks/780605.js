n.d(t, {
    E: () => w,
    Y: () => N,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(267843),
    l = n(680732),
    c = n(186325),
    u = n(84735),
    d = n(836459),
    f = n(922770),
    _ = n(993365),
    p = n(511857),
    h = n(410030),
    m = n(388032),
    g = n(974223),
    E = n(214785);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let S = {
        xs: "text-xs/medium",
        sm: "text-sm/medium",
        md: "text-md/medium",
    },
    A = {
        xs: "xxs",
        sm: "xs",
        md: "refresh_sm",
    },
    C = {
        xs: "sm",
        sm: "sm",
        md: "md",
    };
function N(e) {
    var t,
        n,
        {
            role: a = "button",
            variant: s = "primary",
            size: d = "md",
            text: f,
            icon: b,
            iconPosition: O = "start",
            iconOpticalOffsetMargin: T = 0,
            fullWidth: A = !1,
            focusProps: C,
            loading: N,
            loadingStartedLabel: D,
            loadingFinishedLabel: x,
            rounded: L = !1,
            type: j = "button",
            rel: M,
            onClick: k,
            onDoubleClick: U,
            onMouseEnter: G,
            onMouseLeave: B,
            onMouseUp: Z,
            onMouseDown: V,
            onKeyDown: F,
            disabled: H,
            className: Y,
            style: W,
            buttonRef: K,
        } = e,
        z = I(e, [
            "role",
            "variant",
            "size",
            "text",
            "icon",
            "iconPosition",
            "iconOpticalOffsetMargin",
            "fullWidth",
            "focusProps",
            "loading",
            "loadingStartedLabel",
            "loadingFinishedLabel",
            "rounded",
            "type",
            "rel",
            "onClick",
            "onDoubleClick",
            "onMouseEnter",
            "onMouseLeave",
            "onMouseUp",
            "onMouseDown",
            "onKeyDown",
            "disabled",
            "className",
            "style",
            "buttonRef",
        ]);
    let q = (0, g.M)(),
        X = null != (t = null == q ? void 0 : q.size) ? t : d,
        Q = null != (n = null == q ? void 0 : q.fullWidth) ? n : A,
        J = null != f,
        $ = i.useRef(null),
        ee = null != K ? K : $,
        et = (0, r.jsx)(w, {
            icon: b,
            iconOpticalOffsetMargin: T,
            iconPosition: O,
            size: X,
            ref: ee,
            disabled: H,
        }),
        en = "expressive" === s,
        er = i.useContext(c.S),
        ei = (0, p.a)((0, h.ZP)()),
        ea = i.useRef(!1);
    i.useEffect(() => {
        !0 === N && ((ea.current = !0), l.u.announce(null != D ? D : m.intl.string(m.t.A11Y_LOADING_STARTED))),
            !1 === N &&
                !0 === ea.current &&
                (l.u.announce(null != x ? x : m.intl.string(m.t.A11Y_LOADING_FINISHED)), (ea.current = !1));
    }, [N, D, x]);
    let eo = (0, r.jsxs)("div", {
            className: o()(E.buttonChildren, { [E.loading]: N }),
            children: [
                null != et && "start" === O && et,
                J &&
                    (0, r.jsx)(_.x, {
                        tag: "span",
                        variant: S[X],
                        color: "none",
                        lineClamp: 1,
                        children: f,
                    }),
                null != et && "end" === O && et,
            ],
        }),
        es = H || N,
        el = (0, r.jsx)(
            u.t,
            v(y({}, C), {
                children: (0, r.jsxs)(
                    "button",
                    v(
                        y(
                            {
                                "data-mana-component": "button",
                                role: a,
                                "aria-busy": N,
                                className: o()(E.button, E[X], E[s], {
                                    [E.hasText]: J,
                                    [E.fullWidth]: Q,
                                    [E.rounded]: L,
                                }),
                                ref: ee,
                                rel: M,
                                type: j,
                                onClick: es ? (e) => e.preventDefault() : k,
                                onDoubleClick: es ? (e) => e.preventDefault() : U,
                                onMouseUp: es ? void 0 : Z,
                                onMouseDown: es ? void 0 : V,
                                onKeyDown: es ? void 0 : F,
                                onMouseEnter: es ? void 0 : G,
                                onMouseLeave: es ? void 0 : B,
                                disabled: H,
                            },
                            z,
                        ),
                        {
                            children: [
                                en &&
                                    (0, r.jsx)(P, {
                                        hasReducedMotion: er.reducedMotion.enabled,
                                        buttonRef: ee,
                                        isLightMode: ei,
                                        disabled: H,
                                    }),
                                null == N
                                    ? (0, r.jsx)("div", {
                                          className: E.buttonChildrenWrapper,
                                          children: eo,
                                      })
                                    : (0, r.jsx)(R, {
                                          loading: N,
                                          size: X,
                                          children: eo,
                                      }),
                            ],
                        },
                    ),
                ),
            }),
        );
    return en
        ? (0, r.jsx)("div", {
              className: o()(E.expressiveWrapper, { [E.fullWidth]: Q }),
              children: el,
          })
        : el;
}
function R(e) {
    let { children: t, loading: n, size: a } = e,
        s = i.useRef(null),
        [l, c] = i.useState(n);
    return (
        i.useEffect(
            () => (
                null != s.current && clearTimeout(s.current),
                n
                    ? c(!0)
                    : (s.current = setTimeout(() => {
                          c(!1);
                      }, 500)),
                () => {
                    null != s.current && clearTimeout(s.current);
                }
            ),
            [n],
        ),
        (0, r.jsxs)("div", {
            className: E.buttonChildrenWrapper,
            children: [
                t,
                l &&
                    (0, r.jsx)("div", {
                        className: o()(E.spinnerWrapper, {
                            [E.fadeIn]: n,
                            [E.fadeOut]: !n,
                        }),
                        children: (0, r.jsx)(f.$, {
                            type: f.R.PULSING_ELLIPSIS,
                            className: o()(E.spinner, E["spinner-".concat(a)]),
                            itemClassName: E.spinnerItem,
                        }),
                    }),
            ],
        })
    );
}
function P(e) {
    let { hasReducedMotion: t, buttonRef: n, isLightMode: a, disabled: s } = e,
        l = i.useRef(null);
    return (
        i.useEffect(() => {
            if (!s && t) {
                let e = n.current,
                    t = () => {
                        var e;
                        null == (e = l.current) || e.play();
                    },
                    r = () => {
                        var e;
                        null == (e = l.current) || e.pause();
                    };
                return (
                    null == e || e.addEventListener("mouseenter", t, !0),
                    null == e || e.addEventListener("mouseleave", r, !0),
                    () => {
                        null == e || e.removeEventListener("mouseenter", t, !0),
                            null == e || e.removeEventListener("mouseleave", r, !0);
                    }
                );
            }
        }, [t, n, s]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                !s &&
                    (0, r.jsx)(d.GlowButtonRive, {
                        className: o()(E.expressiveRive, E.expressiveBackground),
                        eventTargetRef: n,
                        fit: "layout",
                        artboard: "BaseGlowRemapped",
                        ref: l,
                        withReducedMotion: "short-loop",
                    }),
                !t &&
                    !s &&
                    (0, r.jsx)(d.GlowButtonRive, {
                        className: o()(E.expressiveRive, E.expressiveHoverContainer),
                        fit: "layout",
                        artboard: a ? "HoverLightmode" : "HoverDarkmode",
                    }),
                (0, r.jsx)("div", { className: o()(E.expressiveRive, E.expressiveFill) }),
            ],
        })
    );
}
function w(e) {
    let { icon: t, iconOpticalOffsetMargin: n, iconPosition: a, size: o, ref: l, disabled: c } = e,
        u = null;
    function d() {
        if (0 === n) return {};
        switch (a) {
            case "start":
                return { marginLeft: n };
            case "end":
                return { marginRight: n };
        }
        return {};
    }
    let [f, _] = i.useState(!1);
    if (
        (i.useEffect(() => {
            if ("object" == typeof t && "sticker" === t.type && null != l.current) {
                let e = l.current,
                    t = () => {
                        c || _(!0);
                    },
                    n = () => {
                        c || _(!1);
                    };
                return (
                    e.addEventListener("mouseenter", t),
                    e.addEventListener("mouseleave", n),
                    () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", n);
                    }
                );
            }
        }, [t, l, c]),
        "function" == typeof t || (null == t ? void 0 : t.type) === "icon")
    ) {
        let e = "function" == typeof t ? t : t.asset;
        u = (0, r.jsx)(e, {
            color: "currentColor",
            style: d(),
            size: A[o],
            className: E.icon,
        });
    } else if (null != t) {
        if ("rive" === t.type) {
            let e = t.asset;
            u = (0, r.jsx)(
                e,
                v(y({}, t.riveProps), {
                    eventTargetRef: l,
                    style: {
                        width: s.Z[A[o]],
                        height: s.Z[A[o]],
                    },
                }),
            );
        } else if ("sticker" === t.type) {
            let e = t.component;
            u = (0, r.jsx)(e, {
                size: s.Z[C[o]],
                sticker: t.asset,
                isInteracting: f,
            });
        }
    }
    return u;
}
