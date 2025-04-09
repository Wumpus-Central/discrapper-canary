n.d(t, { Z: () => h }), n(388685), n(781311);
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
let f = i.forwardRef(function (e, t) {
    var n, s;
    let { value: l, isSelected: c, isEditing: d, forceShowErrorTooltip: u = !1, error: f } = e,
        [h, b, x] = i.useMemo(() => {
            if (null == f) return [];
            let { erroringCharacterOffset: e = 0, erroringCharacterLength: t = l.length } = null != f ? f : {},
                n = l.slice(0, e);
            return [n, l.slice(e, e + t), l.slice(e + t)];
        }, [l, f]);
    return null == f
        ? (0, r.jsx)('div', {
              className: a()(m.chipletValue, {
                  [m.isEditing]: d,
                  [m.isSelected]: c
              }),
              ref: t,
              children: l
          })
        : (null != (n = null == h ? void 0 : h.length) ? n : 0) + (null != (s = null == b ? void 0 : b.length) ? s : 0) > 70
          ? (0, r.jsx)(o.ua7, {
                'aria-label': f.message,
                text: () =>
                    (0, r.jsxs)('div', {
                        'aria-label': f.message,
                        children: [
                            f.message,
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
                                        [m.isError]: null != f && !d,
                                        [m.isOverflowing]: null != f && !d
                                    })
                                },
                                e
                            ),
                            {
                                children: [
                                    (0, r.jsx)('span', { children: h }),
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
                    [m.isError]: null != f && !d
                }),
                children: [
                    (0, r.jsx)('span', { children: h }),
                    (0, r.jsx)(o.ua7, {
                        text: f.message,
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
function h(e) {
    let { value: t, onChange: n, onBlur: s, onFocus: g, onRemove: p, isSelected: h, isSelecting: b, error: x, forceShowErrorTooltip: j } = e,
        N = i.useRef(null),
        v = i.useRef(null),
        [_, y] = i.useState(!1),
        { ref: O, width: C = 0 } = (0, c.Z)(_),
        { ref: I, width: E = 0 } = (0, c.Z)(_),
        S = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        [T, P] = i.useState(j),
        w = i.useRef(null),
        R = C > E ? C : E;
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
    let D = i.useCallback(
            (e) => {
                n(e.target.value);
            },
            [n]
        ),
        Z = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if ((t.trim().length <= 0 && p(), null != N.current && null != O.current && null != v.current)) {
                    var n;
                    N.current.scrollTo(0, 0), N.current.setSelectionRange(0, 0), (N.current.scrollLeft = 0), (O.current.scrollLeft = 0), (null == (n = v.current) ? void 0 : n.ref) != null && (v.current.ref.scrollLeft = 0);
                }
                y(!1), s(e);
            },
            [t, O, s, p]
        ),
        k = i.useCallback(
            (e) => {
                let n = t.trim().length <= 0;
                u.ye.has(e.key) ? (e.preventDefault(), e.stopPropagation(), Z(!0)) : 'Backspace' === e.key && n && (e.preventDefault(), e.stopPropagation(), Z(!0));
            },
            [Z, t]
        ),
        A = i.useCallback(
            (e) => {
                let t = e.metaKey || e.ctrlKey;
                g(t), t ? e.preventDefault() : y(!0), e.stopPropagation();
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
                [m.isEditing]: _,
                [m.smallBlink]: !_ && !S,
                [m.isSelected]: h,
                [m.isSelecting]: b,
                [m.isError]: null != x && !_
            }),
            children: [
                (0, r.jsxs)(o.P3F, {
                    tag: 'div',
                    onBlur: () => Z(!1),
                    onClick: A,
                    ignoreKeyPress: !0,
                    onMouseEnter: () => P(!0),
                    onMouseLeave: () => P(!1),
                    className: a()(m.chipletContainerInner, {
                        [m.isSelecting]: b,
                        [m.isEditing]: _
                    }),
                    ref: v,
                    children: [
                        (0, r.jsx)('input', {
                            className: a()(m.chipletInput, {
                                [m.isEditing]: _,
                                [m.isSelecting]: b
                            }),
                            ref: N,
                            onChange: D,
                            onKeyDownCapture: k,
                            value: t,
                            style: { width: R > 0 ? R : 'calc('.concat(t.length, 'ch + 10px)') }
                        }),
                        (0, r.jsx)(f, {
                            ref: O,
                            value: t,
                            isEditing: _,
                            isSelected: h,
                            error: x,
                            forceShowErrorTooltip: T || _
                        })
                    ]
                }),
                !_ &&
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
