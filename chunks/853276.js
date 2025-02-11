n.d(t, { Z: () => g }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(393238),
    d = n(607070),
    u = n(596390),
    m = n(615066);
let h = r.forwardRef(function (e, t) {
    var n, l;
    let { value: a, isSelected: c, isEditing: d, forceShowErrorTooltip: u = !1, error: h } = e,
        [g, x, p] = r.useMemo(() => {
            if (null == h) return [];
            let { erroringCharacterOffset: e = 0, erroringCharacterLength: t = a.length } = null != h ? h : {},
                n = a.slice(0, e);
            return [n, a.slice(e, e + t), a.slice(e + t)];
        }, [a, h]);
    return null == h
        ? (0, i.jsx)('div', {
              className: s()(m.chipletValue, {
                  [m.isEditing]: d,
                  [m.isSelected]: c
              }),
              ref: t,
              children: a
          })
        : (null !== (n = null == g ? void 0 : g.length) && void 0 !== n ? n : 0) + (null !== (l = null == x ? void 0 : x.length) && void 0 !== l ? l : 0) > 70
          ? (0, i.jsx)(o.ua7, {
                'aria-label': h.message,
                text: () =>
                    (0, i.jsxs)('div', {
                        'aria-label': h.message,
                        children: [
                            h.message,
                            ' ',
                            (0, i.jsx)('span', {
                                className: m.errorOverflowValue,
                                children: x
                            })
                        ]
                    }),
                tooltipClassName: m.errorTooltip,
                color: o.ua7.Colors.RED,
                position: 'left',
                forceOpen: u || void 0,
                children: (e) =>
                    (0, i.jsxs)('div', {
                        ref: t,
                        className: s()(m.chipletValue, {
                            [m.isEditing]: d,
                            [m.isError]: null != h && !d,
                            [m.isOverflowing]: null != h && !d
                        }),
                        ...e,
                        children: [
                            (0, i.jsx)('span', { children: g }),
                            (0, i.jsx)('span', {
                                className: m.errorValue,
                                children: x
                            }),
                            (0, i.jsx)('span', { children: p })
                        ]
                    })
            })
          : (0, i.jsxs)('div', {
                ref: t,
                className: s()(m.chipletValue, {
                    [m.isEditing]: d,
                    [m.isError]: null != h && !d
                }),
                children: [
                    (0, i.jsx)('span', { children: g }),
                    (0, i.jsx)(o.ua7, {
                        text: h.message,
                        color: o.ua7.Colors.RED,
                        position: 'top',
                        forceOpen: u || void 0,
                        children: (e) =>
                            (0, i.jsx)('span', {
                                ...e,
                                className: m.errorValue,
                                children: x
                            })
                    }),
                    (0, i.jsx)('span', { children: p })
                ]
            });
});
function g(e) {
    let { value: t, onChange: n, onBlur: l, onFocus: g, onRemove: x, isSelected: p, isSelecting: _, error: C, forceShowErrorTooltip: f } = e,
        v = r.useRef(null),
        N = r.useRef(null),
        [j, I] = r.useState(!1),
        { ref: E, width: b = 0 } = (0, c.Z)(j),
        { ref: T, width: S = 0 } = (0, c.Z)(j),
        R = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
        [Z, y] = r.useState(f),
        A = r.useRef(null),
        L = b > S ? b : S;
    r.useEffect(() => {
        f
            ? (y(!0),
              (A.current = setTimeout(() => {
                  y(!1), (A.current = null);
              }, u.I5)))
            : y(!1);
    }, [f]),
        r.useEffect(
            () => () => {
                clearTimeout(A.current);
            },
            []
        );
    let D = r.useCallback(
            (e) => {
                n(e.target.value);
            },
            [n]
        ),
        k = r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if ((t.trim().length <= 0 && x(), null != v.current && null != E.current && null != N.current)) {
                    var n;
                    v.current.scrollTo(0, 0), v.current.setSelectionRange(0, 0), (v.current.scrollLeft = 0), (E.current.scrollLeft = 0), (null === (n = N.current) || void 0 === n ? void 0 : n.ref) != null && (N.current.ref.scrollLeft = 0);
                }
                I(!1), l(e);
            },
            [t, E, l, x]
        ),
        O = r.useCallback(
            (e) => {
                let n = t.trim().length <= 0;
                u.ye.has(e.key) ? (e.preventDefault(), e.stopPropagation(), k(!0)) : 'Backspace' === e.key && n && (e.preventDefault(), e.stopPropagation(), k(!0));
            },
            [k, t]
        ),
        P = r.useCallback(
            (e) => {
                let t = e.metaKey || e.ctrlKey;
                g(t), t ? e.preventDefault() : I(!0), e.stopPropagation();
            },
            [g]
        ),
        w = r.useCallback(
            (e) => {
                x();
            },
            [x]
        );
    return (0, i.jsx)('div', {
        className: m.chipletFlexContainer,
        children: (0, i.jsxs)('div', {
            ref: T,
            className: s()(m.chipletContainer, {
                [m.isEditing]: j,
                [m.smallBlink]: !j && !R,
                [m.isSelected]: p,
                [m.isSelecting]: _,
                [m.isError]: null != C && !j
            }),
            children: [
                (0, i.jsxs)(o.P3F, {
                    tag: 'div',
                    onBlur: () => k(!1),
                    onClick: P,
                    ignoreKeyPress: !0,
                    onMouseEnter: () => y(!0),
                    onMouseLeave: () => y(!1),
                    className: s()(m.chipletContainerInner, {
                        [m.isSelecting]: _,
                        [m.isEditing]: j
                    }),
                    ref: N,
                    children: [
                        (0, i.jsx)('input', {
                            className: s()(m.chipletInput, {
                                [m.isEditing]: j,
                                [m.isSelecting]: _
                            }),
                            ref: v,
                            onChange: D,
                            onKeyDownCapture: O,
                            value: t,
                            style: { width: L > 0 ? L : 'calc('.concat(t.length, 'ch + 10px)') }
                        }),
                        (0, i.jsx)(h, {
                            ref: E,
                            value: t,
                            isEditing: j,
                            isSelected: p,
                            error: C,
                            forceShowErrorTooltip: Z || j
                        })
                    ]
                }),
                !j &&
                    (0, i.jsx)(o.P3F, {
                        className: m.closeIconContainer,
                        onClick: w,
                        children: (0, i.jsx)(o.Dio, {
                            size: 'xxs',
                            color: 'currentColor',
                            className: m.closeIcon
                        })
                    })
            ]
        })
    });
}
