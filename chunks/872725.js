r.d(t, { A: () => x });
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
    p = {},
    x = (e) => {
        let {
                children: t,
                className: r,
                cardClassName: l,
                cardStyle: x = p,
                cardType: f,
                artboard: g = "BaseGlowRemapped",
                fit: _ = "layout",
                glowAmount: N = 8,
                blurAmount: b = 30,
                hueRotate: v = 0,
                isReducedMotion: R,
            } = e,
            E = a.useRef(null),
            A = a.useRef(null),
            { status: C, buffer: T } = (0, o.CE)(i.A),
            j = a.useContext(d.C),
            P = R ?? j.reducedMotion.enabled,
            y = {
                "--custom-glow-amount": `${N}px`,
                "--custom-blur-amount": `${b}px`,
                "--custom-hue-rotate": `${v}deg`,
                "--custom-glow-opacity": +(0 !== N),
            };
        return (0, n.jsxs)("div", {
            ref: E,
            className: s()(m.k, r),
            style: y,
            children: [
                C !== o.BW.Loading &&
                    (0, n.jsx)(u.w, {
                        buffer: T,
                        artboard: g,
                        artboardProperties: h,
                        eventTargetRef: E,
                        className: m.Q,
                        ref: A,
                        fit: _,
                        withReducedMotion: P ? "halt" : "play",
                    }),
                (0, n.jsx)(c.ZpM, { type: f ?? c.sl2.CUSTOM, className: l, style: x, children: t }),
            ],
        });
    };
