t.d(s, { A: () => i });
var o = t(477900),
    a = t(582128),
    u = t(503698),
    l = t.n(u),
    c = t(570950),
    n = t(993077),
    r = t(608375);
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
                fit: b = "layout",
                glowing: f = !1,
                glowAmount: x = 8,
                blurAmount: k = 30,
                hueRotate: w = 0,
                onMouseEnter: y,
                onFocus: R,
                listItemProps: g,
            } = e,
            C = a.useRef(null),
            j = a.useRef(null),
            v = {
                "--custom-glow-amount": `${x}px`,
                "--custom-blur-amount": `${k}px`,
                "--custom-hue-rotate": `${w}deg`,
                "--custom-glow-opacity": +(0 !== x),
            },
            M = a.useCallback(
                (e) => {
                    (g?.onFocus?.(), R?.(e));
                },
                [g, R],
            );
        return (0, o.jsxs)("div", {
            id: t,
            ref: C,
            ...g,
            tabIndex: g?.tabIndex ?? u,
            className: l()(r.k, i),
            style: v,
            onMouseEnter: y,
            onFocus: M,
            children: [
                f &&
                    (0, o.jsx)(c.s, {
                        artboard: "BaseGlowRemapped",
                        eventTargetRef: C,
                        className: r.Q,
                        ref: j,
                        fit: b,
                        withReducedMotion: "short-loop",
                    }),
                (0, o.jsx)(n.Z, { type: m ?? n.s.CUSTOM, className: p, style: h, children: s }),
            ],
        });
    };
