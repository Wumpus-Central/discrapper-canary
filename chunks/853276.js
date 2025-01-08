n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(393238),
    d = n(607070),
    u = n(596390),
    m = n(207809);
let h = r.forwardRef(function (e, t) {
    var n, l;
    let { value: s, isSelected: c, isEditing: d, forceShowErrorTooltip: u = !1, error: h } = e,
        [g, x, p] = r.useMemo(() => {
            if (null == h) return [];
            let { erroringCharacterOffset: e = 0, erroringCharacterLength: t = s.length } = null != h ? h : {},
                n = s.slice(0, e),
                i = s.slice(e, e + t);
            return [n, i, s.slice(e + t)];
        }, [s, h]);
    return null == h
        ? (0, i.jsx)('div', {
              className: a()(m.chipletValue, {
                  [m.isEditing]: d,
                  [m.isSelected]: c
              }),
              ref: t,
              children: s
          })
        : (null !== (n = null == g ? void 0 : g.length) && void 0 !== n ? n : 0) + (null !== (l = null == x ? void 0 : x.length) && void 0 !== l ? l : 0) > 70
          ? (0, i.jsx)(o.Tooltip, {
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
                color: o.Tooltip.Colors.RED,
                position: 'left',
                forceOpen: u || void 0,
                children: (e) =>
                    (0, i.jsxs)('div', {
                        ref: t,
                        className: a()(m.chipletValue, {
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
                className: a()(m.chipletValue, {
                    [m.isEditing]: d,
                    [m.isError]: null != h && !d
                }),
                children: [
                    (0, i.jsx)('span', { children: g }),
                    (0, i.jsx)(o.Tooltip, {
                        text: h.message,
                        color: o.Tooltip.Colors.RED,
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
    let { value: t, onChange: n, onBlur: l, onFocus: g, onRemove: x, isSelected: p, isSelecting: f, error: C, forceShowErrorTooltip: v } = e,
        _ = r.useRef(null),
        N = r.useRef(null),
        [I, T] = r.useState(!1),
        { ref: j, width: b = 0 } = (0, c.Z)(I),
        { ref: S, width: E = 0 } = (0, c.Z)(I),
        R = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        [y, A] = r.useState(v),
        Z = r.useRef(null),
        L = b > E ? b : E;
    r.useEffect(() => {
        v
            ? (A(!0),
              (Z.current = setTimeout(() => {
                  A(!1), (Z.current = null);
              }, u.I5)))
            : A(!1);
    }, [v]),
        r.useEffect(
            () => () => {
                clearTimeout(Z.current);
            },
            []
        );
    let D = r.useCallback(
            (e) => {
                n(e.target.value);
            },
            [n]
        ),
        O = r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if ((t.trim().length <= 0 && x(), null != _.current && null != j.current && null != N.current)) {
                    var n;
                    _.current.scrollTo(0, 0), _.current.setSelectionRange(0, 0), (_.current.scrollLeft = 0), (j.current.scrollLeft = 0), (null === (n = N.current) || void 0 === n ? void 0 : n.ref) != null && (N.current.ref.scrollLeft = 0);
                }
                T(!1), l(e);
            },
            [t, j, l, x]
        ),
        k = r.useCallback(
            (e) => {
                let n = t.trim().length <= 0;
                u.ye.has(e.key) ? (e.preventDefault(), e.stopPropagation(), O(!0)) : 'Backspace' === e.key && n && (e.preventDefault(), e.stopPropagation(), O(!0));
            },
            [O, t]
        ),
        M = r.useCallback(
            (e) => {
                let t = e.metaKey || e.ctrlKey;
                g(t), t ? e.preventDefault() : T(!0), e.stopPropagation();
            },
            [g]
        ),
        P = r.useCallback(
            (e) => {
                x();
            },
            [x]
        );
    return (0, i.jsx)('div', {
        className: m.chipletFlexContainer,
        children: (0, i.jsxs)('div', {
            ref: S,
            className: a()(m.chipletContainer, {
                [m.isEditing]: I,
                [m.smallBlink]: !I && !R,
                [m.isSelected]: p,
                [m.isSelecting]: f,
                [m.isError]: null != C && !I
            }),
            children: [
                (0, i.jsxs)(o.Clickable, {
                    tag: 'div',
                    onBlur: () => O(!1),
                    onClick: M,
                    ignoreKeyPress: !0,
                    onMouseEnter: () => A(!0),
                    onMouseLeave: () => A(!1),
                    className: a()(m.chipletContainerInner, {
                        [m.isSelecting]: f,
                        [m.isEditing]: I
                    }),
                    ref: N,
                    children: [
                        (0, i.jsx)('input', {
                            className: a()(m.chipletInput, {
                                [m.isEditing]: I,
                                [m.isSelecting]: f
                            }),
                            ref: _,
                            onChange: D,
                            onKeyDownCapture: k,
                            value: t,
                            style: { width: L > 0 ? L : 'calc('.concat(t.length, 'ch + 10px)') }
                        }),
                        (0, i.jsx)(h, {
                            ref: j,
                            value: t,
                            isEditing: I,
                            isSelected: p,
                            error: C,
                            forceShowErrorTooltip: y || I
                        })
                    ]
                }),
                !I &&
                    (0, i.jsx)(o.Clickable, {
                        className: m.closeIconContainer,
                        onClick: P,
                        children: (0, i.jsx)(o.XSmallIcon, {
                            size: 'xxs',
                            color: 'currentColor',
                            className: m.closeIcon
                        })
                    })
            ]
        })
    });
}
