"use strict";
n.d(t, { CR: () => C, LY: () => N, vw: () => O });
var r = n(650682),
    i = n(241634),
    a = n(825913),
    s = n(129844),
    o = n(447509),
    l = n(257537),
    u = n(123375),
    c = n(357710),
    d = n(193523),
    _ = n(567359),
    f = n(498430),
    p = n(27270),
    h = n(967158),
    m = n(59845),
    g = n(178375),
    E = n(290424),
    A = n(803082),
    I = n(533715),
    T = n(565801),
    y = n(64700);
let S = (0, y.createContext)(null),
    v = (0, y.createContext)(null),
    C = (0, y.forwardRef)(function (e, t) {
        return (
            ([e, t] = (0, a.JT)(e, t, S)),
            y.createElement(
                o.DN.Provider,
                { value: null },
                y.createElement(m.GQ, { content: e.children }, (n) =>
                    y.createElement(b, { props: e, forwardedRef: t, collection: n }),
                ),
            )
        );
    });
function b({ props: e, forwardedRef: t, collection: n }) {
    var r;
    let i = (0, y.useRef)(null),
        { id: u, ...c } = e;
    [c, i] = (0, a.JT)(c, i, l.Co);
    let { filter: f, shouldUseVirtualFocus: p, ...h } = c,
        [m, g] = (0, a._E)(!e["aria-label"] && !e["aria-labelledby"]),
        A = (0, T.p)({ ...h, children: void 0, collection: n }),
        I = (0, T.Z)(A, f),
        S = (0, E.$)(c, { global: !0 }),
        C = Object.fromEntries(Object.entries(S).map(([e, t]) => [e, "id" === e ? t : void 0])),
        {
            gridProps: b,
            labelProps: N,
            descriptionProps: R,
            errorMessageProps: O,
        } = (0, _.n)({ ...h, ...C, label: g }, I, i);
    return y.createElement(
        "div",
        {
            ...S,
            id: u,
            ref: t,
            slot: e.slot || void 0,
            className: null != (r = e.className) ? r : "react-aria-TagGroup",
            style: e.style,
        },
        y.createElement(
            a.Kq,
            {
                values: [
                    [s.I, { ...N, elementType: "span", ref: m }],
                    [v, { ...b, ref: i }],
                    [o.DN, I],
                    [d.h, { slots: { description: R, errorMessage: O } }],
                ],
            },
            e.children,
        ),
    );
}
let N = (0, y.forwardRef)(function (e, t) {
    return (0, y.useContext)(o.DN) ? y.createElement(R, { props: e, forwardedRef: t }) : y.createElement(m.pM, e);
});
function R({ props: e, forwardedRef: t }) {
    let n = (0, y.useContext)(o.DN),
        { CollectionRoot: r } = (0, y.useContext)(i.zL),
        [s, l] = (0, a.JT)({}, t, v),
        { focusProps: u, isFocused: d, isFocusVisible: _ } = (0, f.o)(),
        p = { isEmpty: 0 === n.collection.size, isFocused: d, isFocusVisible: _, state: n },
        h = (0, a.Sl)({ className: e.className, style: e.style, defaultClassName: "react-aria-TagList", values: p }),
        m = (0, i.l2)(n.selectionManager.focusedKey),
        g = (0, E.$)(e, { global: !0 });
    return y.createElement(
        "div",
        {
            ...(0, A.v)(g, h, s, u),
            ref: l,
            "data-empty": 0 === n.collection.size || void 0,
            "data-focused": d || void 0,
            "data-focus-visible": _ || void 0,
        },
        y.createElement(
            c.D,
            null,
            0 === n.collection.size && e.renderEmptyState
                ? e.renderEmptyState(p)
                : y.createElement(r, { collection: n.collection, persistedKeys: m }),
        ),
    );
}
let O = (0, m.KU)(g._B, (e, t, n) => {
    let s = (0, y.useContext)(o.DN),
        l = (0, I.U)(t),
        { focusProps: c, isFocusVisible: d } = (0, f.o)({ within: !1 }),
        { rowProps: _, gridCellProps: m, removeButtonProps: g, ...T } = (0, p.O)({ item: n }, s, l),
        { hoverProps: S, isHovered: v } = (0, h.M)({
            isDisabled: !T.allowsSelection,
            onHoverStart: n.props.onHoverStart,
            onHoverChange: n.props.onHoverChange,
            onHoverEnd: n.props.onHoverEnd,
        }),
        C = (0, a.Sl)({
            ...e,
            id: void 0,
            children: n.rendered,
            defaultClassName: "react-aria-Tag",
            values: {
                ...T,
                isFocusVisible: d,
                isHovered: v,
                selectionMode: s.selectionManager.selectionMode,
                selectionBehavior: s.selectionManager.selectionBehavior,
            },
        });
    (0, y.useEffect)(() => {
        n.textValue;
    }, [n.textValue]);
    let b = (0, E.$)(e, { global: !0 });
    return (
        delete b.id,
        delete b.onClick,
        y.createElement(
            "div",
            {
                ref: l,
                ...(0, A.v)(b, C, _, c, S),
                "data-selected": T.isSelected || void 0,
                "data-disabled": T.isDisabled || void 0,
                "data-hovered": v || void 0,
                "data-focused": T.isFocused || void 0,
                "data-focus-visible": d || void 0,
                "data-pressed": T.isPressed || void 0,
                "data-allows-removing": T.allowsRemoving || void 0,
                "data-selection-mode":
                    "none" === s.selectionManager.selectionMode ? void 0 : s.selectionManager.selectionMode,
            },
            y.createElement(
                "div",
                { ...m, style: { display: "contents" } },
                y.createElement(
                    a.Kq,
                    {
                        values: [
                            [r.k, { slots: { remove: g } }],
                            [i.zL, i.N],
                            [u.r, { isSelected: T.isSelected }],
                        ],
                    },
                    C.children,
                ),
            ),
        )
    );
});
