n.d(t, { z: () => h });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    l = n(186325),
    s = n(84735),
    c = n(836459),
    d = n(993365),
    u = n(511857),
    _ = n(410030),
    m = n(994971);
function f(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function p(e, t) {
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
let g = {
        xs: 'text-sm/semibold',
        sm: 'text-sm/semibold',
        md: 'text-md/semibold',
        lg: 'text-lg/semibold'
    },
    v = {
        xs: 'xs',
        sm: 'xs',
        md: 'sm',
        lg: 'md'
    };
function h(e) {
    var { role: t = 'button', variant: n = 'primary', size: a = 'md', text: c, icon: h, iconPosition: y = 'start', iconOpticalOffsetMargin: x = 0, focusProps: j } = e,
        C = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['role', 'variant', 'size', 'text', 'icon', 'iconPosition', 'iconOpticalOffsetMargin', 'focusProps']);
    function I() {
        if (null == h) return;
        let e = (function () {
            if (0 === x) return {};
            switch (y) {
                case 'start':
                    return { marginLeft: x };
                case 'end':
                    return { marginRight: x };
            }
            return {};
        })();
        return (0, r.jsx)(h, {
            color: 'currentColor',
            style: e,
            size: v[a]
        });
    }
    let O = i.useRef(null),
        E = 'expressive' === n,
        P = i.useContext(l.S),
        N = (0, u.a)((0, _.ZP)()),
        S = (0, r.jsx)(
            s.t,
            p(f({}, j), {
                children: (0, r.jsxs)(
                    'button',
                    p(
                        f(
                            {
                                role: t,
                                className: o()(m.button, m[a], m[n]),
                                ref: O
                            },
                            C
                        ),
                        {
                            children: [
                                E &&
                                    (0, r.jsx)(b, {
                                        hasReducedMotion: P.reducedMotion.enabled,
                                        buttonRef: O,
                                        isLightMode: N
                                    }),
                                null != h && 'start' === y && (0, r.jsx)(I, {}),
                                (0, r.jsx)(d.x, {
                                    tag: 'span',
                                    variant: g[a],
                                    color: 'none',
                                    className: m.text,
                                    lineClamp: 1,
                                    children: c
                                }),
                                null != h && 'end' === y && (0, r.jsx)(I, {})
                            ]
                        }
                    )
                )
            })
        );
    return E
        ? (0, r.jsx)('div', {
              className: m.expressiveWrapper,
              children: S
          })
        : S;
}
function b(e) {
    let { hasReducedMotion: t, buttonRef: n, isLightMode: a } = e,
        l = i.useRef(null);
    return (
        i.useEffect(() => {
            if (t) {
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
                    className: o()(m.expressiveRive, m.expressiveBackground),
                    eventTargetRef: n,
                    fit: 'layout',
                    artboard: 'BaseGlowRemapped',
                    ref: l,
                    withReducedMotion: 'short-loop'
                }),
                !t &&
                    (0, r.jsx)(c.QD, {
                        className: o()(m.expressiveRive, m.expressiveHover),
                        fit: 'layout',
                        artboard: a ? 'HoverLightmode' : 'HoverDarkmode'
                    }),
                (0, r.jsx)(c.QD, {
                    className: o()(m.expressiveRive, m.expressiveFill),
                    eventTargetRef: n,
                    fit: 'layout',
                    artboard: a ? 'ButtonFillLightmode' : 'ButtonFillDarkmode',
                    withReducedMotion: 'play'
                })
            ]
        })
    );
}
