n.d(t, { r: () => h });
var r = n(477831),
    i = n(469811),
    a = n(769175),
    o = n(1334),
    s = n(586235),
    l = n(500282),
    c = n(158573),
    u = n(981902),
    d = n(436773),
    f = n(647438),
    _ = n(922462);
let p = (0, f.createContext)(null),
    h = (0, f.forwardRef)(function (e, t) {
        let { inputRef: n = null, ...h } = e;
        [e, t] = (0, r.pE)(h, t, p);
        let m = (0, c.B)((0, u.l)(n, void 0 !== e.inputRef ? e.inputRef : null)),
            g = (0, _.l)(e),
            {
                labelProps: E,
                inputProps: b,
                isSelected: y,
                isDisabled: O,
                isReadOnly: v,
                isPressed: I,
            } = (0, i.h)(
                {
                    ...(0, r.vl)(e),
                    children: "function" == typeof e.children || e.children,
                },
                g,
                m,
            ),
            { isFocused: T, isFocusVisible: S, focusProps: A } = (0, a.F)(),
            C = e.isDisabled || e.isReadOnly,
            { hoverProps: N, isHovered: R } = (0, o.X)({
                ...e,
                isDisabled: C,
            }),
            P = (0, r.aX)({
                ...e,
                defaultClassName: "react-aria-Switch",
                values: {
                    isSelected: y,
                    isPressed: I,
                    isHovered: R,
                    isFocused: T,
                    isFocusVisible: S,
                    isDisabled: O,
                    isReadOnly: v,
                    state: g,
                },
            }),
            w = (0, d.z)(e, { global: !0 });
        return (
            delete w.id,
            delete w.onClick,
            f.createElement(
                "label",
                {
                    ...(0, s.d)(w, E, N, P),
                    ref: t,
                    slot: e.slot || void 0,
                    "data-selected": y || void 0,
                    "data-pressed": I || void 0,
                    "data-hovered": R || void 0,
                    "data-focused": T || void 0,
                    "data-focus-visible": S || void 0,
                    "data-disabled": O || void 0,
                    "data-readonly": v || void 0,
                },
                f.createElement(
                    l.T,
                    { elementType: "span" },
                    f.createElement("input", {
                        ...(0, s.d)(b, A),
                        ref: m,
                    }),
                ),
                P.children,
            )
        );
    });
