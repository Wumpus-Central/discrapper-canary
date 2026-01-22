n.d(t, {
    CR: () => I,
    LY: () => C,
    vw: () => R,
});
var r = n(650682),
    i = n(241634),
    a = n(825913),
    s = n(129844),
    o = n(447509),
    l = n(257537),
    c = n(123375),
    u = n(357710),
    d = n(193523),
    f = n(567359),
    p = n(498430),
    _ = n(27270),
    h = n(967158),
    m = n(59845),
    g = n(178375),
    E = n(290424),
    b = n(803082),
    y = n(533715),
    O = n(565801),
    A = n(64700);
let v = (0, A.createContext)(null),
    S = (0, A.createContext)(null),
    I = (0, A.forwardRef)(function (e, t) {
        return (
            ([e, t] = (0, a.JT)(e, t, v)),
            A.createElement(
                o.DN.Provider,
                { value: null },
                A.createElement(m.GQ, { content: e.children }, (n) =>
                    A.createElement(T, {
                        props: e,
                        forwardedRef: t,
                        collection: n,
                    }),
                ),
            )
        );
    });
function T({ props: e, forwardedRef: t, collection: n }) {
    var r;
    let i = (0, A.useRef)(null),
        { id: c, ...u } = e;
    [u, i] = (0, a.JT)(u, i, l.Co);
    let { filter: p, shouldUseVirtualFocus: _, ...h } = u,
        [m, g] = (0, a._E)(!e["aria-label"] && !e["aria-labelledby"]),
        b = (0, O.p)({
            ...h,
            children: void 0,
            collection: n,
        }),
        y = (0, O.Z)(b, p),
        v = (0, E.$)(u, { global: !0 }),
        I = Object.fromEntries(Object.entries(v).map(([e, t]) => [e, "id" === e ? t : void 0])),
        {
            gridProps: T,
            labelProps: C,
            descriptionProps: N,
            errorMessageProps: R,
        } = (0, f.n)(
            {
                ...h,
                ...I,
                label: g,
            },
            y,
            i,
        );
    return A.createElement(
        "div",
        {
            ...v,
            id: c,
            ref: t,
            slot: e.slot || void 0,
            className: null != (r = e.className) ? r : "react-aria-TagGroup",
            style: e.style,
        },
        A.createElement(
            a.Kq,
            {
                values: [
                    [
                        s.I,
                        {
                            ...C,
                            elementType: "span",
                            ref: m,
                        },
                    ],
                    [
                        S,
                        {
                            ...T,
                            ref: i,
                        },
                    ],
                    [o.DN, y],
                    [
                        d.h,
                        {
                            slots: {
                                description: N,
                                errorMessage: R,
                            },
                        },
                    ],
                ],
            },
            e.children,
        ),
    );
}
let C = (0, A.forwardRef)(function (e, t) {
    return (0, A.useContext)(o.DN)
        ? A.createElement(N, {
              props: e,
              forwardedRef: t,
          })
        : A.createElement(m.pM, e);
});
function N({ props: e, forwardedRef: t }) {
    let n = (0, A.useContext)(o.DN),
        { CollectionRoot: r } = (0, A.useContext)(i.zL),
        [s, l] = (0, a.JT)({}, t, S),
        { focusProps: c, isFocused: d, isFocusVisible: f } = (0, p.o)(),
        _ = {
            isEmpty: 0 === n.collection.size,
            isFocused: d,
            isFocusVisible: f,
            state: n,
        },
        h = (0, a.Sl)({
            className: e.className,
            style: e.style,
            defaultClassName: "react-aria-TagList",
            values: _,
        }),
        m = (0, i.l2)(n.selectionManager.focusedKey),
        g = (0, E.$)(e, { global: !0 });
    return A.createElement(
        "div",
        {
            ...(0, b.v)(g, h, s, c),
            ref: l,
            "data-empty": 0 === n.collection.size || void 0,
            "data-focused": d || void 0,
            "data-focus-visible": f || void 0,
        },
        A.createElement(
            u.D,
            null,
            0 === n.collection.size && e.renderEmptyState
                ? e.renderEmptyState(_)
                : A.createElement(r, {
                      collection: n.collection,
                      persistedKeys: m,
                  }),
        ),
    );
}
let R = (0, m.KU)(g._B, (e, t, n) => {
    let s = (0, A.useContext)(o.DN),
        l = (0, y.U)(t),
        { focusProps: u, isFocusVisible: d } = (0, p.o)({ within: !1 }),
        { rowProps: f, gridCellProps: m, removeButtonProps: g, ...O } = (0, _.O)({ item: n }, s, l),
        { hoverProps: v, isHovered: S } = (0, h.M)({
            isDisabled: !O.allowsSelection,
            onHoverStart: n.props.onHoverStart,
            onHoverChange: n.props.onHoverChange,
            onHoverEnd: n.props.onHoverEnd,
        }),
        I = (0, a.Sl)({
            ...e,
            id: void 0,
            children: n.rendered,
            defaultClassName: "react-aria-Tag",
            values: {
                ...O,
                isFocusVisible: d,
                isHovered: S,
                selectionMode: s.selectionManager.selectionMode,
                selectionBehavior: s.selectionManager.selectionBehavior,
            },
        });
    (0, A.useEffect)(() => {
        n.textValue;
    }, [n.textValue]);
    let T = (0, E.$)(e, { global: !0 });
    return (
        delete T.id,
        delete T.onClick,
        A.createElement(
            "div",
            {
                ref: l,
                ...(0, b.v)(T, I, f, u, v),
                "data-selected": O.isSelected || void 0,
                "data-disabled": O.isDisabled || void 0,
                "data-hovered": S || void 0,
                "data-focused": O.isFocused || void 0,
                "data-focus-visible": d || void 0,
                "data-pressed": O.isPressed || void 0,
                "data-allows-removing": O.allowsRemoving || void 0,
                "data-selection-mode":
                    "none" === s.selectionManager.selectionMode ? void 0 : s.selectionManager.selectionMode,
            },
            A.createElement(
                "div",
                {
                    ...m,
                    style: { display: "contents" },
                },
                A.createElement(
                    a.Kq,
                    {
                        values: [
                            [r.k, { slots: { remove: g } }],
                            [i.zL, i.N],
                            [c.r, { isSelected: O.isSelected }],
                        ],
                    },
                    I.children,
                ),
            ),
        )
    );
});
