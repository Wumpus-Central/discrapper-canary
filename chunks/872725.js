"use strict";
n.d(t, { A: () => p });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(524007),
    l = n(844222),
    u = n(594639),
    c = n(105596),
    d = n(359778),
    _ = n(544888);
let f = {
        HoverLightmode: { posy: "number", posx: "number" },
        BaseGlow: {},
        ButtonFillLightmode: {},
        HoverDarkmode: { posy: "number", posx: "number" },
        BaseGlowRemapped: {},
        ButtonFillDarkmode: {},
    },
    h = {},
    p = (e) => {
        let {
                children: t,
                id: n,
                tabIndex: s,
                className: p,
                cardClassName: E,
                cardStyle: m = h,
                cardType: g,
                artboard: A = "BaseGlowRemapped",
                fit: I = "layout",
                glowing: T = !1,
                glowAmount: S = 8,
                blurAmount: N = 30,
                hueRotate: y = 0,
                isReducedMotion: C,
                onMouseEnter: v,
            } = e,
            O = r.useRef(null),
            R = r.useRef(null),
            { status: b, buffer: D } = (0, c.CE)(T ? o.A : null),
            L = r.useContext(l.C),
            w = C ?? L.reducedMotion.enabled,
            M = {
                "--custom-glow-amount": `${S}px`,
                "--custom-blur-amount": `${N}px`,
                "--custom-hue-rotate": `${y}deg`,
                "--custom-glow-opacity": +(0 !== S),
            };
        return (0, i.jsxs)("div", {
            id: n,
            ref: O,
            tabIndex: s,
            className: a()(_.k, p),
            style: M,
            onMouseEnter: v,
            children: [
                T &&
                    b !== c.BW.Loading &&
                    (0, i.jsx)(u.w, {
                        buffer: D,
                        artboard: A,
                        artboardProperties: f,
                        eventTargetRef: O,
                        className: _.Q,
                        ref: R,
                        fit: I,
                        withReducedMotion: w ? "halt" : "play",
                    }),
                (0, i.jsx)(d.Z, { type: g ?? d.s.CUSTOM, className: E, style: m, children: t }),
            ],
        });
    };
