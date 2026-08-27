s.d(t, { f: () => p });
var i = s(407815),
    l = s(353509),
    r = s(467356),
    o = s(790308),
    a = s(961082),
    d = s(184093),
    n = s(582128),
    c = s(837190),
    u = s(288378),
    b = s(500731),
    v = s(940404);
let f = (0, n.createContext)({}),
    p = (0, n.forwardRef)(function (e, t) {
        [e, t] = (0, i.JT)(e, t, f);
        let s = (0, n.useContext)(r.G0),
            p = (0, c.H)(
                s && null != e.id
                    ? {
                          isSelected: s.selectedKeys.has(e.id),
                          onChange(t) {
                              s.setSelected(e.id, t);
                          },
                      }
                    : e,
            ),
            {
                buttonProps: g,
                isPressed: S,
                isSelected: h,
                isDisabled: P,
            } = s && null != e.id
                ? (0, v.O)({ ...e, id: e.id }, s, t)
                : (0, o.q)({ ...e, id: null != e.id ? String(e.id) : void 0 }, p, t),
            { focusProps: D, isFocused: y, isFocusVisible: w } = (0, u.o)(e),
            { hoverProps: K, isHovered: C } = (0, b.M)({ ...e, isDisabled: P }),
            m = (0, i.Sl)({
                ...e,
                id: void 0,
                values: {
                    isHovered: C,
                    isPressed: S,
                    isFocused: y,
                    isSelected: p.isSelected,
                    isFocusVisible: w,
                    isDisabled: P,
                    state: p,
                },
                defaultClassName: "react-aria-ToggleButton",
            }),
            T = (0, a.$)(e, { global: !0 });
        return (
            delete T.id,
            delete T.onClick,
            n.createElement(
                i.tT.button,
                {
                    ...(0, d.v)(T, m, g, D, K),
                    ref: t,
                    slot: e.slot || void 0,
                    "data-focused": y || void 0,
                    "data-disabled": P || void 0,
                    "data-pressed": S || void 0,
                    "data-selected": h || void 0,
                    "data-hovered": C || void 0,
                    "data-focus-visible": w || void 0,
                },
                n.createElement(l.r.Provider, { value: { isSelected: h } }, m.children),
            )
        );
    });
