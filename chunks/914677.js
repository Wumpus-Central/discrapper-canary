n.d(t, { Z: () => E }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(780384),
    o = n(410030),
    s = n(119269),
    l = n(511186);
let c = "0.3",
    u = "0.2",
    d = "var(--premium-tier-2-purple)",
    f = "var(--background-base-low)",
    p = "url(#gradient)",
    _ = "url(#gradient_nitro_logo)",
    m = (e, t) => {
        switch (e) {
            case s.Qo.NITRO_LOGO:
                return t ? c : u;
            case s.Qo.NITRO_GEM:
            case s.Qo.AVATAR_DECO:
            default:
                return;
        }
    },
    h = (e) => {
        switch (e) {
            case s.Qo.NITRO_GEM:
            case s.Qo.AVATAR_DECO:
                return f;
            case s.Qo.NITRO_LOGO:
                return d;
            default:
                return;
        }
    },
    g = (e, t) => {
        switch (t) {
            case s.Qo.NITRO_GEM:
            case s.Qo.AVATAR_DECO:
                return p;
            case s.Qo.NITRO_LOGO:
                return e ? _ : p;
            default:
                return;
        }
    },
    E = (e) => {
        let {
                percentage: t = 0,
                children: n,
                animationClassName: c,
                initialPercentage: u = 0,
                progressCircleStrokeSize: d = 2,
                progressCircleVariation: f,
                progressCircleStroke: p,
            } = e,
            _ = 43 + d / 2,
            E = 2 * Math.PI * _,
            [b, y] = i.useState(u);
        i.useEffect(() => {
            let e = setTimeout(() => {
                y(t);
            }, 200);
            return () => clearTimeout(e);
        }, [t]);
        let O = (0, o.ZP)(),
            v = (0, a.ap)(O),
            S = (1 - b / 100) * E,
            I = h(f),
            T = m(f, v),
            C = null != p ? p : g(v, f);
        return (0, r.jsxs)("div", {
            className: l.circleContainer,
            children: [
                (0, r.jsxs)("svg", {
                    viewBox: "0 0 100 100",
                    className: l.circleSVG,
                    children: [
                        (0, r.jsx)("circle", {
                            className: f === s.Qo.NITRO_GEM || f === s.Qo.AVATAR_DECO ? l.baseProgressCircle : void 0,
                            fill: "transparent",
                            strokeWidth: d,
                            r: "".concat(_),
                            cx: "50%",
                            cy: "50%",
                            stroke: I,
                            strokeOpacity: T,
                        }),
                        (0, r.jsx)("circle", {
                            stroke: C,
                            strokeWidth: d,
                            strokeLinecap: "round",
                            strokeDasharray: "".concat(E, " ").concat(E),
                            className: c,
                            style: { strokeDashoffset: S },
                            r: "".concat(_),
                            cx: "50%",
                            cy: "50%",
                        }),
                    ],
                }),
                (0, r.jsxs)("svg", {
                    width: "0",
                    height: "0",
                    children: [
                        (0, r.jsxs)("linearGradient", {
                            id: "gradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "100%",
                            children: [
                                (0, r.jsx)("stop", {
                                    offset: "0%",
                                    style: { stopColor: "#FFBDF2" },
                                }),
                                (0, r.jsx)("stop", {
                                    offset: "100%",
                                    style: { stopColor: "#E742E1" },
                                }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "gradient_nitro_logo",
                            x1: "2.99995",
                            y1: "67.6298",
                            x2: "132.55",
                            y2: "67.6298",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                (0, r.jsx)("stop", { stopColor: "#F9A0E8" }),
                                (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#E742E1",
                                }),
                            ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                            id: "dark-purple-gradient",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [
                                (0, r.jsx)("stop", {
                                    offset: "0%",
                                    style: {
                                        stopColor: "#241731",
                                        stopOpacity: 1,
                                    },
                                }),
                                (0, r.jsx)("stop", {
                                    offset: "100%",
                                    style: {
                                        stopColor: "#241731",
                                        stopOpacity: 1,
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: l.childrenContainer,
                    children: n,
                }),
            ],
        });
    };
