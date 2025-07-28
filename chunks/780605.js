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
        { role: u = 'button', variant: d = 'primary', size: E = 'md', text: y, icon: I, iconPosition: A = 'start', iconOpticalOffsetMargin: R = 0, fullWidth: P = !1, focusProps: w, loading: D, loadingStartedLabel: L, loadingFinishedLabel: x, rounded: k = !1, type: M = 'button', rel: j, onClick: U, onDoubleClick: G, onMouseUp: B, onMouseDown: V, onKeyDown: F, disabled: Z, className: H, style: Y, buttonRef: W } = e,
        K = v(e, ['role', 'variant', 'size', 'text', 'icon', 'iconPosition', 'iconOpticalOffsetMargin', 'fullWidth', 'focusProps', 'loading', 'loadingStartedLabel', 'loadingFinishedLabel', 'rounded', 'type', 'rel', 'onClick', 'onDoubleClick', 'onMouseUp', 'onMouseDown', 'onKeyDown', 'disabled', 'className', 'style', 'buttonRef']);
    let z = (0, m.M)(),
        q = null != (n = null == z ? void 0 : z.size) ? n : E,
        X = null != (a = null == z ? void 0 : z.fullWidth) ? a : P;
    function Q() {
        if (0 === R) return {};
        switch (A) {
            case 'start':
                return { marginLeft: R };
            case 'end':
                return { marginRight: R };
        }
        return {};
    }
    let J = null != y;
    null != I &&
        (t = (0, r.jsx)(I, {
            color: 'currentColor',
            style: Q(),
            size: S[q],
            className: g.icon
        }));
    let $ = i.useRef(null),
        ee = null != W ? W : $,
        et = 'expressive' === d,
        en = i.useContext(l.S),
        er = (0, _.a)((0, p.ZP)()),
        ei = i.useRef(!1);
    i.useEffect(() => {
        (!0 === D && ((ei.current = !0), s.u.announce(null != L ? L : h.intl.string(h.t.A11Y_LOADING_STARTED))), !1 === D && !0 === ei.current && (s.u.announce(null != x ? x : h.intl.string(h.t.A11Y_LOADING_FINISHED)), (ei.current = !1)));
    }, [D, L, x]);
    let ea = (0, r.jsxs)('div', {
            className: o()(g.buttonChildren, { [g.loading]: D }),
            children: [
                null != t && 'start' === A && t,
                J &&
                    (0, r.jsx)(f.x, {
                        tag: 'span',
                        variant: T[q],
                        color: 'none',
                        lineClamp: 1,
                        children: y
                    }),
                null != t && 'end' === A && t
            ]
        }),
        eo = Z || D,
        es = (0, r.jsx)(
            c.t,
            O(b({}, w), {
                children: (0, r.jsxs)(
                    'button',
                    O(
                        b(
                            {
                                'data-mana-component': 'button',
                                role: u,
                                'aria-busy': D,
                                className: o()(g.button, g[q], g[d], {
                                    [g.hasText]: J,
                                    [g.fullWidth]: X,
                                    [g.rounded]: k
                                }),
                                ref: ee,
                                rel: j,
                                type: M,
                                onClick: eo ? (e) => e.preventDefault() : U,
                                onDoubleClick: eo ? (e) => e.preventDefault() : G,
                                onMouseUp: eo ? void 0 : B,
                                onMouseDown: eo ? void 0 : V,
                                onKeyDown: eo ? void 0 : F,
                                disabled: Z
                            },
                            K
                        ),
                        {
                            children: [
                                et &&
                                    (0, r.jsx)(C, {
                                        hasReducedMotion: en.reducedMotion.enabled,
                                        buttonRef: ee,
                                        isLightMode: er
                                    }),
                                null == D
                                    ? (0, r.jsx)('div', {
                                          className: g.buttonChildrenWrapper,
                                          children: ea
                                      })
                                    : (0, r.jsx)(N, {
                                          loading: D,
                                          size: q,
                                          children: ea
                                      })
                            ]
                        }
                    )
                )
            })
        );
    return et
        ? (0, r.jsx)('div', {
              className: o()(g.expressiveWrapper, { [g.fullWidth]: X }),
              children: es
          })
        : es;
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
