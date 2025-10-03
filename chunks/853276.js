n.d(t, { Z: () => f }), n(388685), n(781311);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(28664),
    c = n(481060),
    d = n(393238),
    u = n(607070),
    m = n(596390),
    g = n(180002);
let p = i.forwardRef(function (e, t) {
    var n, l;
    let { value: a, isSelected: c, isEditing: d, forceShowErrorTooltip: u = !1, error: m } = e,
        [p, f, h] = i.useMemo(() => {
            if (null == m) return [];
            let { erroringCharacterOffset: e = 0, erroringCharacterLength: t = a.length } = null != m ? m : {},
                n = a.slice(0, e);
            return [n, a.slice(e, e + t), a.slice(e + t)];
        }, [a, m]);
    return null == m
        ? (0, r.jsx)("div", {
              className: s()(g.chipletValue, {
                  [g.isEditing]: d,
                  [g.isSelected]: c,
              }),
              ref: t,
              children: a,
          })
        : (null != (n = null == p ? void 0 : p.length) ? n : 0) +
                (null != (l = null == f ? void 0 : f.length) ? l : 0) >
            70
          ? (0, r.jsx)(o.u, {
                "aria-label": m.message,
                __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
                    "aria-label": m.message,
                    children: [
                        m.message,
                        " ",
                        (0, r.jsx)("span", {
                            className: g.errorOverflowValue,
                            children: f,
                        }),
                    ],
                }),
                position: "left",
                forceOpen: u || void 0,
                children: (0, r.jsxs)("div", {
                    ref: t,
                    className: s()(g.chipletValue, {
                        [g.isEditing]: d,
                        [g.isError]: null != m && !d,
                        [g.isOverflowing]: null != m && !d,
                    }),
                    children: [
                        (0, r.jsx)("span", { children: p }),
                        (0, r.jsx)("span", {
                            className: g.errorValue,
                            children: f,
                        }),
                        (0, r.jsx)("span", { children: h }),
                    ],
                }),
            })
          : (0, r.jsxs)("div", {
                ref: t,
                className: s()(g.chipletValue, {
                    [g.isEditing]: d,
                    [g.isError]: null != m && !d,
                }),
                children: [
                    (0, r.jsx)("span", { children: p }),
                    (0, r.jsx)(o.u, {
                        text: m.message,
                        position: "top",
                        forceOpen: u || void 0,
                        children: (0, r.jsx)("span", {
                            className: g.errorValue,
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
            isSelecting: x,
            error: b,
            forceShowErrorTooltip: j,
        } = e,
        _ = i.useRef(null),
        v = i.useRef(null),
        [C, O] = i.useState(!1),
        { ref: y, width: N = 0 } = (0, d.ZP)(C),
        { ref: E, width: I = 0 } = (0, d.ZP)(C),
        S = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
        [T, P] = i.useState(j),
        w = i.useRef(null),
        R = N > I ? N : I;
    i.useEffect(() => {
        j
            ? (P(!0),
              (w.current = setTimeout(() => {
                  P(!1), (w.current = null);
              }, m.I5)))
            : P(!1);
    }, [j]),
        i.useEffect(
            () => () => {
                clearTimeout(w.current);
            },
            [],
        );
    let Z = i.useCallback(
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
                O(!1), l(e);
            },
            [t, y, l, f],
        ),
        A = i.useCallback(
            (e) => {
                let n = t.trim().length <= 0;
                m.ye.has(e.key)
                    ? (e.preventDefault(), e.stopPropagation(), D(!0))
                    : "Backspace" === e.key && n && (e.preventDefault(), e.stopPropagation(), D(!0));
            },
            [D, t],
        ),
        L = i.useCallback(
            (e) => {
                let t = e.metaKey || e.ctrlKey;
                o(t), t ? e.preventDefault() : O(!0), e.stopPropagation();
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
        className: g.chipletFlexContainer,
        children: (0, r.jsxs)("div", {
            ref: E,
            className: s()(g.chipletContainer, {
                [g.isEditing]: C,
                [g.smallBlink]: !C && !S,
                [g.isSelected]: h,
                [g.isSelecting]: x,
                [g.isError]: null != b && !C,
            }),
            children: [
                (0, r.jsxs)(c.P3F, {
                    tag: "div",
                    onBlur: () => D(!1),
                    onClick: L,
                    ignoreKeyPress: !0,
                    onMouseEnter: () => P(!0),
                    onMouseLeave: () => P(!1),
                    className: s()(g.chipletContainerInner, {
                        [g.isSelecting]: x,
                        [g.isEditing]: C,
                    }),
                    ref: v,
                    children: [
                        (0, r.jsx)("input", {
                            className: s()(g.chipletInput, {
                                [g.isEditing]: C,
                                [g.isSelecting]: x,
                            }),
                            ref: _,
                            onChange: Z,
                            onKeyDownCapture: A,
                            value: t,
                            style: { width: R > 0 ? R : "calc(".concat(t.length, "ch + 10px)") },
                        }),
                        (0, r.jsx)(p, {
                            ref: y,
                            value: t,
                            isEditing: C,
                            isSelected: h,
                            error: b,
                            forceShowErrorTooltip: T || C,
                        }),
                    ],
                }),
                !C &&
                    (0, r.jsx)(c.P3F, {
                        className: g.closeIconContainer,
                        onClick: k,
                        children: (0, r.jsx)(c.Dio, {
                            size: "xxs",
                            color: "currentColor",
                            className: g.closeIcon,
                        }),
                    }),
            ],
        }),
    });
}
