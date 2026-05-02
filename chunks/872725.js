s.d(t, { A: () => C });
var a = s(627968),
    r = s(64700),
    l = s(503698),
    i = s.n(l),
    n = s(524007),
    d = s(844222),
    o = s(594639),
    c = s(105596),
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
                artboard: R = "BaseGlowRemapped",
                fit: f = "layout",
                glowing: E = !1,
                glowAmount: j = 8,
                blurAmount: N = 30,
                hueRotate: v = 0,
                isReducedMotion: A,
                onMouseEnter: P,
            } = e,
            b = r.useRef(null),
            D = r.useRef(null),
            { status: I, buffer: y } = (0, c.CE)(E ? n.A : null),
            w = r.useContext(d.C),
            O = A ?? w.reducedMotion.enabled,
            S = {
                "--custom-glow-amount": `${j}px`,
                "--custom-blur-amount": `${N}px`,
                "--custom-hue-rotate": `${v}deg`,
                "--custom-glow-opacity": +(0 !== j),
            };
        return (0, a.jsxs)("div", {
            id: s,
            ref: b,
            tabIndex: l,
            className: i()(m.k, C),
            style: S,
            onMouseEnter: P,
            children: [
                E &&
                    I !== c.BW.Loading &&
                    (0, a.jsx)(o.w, {
                        buffer: y,
                        artboard: R,
                        artboardProperties: h,
                        eventTargetRef: b,
                        className: m.Q,
                        ref: D,
                        fit: f,
                        withReducedMotion: O ? "halt" : "play",
                    }),
                (0, a.jsx)(u.Z, { type: g ?? u.s.CUSTOM, className: _, style: p, children: t }),
            ],
        });
    };
