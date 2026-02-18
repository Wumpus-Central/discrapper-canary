r.d(t, { A: () => g });
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
let p = {
        HoverLightmode: { posy: "number", posx: "number" },
        BaseGlow: {},
        ButtonFillLightmode: {},
        HoverDarkmode: { posy: "number", posx: "number" },
        BaseGlowRemapped: {},
        ButtonFillDarkmode: {},
    },
    h = {},
    g = (e) => {
        let {
                children: t,
                className: r,
                cardClassName: l,
                cardStyle: g = h,
                cardType: x,
                artboard: b = "BaseGlowRemapped",
                fit: f = "layout",
                glowAmount: _ = 8,
                blurAmount: R = 30,
                hueRotate: v = 0,
                isReducedMotion: N,
            } = e,
            A = a.useRef(null),
            E = a.useRef(null),
            { status: C, buffer: I } = (0, o.CE)(i.A),
            T = a.useContext(d.C),
            y = N ?? T.reducedMotion.enabled,
            j = {
                "--custom-glow-amount": `${_}px`,
                "--custom-blur-amount": `${R}px`,
                "--custom-hue-rotate": `${v}deg`,
            };
        return (0, n.jsxs)("div", {
            ref: A,
            className: s()(m.k, r),
            style: j,
            children: [
                C !== o.BW.Loading &&
                    (0, n.jsx)(u.w, {
                        buffer: I,
                        artboard: b,
                        artboardProperties: p,
                        eventTargetRef: A,
                        className: m.Q,
                        ref: E,
                        fit: f,
                        withReducedMotion: y ? "halt" : "play",
                    }),
                (0, n.jsx)(c.ZpM, { type: x ?? c.sl2.CUSTOM, className: l, style: g, children: t }),
            ],
        });
    };
