s.d(t, { A: () => C });
var a = s(627968),
    r = s(64700),
    l = s(503698),
    i = s.n(l),
    n = s(524007),
    d = s(844222),
    o = s(502377),
    c = s(799226),
    u = s(359778),
    m = s(544888);
let h = {
        HoverLightmode: { posy: "number", posx: "number" },
        BaseGlow: {},
        ButtonFillLightmode: {},
        HoverDarkmode: { posy: "number", posx: "number" },
        BaseGlowRemapped: {},
        ButtonFillDarkmode: {},
    },
    x = {},
    C = (e) => {
        let {
                children: t,
                id: s,
                tabIndex: l,
                className: C,
                cardClassName: _,
                cardStyle: p = x,
                cardType: g,
                artboard: f = "BaseGlowRemapped",
                fit: R = "layout",
                glowing: j = !1,
                glowAmount: v = 8,
                blurAmount: E = 30,
                hueRotate: N = 0,
                isReducedMotion: A,
                onMouseEnter: b,
            } = e,
            y = r.useRef(null),
            P = r.useRef(null),
            { status: D, buffer: w } = (0, c.CE)(j ? n.A : null),
            I = r.useContext(d.C),
            O = A ?? I.reducedMotion.enabled,
            T = {
                "--custom-glow-amount": `${v}px`,
                "--custom-blur-amount": `${E}px`,
                "--custom-hue-rotate": `${N}deg`,
                "--custom-glow-opacity": +(0 !== v),
            };
        return (0, a.jsxs)("div", {
            id: s,
            ref: y,
            tabIndex: l,
            className: i()(m.k, C),
            style: T,
            onMouseEnter: b,
            children: [
                j &&
                    D !== c.BW.Loading &&
                    (0, a.jsx)(o.w, {
                        buffer: w,
                        artboard: f,
                        artboardProperties: h,
                        eventTargetRef: y,
                        className: m.Q,
                        ref: P,
                        fit: R,
                        withReducedMotion: O ? "halt" : "play",
                    }),
                (0, a.jsx)(u.Z, { type: g ?? u.s.CUSTOM, className: _, style: p, children: t }),
            ],
        });
    };
