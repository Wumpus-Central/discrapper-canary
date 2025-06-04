n.d(t, { z: () => v });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(186325),
    l = n(84735),
    c = n(836459),
    u = n(993365),
    d = n(511857),
    f = n(410030),
    _ = n(994971);
function p(e, t, n) {
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
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let y = {
        xs: 'text-sm/semibold',
        sm: 'text-sm/semibold',
        md: 'text-md/semibold',
        lg: 'text-lg/semibold'
    },
    O = {
        xs: 'xs',
        sm: 'xs',
        md: 'sm',
        lg: 'md'
    };
function v(e) {
    var { role: t = 'button', variant: n = 'primary', size: a = 'md', text: c, icon: p, iconPosition: m = 'start', iconOpticalOffsetMargin: b = 0, focusProps: v } = e,
        S = E(e, ['role', 'variant', 'size', 'text', 'icon', 'iconPosition', 'iconOpticalOffsetMargin', 'focusProps']);
    function T() {
        if (0 === b) return {};
        switch (m) {
            case 'start':
                return { marginLeft: b };
            case 'end':
                return { marginRight: b };
        }
        return {};
    }
    function A() {
        if (null == p) return;
        let e = T();
        return (0, r.jsx)(p, {
            color: 'currentColor',
            style: e,
            size: O[a]
        });
    }
    let N = i.useRef(null),
        C = 'expressive' === n,
        P = i.useContext(s.S),
        R = (0, d.a)((0, f.ZP)()),
        w = (0, r.jsx)(
            l.t,
            g(h({}, v), {
                children: (0, r.jsxs)(
                    'button',
                    g(
                        h(
                            {
                                role: t,
                                className: o()(_.button, _[a], _[n]),
                                ref: N
                            },
                            S
                        ),
                        {
                            children: [
                                C &&
                                    (0, r.jsx)(I, {
                                        hasReducedMotion: P.reducedMotion.enabled,
                                        buttonRef: N,
                                        isLightMode: R
                                    }),
                                null != p && 'start' === m && (0, r.jsx)(A, {}),
                                (0, r.jsx)(u.x, {
                                    tag: 'span',
                                    variant: y[a],
                                    color: 'none',
                                    className: _.text,
                                    lineClamp: 1,
                                    children: c
                                }),
                                null != p && 'end' === m && (0, r.jsx)(A, {})
                            ]
                        }
                    )
                )
            })
        );
    return C
        ? (0, r.jsx)('div', {
              className: _.expressiveWrapper,
              children: w
          })
        : w;
}
function I(e) {
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
                        null == e || e.removeEventListener('mouseenter', t, !0), null == e || e.removeEventListener('mouseleave', r, !0);
                    }
                );
            }
        }, [t, n]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.QD, {
                    className: o()(_.expressiveRive, _.expressiveBackground),
                    eventTargetRef: n,
                    fit: 'layout',
                    artboard: 'BaseGlowRemapped',
                    ref: s,
                    withReducedMotion: 'short-loop'
                }),
                !t &&
                    (0, r.jsx)(c.QD, {
                        className: o()(_.expressiveRive, _.expressiveHover),
                        fit: 'layout',
                        artboard: a ? 'HoverLightmode' : 'HoverDarkmode'
                    }),
                (0, r.jsx)('div', { className: o()(_.expressiveRive, _.expressiveFill) })
            ]
        })
    );
}
