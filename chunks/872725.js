t.d(s, { A: () => i });
var o = t(627968),
    a = t(64700),
    u = t(503698),
    l = t.n(u),
    c = t(570950),
    n = t(993077),
    r = t(970296);
let d = {},
    i = function (e) {
        let {
                children: s,
                id: t,
                tabIndex: u,
                className: i,
                cardClassName: p,
                cardStyle: h = d,
                cardType: m,
                fit: f = "layout",
                glowing: w = !1,
                glowAmount: x = 8,
                blurAmount: b = 30,
                hueRotate: k = 0,
                onMouseEnter: y,
                onFocus: R,
            } = e,
            g = a.useRef(null),
            j = a.useRef(null),
            v = {
                "--custom-glow-amount": `${x}px`,
                "--custom-blur-amount": `${b}px`,
                "--custom-hue-rotate": `${k}deg`,
                "--custom-glow-opacity": +(0 !== x),
            };
        return (0, o.jsxs)("div", {
            id: t,
            ref: g,
            tabIndex: u,
            className: l()(r.k, i),
            style: v,
            onMouseEnter: y,
            onFocus: R,
            children: [
                w &&
                    (0, o.jsx)(c.s, {
                        artboard: "BaseGlowRemapped",
                        eventTargetRef: g,
                        className: r.Q,
                        ref: j,
                        fit: f,
                        withReducedMotion: "short-loop",
                    }),
                (0, o.jsx)(n.Z, { type: m ?? n.s.CUSTOM, className: p, style: h, children: s }),
            ],
        });
    };
