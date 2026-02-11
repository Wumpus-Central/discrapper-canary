"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(524007),
    l = n(844222),
    u = n(786558),
    c = n(799226),
    d = n(397927),
    _ = n(511291);
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
                className: n,
                cardClassName: a,
                cardStyle: p = h,
                cardType: g,
                artboard: E = "BaseGlowRemapped",
                fit: A = "layout",
                glowAmount: I = 8,
                blurAmount: T = 30,
                hueRotate: y = 0,
                isReducedMotion: S,
            } = e,
            v = i.useRef(null),
            C = i.useRef(null),
            { status: b, buffer: N } = (0, c.CE)(o.A),
            R = i.useContext(l.C),
            O = S ?? R.reducedMotion.enabled,
            D = {
                "--custom-glow-amount": `${I}px`,
                "--custom-blur-amount": `${T}px`,
                "--custom-hue-rotate": `${y}deg`,
            };
        return (0, r.jsxs)("div", {
            ref: v,
            className: s()(_.kL, n),
            style: D,
            children: [
                b !== c.BW.Loading &&
                    (0, r.jsx)(u.w, {
                        buffer: N,
                        artboard: E,
                        artboardProperties: f,
                        eventTargetRef: v,
                        className: _.Q_,
                        ref: C,
                        fit: A,
                        withReducedMotion: O ? "halt" : "play",
                    }),
                (0, r.jsx)(d.ZpM, { type: g ?? d.sl2.CUSTOM, className: s()(_.Nr, a), style: p, children: t }),
            ],
        });
    };
