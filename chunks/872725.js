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
    p = (e) => {
        let {
                children: t,
                id: n,
                tabIndex: s,
                className: p,
                cardClassName: E,
                cardStyle: m = f,
                cardType: g,
                artboard: A = "BaseGlowRemapped",
                fit: I = "layout",
                glowing: T = !1,
                glowAmount: S = 8,
                blurAmount: y = 30,
                hueRotate: N = 0,
                isReducedMotion: v,
                onMouseEnter: C,
                onFocus: R,
            } = e,
            O = r.useRef(null),
            b = r.useRef(null),
            { status: D, buffer: L } = (0, c.CE)(T ? o.A : null),
            w = r.useContext(l.C),
            M = v ?? w.reducedMotion.enabled,
            P = {
                "--custom-glow-amount": `${S}px`,
                "--custom-blur-amount": `${y}px`,
                "--custom-hue-rotate": `${N}deg`,
                "--custom-glow-opacity": +(0 !== S),
            };
        return (0, i.jsxs)("div", {
            id: n,
            ref: O,
            tabIndex: s,
            className: a()(_.k, p),
            style: P,
            onMouseEnter: C,
            onFocus: R,
            children: [
                T &&
                    D !== c.BW.Loading &&
                    (0, i.jsx)(u.w, {
                        buffer: L,
                        artboard: A,
                        artboardProperties: h,
                        eventTargetRef: O,
                        className: _.Q,
                        ref: b,
                        fit: I,
                        withReducedMotion: M ? "halt" : "play",
                    }),
                (0, i.jsx)(d.Z, { type: g ?? d.s.CUSTOM, className: E, style: m, children: t }),
            ],
        });
    };
