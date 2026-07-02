"use strict";
n.d(t, { I: () => R });
var i = n(627968),
    r = n(64700),
    s = n(757260),
    a = n(967158),
    o = n(580929),
    l = n(823807),
    u = n(661531),
    d = n(717421),
    c = n(603392),
    _ = n(844222),
    h = n(187322),
    f = n(140735),
    E = n(764371);
let p = "M4.10585 5.3837L5.37864 4.11091L11.884 10.61632L10.6112 11.88912L4.10585 5.3837Z",
    m = "M10.61632 4.11091L11.88912 5.3837L5.3837 11.88912L4.11091 10.61632L10.61632 4.11091Z",
    g = "M5.25333 8.80104L5.25333 7.17346L10.85336 7.17346L10.85336 8.80104L5.25333 8.80104Z",
    A = "M10.84656 7.17346L10.84656 8.80104L5.24954 8.80104L5.24954 7.17346L10.84656 7.17346Z",
    I = "M6.31649 11.88304L5.0437 10.61032L11.44792 4.20604L12.72072 5.47883L6.31649 11.88304Z",
    T = "M3.26914 8.87224L4.54194 7.59943L7.5588 10.61632L6.28601 11.88912L3.26914 8.87224Z",
    S = [0, 0.1, 0.4, 0.6, 0.9, 1],
    N = [0, 0.1, 0.9, 1],
    C = [0, 0.1, 0.2, 0.5, 0.7, 1],
    y = [0, 0.3, 0.5, 0.8, 0.9, 1],
    v = () => {};
function R(e) {
    let t,
        {
            checked: n,
            disabled: R,
            displayOnly: O,
            id: b,
            onChange: L,
            focusProps: D,
            hasIcon: P = !1,
            describedBy: w,
            labelledBy: M,
            innerRef: x,
        } = e,
        { reducedMotion: U } = r.useContext(_.C),
        k = r.useRef(null),
        G = r.useRef(null),
        V = x ?? G,
        F = (0, l.H)({ isSelected: n, onChange: L ?? v, isDisabled: R }),
        {
            inputProps: B,
            labelProps: j,
            isPressed: H,
        } = (function (e, t, n) {
            let {
                labelProps: i,
                inputProps: r,
                isSelected: a,
                isPressed: o,
                isDisabled: l,
                isReadOnly: u,
            } = (0, s.e)(e, t, n);
            return {
                labelProps: i,
                inputProps: { ...r, role: "switch", checked: a },
                isSelected: a,
                isPressed: o,
                isDisabled: l,
                isReadOnly: u,
            };
        })({ id: b, isDisabled: R, "aria-describedby": w, "aria-labelledby": M ?? "" }, F, V),
        { hoverProps: W, isHovered: Y } = (0, a.M)({ isDisabled: R }),
        K = (0, c.r)(u.A.colors.SWITCH_BACKGROUND_DEFAULT).spring(),
        $ = (0, c.r)(u.A.colors.SWITCH_BACKGROUND_DEFAULT).spring(),
        z = (0, c.r)(u.A.colors.SWITCH_BACKGROUND_SELECTED_DEFAULT).spring(),
        q = (0, c.r)(u.A.colors.SWITCH_BACKGROUND_ACTIVE).spring(),
        Z = (0, c.r)(u.A.colors.SWITCH_BORDER_DEFAULT).spring(),
        X = (0, c.r)(u.A.colors.SWITCH_BORDER_SELECTED_DEFAULT).spring(),
        Q = (0, c.r)(u.A.colors.SWITCH_BACKGROUND_HOVER).spring(),
        J = (0, c.r)(u.A.colors.SWITCH_BACKGROUND_SELECTED_HOVER).spring(),
        ee = (0, c.r)(u.A.colors.SWITCH_BORDER_HOVER).spring(),
        et = (0, c.r)(u.A.colors.SWITCH_BORDER_SELECTED_HOVER).spring(),
        en = (0, c.r)(u.A.colors.SWITCH_THUMB_ICON_DEFAULT).spring(),
        ei = (0, c.r)(u.A.colors.SWITCH_THUMB_ICON_ACTIVE).spring(),
        er = (0, c.r)(u.A.colors.SWITCH_THUMB_BACKGROUND_DEFAULT).spring(),
        es = (0, c.r)(u.A.colors.SWITCH_THUMB_BACKGROUND_SELECTED_DEFAULT).spring(),
        { state: ea, opacity: eo } = (0, d.z)(
            {
                config: { duration: U.enabled ? 200 : 300 },
                opacity: R ? 0.5 : 1,
                state: H ? (n ? y[y.length - 2] : C[1]) : +!!n,
            },
            "animate-always",
        ),
        el = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...e].reverse();
            return n ? ea.to({ range: y, output: t }) : ea.to({ range: C, output: e });
        },
        eu = (0, i.jsx)(o.animated.div, {
            ...(O ? {} : W),
            ref: k,
            className: E.cw,
            "data-size": "md",
            "data-mana-component": "switch",
            style: {
                opacity: eo,
                backgroundColor: ea.to({ range: N, output: [Y ? Q : K, $, q, Y ? J : z], extrapolate: "clamp" }),
                border: "1px solid",
                borderColor: ea.to({
                    range: N,
                    output: [Y ? ee : Z, Y ? ee : Z, Y ? et : X, Y ? et : X],
                    extrapolate: "clamp",
                }),
            },
            children: (0, i.jsxs)(o.animated.svg, {
                className: E.FF,
                viewBox: "0 0 24 24",
                preserveAspectRatio: "xMidYMin meet",
                style: {
                    left: ea.to(
                        U.enabled ? { range: N, output: [1, 1, 24, 24] } : { range: S, output: [1, 1, 1, 24, 24, 24] },
                    ),
                },
                "aria-hidden": !0,
                children: [
                    (0, i.jsx)(o.animated.rect, {
                        fill: ea.to({ range: N, output: [er, er, es, es] }),
                        x: U.enabled ? 4 : el([4, 4, 2.5, 1, 2.5, 4]),
                        y: U.enabled ? 4 : el([4, 7, 2.5, 7, 2.5, 4]),
                        width: U.enabled ? 16 : el([16, 16, 19, 22, 19, 16]),
                        height: U.enabled ? 16 : el([16, 10, 19, 10, 19, 16]),
                        rx: U.enabled ? 8 : el([8, 5, 9.5, 5, 9.5, 8]),
                    }),
                    P &&
                        ((t = ea.to({ range: N, output: [en, en, ei, ei], extrapolate: "clamp" })),
                        (0, i.jsx)("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            children: (0, i.jsxs)("g", {
                                transform: "translate(4 4)",
                                children: [
                                    (0, i.jsx)(o.animated.path, {
                                        fill: t,
                                        d: ea.to({ range: N, output: [p, g, g, I], extrapolate: "clamp" }),
                                    }),
                                    (0, i.jsx)(o.animated.path, {
                                        fill: t,
                                        d: ea.to({ range: N, output: [m, A, A, T], extrapolate: "clamp" }),
                                    }),
                                ],
                            }),
                        })),
                ],
            }),
        });
    return O
        ? (0, i.jsx)("div", { className: E.kL, "data-disabled": R || void 0, children: eu })
        : (0, i.jsx)(h.vN, {
              ...D,
              ringTarget: k,
              focusTarget: V,
              within: !0,
              offset: -2,
              children: (0, i.jsxs)("label", {
                  ...j,
                  className: E.kL,
                  "data-disabled": R || void 0,
                  children: [eu, (0, i.jsx)(f.A, { children: (0, i.jsx)("input", { ...B, ref: V }) })],
              }),
          });
}
