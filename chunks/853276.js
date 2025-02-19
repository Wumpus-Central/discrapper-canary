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
    m = n(41011);
function p(e) {
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
function g(e, t) {
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
        : (null !== (n = null == f ? void 0 : f.length) && void 0 !== n ? n : 0) + (null !== (s = null == b ? void 0 : b.length) && void 0 !== s ? s : 0) > 70
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
                        g(
                            p(
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
                                g(p({}, e), {
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
    let { value: t, onChange: n, onBlur: s, onFocus: p, onRemove: g, isSelected: f, isSelecting: b, error: x, forceShowErrorTooltip: j } = e,
        N = i.useRef(null),
        v = i.useRef(null),
        [_, O] = i.useState(!1),
        { ref: y, width: C = 0 } = (0, c.Z)(_),
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
                if ((t.trim().length <= 0 && g(), null != N.current && null != y.current && null != v.current)) {
                    var n;
                    N.current.scrollTo(0, 0), N.current.setSelectionRange(0, 0), (N.current.scrollLeft = 0), (y.current.scrollLeft = 0), (null === (n = v.current) || void 0 === n ? void 0 : n.ref) != null && (v.current.ref.scrollLeft = 0);
                }
                O(!1), s(e);
            },
            [t, y, s, g]
        ),
        A = i.useCallback(
            (e) => {
                let n = t.trim().length <= 0;
                u.ye.has(e.key) ? (e.preventDefault(), e.stopPropagation(), Z(!0)) : 'Backspace' === e.key && n && (e.preventDefault(), e.stopPropagation(), Z(!0));
            },
            [Z, t]
        ),
        k = i.useCallback(
            (e) => {
                let t = e.metaKey || e.ctrlKey;
                p(t), t ? e.preventDefault() : O(!0), e.stopPropagation();
            },
            [p]
        ),
        W = i.useCallback(
            (e) => {
                g();
            },
            [g]
        );
    return (0, r.jsx)('div', {
        className: m.chipletFlexContainer,
        children: (0, r.jsxs)('div', {
            ref: I,
            className: a()(m.chipletContainer, {
                [m.isEditing]: _,
                [m.smallBlink]: !_ && !S,
                [m.isSelected]: f,
                [m.isSelecting]: b,
                [m.isError]: null != x && !_
            }),
            children: [
                (0, r.jsxs)(o.P3F, {
                    tag: 'div',
                    onBlur: () => Z(!1),
                    onClick: k,
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
                            onKeyDownCapture: A,
                            value: t,
                            style: { width: R > 0 ? R : 'calc('.concat(t.length, 'ch + 10px)') }
                        }),
                        (0, r.jsx)(h, {
                            ref: y,
                            value: t,
                            isEditing: _,
                            isSelected: f,
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
