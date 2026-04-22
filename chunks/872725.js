s.d(t, { A: () => C });
var n = s(627968),
    a = s(64700),
    r = s(503698),
    l = s.n(r),
    i = s(524007),
    d = s(844222),
    o = s(786558),
    c = s(799226),
    u = s(359778),
    h = s(544888);
let m = {
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
                tabIndex: r,
                className: C,
                cardClassName: _,
                cardStyle: p = x,
                cardType: g,
                artboard: f = "BaseGlowRemapped",
                fit: R = "layout",
                glowing: b = !1,
                glowAmount: v = 8,
                blurAmount: j = 30,
                hueRotate: E = 0,
                isReducedMotion: A,
                onMouseEnter: N,
            } = e,
            P = a.useRef(null),
            I = a.useRef(null),
            { status: D, buffer: y } = (0, c.CE)(b ? i.A : null),
            S = a.useContext(d.C),
            w = A ?? S.reducedMotion.enabled,
            O = {
                "--custom-glow-amount": `${v}px`,
                "--custom-blur-amount": `${j}px`,
                "--custom-hue-rotate": `${E}deg`,
                "--custom-glow-opacity": +(0 !== v),
            };
        return (0, n.jsxs)("div", {
            id: s,
            ref: P,
            tabIndex: r,
            className: l()(h.k, C),
            style: O,
            onMouseEnter: N,
            children: [
                b &&
                    D !== c.BW.Loading &&
                    (0, n.jsx)(o.w, {
                        buffer: y,
                        artboard: f,
                        artboardProperties: m,
                        eventTargetRef: P,
                        className: h.Q,
                        ref: I,
                        fit: R,
                        withReducedMotion: w ? "halt" : "play",
                    }),
                (0, n.jsx)(u.Z, { type: g ?? u.s.CUSTOM, className: _, style: p, children: t }),
            ],
        });
    };
