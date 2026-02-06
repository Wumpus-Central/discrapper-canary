"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(524007),
    l = n(844222),
    u = n(786558),
    c = n(799226),
    d = n(397927),
    _ = n(92949);
let f = {
        HoverLightmode: { posy: "number", posx: "number" },
        BaseGlow: {},
        ButtonFillLightmode: {},
        HoverDarkmode: { posy: "number", posx: "number" },
        BaseGlowRemapped: {},
        ButtonFillDarkmode: {},
    },
    p = {},
    h = (e) => {
        let {
                children: t,
                className: n,
                cardClassName: a,
                cardStyle: h = p,
                cardType: m,
                artboard: g = "BaseGlowRemapped",
                fit: E = "layout",
                glowAmount: A = 8,
                blurAmount: I = 30,
                hueRotate: T = 0,
                isReducedMotion: S,
            } = e,
            y = i.useRef(null),
            v = i.useRef(null),
            { status: C, buffer: N } = (0, c.CE)(o.A),
            b = i.useContext(l.C),
            R = S ?? b.reducedMotion.enabled,
            O = {
                "--custom-glow-amount": `${A}px`,
                "--custom-blur-amount": `${I}px`,
                "--custom-hue-rotate": `${T}deg`,
            };
        return (0, r.jsxs)("div", {
            ref: y,
            className: s()(_.kL, n),
            style: O,
            children: [
                C !== c.BW.Loading &&
                    (0, r.jsx)(u.w, {
                        buffer: N,
                        artboard: g,
                        artboardProperties: f,
                        eventTargetRef: y,
                        className: _.Q_,
                        ref: v,
                        fit: E,
                        withReducedMotion: R ? "halt" : "play",
                    }),
                (0, r.jsx)(d.ZpM, { type: m ?? d.sl2.CUSTOM, className: s()(_.Nr, a), style: h, children: t }),
            ],
        });
    };
