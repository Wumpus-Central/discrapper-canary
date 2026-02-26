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
    m = r(511291);
let h = {
        HoverLightmode: { posy: "number", posx: "number" },
        BaseGlow: {},
        ButtonFillLightmode: {},
        HoverDarkmode: { posy: "number", posx: "number" },
        BaseGlowRemapped: {},
        ButtonFillDarkmode: {},
    },
    x = {},
    p = (e) => {
        let {
                children: t,
                className: r,
                cardClassName: l,
                cardStyle: p = x,
                cardType: _,
                artboard: f = "BaseGlowRemapped",
                fit: g = "layout",
                glowAmount: N = 8,
                blurAmount: b = 30,
                hueRotate: R = 0,
                isReducedMotion: v,
                onMouseEnter: E,
            } = e,
            A = a.useRef(null),
            C = a.useRef(null),
            { status: T, buffer: j } = (0, o.CE)(i.A),
            P = a.useContext(d.C),
            I = v ?? P.reducedMotion.enabled,
            y = {
                "--custom-glow-amount": `${N}px`,
                "--custom-blur-amount": `${b}px`,
                "--custom-hue-rotate": `${R}deg`,
                "--custom-glow-opacity": +(0 !== N),
            };
        return (0, n.jsxs)("div", {
            ref: A,
            className: s()(m.k, r),
            style: y,
            onMouseEnter: E,
            children: [
                T !== o.BW.Loading &&
                    (0, n.jsx)(u.w, {
                        buffer: j,
                        artboard: f,
                        artboardProperties: h,
                        eventTargetRef: A,
                        className: m.Q,
                        ref: C,
                        fit: g,
                        withReducedMotion: I ? "halt" : "play",
                    }),
                (0, n.jsx)(c.ZpM, { type: _ ?? c.sl2.CUSTOM, className: l, style: p, children: t }),
            ],
        });
    };
