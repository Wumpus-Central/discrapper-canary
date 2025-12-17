n.d(t, { Z: () => b }), n(388685), n(781311);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(28664),
    c = n(481060),
    d = n(393238),
    u = n(607070),
    g = n(596390),
    f = n(812234);
let m = i.forwardRef(function (e, t) {
    var n, l;
    let { value: s, isSelected: c, isEditing: d, forceShowErrorTooltip: u = !1, error: g } = e,
        [m, b, p] = i.useMemo(() => {
            if (null == g) return [];
            let { erroringCharacterOffset: e = 0, erroringCharacterLength: t = s.length } = null != g ? g : {},
                n = s.slice(0, e);
            return [n, s.slice(e, e + t), s.slice(e + t)];
        }, [s, g]);
    return null == g
        ? (0, r.jsx)("div", {
              className: a()(f.chipletValue, {
                  [f.isEditing]: d,
                  [f.isSelected]: c,
              }),
              ref: t,
              children: s,
          })
        : (null != (n = null == m ? void 0 : m.length) ? n : 0) +
                (null != (l = null == b ? void 0 : b.length) ? l : 0) >
            70
          ? (0, r.jsx)(o.u, {
                "aria-label": g.message,
                __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
                    "aria-label": g.message,
                    children: [
                        g.message,
                        " ",
                        (0, r.jsx)("span", {
                            className: f.errorOverflowValue,
                            children: b,
                        }),
                    ],
                }),
                position: "left",
                forceOpen: u || void 0,
                children: (0, r.jsxs)("div", {
                    ref: t,
                    className: a()(f.chipletValue, {
                        [f.isEditing]: d,
                        [f.isError]: null != g && !d,
                        [f.isOverflowing]: null != g && !d,
                    }),
                    children: [
                        (0, r.jsx)("span", { children: m }),
                        (0, r.jsx)("span", {
                            className: f.errorValue,
                            children: b,
                        }),
                        (0, r.jsx)("span", { children: p }),
                    ],
                }),
            })
          : (0, r.jsxs)("div", {
                ref: t,
                className: a()(f.chipletValue, {
                    [f.isEditing]: d,
                    [f.isError]: null != g && !d,
                }),
                children: [
                    (0, r.jsx)("span", { children: m }),
                    (0, r.jsx)(o.u, {
                        text: g.message,
                        position: "top",
                        forceOpen: u || void 0,
                        children: (0, r.jsx)("span", {
                            className: f.errorValue,
                            children: b,
                        }),
                    }),
                    (0, r.jsx)("span", { children: p }),
                ],
            });
});
function b(e) {
    let {
            value: t,
            onChange: n,
            onBlur: l,
            onFocus: o,
            onRemove: b,
            isSelected: p,
            isSelecting: h,
            error: x,
            forceShowErrorTooltip: j,
        } = e,
        v = i.useRef(null),
        O = i.useRef(null),
        [C, y] = i.useState(!1),
        { ref: N, width: E = 0 } = (0, d.ZP)(C),
        { ref: I, width: S = 0 } = (0, d.ZP)(C),
        _ = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        [T, P] = i.useState(j),
        w = i.useRef(null),
        Z = E > S ? E : S;
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
                if ((t.trim().length <= 0 && b(), null != v.current && null != N.current && null != O.current)) {
                    var n;
                    v.current.scrollTo(0, 0),
                        v.current.setSelectionRange(0, 0),
                        (v.current.scrollLeft = 0),
                        (N.current.scrollLeft = 0),
                        (null == (n = O.current) ? void 0 : n.ref) != null && (O.current.ref.scrollLeft = 0);
                }
                y(!1), l(e);
            },
            [t, N, l, b],
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
                o(t), t ? e.preventDefault() : y(!0), e.stopPropagation();
            },
            [o],
        ),
        k = i.useCallback(
            (e) => {
                b();
            },
            [b],
        );
    return (0, r.jsx)("div", {
        className: f.chipletFlexContainer,
        children: (0, r.jsxs)("div", {
            ref: I,
            className: a()(f.chipletContainer, {
                [f.isEditing]: C,
                [f.smallBlink]: !C && !_,
                [f.isSelected]: p,
                [f.isSelecting]: h,
                [f.isError]: null != x && !C,
            }),
            children: [
                (0, r.jsxs)(c.P3F, {
                    tag: "div",
                    onBlur: () => D(!1),
                    onClick: L,
                    ignoreKeyPress: !0,
                    onMouseEnter: () => P(!0),
                    onMouseLeave: () => P(!1),
                    className: a()(f.chipletContainerInner, {
                        [f.isSelecting]: h,
                        [f.isEditing]: C,
                    }),
                    ref: O,
                    children: [
                        (0, r.jsx)("input", {
                            className: a()(f.chipletInput, {
                                [f.isEditing]: C,
                                [f.isSelecting]: h,
                            }),
                            ref: v,
                            onChange: R,
                            onKeyDownCapture: A,
                            value: t,
                            style: { width: Z > 0 ? Z : "calc(".concat(t.length, "ch + 10px)") },
                        }),
                        (0, r.jsx)(m, {
                            ref: N,
                            value: t,
                            isEditing: C,
                            isSelected: p,
                            error: x,
                            forceShowErrorTooltip: T || C,
                        }),
                    ],
                }),
                !C &&
                    (0, r.jsx)(c.P3F, {
                        className: f.closeIconContainer,
                        onClick: k,
                        children: (0, r.jsx)(c.Dio, {
                            size: "xxs",
                            color: "currentColor",
                            className: f.closeIcon,
                        }),
                    }),
            ],
        }),
    });
}
