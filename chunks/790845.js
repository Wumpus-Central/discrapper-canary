"use strict";
n.d(t, { A: () => R });
var i = n(627968),
    r = n(452027),
    s = n(64700),
    a = n(757260),
    o = n(967158),
    l = n(785651),
    u = n(823807),
    c = n(661531),
    d = n(717421),
    _ = n(603392),
    f = n(844222),
    h = n(187322),
    p = n(140735),
    E = n(764371);
let m = "M4.10585 5.3837L5.37864 4.11091L11.884 10.61632L10.6112 11.88912L4.10585 5.3837Z",
    g = "M10.61632 4.11091L11.88912 5.3837L5.3837 11.88912L4.11091 10.61632L10.61632 4.11091Z",
    A = "M5.25333 8.80104L5.25333 7.17346L10.85336 7.17346L10.85336 8.80104L5.25333 8.80104Z",
    I = "M10.84656 7.17346L10.84656 8.80104L5.24954 8.80104L5.24954 7.17346L10.84656 7.17346Z",
    T = "M6.31649 11.88304L5.0437 10.61032L11.44792 4.20604L12.72072 5.47883L6.31649 11.88304Z",
    S = "M3.26914 8.87224L4.54194 7.59943L7.5588 10.61632L6.28601 11.88912L3.26914 8.87224Z",
    N = [0, 0.1, 0.4, 0.6, 0.9, 1],
    y = [0, 0.1, 0.9, 1],
    C = [0, 0.1, 0.2, 0.5, 0.7, 1],
    v = [0, 0.3, 0.5, 0.8, 0.9, 1];
function O(e) {
    let t,
        {
            checked: n,
            disabled: r,
            id: O,
            onChange: R,
            focusProps: b,
            hasIcon: D = !1,
            describedBy: L,
            labelledBy: w,
            innerRef: M,
        } = e,
        { reducedMotion: P } = s.useContext(f.C),
        x = s.useRef(null),
        U = s.useRef(null),
        k = M ?? U,
        G = (0, u.H)({ isSelected: n, onChange: R, isDisabled: r }),
        {
            inputProps: F,
            labelProps: V,
            isPressed: B,
        } = (function (e, t, n) {
            let {
                labelProps: i,
                inputProps: r,
                isSelected: s,
                isPressed: o,
                isDisabled: l,
                isReadOnly: u,
            } = (0, a.e)(e, t, n);
            return {
                labelProps: i,
                inputProps: { ...r, role: "switch", checked: s },
                isSelected: s,
                isPressed: o,
                isDisabled: l,
                isReadOnly: u,
            };
        })({ id: O, isDisabled: r, "aria-describedby": L, "aria-labelledby": w }, G, k),
        { hoverProps: H, isHovered: j } = (0, o.M)({ isDisabled: r }),
        Y = (0, _.r)(c.A.colors.SWITCH_BACKGROUND_DEFAULT).spring(),
        W = (0, _.r)(c.A.colors.SWITCH_BACKGROUND_DEFAULT).spring(),
        K = (0, _.r)(c.A.colors.SWITCH_BACKGROUND_SELECTED_DEFAULT).spring(),
        z = (0, _.r)(c.A.colors.SWITCH_BACKGROUND_ACTIVE).spring(),
        $ = (0, _.r)(c.A.colors.SWITCH_BORDER_DEFAULT).spring(),
        q = (0, _.r)(c.A.colors.SWITCH_BORDER_SELECTED_DEFAULT).spring(),
        Z = (0, _.r)(c.A.colors.SWITCH_BACKGROUND_HOVER).spring(),
        X = (0, _.r)(c.A.colors.SWITCH_BACKGROUND_SELECTED_HOVER).spring(),
        Q = (0, _.r)(c.A.colors.SWITCH_BORDER_HOVER).spring(),
        J = (0, _.r)(c.A.colors.SWITCH_BORDER_SELECTED_HOVER).spring(),
        ee = (0, _.r)(c.A.colors.SWITCH_THUMB_ICON_DEFAULT).spring(),
        et = (0, _.r)(c.A.colors.SWITCH_THUMB_ICON_ACTIVE).spring(),
        en = (0, _.r)(c.A.colors.SWITCH_THUMB_BACKGROUND_DEFAULT).spring(),
        ei = (0, _.r)(c.A.colors.SWITCH_THUMB_BACKGROUND_SELECTED_DEFAULT).spring(),
        { state: er, opacity: es } = (0, d.z)(
            {
                config: { duration: P.enabled ? 200 : 300 },
                opacity: r ? 0.5 : 1,
                state: B ? (n ? v[v.length - 2] : C[1]) : +!!n,
            },
            "animate-always",
        ),
        ea = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...e].reverse();
            return n ? er.to({ range: v, output: t }) : er.to({ range: C, output: e });
        };
    return (0, i.jsx)(h.vN, {
        ...b,
        ringTarget: x,
        focusTarget: k,
        within: !0,
        offset: -2,
        children: (0, i.jsxs)("label", {
            ...V,
            className: E.kL,
            "data-disabled": r || void 0,
            children: [
                (0, i.jsx)(l.animated.div, {
                    ...H,
                    ref: x,
                    className: E.cw,
                    "data-size": "md",
                    "data-mana-component": "switch",
                    style: {
                        opacity: es,
                        backgroundColor: er.to({
                            range: y,
                            output: [j ? Z : Y, W, z, j ? X : K],
                            extrapolate: "clamp",
                        }),
                        border: "1px solid",
                        borderColor: er.to({
                            range: y,
                            output: [j ? Q : $, j ? Q : $, j ? J : q, j ? J : q],
                            extrapolate: "clamp",
                        }),
                    },
                    children: (0, i.jsxs)(l.animated.svg, {
                        className: E.FF,
                        viewBox: "0 0 24 24",
                        preserveAspectRatio: "xMidYMin meet",
                        style: {
                            left: er.to(
                                P.enabled
                                    ? { range: y, output: [1, 1, 24, 24] }
                                    : { range: N, output: [1, 1, 1, 24, 24, 24] },
                            ),
                        },
                        "aria-hidden": !0,
                        children: [
                            (0, i.jsx)(l.animated.rect, {
                                fill: er.to({ range: y, output: [en, en, ei, ei] }),
                                x: P.enabled ? 4 : ea([4, 4, 2.5, 1, 2.5, 4]),
                                y: P.enabled ? 4 : ea([4, 7, 2.5, 7, 2.5, 4]),
                                width: P.enabled ? 16 : ea([16, 16, 19, 22, 19, 16]),
                                height: P.enabled ? 16 : ea([16, 10, 19, 10, 19, 16]),
                                rx: P.enabled ? 8 : ea([8, 5, 9.5, 5, 9.5, 8]),
                            }),
                            D &&
                                ((t = er.to({ range: y, output: [ee, ee, et, et], extrapolate: "clamp" })),
                                (0, i.jsx)("svg", {
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    children: (0, i.jsxs)("g", {
                                        transform: "translate(4 4)",
                                        children: [
                                            (0, i.jsx)(l.animated.path, {
                                                fill: t,
                                                d: er.to({ range: y, output: [m, A, A, T], extrapolate: "clamp" }),
                                            }),
                                            (0, i.jsx)(l.animated.path, {
                                                fill: t,
                                                d: er.to({ range: y, output: [g, I, I, S], extrapolate: "clamp" }),
                                            }),
                                        ],
                                    }),
                                })),
                        ],
                    }),
                }),
                (0, i.jsx)(p.A, { children: (0, i.jsx)("input", { ...F, ref: k }) }),
            ],
        }),
    });
}
function R(e) {
    let { checked: t, disabled: n, id: s, onChange: a, focusProps: o, hasIcon: l = !1, ...u } = e;
    return (0, i.jsx)(r.D, {
        ...u,
        id: s,
        disabled: n,
        layout: "horizontal",
        interactiveLabel: !0,
        auxiliaryContentPosition: "under-label",
        children: (e) =>
            (0, i.jsx)(O, {
                focusProps: o,
                id: e.controlId,
                checked: t,
                disabled: n,
                onChange: a,
                hasIcon: l,
                describedBy: e.describedById,
                labelledBy: e.labelId,
            }),
    });
}
