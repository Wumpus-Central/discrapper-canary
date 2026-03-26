a.d(t, { A: () => b });
var n = a(627968),
    r = a(64700),
    s = a(503698),
    i = a.n(s),
    d = a(524007),
    l = a(844222),
    o = a(786558),
    c = a(799226),
    u = a(397927),
    _ = a(190152);
let m = {
        HoverLightmode: { posy: "number", posx: "number" },
        BaseGlow: {},
        ButtonFillLightmode: {},
        HoverDarkmode: { posy: "number", posx: "number" },
        BaseGlowRemapped: {},
        ButtonFillDarkmode: {},
    },
    p = {},
    b = (e) => {
        let {
                children: t,
                id: a,
                tabIndex: s,
                className: b,
                cardClassName: f,
                cardStyle: g = p,
                cardType: A,
                artboard: h = "BaseGlowRemapped",
                fit: x = "layout",
                glowing: R = !1,
                glowAmount: C = 8,
                blurAmount: E = 30,
                hueRotate: v = 0,
                isReducedMotion: N,
                onMouseEnter: I,
            } = e,
            T = r.useRef(null),
            S = r.useRef(null),
            { status: y, buffer: P } = (0, c.CE)(R ? d.A : null),
            j = r.useContext(l.C),
            D = N ?? j.reducedMotion.enabled,
            U = {
                "--custom-glow-amount": `${C}px`,
                "--custom-blur-amount": `${E}px`,
                "--custom-hue-rotate": `${v}deg`,
                "--custom-glow-opacity": +(0 !== C),
            };
        return (0, n.jsxs)("div", {
            id: a,
            ref: T,
            tabIndex: s,
            className: i()(_.k, b),
            style: U,
            onMouseEnter: I,
            children: [
                R &&
                    y !== c.BW.Loading &&
                    (0, n.jsx)(o.w, {
                        buffer: P,
                        artboard: h,
                        artboardProperties: m,
                        eventTargetRef: T,
                        className: _.Q,
                        ref: S,
                        fit: x,
                        withReducedMotion: D ? "halt" : "play",
                    }),
                (0, n.jsx)(u.ZpM, { type: A ?? u.sl2.CUSTOM, className: f, style: g, children: t }),
            ],
        });
    };
