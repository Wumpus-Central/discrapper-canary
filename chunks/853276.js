n.d(t, { Z: () => f }), n(388685), n(781311);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(28664),
    c = n(481060),
    d = n(393238),
    u = n(607070),
    g = n(596390),
    m = n(180002);
let p = i.forwardRef(function (e, t) {
    var n, l;
    let { value: s, isSelected: c, isEditing: d, forceShowErrorTooltip: u = !1, error: g } = e,
        [p, f, h] = i.useMemo(() => {
            if (null == g) return [];
            let { erroringCharacterOffset: e = 0, erroringCharacterLength: t = s.length } = null != g ? g : {},
                n = s.slice(0, e);
            return [n, s.slice(e, e + t), s.slice(e + t)];
        }, [s, g]);
    return null == g
        ? (0, r.jsx)("div", {
              className: a()(m.chipletValue, {
                  [m.isEditing]: d,
                  [m.isSelected]: c,
              }),
              ref: t,
              children: s,
          })
        : (null != (n = null == p ? void 0 : p.length) ? n : 0) +
                (null != (l = null == f ? void 0 : f.length) ? l : 0) >
            70
          ? (0, r.jsx)(o.u, {
                "aria-label": g.message,
                __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
                    "aria-label": g.message,
                    children: [
                        g.message,
                        " ",
                        (0, r.jsx)("span", {
                            className: m.errorOverflowValue,
                            children: f,
                        }),
                    ],
                }),
                position: "left",
                forceOpen: u || void 0,
                children: (0, r.jsxs)("div", {
                    ref: t,
                    className: a()(m.chipletValue, {
                        [m.isEditing]: d,
                        [m.isError]: null != g && !d,
                        [m.isOverflowing]: null != g && !d,
                    }),
                    children: [
                        (0, r.jsx)("span", { children: p }),
                        (0, r.jsx)("span", {
                            className: m.errorValue,
                            children: f,
                        }),
                        (0, r.jsx)("span", { children: h }),
                    ],
                }),
            })
          : (0, r.jsxs)("div", {
                ref: t,
                className: a()(m.chipletValue, {
                    [m.isEditing]: d,
                    [m.isError]: null != g && !d,
                }),
                children: [
                    (0, r.jsx)("span", { children: p }),
                    (0, r.jsx)(o.u, {
                        text: g.message,
                        position: "top",
                        forceOpen: u || void 0,
                        children: (0, r.jsx)("span", {
                            className: m.errorValue,
                            children: f,
                        }),
                    }),
                    (0, r.jsx)("span", { children: h }),
                ],
            });
});
function f(e) {
    let {
            value: t,
            onChange: n,
            onBlur: l,
            onFocus: o,
            onRemove: f,
            isSelected: h,
            isSelecting: b,
            error: x,
            forceShowErrorTooltip: j,
        } = e,
        _ = i.useRef(null),
        v = i.useRef(null),
        [O, C] = i.useState(!1),
        { ref: y, width: N = 0 } = (0, d.ZP)(O),
        { ref: E, width: I = 0 } = (0, d.ZP)(O),
        S = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        [T, P] = i.useState(j),
        w = i.useRef(null),
        Z = N > I ? N : I;
    i.useEffect(() => {
        j
            ? (P(!0),
              (w.current = setTimeout(() => {
                  P(!1), (w.current = null);
              }, g.I5)))
            : P(!1);
    }, [j]),
        i.useEffect(
            () => () => {
                clearTimeout(w.current);
            },
            [],
        );
    let R = i.useCallback(
            (e) => {
                n(e.target.value);
            },
            [n],
        ),
        D = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if ((t.trim().length <= 0 && f(), null != _.current && null != y.current && null != v.current)) {
                    var n;
                    _.current.scrollTo(0, 0),
                        _.current.setSelectionRange(0, 0),
                        (_.current.scrollLeft = 0),
                        (y.current.scrollLeft = 0),
                        (null == (n = v.current) ? void 0 : n.ref) != null && (v.current.ref.scrollLeft = 0);
                }
                C(!1), l(e);
            },
            [t, y, l, f],
        ),
        A = i.useCallback(
            (e) => {
                let n = t.trim().length <= 0;
                g.ye.has(e.key)
                    ? (e.preventDefault(), e.stopPropagation(), D(!0))
                    : "Backspace" === e.key && n && (e.preventDefault(), e.stopPropagation(), D(!0));
            },
            [D, t],
        ),
        L = i.useCallback(
            (e) => {
                let t = e.metaKey || e.ctrlKey;
                o(t), t ? e.preventDefault() : C(!0), e.stopPropagation();
            },
            [o],
        ),
        k = i.useCallback(
            (e) => {
                f();
            },
            [f],
        );
    return (0, r.jsx)("div", {
        className: m.chipletFlexContainer,
        children: (0, r.jsxs)("div", {
            ref: E,
            className: a()(m.chipletContainer, {
                [m.isEditing]: O,
                [m.smallBlink]: !O && !S,
                [m.isSelected]: h,
                [m.isSelecting]: b,
                [m.isError]: null != x && !O,
            }),
            children: [
                (0, r.jsxs)(c.P3F, {
                    tag: "div",
                    onBlur: () => D(!1),
                    onClick: L,
                    ignoreKeyPress: !0,
                    onMouseEnter: () => P(!0),
                    onMouseLeave: () => P(!1),
                    className: a()(m.chipletContainerInner, {
                        [m.isSelecting]: b,
                        [m.isEditing]: O,
                    }),
                    ref: v,
                    children: [
                        (0, r.jsx)("input", {
                            className: a()(m.chipletInput, {
                                [m.isEditing]: O,
                                [m.isSelecting]: b,
                            }),
                            ref: _,
                            onChange: R,
                            onKeyDownCapture: A,
                            value: t,
                            style: { width: Z > 0 ? Z : "calc(".concat(t.length, "ch + 10px)") },
                        }),
                        (0, r.jsx)(p, {
                            ref: y,
                            value: t,
                            isEditing: O,
                            isSelected: h,
                            error: x,
                            forceShowErrorTooltip: T || O,
                        }),
                    ],
                }),
                !O &&
                    (0, r.jsx)(c.P3F, {
                        className: m.closeIconContainer,
                        onClick: k,
                        children: (0, r.jsx)(c.Dio, {
                            size: "xxs",
                            color: "currentColor",
                            className: m.closeIcon,
                        }),
                    }),
            ],
        }),
    });
}
