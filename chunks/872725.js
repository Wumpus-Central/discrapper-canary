r.d(t, { A: () => p });
var n = r(627968),
    a = r(64700),
    l = r(503698),
    s = r.n(l),
    i = r(524007),
    d = r(844222),
    u = r(786558),
    o = r(799226),
    c = r(397927),
    m = r(92949);
let _ = {
        HoverLightmode: { posy: "number", posx: "number" },
        BaseGlow: {},
        ButtonFillLightmode: {},
        HoverDarkmode: { posy: "number", posx: "number" },
        BaseGlowRemapped: {},
        ButtonFillDarkmode: {},
    },
    R = {},
    p = (e) => {
        let {
                children: t,
                className: r,
                cardClassName: l,
                cardStyle: p = R,
                cardType: h,
                artboard: A = "BaseGlowRemapped",
                fit: E = "layout",
                glowAmount: x = 8,
                blurAmount: N = 30,
                hueRotate: C = 0,
                isReducedMotion: f,
                onMouseEnter: g,
            } = e,
            b = a.useRef(null),
            D = a.useRef(null),
            { status: I, buffer: v } = (0, o.CE)(i.A),
            S = a.useContext(d.C),
            T = f ?? S.reducedMotion.enabled,
            P = {
                "--custom-glow-amount": `${x}px`,
                "--custom-blur-amount": `${N}px`,
                "--custom-hue-rotate": `${C}deg`,
                "--custom-glow-opacity": +(0 !== x),
            };
        return (0, n.jsxs)("div", {
            ref: b,
            className: s()(m.k, r),
            style: P,
            onMouseEnter: g,
            children: [
                I !== o.BW.Loading &&
                    (0, n.jsx)(u.w, {
                        buffer: v,
                        artboard: A,
                        artboardProperties: _,
                        eventTargetRef: b,
                        className: m.Q,
                        ref: D,
                        fit: E,
                        withReducedMotion: T ? "halt" : "play",
                    }),
                (0, n.jsx)(c.ZpM, { type: h ?? c.sl2.CUSTOM, className: l, style: p, children: t }),
            ],
        });
    };
