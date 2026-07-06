"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(524007),
    l = n(844222),
    u = n(594639),
    c = n(105596),
    d = n(993077),
    _ = n(544888);
let h = {
        HoverLightmode: { posy: "number", posx: "number" },
        BaseGlow: {},
        ButtonFillLightmode: {},
        HoverDarkmode: { posy: "number", posx: "number" },
        BaseGlowRemapped: {},
        ButtonFillDarkmode: {},
    },
    f = {},
    E = function (e) {
        let {
                children: t,
                id: n,
                tabIndex: s,
                className: E,
                cardClassName: p,
                cardStyle: m = f,
                cardType: g,
                artboard: A = "BaseGlowRemapped",
                fit: I = "layout",
                glowing: T = !1,
                glowAmount: S = 8,
                blurAmount: N = 30,
                hueRotate: C = 0,
                isReducedMotion: y,
                onMouseEnter: O,
                onFocus: R,
            } = e,
            v = r.useRef(null),
            b = r.useRef(null),
            { status: L, buffer: D } = (0, c.CE)(T ? o.A : null),
            w = r.useContext(l.C),
            P = y ?? w.reducedMotion.enabled,
            M = {
                "--custom-glow-amount": `${S}px`,
                "--custom-blur-amount": `${N}px`,
                "--custom-hue-rotate": `${C}deg`,
                "--custom-glow-opacity": +(0 !== S),
            };
        return (0, i.jsxs)("div", {
            id: n,
            ref: v,
            tabIndex: s,
            className: a()(_.k, E),
            style: M,
            onMouseEnter: O,
            onFocus: R,
            children: [
                T &&
                    L !== c.BW.Loading &&
                    (0, i.jsx)(u.w, {
                        buffer: D,
                        artboard: A,
                        artboardProperties: h,
                        eventTargetRef: v,
                        className: _.Q,
                        ref: b,
                        fit: I,
                        withReducedMotion: P ? "halt" : "play",
                    }),
                (0, i.jsx)(d.Z, { type: g ?? d.s.CUSTOM, className: p, style: m, children: t }),
            ],
        });
    };
