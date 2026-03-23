a.d(t, { A: () => b });
var n = a(627968),
    r = a(64700),
    s = a(503698),
    l = a.n(s),
    i = a(524007),
    d = a(844222),
    o = a(786558),
    c = a(799226),
    u = a(397927),
    m = a(92949);
let p = {
        HoverLightmode: { posy: "number", posx: "number" },
        BaseGlow: {},
        ButtonFillLightmode: {},
        HoverDarkmode: { posy: "number", posx: "number" },
        BaseGlowRemapped: {},
        ButtonFillDarkmode: {},
    },
    f = {},
    b = (e) => {
        let {
                children: t,
                id: a,
                tabIndex: s,
                className: b,
                cardClassName: A,
                cardStyle: h = f,
                cardType: _,
                artboard: g = "BaseGlowRemapped",
                fit: R = "layout",
                glowing: x = !1,
                glowAmount: E = 8,
                blurAmount: C = 30,
                hueRotate: v = 0,
                isReducedMotion: N,
                onMouseEnter: I,
            } = e,
            S = r.useRef(null),
            T = r.useRef(null),
            { status: P, buffer: y } = (0, c.CE)(x ? i.A : null),
            D = r.useContext(d.C),
            O = N ?? D.reducedMotion.enabled,
            j = {
                "--custom-glow-amount": `${E}px`,
                "--custom-blur-amount": `${C}px`,
                "--custom-hue-rotate": `${v}deg`,
                "--custom-glow-opacity": +(0 !== E),
            };
        return (0, n.jsxs)("div", {
            id: a,
            ref: S,
            tabIndex: s,
            className: l()(m.k, b),
            style: j,
            onMouseEnter: I,
            children: [
                x &&
                    P !== c.BW.Loading &&
                    (0, n.jsx)(o.w, {
                        buffer: y,
                        artboard: g,
                        artboardProperties: p,
                        eventTargetRef: S,
                        className: m.Q,
                        ref: T,
                        fit: R,
                        withReducedMotion: O ? "halt" : "play",
                    }),
                (0, n.jsx)(u.ZpM, { type: _ ?? u.sl2.CUSTOM, className: A, style: h, children: t }),
            ],
        });
    };
