l.d(t, { A: () => _ });
var i = l(627968),
    r = l(64700),
    a = l(503698),
    s = l.n(a),
    n = l(524007),
    o = l(844222),
    d = l(594639),
    c = l(105596),
    u = l(359778),
    m = l(544888);
let h = {
        HoverLightmode: { posy: "number", posx: "number" },
        BaseGlow: {},
        ButtonFillLightmode: {},
        HoverDarkmode: { posy: "number", posx: "number" },
        BaseGlowRemapped: {},
        ButtonFillDarkmode: {},
    },
    C = {},
    _ = (e) => {
        let {
                children: t,
                id: l,
                tabIndex: a,
                className: _,
                cardClassName: p,
                cardStyle: g = C,
                cardType: E,
                artboard: x = "BaseGlowRemapped",
                fit: f = "layout",
                glowing: A = !1,
                glowAmount: R = 8,
                blurAmount: N = 30,
                hueRotate: I = 0,
                isReducedMotion: S,
                onMouseEnter: j,
            } = e,
            v = r.useRef(null),
            P = r.useRef(null),
            { status: D, buffer: T } = (0, c.CE)(A ? n.A : null),
            O = r.useContext(o.C),
            y = S ?? O.reducedMotion.enabled,
            b = {
                "--custom-glow-amount": `${R}px`,
                "--custom-blur-amount": `${N}px`,
                "--custom-hue-rotate": `${I}deg`,
                "--custom-glow-opacity": +(0 !== R),
            };
        return (0, i.jsxs)("div", {
            id: l,
            ref: v,
            tabIndex: a,
            className: s()(m.k, _),
            style: b,
            onMouseEnter: j,
            children: [
                A &&
                    D !== c.BW.Loading &&
                    (0, i.jsx)(d.w, {
                        buffer: T,
                        artboard: x,
                        artboardProperties: h,
                        eventTargetRef: v,
                        className: m.Q,
                        ref: P,
                        fit: f,
                        withReducedMotion: y ? "halt" : "play",
                    }),
                (0, i.jsx)(u.Z, { type: E ?? u.s.CUSTOM, className: p, style: g, children: t }),
            ],
        });
    };
