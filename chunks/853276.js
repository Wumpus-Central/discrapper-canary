n.d(t, { Z: () => f }), n(47120), n(566702);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(393238),
    d = n(607070),
    u = n(596390),
    m = n(576932);
function g(e) {
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
let h = i.forwardRef(function (e, t) {
    var n, s;
    let { value: l, isSelected: c, isEditing: d, forceShowErrorTooltip: u = !1, error: h } = e,
        [f, b, x] = i.useMemo(() => {
            if (null == h) return [];
            let { erroringCharacterOffset: e = 0, erroringCharacterLength: t = l.length } = null != h ? h : {},
                n = l.slice(0, e);
            return [n, l.slice(e, e + t), l.slice(e + t)];
        }, [l, h]);
    return null == h
        ? (0, r.jsx)('div', {
              className: a()(m.chipletValue, {
                  [m.isEditing]: d,
                  [m.isSelected]: c
              }),
              ref: t,
              children: l
          })
        : (null != (n = null == f ? void 0 : f.length) ? n : 0) + (null != (s = null == b ? void 0 : b.length) ? s : 0) > 70
          ? (0, r.jsx)(o.ua7, {
                'aria-label': h.message,
                text: () =>
                    (0, r.jsxs)('div', {
                        'aria-label': h.message,
                        children: [
                            h.message,
                            ' ',
                            (0, r.jsx)('span', {
                                className: m.errorOverflowValue,
                                children: b
                            })
                        ]
                    }),
                tooltipClassName: m.errorTooltip,
                color: o.ua7.Colors.RED,
                position: 'left',
                forceOpen: u || void 0,
                children: (e) =>
                    (0, r.jsxs)(
                        'div',
                        p(
                            g(
                                {
                                    ref: t,
                                    className: a()(m.chipletValue, {
                                        [m.isEditing]: d,
                                        [m.isError]: null != h && !d,
                                        [m.isOverflowing]: null != h && !d
                                    })
                                },
                                e
                            ),
                            {
                                children: [
                                    (0, r.jsx)('span', { children: f }),
                                    (0, r.jsx)('span', {
                                        className: m.errorValue,
                                        children: b
                                    }),
                                    (0, r.jsx)('span', { children: x })
                                ]
                            }
                        )
                    )
            })
          : (0, r.jsxs)('div', {
                ref: t,
                className: a()(m.chipletValue, {
                    [m.isEditing]: d,
                    [m.isError]: null != h && !d
                }),
                children: [
                    (0, r.jsx)('span', { children: f }),
                    (0, r.jsx)(o.ua7, {
                        text: h.message,
                        color: o.ua7.Colors.RED,
                        position: 'top',
                        forceOpen: u || void 0,
                        children: (e) =>
                            (0, r.jsx)(
                                'span',
                                p(g({}, e), {
                                    className: m.errorValue,
                                    children: b
                                })
                            )
                    }),
                    (0, r.jsx)('span', { children: x })
                ]
            });
});
function f(e) {
    let { value: t, onChange: n, onBlur: s, onFocus: g, onRemove: p, isSelected: f, isSelecting: b, error: x, forceShowErrorTooltip: j } = e,
        N = i.useRef(null),
        _ = i.useRef(null),
        [v, C] = i.useState(!1),
        { ref: O, width: y = 0 } = (0, c.Z)(v),
        { ref: I, width: E = 0 } = (0, c.Z)(v),
        S = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        [T, P] = i.useState(j),
        w = i.useRef(null),
        R = y > E ? y : E;
    i.useEffect(() => {
        j
            ? (P(!0),
              (w.current = setTimeout(() => {
                  P(!1), (w.current = null);
              }, u.I5)))
            : P(!1);
    }, [j]),
        i.useEffect(
            () => () => {
                clearTimeout(w.current);
            },
            []
        );
    let Z = i.useCallback(
            (e) => {
                n(e.target.value);
            },
            [n]
        ),
        D = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if ((t.trim().length <= 0 && p(), null != N.current && null != O.current && null != _.current)) {
                    var n;
                    N.current.scrollTo(0, 0), N.current.setSelectionRange(0, 0), (N.current.scrollLeft = 0), (O.current.scrollLeft = 0), (null == (n = _.current) ? void 0 : n.ref) != null && (_.current.ref.scrollLeft = 0);
                }
                C(!1), s(e);
            },
            [t, O, s, p]
        ),
        A = i.useCallback(
            (e) => {
                let n = t.trim().length <= 0;
                u.ye.has(e.key) ? (e.preventDefault(), e.stopPropagation(), D(!0)) : 'Backspace' === e.key && n && (e.preventDefault(), e.stopPropagation(), D(!0));
            },
            [D, t]
        ),
        k = i.useCallback(
            (e) => {
                let t = e.metaKey || e.ctrlKey;
                g(t), t ? e.preventDefault() : C(!0), e.stopPropagation();
            },
            [g]
        ),
        W = i.useCallback(
            (e) => {
                p();
            },
            [p]
        );
    return (0, r.jsx)('div', {
        className: m.chipletFlexContainer,
        children: (0, r.jsxs)('div', {
            ref: I,
            className: a()(m.chipletContainer, {
                [m.isEditing]: v,
                [m.smallBlink]: !v && !S,
                [m.isSelected]: f,
                [m.isSelecting]: b,
                [m.isError]: null != x && !v
            }),
            children: [
                (0, r.jsxs)(o.P3F, {
                    tag: 'div',
                    onBlur: () => D(!1),
                    onClick: k,
                    ignoreKeyPress: !0,
                    onMouseEnter: () => P(!0),
                    onMouseLeave: () => P(!1),
                    className: a()(m.chipletContainerInner, {
                        [m.isSelecting]: b,
                        [m.isEditing]: v
                    }),
                    ref: _,
                    children: [
                        (0, r.jsx)('input', {
                            className: a()(m.chipletInput, {
                                [m.isEditing]: v,
                                [m.isSelecting]: b
                            }),
                            ref: N,
                            onChange: Z,
                            onKeyDownCapture: A,
                            value: t,
                            style: { width: R > 0 ? R : 'calc('.concat(t.length, 'ch + 10px)') }
                        }),
                        (0, r.jsx)(h, {
                            ref: O,
                            value: t,
                            isEditing: v,
                            isSelected: f,
                            error: x,
                            forceShowErrorTooltip: T || v
                        })
                    ]
                }),
                !v &&
                    (0, r.jsx)(o.P3F, {
                        className: m.closeIconContainer,
                        onClick: W,
                        children: (0, r.jsx)(o.Dio, {
                            size: 'xxs',
                            color: 'currentColor',
                            className: m.closeIcon
                        })
                    })
            ]
        })
    });
}
