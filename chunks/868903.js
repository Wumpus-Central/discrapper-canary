"use strict";
n.d(t, { CR: () => v, LY: () => O, vw: () => b });
var r = n(650682),
    i = n(241634),
    s = n(825913),
    a = n(129844),
    o = n(447509),
    l = n(257537),
    u = n(123375),
    c = n(357710),
    d = n(193523),
    _ = n(567359),
    f = n(498430),
    p = n(27270),
    h = n(967158),
    E = n(59845),
    m = n(178375),
    g = n(290424),
    A = n(803082),
    I = n(533715),
    T = n(565801),
    S = n(64700);
let y = (0, S.createContext)(null),
    N = (0, S.createContext)(null),
    v = (0, S.forwardRef)(function (e, t) {
        return (
            ([e, t] = (0, s.JT)(e, t, y)),
            S.createElement(
                o.DN.Provider,
                { value: null },
                S.createElement(E.GQ, { content: e.children }, (n) =>
                    S.createElement(C, { props: e, forwardedRef: t, collection: n }),
                ),
            )
        );
    });
function C({ props: e, forwardedRef: t, collection: n }) {
    var r;
    let i = (0, S.useRef)(null),
        { id: u, ...c } = e;
    [c, i] = (0, s.JT)(c, i, l.Co);
    let { filter: f, shouldUseVirtualFocus: p, ...h } = c,
        [E, m] = (0, s._E)(!e["aria-label"] && !e["aria-labelledby"]),
        A = (0, T.p)({ ...h, children: void 0, collection: n }),
        I = (0, T.Z)(A, f),
        y = (0, g.$)(c, { global: !0 }),
        v = Object.fromEntries(Object.entries(y).map(([e, t]) => [e, "id" === e ? t : void 0])),
        {
            gridProps: O,
            labelProps: R,
            descriptionProps: b,
            errorMessageProps: D,
        } = (0, _.n)({ ...h, ...v, label: m }, I, i);
    return S.createElement(
        "div",
        {
            ...y,
            id: u,
            ref: t,
            slot: e.slot || void 0,
            className: null != (r = e.className) ? r : "react-aria-TagGroup",
            style: e.style,
        },
        S.createElement(
            s.Kq,
            {
                values: [
                    [a.I, { ...R, elementType: "span", ref: E }],
                    [N, { ...O, ref: i }],
                    [o.DN, I],
                    [d.h, { slots: { description: b, errorMessage: D } }],
                ],
            },
            e.children,
        ),
    );
}
let O = (0, S.forwardRef)(function (e, t) {
    return (0, S.useContext)(o.DN) ? S.createElement(R, { props: e, forwardedRef: t }) : S.createElement(E.pM, e);
});
function R({ props: e, forwardedRef: t }) {
    let n = (0, S.useContext)(o.DN),
        { CollectionRoot: r } = (0, S.useContext)(i.zL),
        [a, l] = (0, s.JT)({}, t, N),
        { focusProps: u, isFocused: d, isFocusVisible: _ } = (0, f.o)(),
        p = { isEmpty: 0 === n.collection.size, isFocused: d, isFocusVisible: _, state: n },
        h = (0, s.Sl)({ className: e.className, style: e.style, defaultClassName: "react-aria-TagList", values: p }),
        E = (0, i.l2)(n.selectionManager.focusedKey),
        m = (0, g.$)(e, { global: !0 });
    return S.createElement(
        "div",
        {
            ...(0, A.v)(m, h, a, u),
            ref: l,
            "data-empty": 0 === n.collection.size || void 0,
            "data-focused": d || void 0,
            "data-focus-visible": _ || void 0,
        },
        S.createElement(
            c.D,
            null,
            0 === n.collection.size && e.renderEmptyState
                ? e.renderEmptyState(p)
                : S.createElement(r, { collection: n.collection, persistedKeys: E }),
        ),
    );
}
let b = (0, E.KU)(m._B, (e, t, n) => {
    let a = (0, S.useContext)(o.DN),
        l = (0, I.U)(t),
        { focusProps: c, isFocusVisible: d } = (0, f.o)({ within: !1 }),
        { rowProps: _, gridCellProps: E, removeButtonProps: m, ...T } = (0, p.O)({ item: n }, a, l),
        { hoverProps: y, isHovered: N } = (0, h.M)({
            isDisabled: !T.allowsSelection,
            onHoverStart: n.props.onHoverStart,
            onHoverChange: n.props.onHoverChange,
            onHoverEnd: n.props.onHoverEnd,
        }),
        v = (0, s.Sl)({
            ...e,
            id: void 0,
            children: n.rendered,
            defaultClassName: "react-aria-Tag",
            values: {
                ...T,
                isFocusVisible: d,
                isHovered: N,
                selectionMode: a.selectionManager.selectionMode,
                selectionBehavior: a.selectionManager.selectionBehavior,
            },
        });
    (0, S.useEffect)(() => {
        n.textValue;
    }, [n.textValue]);
    let C = (0, g.$)(e, { global: !0 });
    return (
        delete C.id,
        delete C.onClick,
        S.createElement(
            "div",
            {
                ref: l,
                ...(0, A.v)(C, v, _, c, y),
                "data-selected": T.isSelected || void 0,
                "data-disabled": T.isDisabled || void 0,
                "data-hovered": N || void 0,
                "data-focused": T.isFocused || void 0,
                "data-focus-visible": d || void 0,
                "data-pressed": T.isPressed || void 0,
                "data-allows-removing": T.allowsRemoving || void 0,
                "data-selection-mode":
                    "none" === a.selectionManager.selectionMode ? void 0 : a.selectionManager.selectionMode,
            },
            S.createElement(
                "div",
                { ...E, style: { display: "contents" } },
                S.createElement(
                    s.Kq,
                    {
                        values: [
                            [r.k, { slots: { remove: m } }],
                            [i.zL, i.N],
                            [u.r, { isSelected: T.isSelected }],
                        ],
                    },
                    v.children,
                ),
            ),
        )
    );
});
