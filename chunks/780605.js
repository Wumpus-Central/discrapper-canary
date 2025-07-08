(n.d(t, { Y: () => A }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(680732),
    l = n(186325),
    c = n(84735),
    u = n(836459),
    d = n(922770),
    f = n(993365),
    _ = n(511857),
    p = n(410030),
    h = n(388032),
    m = n(974223),
    g = n(369426);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            }));
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let T = {
        sm: 'text-sm/medium',
        md: 'text-md/medium'
    },
    S = {
        sm: 'xs',
        md: 'refresh_sm'
    };
function A(e) {
    let t;
    var n,
        a,
        { role: u = 'button', variant: d = 'primary', size: E = 'md', text: y, icon: I, iconPosition: A = 'start', iconOpticalOffsetMargin: R = 0, fullWidth: P = !1, focusProps: w, loading: D, loadingStartedLabel: L, loadingFinishedLabel: x, rounded: M = !1, className: k, style: j } = e,
        U = v(e, ['role', 'variant', 'size', 'text', 'icon', 'iconPosition', 'iconOpticalOffsetMargin', 'fullWidth', 'focusProps', 'loading', 'loadingStartedLabel', 'loadingFinishedLabel', 'rounded', 'className', 'style']);
    let G = (0, m.M)(),
        B = null != (n = null == G ? void 0 : G.size) ? n : E,
        V = null != (a = null == G ? void 0 : G.fullWidth) ? a : P;
    function F() {
        if (0 === R) return {};
        switch (A) {
            case 'start':
                return { marginLeft: R };
            case 'end':
                return { marginRight: R };
        }
        return {};
    }
    let Z = null != y;
    null != I &&
        (t = (0, r.jsx)(I, {
            color: 'currentColor',
            style: F(),
            size: S[B]
        }));
    let H = i.useRef(null),
        Y = 'expressive' === d,
        W = i.useContext(l.S),
        K = (0, _.a)((0, p.ZP)()),
        z = i.useRef(!1);
    i.useEffect(() => {
        (!0 === D && ((z.current = !0), s.u.announce(null != L ? L : h.intl.string(h.t.A11Y_LOADING_STARTED))), !1 === D && !0 === z.current && (s.u.announce(null != x ? x : h.intl.string(h.t.A11Y_LOADING_FINISHED)), (z.current = !1)));
    }, [D, L, x]);
    let q = (0, r.jsxs)('div', {
            className: o()(g.buttonChildren, { [g.loading]: D }),
            children: [
                null != t && 'start' === A && t,
                Z &&
                    (0, r.jsx)(f.x, {
                        tag: 'span',
                        variant: T[B],
                        color: 'none',
                        lineClamp: 1,
                        children: y
                    }),
                null != t && 'end' === A && t
            ]
        }),
        X = (0, r.jsx)(
            c.t,
            O(b({}, w), {
                children: (0, r.jsxs)(
                    'button',
                    O(
                        b(
                            {
                                role: u,
                                'aria-busy': D,
                                className: o()(g.button, g[B], g[d], {
                                    [g.hasText]: Z,
                                    [g.fullWidth]: V,
                                    [g.rounded]: M
                                }),
                                ref: H
                            },
                            U
                        ),
                        {
                            children: [
                                Y &&
                                    (0, r.jsx)(C, {
                                        hasReducedMotion: W.reducedMotion.enabled,
                                        buttonRef: H,
                                        isLightMode: K
                                    }),
                                null == D
                                    ? (0, r.jsx)('div', {
                                          className: g.buttonChildrenWrapper,
                                          children: q
                                      })
                                    : (0, r.jsx)(N, {
                                          loading: D,
                                          size: B,
                                          children: q
                                      })
                            ]
                        }
                    )
                )
            })
        );
    return Y
        ? (0, r.jsx)('div', {
              className: o()(g.expressiveWrapper, { [g.fullWidth]: V }),
              children: X
          })
        : X;
}
function N(e) {
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
            [n]
        ),
        (0, r.jsxs)('div', {
            className: g.buttonChildrenWrapper,
            children: [
                t,
                l &&
                    (0, r.jsx)('div', {
                        className: o()(g.spinnerWrapper, {
                            [g.fadeIn]: n,
                            [g.fadeOut]: !n
                        }),
                        children: (0, r.jsx)(d.$, {
                            type: d.R.PULSING_ELLIPSIS,
                            className: o()(g.spinner, g['spinner-'.concat(a)]),
                            itemClassName: g.spinnerItem
                        })
                    })
            ]
        })
    );
}
function C(e) {
    let { hasReducedMotion: t, buttonRef: n, isLightMode: a } = e,
        s = i.useRef(null);
    return (
        i.useEffect(() => {
            if (t) {
                let e = n.current,
                    t = () => {
                        var e;
                        null == (e = s.current) || e.play();
                    },
                    r = () => {
                        var e;
                        null == (e = s.current) || e.pause();
                    };
                return (
                    null == e || e.addEventListener('mouseenter', t, !0),
                    null == e || e.addEventListener('mouseleave', r, !0),
                    () => {
                        (null == e || e.removeEventListener('mouseenter', t, !0), null == e || e.removeEventListener('mouseleave', r, !0));
                    }
                );
            }
        }, [t, n]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(u.GlowButtonRive, {
                    className: o()(g.expressiveRive, g.expressiveBackground),
                    eventTargetRef: n,
                    fit: 'layout',
                    artboard: 'BaseGlowRemapped',
                    ref: s,
                    withReducedMotion: 'short-loop'
                }),
                !t &&
                    (0, r.jsx)(u.GlowButtonRive, {
                        className: o()(g.expressiveRive, g.expressiveHoverContainer),
                        fit: 'layout',
                        artboard: a ? 'HoverLightmode' : 'HoverDarkmode'
                    }),
                (0, r.jsx)('div', { className: o()(g.expressiveRive, g.expressiveFill) })
            ]
        })
    );
}
